/**
 * Lightweight i18n for the Spanish (es) money pages. We do NOT client-toggle
 * text on one URL (bad for SEO). Each language lives at its own indexable URL,
 * and pages declare reciprocal hreflang alternates so Google serves the right
 * one. The header switcher just navigates between these paired URLs.
 *
 * To add a Spanish page: build it under /es/... and add the pair here, then set
 * `alternates.languages` on BOTH pages with hreflangFor().
 */

export type Locale = "en" | "es";

export type LocalePair = { en: string; es: string };

export const localePairs: LocalePair[] = [
  { en: "/", es: "/es" },
  { en: "/contractor-license-bond", es: "/es/fianza-de-contratista" },
  { en: "/contract-bonds/bid-bond", es: "/es/fianza-de-licitacion" },
  { en: "/contract-bonds/performance-bond", es: "/es/fianza-de-cumplimiento" },
];

function normalize(pathname: string): string {
  const p = (pathname || "/").split("?")[0].replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

/** The other-language version of a path, with its language, or null if none. */
export function alternateFor(pathname: string): { lang: Locale; href: string } | null {
  const p = normalize(pathname);
  const en = localePairs.find((x) => x.en === p);
  if (en) return { lang: "es", href: en.es };
  const es = localePairs.find((x) => x.es === p);
  if (es) return { lang: "en", href: es.en };
  return null;
}

/** Whether a path is within the Spanish section. */
export function isSpanish(pathname: string): boolean {
  return normalize(pathname) === "/es" || pathname.startsWith("/es/");
}

/** hreflang map for metadata.alternates.languages (x-default points to English). */
export function hreflangFor(enPath: string, esPath: string) {
  return { en: enPath, es: esPath, "x-default": enPath };
}
