import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { trades } from "@/lib/trades";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contractor Bonds by Trade & CSLB Classification",
  description:
    "Which bonds each California contractor classification needs, from C-10 electrical to Class A engineering. Every trade carries the $25,000 license bond; see the contract and permit bonds yours adds.",
  alternates: { canonical: "/contractor-license-bond/trades" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contractor License Bond", url: "/contractor-license-bond" },
          { name: "By Trade", url: "/contractor-license-bond/trades" },
        ])}
      />

      <section className="border-b border-ink-100 bg-surface">
        <Container size="wide" className="py-14 lg:py-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-azure-600">
                  Home
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />
              <li>
                <Link href="/contractor-license-bond" className="hover:text-azure-600">
                  Contractor License Bond
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />
              <li className="font-medium text-navy-800" aria-current="page">
                By Trade
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-2xl">
            <Eyebrow>By CSLB classification</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              Contractor bonds by trade.
            </h1>
            <p className="mt-4 text-lg text-muted">
              Every California classification carries the same {usd(facts.licenseBondAmount)} license
              bond. What changes is the contract and permit bonds your specific trade runs into. Find
              yours.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container size="wide">
          <TldrCard
            className="mb-10 max-w-3xl"
            text={`Every California contractor, in every CSLB classification, carries the same ${usd(facts.licenseBondAmount)} license bond (${facts.licenseBondStatute}). What differs by trade is the contract and permit bonds each one commonly needs. Pick your classification below to see exactly which bonds apply to your work.`}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trades.map((t, i) => (
              <Reveal as="div" key={t.slug} delay={(i % 3) * 60}>
                <Link
                  href={`/contractor-license-bond/trades/${t.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-[box-shadow,border-color] duration-200 hover:border-azure-300 hover:shadow-md"
                >
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-azure-700">
                    {t.code}
                  </span>
                  <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-navy-900">
                    {t.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted">{t.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 transition-transform duration-200 ease-out group-hover:translate-x-1">
                    {t.name} bonds
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
