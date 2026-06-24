import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { commercialBonds, commercialCategories } from "@/lib/commercial-bonds";

export const metadata: Metadata = {
  title: "Commercial, Permit & Specialty Surety Bonds",
  description:
    "California commercial, permit, and specialty surety bonds: subdivision and encroachment permit bonds, notary, auto dealer, cannabis, freight broker, and more. Licensed broker, CA DOI #6009105.",
  alternates: { canonical: "/commercial-bonds" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Commercial Bonds", url: "/commercial-bonds" },
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
                Commercial Bonds
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-2xl">
            <Eyebrow>Commercial &amp; specialty</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              California commercial &amp; specialty bonds.
            </h1>
            <p className="mt-4 text-lg text-muted">
              These bonds sit outside contractor licensing, with their own regulators and rules. We
              place them across the board, including the hard-to-place cases other brokers turn away.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container size="wide" className="space-y-14">
          {commercialCategories.map((cat) => {
            const inCat = commercialBonds.filter(
              (b) => (b.category ?? "Commercial & Specialty") === cat,
            );
            if (inCat.length === 0) return null;
            return (
              <div key={cat}>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
                  {cat}
                </h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {inCat.map((b, i) => (
                    <Reveal as="div" key={b.slug} delay={(i % 3) * 60}>
                      <Link
                        href={`/commercial-bonds/${b.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-[box-shadow,border-color] duration-200 hover:border-azure-300 hover:shadow-md"
                      >
                        <h3 className="font-display text-xl font-bold tracking-tight text-navy-900">
                          {b.shortName}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-muted">{b.intro}</p>
                        <span className="mt-4 font-mono text-sm font-semibold text-azure-700">
                          {b.amountLabel}
                        </span>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 transition-transform duration-200 ease-out group-hover:translate-x-1">
                          Learn more
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
