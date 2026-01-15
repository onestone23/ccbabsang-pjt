import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ccbabsang-pjt',
  assetPrefix: '/ccbabsang-pjt',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/ccbabsang-pjt',
  },
};

export default nextConfig;
