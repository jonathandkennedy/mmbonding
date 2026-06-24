import { cn } from "@/lib/utils";
import { Slashes } from "../slashes";

/**
 * Section eyebrow. Used sparingly (taste rule: max ~1 per 3 sections). Pairs
 * the small label with the brand slash motif instead of a decorative dot.
 */
export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Slashes size="sm" tone={tone === "dark" ? "white" : "azure"} />
      <span
        className={cn(
          "font-mono text-xs font-medium uppercase tracking-[0.2em]",
          tone === "dark" ? "text-azure-300" : "text-azure-700",
        )}
      >
        {children}
      </span>
    </span>
  );
}
