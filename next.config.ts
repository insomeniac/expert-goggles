import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'exantara.com',
      },
    ],
  },
};

export default nextConfig;
