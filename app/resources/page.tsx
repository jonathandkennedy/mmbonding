import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { guides, guideHref, guideThumb, guideImageAlt, guideCategories } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Contractor Bond Guides & Resources",
  description:
    "Plain-English guides to California contractor bonds: costs, how to get bonded, performance bonds, license reactivation, and bad-credit surety. Reviewed by a licensed broker, CA DOI #6009105.",
  alternates: { canonical: "/resources" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
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
                Resources
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-2xl">
            <Eyebrow>Guides &amp; resources</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              Straight answers on California contractor bonds.
            </h1>
            <p className="mt-4 text-lg text-muted">
              Costs, requirements, and how-to, written and reviewed by a licensed broker. Real
              numbers, kept current.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container size="wide" className="space-y-14">
          <TldrCard
            className="mb-10 max-w-3xl"
            text="This resources section is a library of plain-English guides on California contractor bonds: what they cost, how to get bonded, and licensing. Each guide is written and reviewed by a licensed California surety broker, with real numbers kept current. Pick a topic below to dig in."
          />
          {guideCategories.map((cat) => {
            const inCat = guides.filter((g) => g.category === cat);
            if (inCat.length === 0) return null;
            return (
              <div key={cat}>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
                  {cat}
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {inCat.map((g, i) => (
                    <Reveal as="div" key={g.slug} delay={(i % 3) * 60}>
                      <Link
                        href={guideHref(g.slug)}
                        className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-[box-shadow,border-color] duration-200 hover:border-azure-300 hover:shadow-md"
                      >
                        <div className="mb-4 overflow-hidden rounded-xl border border-ink-100">
                          <Image
                            src={guideThumb(g.slug)}
                            alt={guideImageAlt(g)}
                            width={640}
                            height={640}
                            sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
                            className="aspect-[16/9] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                        <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-navy-900">
                          {g.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-muted">{g.excerpt}</p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 transition-transform duration-200 ease-out group-hover:translate-x-1">
                          Read guide
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}

          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
              Tools &amp; references
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "How Surety Bonds Work",
                  desc: "The three-party guarantee in one diagram, plus how a claim actually works.",
                  href: "/how-surety-bonds-work",
                },
                {
                  title: "Surety Bond Glossary",
                  desc: "Principal, obligee, indemnity, penal sum, and the rest, in plain English.",
                  href: "/surety-bond-glossary",
                },
                {
                  title: "Contractor Bonds by Trade",
                  desc: "Which bonds each CSLB classification needs, from C-10 electrical to Class A.",
                  href: "/contractor-license-bond/trades",
                },
                {
                  title: "Surety Bond Cost Calculator",
                  desc: "Estimate your annual premium from the bond amount and your credit tier.",
                  href: "/surety-bond-cost-calculator",
                },
              ].map((t, i) => (
                <Reveal as="div" key={t.href} delay={(i % 3) * 60}>
                  <Link
                    href={t.href}
                    className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-[box-shadow,border-color] duration-200 hover:border-azure-300 hover:shadow-md"
                  >
                    <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-navy-900">
                      {t.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted">{t.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 transition-transform duration-200 ease-out group-hover:translate-x-1">
                      Open
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
