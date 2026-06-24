import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "navy" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-display font-semibold tracking-tight " +
  // Emil: animate transform only, custom ease-out, instant press feedback
  "transition-[transform,background-color,box-shadow,border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] " +
  "active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-azure-500 text-white shadow-[0_8px_22px_-8px_rgba(0,144,216,0.55)] hover:bg-azure-600 hover:shadow-[0_12px_28px_-8px_rgba(0,144,216,0.6)]",
  navy: "bg-navy-900 text-white hover:bg-navy-800 shadow-sm",
  outline:
    "border border-ink-300 bg-white text-navy-900 hover:border-azure-400 hover:bg-azure-50",
  ghost: "text-navy-900 hover:bg-ink-100",
  white: "bg-white text-navy-900 shadow-sm hover:bg-azure-50",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
