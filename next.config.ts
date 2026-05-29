import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],

    formats: ["image/avif", "image/webp"],

    deviceSizes: [
      640,
      750,
      828,
      1080,
      1200,
      1920,
    ],

    imageSizes: [
      16,
      32,
      48,
      64,
      96,
      128,
      256,
      384,
    ],
  },

  compress: true,

  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/(.*)",

        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          {
            key: "X-Frame-Options",
            value: "DENY",
          },

          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },

          {
            key: "Referrer-Policy",
            value:
              "strict-origin-when-cross-origin",
          },
        ],
      },

      {
        source: "/api/(.*)",

        headers: [
          {
            key: "Cache-Control",
            value:
              "no-store, no-cache, must-revalidate",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;