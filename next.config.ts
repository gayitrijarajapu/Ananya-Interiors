import type { NextConfig } from "next";

const config: NextConfig = {
  async redirects() {
    return [{ source: "/sitemaps.xml", destination: "/sitemap.xml", permanent: true }];
  },
  turbopack: { root: __dirname },
};

export default config;
