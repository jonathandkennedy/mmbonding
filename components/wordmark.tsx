import Link from "next/link";
import { cn } from "@/lib/utils";
import { Slashes } from "./slashes";

/**
 * Recreated MM Bonding wordmark. Rebuilt in type (not the PNG) so it stays
 * crisp at any size and adapts to dark (navy) and light surfaces. Matches the
 * logo: azure italic "MM" + speed slashes + heavy "BONDING".
 *
 * tone="onDark"  -> for navy backgrounds (BONDING renders white)
 * tone="onLight" -> for light backgrounds (BONDING renders navy)
 */
export function Wordmark({
  tone = "onLight",
  className,
  withTagline = false,
}: {
  tone?: "onDark" | "onLight";
  className?: string;
  withTagline?: boolean;
}) {
  const bonding = tone === "onDark" ? "text-white" : "text-navy-900";
  const tagline = tone === "onDark" ? "text-azure-300" : "text-azure-600";

  return (
    <Link
      href="/"
      aria-label="MM Bonding home"
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span className="flex items-center gap-2">
        <span
          className="font-display text-[1.6rem] font-extrabold italic tracking-tight text-azure-500"
          style={{ letterSpacing: "-0.04em" }}
        >
          MM
        </span>
        <Slashes
          size="md"
          tone="azure"
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
        />
        <span
          className={cn(
            "font-display text-[1.6rem] font-extrabold tracking-tight",
            bonding,
          )}
          style={{ letterSpacing: "-0.02em" }}
        >
          BONDING
        </span>
      </span>
      {withTagline && (
        <span
          className={cn(
            "mt-1 pl-0.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.22em]",
            tagline,
          )}
        >
          Get The Right Bond Fast
        </span>
      )}
    </Link>
  );
}
