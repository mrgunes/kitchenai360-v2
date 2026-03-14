import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // Canonical: redirect www → apex (https://kitchenai360.com)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kitchenai360.com" }],
        destination: "https://kitchenai360.com/:path*",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;