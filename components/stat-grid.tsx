import { cn } from "@/lib/utils";
import type { Stat } from "@/lib/stats";

/**
 * "By the numbers" callout row. Renders a small grid of headline figures, each
 * with a cited source, so a page leads with scannable, verifiable data. Numbers
 * and labels are real DOM text (crawlable), and every figure links to its
 * source for provenance.
 */
export function StatGrid({
  items,
  heading,
  className,
}: {
  items: Stat[];
  /** Optional eyebrow above the grid. */
  heading?: string;
  className?: string;
}) {
  const cols =
    items.length >= 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : items.length === 3
        ? "sm:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <section
      aria-label={heading ?? "Key figures"}
      className={cn("my-8", className)}
    >
      {heading && (
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-azure-700">
          {heading}
        </h2>
      )}
      <dl
        className={cn(
          "mt-4 grid gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200",
          cols,
        )}
      >
        {items.map((s) => (
          <div key={s.id} className="flex flex-col bg-white p-5">
            <dt className="font-display text-3xl font-extrabold tracking-tight text-navy-900 tabular-nums">
              {s.value}
            </dt>
            <dd className="mt-2 flex-1 text-sm leading-snug text-ink-700">{s.label}</dd>
            <dd className="mt-3 text-[0.7rem] font-medium uppercase tracking-wide text-muted">
              <a
                href={s.source.url}
                target="_blank"
                rel="nofollow noopener"
                className="hover:text-azure-600"
              >
                {s.source.name}
                {s.year ? `, ${s.year}` : ""}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
