import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // <-- important

  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
