import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ccbabsang-pjt',
  assetPrefix: '/ccbabsang-pjt',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
