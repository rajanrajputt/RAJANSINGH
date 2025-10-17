// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TypeScript errors ko ignore karne ke liye setting add ki gayi hai
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;