"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "mm-cookie-consent";

/**
 * Lightweight, on-brand cookie consent banner. Shows once until the visitor
 * chooses, stores the choice in localStorage, and stamps the decision on the
 * root element (`data-cookie-consent`) so analytics or call tracking can be
 * gated on it later. No third-party dependency.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        document.documentElement.dataset.cookieConsent = stored;
      } else {
        setVisible(true);
      }
    } catch {
      /* localStorage unavailable (private mode); do not block the page */
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    document.documentElement.dataset.cookieConsent = value;
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="animate-rise fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-2xl rounded-2xl border border-ink-200 bg-white/95 p-4 shadow-lg backdrop-blur sm:inset-x-4 sm:bottom-4 sm:p-5"
    >
      <div className="flex items-start gap-3">
        <span className="hidden size-10 shrink-0 place-items-center rounded-xl bg-azure-50 text-azure-600 sm:grid">
          <Cookie className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm leading-relaxed text-navy-900">
            We use cookies to run the site, measure traffic, and understand which campaigns bring
            contractors here. See our{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-azure-600 underline underline-offset-2 hover:text-azure-700"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="inline-flex h-9 items-center rounded-xl bg-azure-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-azure-600"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => choose("declined")}
              className="inline-flex h-9 items-center rounded-xl border border-ink-300 bg-white px-4 text-sm font-semibold text-navy-900 transition-colors hover:bg-surface"
            >
              Decline
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={() => choose("declined")}
          aria-label="Dismiss cookie notice"
          className="shrink-0 rounded-lg p-1 text-ink-400 transition-colors hover:bg-surface hover:text-navy-700"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
