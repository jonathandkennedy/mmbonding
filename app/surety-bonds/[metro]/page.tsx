import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, ChevronRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { ReviewedBy } from "@/components/reviewed-by";
import { BondPathCards } from "@/components/bond-path-cards";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { metros, getMetro, nearbyMetros } from "@/lib/locations";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

export function generateStaticParams() {
  return metros.map((m) => ({ metro: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ metro: string }>;
}): Promise<Metadata> {
  const { metro } = await params;
  const m = getMetro(metro);
  if (!m) return {};
  return {
    title: `Surety Bonds in ${m.name}`,
    description: `Surety bonds for contractors in ${m.name}. ${usd(facts.licenseBondAmount)} license bonds, contract bonds, and hard-to-place. Fast quotes from a licensed California broker, CA DOI #${site.doiLicense}.`,
    alternates: { canonical: `/surety-bonds/${m.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ metro: string }> }) {
  const { metro } = await params;
  const m = getMetro(metro);
  if (!m) notFound();

  const nearby = nearbyMetros(m.slug, 4);

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/surety-bonds" },
    { name: m.name, url: `/surety-bonds/${m.slug}` },
  ];

  const faqs = [
    {
      q: `How fast can I get a contractor bond in ${m.name}?`,
      a: `Quickly. Qualifying ${usd(facts.licenseBondAmount)} license bonds for ${m.region} contractors are often issued the same day, with CSLB e-filing typically posting within ${facts.filingWindow}. Contract bonds take a short underwriting review.`,
    },
    ...(m.localFaq ? [m.localFaq] : []),
    {
      q: `Can ${m.name} contractors with bad credit get bonded?`,
      a: "Often, yes. Hard-to-place is our specialty. We shop multiple markets for credit-challenged files, prior claims, and newer businesses that instant-issue sites decline. Underwriting still applies and we never promise guaranteed approval.",
    },
    {
      q: `What areas around ${m.name} do you serve?`,
      a: `All of ${m.region} and the surrounding communities, including ${m.communities.slice(0, 5).join(", ")}, and the rest of California.`,
    },
  ];

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["FinancialService", "InsuranceAgency"],
    name: `${site.shortName} in ${m.name}`,
    description: `Licensed California surety bond broker serving contractors in ${m.name} and ${m.region}.`,
    url: `${site.url}/surety-bonds/${m.slug}`,
    telephone: site.phone.href.replace("tel:", ""),
    parentOrganization: { "@id": `${site.url}/#organization` },
    areaServed: [
      { "@type": "AdministrativeArea", name: m.region },
      ...m.communities.map((c) => ({ "@type": "City", name: c })),
    ],
    geo: { "@type": "GeoCoordinates", latitude: m.geo.lat, longitude: m.geo.lng },
  };

  return (
    <>
      <JsonLd schema={[localBusiness, faqSchema(faqs), breadcrumbSchema(crumbs)]} />

      {/* Hero */}
      <section className="border-b border-ink-100 bg-surface">
        <Container size="wide" className="py-12 lg:py-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-azure-600">
                  Home
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />
              <li>
                <Link href="/surety-bonds" className="hover:text-azure-600">
                  Locations
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />
              <li className="font-medium text-navy-800" aria-current="page">
                {m.name}
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow>{m.region}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              Surety Bonds in {m.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{m.blurb}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/get-a-quote" size="lg">
                Get a Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={site.phone.href} variant="outline" size="lg" data-callrail="phone">
                <Phone className="size-4 text-azure-500" aria-hidden="true" />
                <span className="tabular">{site.phone.display}</span>
              </Button>
            </div>
          </div>
          <ReviewedBy className="mt-10 max-w-2xl" />
        </Container>
      </section>

      {/* Local context + paths */}
      <section className="py-16">
        <Container size="wide">
          <TldrCard
            text={`Need a surety bond in ${m.name}? ${site.shortName} is a licensed California broker (CA DOI #${site.doiLicense}) placing contractor license, bid, performance, and hard-to-place bonds for ${m.region} contractors. Fast quotes, bad credit welcome, often same-day filing.`}
            className="mb-10 max-w-3xl"
          />
          <Reveal className="max-w-3xl">
            <p className="text-lg leading-relaxed text-ink-700">{m.context}</p>
          </Reveal>
          {m.localNeeds && (
            <Reveal className="mt-8 max-w-3xl">
              <div className="rounded-2xl border border-azure-100 bg-azure-50/60 p-6">
                <h2 className="font-display text-lg font-extrabold tracking-tight text-navy-900">
                  What {m.name} contractors get bonded for
                </h2>
                <p className="mt-2 leading-relaxed text-ink-700">{m.localNeeds}</p>
              </div>
            </Reveal>
          )}
          <Reveal className="mt-10">
            <BondPathCards />
          </Reveal>
        </Container>
      </section>

      {/* Areas served */}
      <section className="bg-surface py-16">
        <Container size="wide">
          <Reveal className="max-w-2xl">
            <div className="flex items-center gap-2.5">
              <MapPin className="size-5 text-azure-500" aria-hidden="true" />
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
                Serving {m.name} and {m.region}
              </h2>
            </div>
            <p className="mt-3 text-muted">
              We bond contractors across the region, including these communities, and everywhere else
              in California.
            </p>
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap gap-2.5">
            {m.communities.map((c) => (
              <span
                key={c}
                className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-800"
              >
                {c}
              </span>
            ))}
          </Reveal>
          {nearby.length > 0 && (
            <Reveal className="mt-12">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Nearby areas we serve
              </h3>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/surety-bonds/${n.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-azure-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-azure-700 transition-colors hover:bg-azure-50"
                  >
                    <MapPin className="size-3.5" aria-hidden="true" />
                    Surety bonds in {n.name}
                  </Link>
                ))}
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Local questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              {m.name} surety bond FAQs
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <Container size="wide">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 px-7 py-10 text-center text-white sm:flex-row sm:text-left sm:px-10">
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight">
                Need a bond in {m.name}?
              </h2>
              <p className="mt-1 text-navy-200">Fast quotes, tough cases welcome, a real underwriter on call.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href="/get-a-quote" variant="primary" size="lg">
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
