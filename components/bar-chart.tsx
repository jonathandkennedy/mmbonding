import { cn } from "@/lib/utils";
import type { Source } from "@/lib/stats";

export type BarDatum = {
  label: string;
  /** Numeric value used to scale the bar. */
  value: number;
  /** Human display for the value, e.g. "$150,000" or "10%". Falls back to value. */
  display?: string;
  /** Highlight this bar (e.g. the figure the page is about). */
  emphasis?: boolean;
};

/**
 * Dependency-free, accessible horizontal bar chart. Values render as real text
 * (crawlable and screen-reader friendly), bars are scaled with inline widths.
 * On-brand: azure fills on a surface track. Use for genuine comparisons where a
 * visual helps; a plain table is better for dense multi-column data.
 */
export function BarChart({
  title,
  data,
  source,
  caption,
  max,
  className,
}: {
  title: string;
  data: BarDatum[];
  source?: Source;
  /** Small note under the chart, e.g. what the numbers represent. */
  caption?: string;
  /** Override the scale max; defaults to the largest value. */
  max?: number;
  className?: string;
}) {
  const ceiling = max ?? Math.max(...data.map((d) => d.value), 1);

  return (
    <figure
      className={cn("my-8 rounded-2xl border border-ink-200 bg-white p-6", className)}
    >
      <figcaption className="font-display text-base font-bold tracking-tight text-navy-900">
        {title}
      </figcaption>
      <div className="mt-5 space-y-3.5" role="list">
        {data.map((d) => {
          const pct = Math.max(2, Math.round((d.value / ceiling) * 100));
          return (
            <div key={d.label} role="listitem" className="grid grid-cols-[9rem_1fr] items-center gap-3">
              <span className="truncate text-sm font-medium text-navy-800">{d.label}</span>
              <div className="flex items-center gap-2.5">
                <div className="h-6 flex-1 overflow-hidden rounded-md bg-surface">
                  <div
                    className={cn(
                      "h-full rounded-md",
                      d.emphasis ? "bg-navy-900" : "bg-azure-500",
                    )}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-24 shrink-0 text-right text-sm font-semibold tabular-nums text-navy-900">
                  {d.display ?? d.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {(caption || source) && (
        <p className="mt-5 text-xs text-muted">
          {caption}
          {caption && source ? " " : ""}
          {source && (
            <>
              Source:{" "}
              <a
                href={source.url}
                target="_blank"
                rel="nofollow noopener"
                className="underline decoration-ink-300 underline-offset-2 hover:text-azure-600"
              >
                {source.name}
              </a>
              .
            </>
          )}
        </p>
      )}
    </figure>
  );
}
