import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Answer-first "TL;DR" callout placed at the top of every page (except the
 * home). It states the answer to the page's target question in under 60 words,
 * which is what AI Overviews and featured snippets extract. Visually distinct
 * (azure left rule) so it reads as a quick-answer box, not body copy.
 */
export function TldrCard({
  text,
  lang = "en",
  className,
}: {
  text: string;
  lang?: "en" | "es";
  className?: string;
}) {
  const label = lang === "es" ? "En resumen" : "TL;DR";
  return (
    <aside
      aria-label={label}
      className={cn(
        "rounded-2xl rounded-l-md border border-l-4 border-ink-200 border-l-azure-500 bg-azure-50/50 p-5 sm:p-6",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <Zap className="size-4 text-azure-600" aria-hidden="true" />
        <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-azure-700">
          {label}
        </span>
      </div>
      <p className="mt-2.5 text-[1.02rem] leading-relaxed text-navy-900">{text}</p>
    </aside>
  );
}
