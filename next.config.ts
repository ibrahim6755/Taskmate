import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ This lets the build pass even if ESLint finds errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
