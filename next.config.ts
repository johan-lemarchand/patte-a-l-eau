import { withSentryConfig } from '@sentry/nextjs/config'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
};

export default withSentryConfig(nextConfig, { sourcemaps: { disable: true }, silent: true });