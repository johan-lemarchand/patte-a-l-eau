import type { ErrorEvent } from '@sentry/nextjs'

const identifier = /^[A-Za-z_$][A-Za-z0-9_$]*(?:\.[A-Za-z_$][A-Za-z0-9_$]*){0,3}$/
const sourceFile = /^[A-Za-z0-9_.-]+\.(?:js|jsx|mjs|cjs|ts|tsx)$/
const errorTypes = new Set([
  'Error', 'TypeError', 'ReferenceError', 'SyntaxError', 'RangeError',
  'URIError', 'EvalError', 'AggregateError', 'DOMException',
])

/** Rebuild the event so framework or application context cannot leave this process. */
export function sanitizeErrorEvent(event: ErrorEvent): ErrorEvent | null {
  try {
    const values = event.exception?.values?.slice(0, 3).map((exception) => {
      const frames = exception.stacktrace?.frames?.slice(-30).flatMap((frame) => {
        const name = frame.filename?.split(/[?#]/, 1)[0].split(/[\\/]/).pop()
        if (!name || name.length > 100 || !sourceFile.test(name)) return []

        return [{
          filename: name,
          ...(frame.function && frame.function.length <= 100 && identifier.test(frame.function)
            ? { function: frame.function }
            : {}),
          ...(Number.isSafeInteger(frame.lineno) && frame.lineno! > 0 ? { lineno: frame.lineno } : {}),
          ...(Number.isSafeInteger(frame.colno) && frame.colno! > 0 ? { colno: frame.colno } : {}),
        }]
      })

      return {
        type: exception.type && errorTypes.has(exception.type)
          ? exception.type
          : 'Error',
        value: 'Application error',
        ...(frames?.length ? { stacktrace: { frames } } : {}),
      }
    })

    if (!values?.length) return null

    return {
      ...(event.event_id && /^[a-f0-9]{32}$/i.test(event.event_id) ? { event_id: event.event_id } : {}),
      type: undefined,
      platform: 'javascript',
      level: 'error',
      exception: { values },
    }
  } catch {
    return null
  }
}

/** Bound error storms to 30 events per minute in each running process. */
export function createRateLimitedScrubber(
  now: () => number = Date.now,
  release?: string,
  environment?: string,
) {
  let windowStart = now()
  let sent = 0
  const safeLabel = (value?: string) => value && /^[A-Za-z0-9_.@-]{1,100}$/.test(value) ? value : undefined
  const safeRelease = safeLabel(release)
  const safeEnvironment = safeLabel(environment)

  return (event: ErrorEvent): ErrorEvent | null => {
    const clean = sanitizeErrorEvent(event)
    if (!clean) return null

    const current = now()
    if (current < windowStart || current - windowStart >= 60_000) {
      windowStart = current
      sent = 0
    }
    if (sent >= 30) return null
    sent += 1
    return {
      ...clean,
      ...(safeRelease ? { release: safeRelease } : {}),
      ...(safeEnvironment ? { environment: safeEnvironment } : {}),
    }
  }
}
