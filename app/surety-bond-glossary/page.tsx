import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { glossaryTerms } from "@/lib/glossary";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Surety Bond Glossary: Terms Explained",
  description:
    "A plain-English glossary of surety bond terms for California contractors and businesses: principal, obligee, surety, indemnity, premium, penal sum, T-listing, and more. Reviewed by a licensed broker.",
  alternates: { canonical: "/surety-bond-glossary" },
};

const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

export default function Page() {
  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Surety Bond Glossary",
    description:
      "Plain-English definitions of surety bond terms for California contractors and businesses.",
    url: `${site.url}/surety-bond-glossary`,
    hasDefinedTerm: sorted.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.def,
      url: `${site.url}/surety-bond-glossary#${t.slug}`,
    })),
  };

  return (
    <>
      <JsonLd
        schema={[
          definedTermSet,
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Glossary", url: "/surety-bond-glossary" },
          ]),
        ]}
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
                Glossary
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-2xl">
            <Eyebrow>Reference</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              Surety bond glossary.
            </h1>
            <p className="mt-4 text-lg text-muted">
              The words that show up on a bond, an application, or an underwriter&apos;s email, in
              plain English. Written for California contractors and businesses.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container size="wide">
          <TldrCard
            className="mb-10 max-w-3xl"
            text="A surety bond is a three-party guarantee: you (the principal), the party it protects (the obligee), and the surety that backs it. You pay a premium, not the full bond amount, and repay any valid claim. This glossary defines those terms and the rest, in plain English, for California."
          />

          <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[15rem_1fr]">
            {/* Jump list */}
            <aside className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:self-start">
              <nav
                aria-label="Jump to term"
                className="rounded-2xl border border-ink-200 bg-surface p-5 lg:border-0 lg:bg-transparent lg:p-0"
              >
                <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-500">
                  Jump to a term
                </h2>
                <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm lg:grid-cols-1">
                  {sorted.map((t) => (
                    <li key={t.slug}>
                      <a
                        href={`#${t.slug}`}
                        className="text-muted transition-colors hover:text-azure-600"
                      >
                        {t.term}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Definitions */}
            <div className="max-w-2xl">
              <dl>
                {sorted.map((t) => (
                  <div
                    key={t.slug}
                    id={t.slug}
                    className="scroll-mt-28 border-t border-ink-100 py-7 first:border-0 first:pt-0"
                  >
                    <dt className="font-display text-xl font-bold tracking-tight text-navy-900">
                      {t.term}
                    </dt>
                    <dd className="mt-2 leading-relaxed text-ink-700">{t.def}</dd>
                    {t.link && (
                      <dd className="mt-3">
                        <Link
                          href={t.link.href}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 transition-transform hover:translate-x-0.5 hover:text-azure-700"
                        >
                          {t.link.label}
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                      </dd>
                    )}
                  </div>
                ))}
              </dl>

              <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 px-7 py-8 text-white sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-display text-xl font-bold tracking-tight">
                    Still not sure what you need?
                  </h2>
                  <p className="mt-1 text-sm text-navy-200">
                    Skip the jargon. Tell us about your work and we will name the exact bond.
                  </p>
                </div>
                <Button href="/get-a-quote" variant="primary" size="lg" className="shrink-0">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
