import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first, then WebP, per modern-format best practice.
    formats: ["image/avif", "image/webp"],
  },
  // Legacy-site migration: the previous WordPress build exposed bond pages
  // under /service/* slugs that Google still has indexed. They 404 on this
  // app, which discards their accrued authority. Redirect them (permanent /
  // 308, treated as 301 for ranking) to the matching new pages so equity
  // transfers and Google replaces the stale URLs faster. Specific mappings
  // are known from the live `site:` index; the catch-all keeps any other old
  // /service/* page pointed at a topically relevant hub instead of a dead end.
  // Expand the specific list once the full old-URL set (old sitemap / GSC
  // Pages report) is available.
  async redirects() {
    return [
      {
        source: "/service/business-insurance",
        destination: "/contract-bonds/bid-bond",
        permanent: true,
      },
      {
        source: "/service/marriage-insurance",
        destination: "/contract-bonds/performance-bond",
        permanent: true,
      },
      {
        source: "/service/:slug*",
        destination: "/contract-bonds",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
