import { cn } from "@/lib/utils";

/** Centered max-width content well. One width system across the whole site. */
export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}) {
  const max = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  }[size];
  return <div className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", max, className)}>{children}</div>;
}
