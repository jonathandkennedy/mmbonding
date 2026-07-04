import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export type LegalSection = { id: string; heading: string; body: ReactNode };

/**
 * Shared chrome for long-form legal pages (privacy, terms): hero with
 * breadcrumb + "last updated", a plain-English TL;DR, and a sticky table of
 * contents beside numbered, anchor-linked sections. Section bodies are authored
 * inside `.legal-prose` (see globals.css) so prose styling never leaks.
 */
export function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  summary,
  sections,
  breadcrumbLabel,
  breadcrumbHref,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string;
  summary: string;
  sections: LegalSection[];
  breadcrumbLabel: string;
  breadcrumbHref: string;
}) {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: breadcrumbLabel, url: breadcrumbHref },
        ])}
      />

      <section className="border-b border-ink-100 bg-surface">
        <Container size="wide" className="py-14 lg:py-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-azure-600">
                  Home
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />
              <li className="font-medium text-navy-800" aria-current="page">
                {breadcrumbLabel}
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-muted">{intro}</p>
            <p className="mt-5 font-mono text-xs uppercase tracking-wider text-ink-500">
              Last updated: {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container size="wide">
          <TldrCard className="mb-12 max-w-3xl" text={summary} />
          <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[15rem_1fr]">
            {/* Table of contents */}
            <aside className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:self-start">
              <nav
                aria-label="On this page"
                className="rounded-2xl border border-ink-200 bg-surface p-5 lg:border-0 lg:bg-transparent lg:p-0"
              >
                <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-500">
                  On this page
                </h2>
                <ol className="mt-3 space-y-2 text-sm">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex gap-2 text-muted transition-colors hover:text-azure-600"
                      >
                        <span className="font-mono text-xs text-ink-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{s.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Sections */}
            <div className="max-w-2xl">
              {sections.map((s) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-28 border-t border-ink-100 py-8 first:border-0 first:pt-0"
                >
                  <h2 className="font-display text-xl font-bold tracking-tight text-navy-900 sm:text-2xl">
                    {s.heading}
                  </h2>
                  <div className="legal-prose mt-4">{s.body}</div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
