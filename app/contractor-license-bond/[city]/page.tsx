import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, ChevronRight, MapPin } from "lucide-react";
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
import { getMetro } from "@/lib/locations";
import { facts } from "@/lib/regulatory";
import { usd, clampDescription } from "@/lib/utils";

/**
 * Curated "contractor license bond + city" pages. Focused on the $25,000 CSLB
 * license bond with a local angle, and DISTINCT from the broad metro pages at
 * /surety-bonds/[metro]. Kept to three high-intent markets so each is a real,
 * localized page and links out (rather than duplicating) the flagship and the
 * broad metro page.
 */
const CITIES = ["los-angeles", "orange-county", "san-diego"];

export function generateStaticParams() {
  return CITIES.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  if (!CITIES.includes(city)) return {};
  const m = getMetro(city);
  if (!m) return {};
  return {
    title: `Contractor License Bond in ${m.name}`,
    description: clampDescription(`The ${usd(facts.licenseBondAmount)} CSLB contractor license bond for contractors in ${m.name}. Fast quotes, bad credit welcome, e-filed with the CSLB.`),
    alternates: { canonical: `/contractor-license-bond/${city}` },
  };
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  if (!CITIES.includes(city)) notFound();
  const m = getMetro(city);
  if (!m) notFound();

  const description = `The ${usd(facts.licenseBondAmount)} CSLB contractor license bond for contractors in ${m.name}, quoted fast and placeable even with bad credit.`;

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Contractor License Bond", url: "/contractor-license-bond" },
    { name: m.name, url: `/contractor-license-bond/${city}` },
  ];

  const faqs = [
    {
      q: `How much is the contractor license bond in ${m.name}?`,
      a: `The bond amount is ${usd(facts.licenseBondAmount)} for every CSLB-licensed contractor in ${m.name}, set statewide by ${facts.licenseBondStatute}. You do not pay that figure. You pay an annual premium, which is a small percentage of it, based mostly on your credit.`,
    },
    {
      q: `How fast can ${m.name} contractors get bonded?`,
      a: `Often the same day. Once a qualifying ${m.name} contractor is quoted and the premium is paid, the surety e-files the bond with the CSLB, and electronic filings typically post within ${facts.filingWindow}.`,
    },
    {
      q: `Can ${m.name} contractors with bad credit get bonded?`,
      a: "Usually, yes. The license bond is one of the most placeable bonds even with credit challenges, and hard-to-place files are our specialty. Rates run higher for tougher credit, and underwriting still applies, so we never promise guaranteed approval.",
    },
  ];

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["FinancialService", "InsuranceAgency"],
    name: `${site.shortName} in ${m.name}`,
    description: `Licensed California surety bond broker placing the ${usd(facts.licenseBondAmount)} CSLB contractor license bond for contractors in ${m.name} and ${m.region}.`,
    url: `${site.url}/contractor-license-bond/${city}`,
    telephone: site.phone.href.replace("tel:", ""),
    parentOrganization: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "AdministrativeArea", name: m.region },
    geo: { "@type": "GeoCoordinates", latitude: m.geo.lat, longitude: m.geo.lng },
  };

  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: `Contractor License Bond in ${m.name}`,
            description,
            url: `/contractor-license-bond/${city}`,
          }),
          localBusiness,
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

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
                <Link href="/contractor-license-bond" className="hover:text-azure-600">
                  Contractor License Bond
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />
              <li className="font-medium text-navy-800" aria-current="page">
                {m.name}
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>{m.region}</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
                Contractor License Bond in {m.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Every contractor licensed by the CSLB carries the same{" "}
                {usd(facts.licenseBondAmount)} license bond, and contractors in {m.name} are no
                exception. We quote it fast, place it even with bad credit, and e-file it with the
                CSLB for you.
              </p>
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
                  <dt className="text-sm text-muted">Bond amount</dt>
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
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-sm text-muted">CSLB form</dt>
                  <dd className="font-mono text-base font-semibold text-navy-900 tabular">
                    {facts.licenseBondForm}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Premium is a percentage of the bond amount, set by underwriting. The figures above
                are statutory amounts, not what you pay.
              </p>
            </Reveal>
          </div>

          <ReviewedBy className="mt-10 max-w-2xl" />
        </Container>
      </section>

      {/* Body */}
      <section className="py-16">
        <Container size="wide" className="max-w-3xl">
          <TldrCard
            text={`How much is the contractor license bond in ${m.name}? It is a ${usd(facts.licenseBondAmount)} bond (${facts.licenseBondStatute}) every CSLB-licensed contractor must carry. You pay a small annual premium based on credit, not the full amount. We quote ${m.name} contractors fast, bad credit welcome.`}
            className="mb-10"
          />
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
              The license bond, for {m.name} contractors
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              The California contractor license bond is a {usd(facts.licenseBondAmount)} surety bond
              required of every contractor licensed by the Contractors State License Board, under{" "}
              {facts.licenseBondStatute} and filed on CSLB Form {facts.licenseBondForm}. It protects
              consumers and employees, not the contractor, and if the surety pays a valid claim you
              reimburse it. For the full breakdown of what it covers, who needs one, and what it
              costs, see our{" "}
              <Link
                href="/contractor-license-bond"
                className="font-semibold text-azure-700 underline-offset-2 hover:underline"
              >
                contractor license bond guide
              </Link>
              .
            </p>
          </Reveal>

          <Reveal className="mt-6">
            <p className="text-lg leading-relaxed text-ink-700">{m.context}</p>
          </Reveal>

          <Reveal className="mt-6 space-y-2 text-lg leading-relaxed text-ink-700">
            <p>
              Curious what the premium runs? See our{" "}
              <Link
                href="/resources/contractor-license-bond-cost"
                className="font-semibold text-azure-700 underline-offset-2 hover:underline"
              >
                license bond cost guide
              </Link>
              .
            </p>
            <p>
              Need other bonds in {m.name}? Our{" "}
              <Link
                href={`/surety-bonds/${city}`}
                className="font-semibold text-azure-700 underline-offset-2 hover:underline"
              >
                {m.name} surety bonds page
              </Link>{" "}
              covers contract bonds, qualifier bonds, and more for the region.
            </p>
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
                Bonding {m.name} contractors across {m.region}
              </h2>
            </div>
            <p className="mt-3 text-muted">
              We place the license bond for contractors throughout the region, including these
              communities, and everywhere else in California.
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
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Local questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              {m.name} license bond FAQs
            </h2>
            <p className="mt-4 text-muted">
              Reviewed by {site.founder.name}, {site.founder.title}. Figures verified against CSLB and
              CA DOI sources.
            </p>
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
                Need a license bond in {m.name}?
              </h2>
              <p className="mt-1 text-navy-200">
                Fast quotes, tough cases welcome, a real underwriter on call.
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
