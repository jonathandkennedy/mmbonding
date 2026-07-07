import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, ChevronRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Slashes } from "@/components/slashes";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { ReviewedBy } from "@/components/reviewed-by";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { getTrade, trades } from "@/lib/trades";
import { facts } from "@/lib/regulatory";
import { usd, clampDescription } from "@/lib/utils";

export function generateStaticParams() {
  return trades.map((t) => ({ trade: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trade: string }>;
}): Promise<Metadata> {
  const { trade } = await params;
  const t = getTrade(trade);
  if (!t) return {};
  return {
    title: `${t.name} Contractor Bond (${t.code})`,
    description: clampDescription(`Which bonds a California ${t.code} ${t.name.toLowerCase()} contractor needs, starting with the ${usd(facts.licenseBondAmount)} license bond. Fast quotes, bad credit welcome.`),
    alternates: { canonical: `/contractor-license-bond/trades/${t.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ trade: string }> }) {
  const { trade } = await params;
  const t = getTrade(trade);
  if (!t) notFound();

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Contractor License Bond", url: "/contractor-license-bond" },
    { name: "By Trade", url: "/contractor-license-bond/trades" },
    { name: `${t.name} (${t.code})`, url: `/contractor-license-bond/trades/${t.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: `${t.name} Contractor Bond (${t.code})`,
            description: t.intro,
            url: `/contractor-license-bond/trades/${t.slug}`,
          }),
          faqSchema(t.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-ink-100 bg-surface">
        <Container size="wide" className="py-12 lg:py-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              {crumbs.map((c, i) => (
                <li key={c.url} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.url} className="hover:text-azure-600">
                      {c.name}
                    </Link>
                  ) : (
                    <span className="font-medium text-navy-800" aria-current="page">
                      {c.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>
                CSLB classification {t.code}
              </Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
                {t.name} Contractor Bond
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t.intro}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/get-a-quote?bond=contractor-license-bond" size="lg">
                  Get a Quote
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button href={site.phone.href} variant="outline" size="lg" data-callrail="phone">
                  <Phone className="size-4 text-azure-500" aria-hidden="true" />
                  <span className="tabular">{site.phone.display}</span>
                </Button>
              </div>
            </div>

            <Reveal className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-navy-900">
                <Slashes size="sm" /> Key facts
              </div>
              <dl className="mt-4 divide-y divide-ink-100">
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-sm text-muted">Classification</dt>
                  <dd className="font-mono text-base font-semibold text-navy-900 tabular">{t.code}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-sm text-muted">License bond</dt>
                  <dd className="font-mono text-base font-semibold text-navy-900 tabular">
                    {usd(facts.licenseBondAmount)}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-sm text-muted">Statute</dt>
                  <dd className="font-mono text-base font-semibold text-navy-900 tabular">
                    {facts.licenseBondStatute}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Every classification carries the same license bond. The premium is a percentage of it,
                set by underwriting, not what you pay in full.
              </p>
            </Reveal>
          </div>

          <ReviewedBy className="mt-10 max-w-2xl" />
        </Container>
      </section>

      {/* Body */}
      <section className="py-16">
        <Container size="wide" className="max-w-3xl">
          <TldrCard text={t.tldr} className="mb-10" />

          <Reveal>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
              Bonds a {t.name.toLowerCase()} contractor needs
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">{t.context}</p>
          </Reveal>

          <Reveal className="mt-8 space-y-3">
            {t.bonds.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-ink-200 bg-white p-5 transition-[box-shadow,border-color] duration-200 hover:border-azure-300 hover:shadow-md"
              >
                <div>
                  <span className="font-display text-lg font-bold tracking-tight text-navy-900 group-hover:text-azure-700">
                    {b.label}
                  </span>
                  <p className="mt-1 text-sm text-muted">{b.note}</p>
                </div>
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-azure-500" aria-hidden="true" />
              </Link>
            ))}
          </Reveal>

          <Reveal className="mt-8 text-muted">
            <p>
              Not sure which of these your jobs actually require?{" "}
              <Link
                href="/get-a-quote"
                className="font-medium text-azure-600 underline underline-offset-2 hover:text-azure-700"
              >
                Tell us about your work
              </Link>{" "}
              and a real underwriter will map the exact bonds you need, or read the full{" "}
              <Link
                href="/contractor-license-bond"
                className="font-medium text-azure-600 underline underline-offset-2 hover:text-azure-700"
              >
                contractor license bond guide
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              {t.code} bonding FAQs
            </h2>
            <p className="mt-4 text-muted">
              Reviewed by {site.founder.name}, {site.founder.title}. Figures verified against CSLB
              sources.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={t.faqs} />
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container size="wide">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 px-7 py-10 text-center text-white sm:flex-row sm:text-left sm:px-10">
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight">
                Get your {t.code} contractor bonded
              </h2>
              <p className="mt-1 text-navy-200">
                Fast quotes on the license bond, plus the contract and permit bonds your jobs need.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href="/get-a-quote?bond=contractor-license-bond" variant="primary" size="lg">
                Get a Quote
              </Button>
              <Button href={site.phone.href} variant="white" size="lg" data-callrail="phone">
                <Phone className="size-4 text-azure-500" aria-hidden="true" />
                Call now
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
