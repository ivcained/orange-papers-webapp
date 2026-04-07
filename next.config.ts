import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    largePageDataBytes: 512 * 1024, // 512kb for large HTML content pages
  },
  async headers() {
    return [
      {
        source: "/content/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

export default nextConfig;
