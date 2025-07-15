import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:8080', 'localhost:3000', 'localhost'],
    },
  },
};

export default nextConfig;
