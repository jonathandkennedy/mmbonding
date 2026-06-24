import { cn } from "@/lib/utils";

/**
 * Branded long-form typography. Hand-styled (no typography plugin) so headings,
 * links, lists, and the mono statute callouts all match the design system.
 */
export function Prose({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "max-w-[68ch] text-[1.02rem] leading-relaxed text-ink-700",
        "[&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-navy-900",
        "[&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-navy-900",
        "[&_p]:mt-4",
        "[&_a]:font-medium [&_a]:text-azure-600 [&_a]:underline [&_a]:decoration-azure-200 [&_a]:underline-offset-2 hover:[&_a]:text-azure-700 hover:[&_a]:decoration-azure-500",
        "[&_ul]:mt-4 [&_ul]:space-y-2.5 [&_ul]:pl-1",
        "[&_li]:relative [&_li]:flex [&_li]:gap-2.5",
        "[&_strong]:font-semibold [&_strong]:text-navy-900",
        "[&_code]:rounded [&_code]:bg-surface-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_code]:text-navy-800",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** A list bullet using the brand slash motif instead of a disc. */
export function Bullet() {
  return (
    <span
      aria-hidden="true"
      className="mt-2 block h-3 w-1 shrink-0 -skew-x-[18deg] rounded-[1px] bg-azure-500"
    />
  );
}
