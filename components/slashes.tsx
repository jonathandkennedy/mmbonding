import { cn } from "@/lib/utils";

/**
 * The forward-slash speed motif lifted from the logo. The brand's signature
 * device — used as a wordmark accent, section marker, and list bullet. Purely
 * decorative, so it is hidden from assistive tech.
 */
export function Slashes({
  className,
  size = "md",
  tone = "azure",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  tone?: "azure" | "white" | "navy";
}) {
  const bar = {
    sm: "h-3.5 w-[3px]",
    md: "h-5 w-1",
    lg: "h-9 w-1.5",
  }[size];

  const color = {
    azure: ["bg-azure-300", "bg-azure-400", "bg-azure-500"],
    white: ["bg-white/40", "bg-white/70", "bg-white"],
    navy: ["bg-navy-300", "bg-navy-500", "bg-navy-900"],
  }[tone];

  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex items-center gap-[3px]", className)}
    >
      {color.map((c, i) => (
        <span key={i} className={cn("block -skew-x-[18deg] rounded-[1px]", bar, c)} />
      ))}
    </span>
  );
}
