import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [55, 75],
  },
  // Security headers (HSTS tells browsers to always use https, removing the http -> https hop)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  // Old .html links (from the first static version) redirect to the new clean URLs
  async redirects() {
    return [
      // Single version of the site: www -> non-www in ONE hop (backup in case Vercel serves www directly)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.grandempirehotel.com" }],
        destination: "https://grandempirehotel.com/:path*",
        permanent: true,
      },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/:page.html", destination: "/:page", permanent: true },
    ];
  },
};

export default nextConfig;
