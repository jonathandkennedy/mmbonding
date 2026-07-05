import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first, then WebP, per modern-format best practice.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
