import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',

  basePath: process.env.NODE_ENV === 'production' ? '/web-ugc' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/web-ugc/' : '',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
