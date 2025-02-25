import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'build',
  transpilePackages: ['geist']
};

export default nextConfig;
