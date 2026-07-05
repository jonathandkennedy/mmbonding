import { Sparkles, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const domain = site.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/** Google Preferred Sources deep link: one click adds the site to a signed-in
 * user's preferred sources, so our content gets a "Preferred" label in their
 * Top Stories / AI results. User-level personalization, not a ranking boost. */
export const preferredSourceUrl = `https://www.google.com/preferences/source?q=${domain}`;

export function PreferredSource({
  variant = "card",
  className,
}: {
  variant?: "card" | "inline";
  className?: string;
}) {
  if (variant === "inline") {
    return (
      <a
        href={preferredSourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-1.5 transition-colors hover:text-azure-300",
          className,
        )}
      >
        <Sparkles className="size-4 shrink-0 text-azure-400" aria-hidden="true" />
        Add us as a Google Preferred Source
      </a>
    );
  }

  return (
    <aside
      className={cn(
        "flex flex-col items-start gap-4 rounded-2xl border border-azure-200 bg-azure-50/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7",
        className,
      )}
    >
      <div className="flex items-start gap-3.5">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-azure-500 text-white">
          <Sparkles className="size-6" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-display text-lg font-bold tracking-tight text-navy-900">
            Want our answers in your Google AI results?
          </h2>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-700">
            Add {site.shortName} as a Google Preferred Source. One click, while signed in to Google,
            and our guides get a Preferred label whenever you search the topics we cover.
          </p>
        </div>
      </div>
      <a
        href={preferredSourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-navy-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
      >
        Add us on Google
        <ArrowUpRight className="size-4 text-azure-300" aria-hidden="true" />
      </a>
    </aside>
  );
}
