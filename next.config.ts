import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'play.google.com',
        port: '',
        pathname: '/intl/en_us/badges/**',
      },
      {
        protocol: 'https',
        hostname: 'developer.apple.com',
        port: '',
        pathname: '/assets/elements/badges/**',
      },
    ],
  },
};

export default nextConfig;
