import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { bonds } from "@/lib/regulatory";
import { metros } from "@/lib/locations";
import { insuranceProducts } from "@/lib/insurance";
import { guides } from "@/lib/guides";
import { commercialBonds } from "@/lib/commercial-bonds";
import { localePairs } from "@/lib/i18n";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: { path: string; priority: number; freq: Freq }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/contractor-license-bond", priority: 0.9, freq: "monthly" },
    { path: "/contract-bonds", priority: 0.8, freq: "monthly" },
    { path: "/hard-to-place-surety-bonds", priority: 0.9, freq: "monthly" },
    { path: "/sba-surety-bonds", priority: 0.8, freq: "monthly" },
    { path: "/fast-surety-bonds", priority: 0.7, freq: "monthly" },
    { path: "/contractor-license-bond/los-angeles", priority: 0.6, freq: "monthly" },
    { path: "/contractor-license-bond/orange-county", priority: 0.6, freq: "monthly" },
    { path: "/contractor-license-bond/san-diego", priority: 0.6, freq: "monthly" },
    { path: "/hard-to-place-surety-bonds/no-credit-check-contractor-bond", priority: 0.7, freq: "monthly" },
    { path: "/surety-bonds", priority: 0.8, freq: "monthly" },
    { path: "/bonding-vs-insurance", priority: 0.7, freq: "monthly" },
    { path: "/resources", priority: 0.7, freq: "monthly" },
    { path: "/commercial-bonds", priority: 0.7, freq: "monthly" },
    { path: "/surety-bond-cost-calculator", priority: 0.7, freq: "monthly" },
    { path: "/why-use-a-surety-broker", priority: 0.7, freq: "monthly" },
    { path: "/contractor-license-school", priority: 0.6, freq: "monthly" },
    { path: "/get-a-quote", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "yearly" },
    { path: "/contact", priority: 0.6, freq: "yearly" },
  ];

  const seen = new Set(staticPaths.map((s) => s.path));
  const bondPaths = Object.values(bonds)
    .map((b) => b.href)
    .filter((href) => !seen.has(href))
    .map((href) => ({ path: href, priority: 0.7, freq: "monthly" as Freq }));

  const metroPaths = metros.map((m) => ({
    path: `/surety-bonds/${m.slug}`,
    priority: 0.7,
    freq: "monthly" as Freq,
  }));

  const insurancePaths = insuranceProducts.map((p) => ({
    path: `/insurance/${p.slug}`,
    priority: 0.6,
    freq: "monthly" as Freq,
  }));

  const guidePaths = guides.map((g) => ({
    path: `/resources/${g.slug}`,
    priority: 0.6,
    freq: "monthly" as Freq,
  }));

  const commercialPaths = commercialBonds.map((b) => ({
    path: `/commercial-bonds/${b.slug}`,
    priority: 0.6,
    freq: "monthly" as Freq,
  }));

  // Spanish pages (hreflang relationships are declared in each page's <head>).
  const esPaths = localePairs.map((p) => ({
    path: p.es,
    priority: p.es === "/es" ? 0.8 : 0.7,
    freq: "monthly" as Freq,
  }));

  return [
    ...staticPaths,
    ...bondPaths,
    ...metroPaths,
    ...insurancePaths,
    ...guidePaths,
    ...commercialPaths,
    ...esPaths,
  ].map((entry) => ({
    url: `${site.url}${entry.path}`,
    lastModified: now,
    changeFrequency: entry.freq,
    priority: entry.priority,
  }));
}
