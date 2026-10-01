const assert = require('node:assert/strict')
const { readFileSync, existsSync } = require('node:fs')
const path = require('node:path')
const { test } = require('node:test')
const vm = require('node:vm')
const ts = require('typescript')

const root = path.resolve(__dirname, '..')
const sourceDir = existsSync(path.join(root, 'src/instrumentation-client.ts')) ? 'src' : '.'
const files = ['instrumentation-client.ts', 'sentry.server.config.ts', 'sentry.edge.config.ts']

function initOptions(file, env) {
  const source = readFileSync(path.join(root, sourceDir, file), 'utf8')
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText
  const calls = []
  const sentry = {
    init: options => calls.push(options),
    globalHandlersIntegration: () => ({ name: 'GlobalHandlers' }),
  }
  const requireStub = name => {
    if (name === '@sentry/nextjs') return sentry
    if (name.endsWith('/error-tracking-privacy')) {
      return { createRateLimitedScrubber: () => () => null }
    }
    throw new Error(`Unexpected import: ${name}`)
  }
  vm.runInNewContext(compiled, {
    exports: {}, require: requireStub, process: { env }, Date,
  }, { filename: file })
  return calls
}

for (const file of files) {
  test(`${file}: inherited debug/spotlight cannot override SDK options`, () => {
    const env = {
      GLITCHTIP_DSN: 'https://public@example.test/1',
      NEXT_PUBLIC_GLITCHTIP_DSN: 'https://public@example.test/1',
      SENTRY_DEBUG: '1',
      SENTRY_SPOTLIGHT: '1',
    }
    const calls = initOptions(file, env)
    assert.equal(calls.length, 1)
    assert.equal(calls[0].debug, false)
    assert.equal(calls[0].spotlight, false)
    assert.equal(calls[0].defaultIntegrations, false)
    assert.equal(calls[0].tracesSampleRate, 0)
    assert.equal(initOptions(file, {
      SENTRY_DEBUG: '1', SENTRY_SPOTLIGHT: '1',
    }).length, 0)
  })
}
