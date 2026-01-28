import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/kilo-demo-2',
  assetPrefix: '/kilo-demo-2',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
