import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class lists without conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a USD amount with no cents, e.g. 25000 -> "$25,000". */
export function usd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Clamp a meta description to <=160 chars for clean SERP display. Trims at a
 * word boundary, drops a dangling conjunction, and ends on a full stop. Used to
 * guarantee dynamic (data-driven) descriptions never overflow.
 */
export function clampDescription(s: string, max = 160): string {
  const t = s.trim().replace(/\s+/g, " ");
  if (t.length <= max) return t;
  let cut = t.slice(0, max - 2);
  cut = cut.slice(0, cut.lastIndexOf(" "));
  cut = cut
    .replace(/[\s,;:]+(and|or|the|a|an|for|to|with|from|in|on|by|plus|that|which|so|of)$/i, "")
    .replace(/[\s,;:.]+$/, "");
  return /[.!?]$/.test(cut) ? cut : cut + ".";
}
