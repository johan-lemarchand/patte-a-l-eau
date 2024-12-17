import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minio-x4wckog0gc88o88gw8owk48o.188.245.207.222.sslip.io',
        port: '',
        pathname: '/patte-a-l-eau/**',
      },
    ],
    domains: ['minio-x4wckog0gc88o88gw8owk48o.188.245.207.222.sslip.io'],
    unoptimized: true,
  },
};

export default nextConfig;
