"use client";

import { useEffect } from "react";

/**
 * Sets <html lang> for the current page and restores it on navigation away.
 * The root layout renders lang="en"; Spanish pages drop this in so assistive
 * tech and crawlers see lang="es". Page content also carries lang on its
 * wrapper for SSR-correct language at the subtree level.
 */
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = prev || "en";
    };
  }, [lang]);
  return null;
}
