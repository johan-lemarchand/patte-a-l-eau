import assert from 'node:assert/strict'
import { test } from 'node:test'
import type { ErrorEvent } from '@sentry/nextjs'
import { createRateLimitedScrubber, sanitizeErrorEvent } from '../lib/error-tracking-privacy'

test('sends only an error type and sanitized stack location', () => {
  const secret = 'privateMarker987'
  const event = {
    event_id: 'a'.repeat(32),
    message: secret,
    user: { email: secret },
    request: { url: `https://example.test/?token=${secret}`, headers: { authorization: secret } },
    breadcrumbs: [{ message: secret }],
    contexts: { customer: { value: secret } },
    extra: { payment: secret },
    tags: { token: secret },
    exception: { values: [{
      type: 'TypeError',
      value: secret,
      stacktrace: { frames: [{
        filename: `https://example.test/_next/static/chunks/page.js?token=${secret}`,
        function: 'renderPage',
        lineno: 42,
        colno: 3,
        vars: { password: secret },
      }] },
    }] },
  } as unknown as ErrorEvent
  const clean = sanitizeErrorEvent(event)
  assert.ok(clean)
  assert.equal(clean.exception?.values?.[0]?.type, 'TypeError')
  assert.equal(clean.exception?.values?.[0]?.value, 'Application error')
  assert.equal(clean.exception?.values?.[0]?.stacktrace?.frames?.[0]?.filename, 'page.js')
  assert.equal(clean.exception?.values?.[0]?.stacktrace?.frames?.[0]?.function, 'renderPage')
  assert.equal(JSON.stringify(clean).includes(secret), false)
  assert.deepEqual(Object.keys(clean).sort(), ['event_id', 'exception', 'level', 'platform', 'type'])
})

test('drops non-error events and untrusted names', () => {
  assert.equal(sanitizeErrorEvent({ message: 'secret' } as ErrorEvent), null)
  const clean = sanitizeErrorEvent({ exception: { values: [{
    type: 'secret123', value: 'secret', stacktrace: { frames: [{ filename: '/tmp/secret-file.txt', function: 'secret.func' }] },
  }] } } as ErrorEvent)
  assert.ok(clean)
  assert.equal(clean.exception?.values?.[0]?.type, 'Error')
  assert.equal(clean.exception?.values?.[0]?.stacktrace, undefined)
})

test('caps error storms at 30 per process-minute', () => {
  let time = 1_000
  const scrub = createRateLimitedScrubber(() => time)
  const event = { exception: { values: [{ type: 'Error', value: 'secret' }] } } as ErrorEvent
  for (let i = 0; i < 30; i++) assert.ok(scrub(event))
  assert.equal(scrub(event), null)
  time += 60_000
  assert.ok(scrub(event))
})

test('accepts only stable deployment labels', () => {
  const event = { exception: { values: [{ type: 'Error' }] } } as ErrorEvent
  const valid = createRateLimitedScrubber(() => 0, 'app@abc123', 'production')(event)
  assert.equal(valid?.release, 'app@abc123')
  assert.equal(valid?.environment, 'production')
  const invalid = createRateLimitedScrubber(() => 0, 'secret=value', 'private marker')(event)
  assert.equal(invalid?.release, undefined)
  assert.equal(invalid?.environment, undefined)
})
