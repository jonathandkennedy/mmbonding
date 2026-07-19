"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Globe } from "lucide-react";
import { Wordmark } from "./wordmark";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { primaryNav, site } from "@/lib/site";
import { alternateFor, isSpanish } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const alt = alternateFor(pathname);
  const inEs = isSpanish(pathname);
  const switchHref = alt ? alt.href : inEs ? "/" : "/es";
  const switchLabel = inEs ? "English" : "Español";
  const switchLang = inEs ? "en" : "es";

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-200 ease-out",
        scrolled
          ? "border-b border-ink-200 bg-white/85 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white/0",
      )}
    >
      <Container size="wide">
        <div className="flex h-[var(--header-h)] items-center justify-between gap-4">
          <Wordmark tone="onLight" />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) =>
              item.columns ? (
                <BondsMenu key={item.label} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-navy-800 transition-colors hover:bg-ink-100 hover:text-navy-900"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={switchHref}
              hrefLang={switchLang}
              aria-label={inEs ? "Switch to English" : "Cambiar a Español"}
              className="hidden items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium text-navy-800 transition-colors hover:bg-ink-100 md:inline-flex"
            >
              <Globe className="size-4 text-azure-500" aria-hidden="true" />
              {switchLabel}
            </Link>
            <a
              href={site.phone.href}
              data-callrail="phone"
              className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-azure-50 lg:inline-flex"
            >
              <Phone className="size-4 text-azure-500" aria-hidden="true" />
              <span className="tabular">{site.phone.display}</span>
            </a>
            <Button href="/get-a-quote" size="sm" className="hidden sm:inline-flex">
              {inEs ? "Cotizar" : "Get a Quote"}
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-lg text-navy-900 hover:bg-ink-100 lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </Container>

      {open && <MobileMenu switchHref={switchHref} switchLabel={switchLabel} switchLang={switchLang} />}
    </header>
  );
}

function BondsMenu() {
  const bonds = primaryNav.find((i) => i.columns)!;
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-navy-800 transition-colors hover:bg-ink-100 hover:text-navy-900 group-focus-within:bg-ink-100"
      >
        {bonds.label}
        <ChevronDown className="size-4 text-ink-400 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>
      <div
        className="invisible absolute left-1/2 top-full z-50 w-[46rem] -translate-x-1/2 pt-3 opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
        style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
      >
        <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-2xl border border-ink-200 bg-white p-3 shadow-lg">
          {bonds.columns!.map((col) => (
            <div key={col.heading}>
              <p className="px-3 pb-1 pt-2 font-display text-xs font-bold uppercase tracking-wider text-azure-700">
                {col.heading}
              </p>
              {col.links.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="block rounded-xl px-3 py-2 transition-colors hover:bg-azure-50"
                >
                  <span className="block text-sm font-semibold text-navy-900">{c.label}</span>
                  {c.blurb && <span className="mt-0.5 block text-xs leading-snug text-muted">{c.blurb}</span>}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenu({
  switchHref,
  switchLabel,
  switchLang,
}: {
  switchHref: string;
  switchLabel: string;
  switchLang: string;
}) {
  return (
    <div className="lg:hidden">
      <Container size="wide">
        <div className="space-y-1 border-t border-ink-200 py-4">
          <Link
            href={switchHref}
            hrefLang={switchLang}
            className="mb-1 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-azure-700 hover:bg-ink-100"
          >
            <Globe className="size-4" aria-hidden="true" />
            {switchLabel}
          </Link>
          {primaryNav.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-base font-semibold text-navy-900 hover:bg-ink-100"
              >
                {item.label}
              </Link>
              {item.columns && (
                <div className="ml-3 border-l border-ink-200 pl-3">
                  {item.columns.map((col) => (
                    <div key={col.heading}>
                      <p className="px-3 pb-0.5 pt-2.5 font-display text-xs font-bold uppercase tracking-wider text-azure-700">
                        {col.heading}
                      </p>
                      {col.links.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-ink-100 hover:text-navy-900"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-2 px-3 pt-3">
            <Button href="/get-a-quote" size="md">
              Get a Quote
            </Button>
            <a
              href={site.phone.href}
              data-callrail="phone"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-ink-300 text-sm font-semibold text-navy-900"
            >
              <Phone className="size-4 text-azure-500" aria-hidden="true" />
              Call {site.phone.display}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
