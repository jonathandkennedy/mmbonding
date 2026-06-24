import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { bonds } from "@/lib/regulatory";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/contractor-license-bond", priority: 0.9, freq: "monthly" },
    { path: "/contract-bonds", priority: 0.8, freq: "monthly" },
    { path: "/hard-to-place-surety-bonds", priority: 0.9, freq: "monthly" },
    { path: "/hard-to-place-surety-bonds/no-credit-check-contractor-bond", priority: 0.7, freq: "monthly" },
    { path: "/get-a-quote", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "yearly" },
    { path: "/contact", priority: 0.6, freq: "yearly" },
  ];

  // Bond pages from the catalog (dedupe against static entries above)
  const seen = new Set(staticPaths.map((s) => s.path));
  const bondPaths = Object.values(bonds)
    .map((b) => b.href)
    .filter((href) => !seen.has(href))
    .map((href) => ({ path: href, priority: 0.7, freq: "monthly" as const }));

  return [...staticPaths, ...bondPaths].map((entry) => ({
    url: `${site.url}${entry.path}`,
    lastModified: now,
    changeFrequency: entry.freq,
    priority: entry.priority,
  }));
}
