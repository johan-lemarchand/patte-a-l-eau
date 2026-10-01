import * as Sentry from '@sentry/nextjs'
import { createRateLimitedScrubber } from './lib/error-tracking-privacy'

const dsn = process.env.GLITCHTIP_DSN || process.env.NEXT_PUBLIC_GLITCHTIP_DSN

if (dsn) {
  Sentry.init({
    dsn,
    release: process.env.SENTRY_RELEASE || undefined,
    environment: process.env.SENTRY_ENVIRONMENT || undefined,
    dataCollection: {
      userInfo: false,
      cookies: false,
      httpHeaders: false,
      httpBodies: [],
      urlQueryParams: false,
      graphQL: { document: false, variables: false },
      genAI: { inputs: false, outputs: false },
      databaseQueryData: false,
      queues: false,
      stackFrameVariables: false,
      frameContextLines: 0,
    },
    tracesSampleRate: 0,
    tracesSampler: () => 0,
    traceLifecycle: 'static',
    sendClientReports: false,
    defaultIntegrations: false,
    integrations: [],
    beforeSendLog: () => null,
    beforeSendMetric: () => null,
    beforeSendTransaction: () => null,
    attachStacktrace: false,
    maxBreadcrumbs: 0,
    beforeBreadcrumb: () => null,
    beforeSend: createRateLimitedScrubber(Date.now, process.env.SENTRY_RELEASE, process.env.SENTRY_ENVIRONMENT),
  })
}
