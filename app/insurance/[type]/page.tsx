import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Info, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { TldrCard } from "@/components/tldr-card";
import { InsuranceReferralForm } from "@/components/insurance-referral-form";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { insuranceProducts, getInsuranceProduct, insuranceDisclaimer } from "@/lib/insurance";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return insuranceProducts.map((p) => ({ type: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const p = getInsuranceProduct(type);
  if (!p) return {};
  return {
    title: p.name,
    description: `${p.intro} A referral from ${site.shortName}, CA DOI #${site.doiLicense}.`,
    alternates: { canonical: `/insurance/${p.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const p = getInsuranceProduct(type);
  if (!p) notFound();

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Insurance", url: "/bonding-vs-insurance" },
    { name: p.shortName, url: `/insurance/${p.slug}` },
  ];

  const tldrText = `Need ${p.shortName.toLowerCase()} in California? ${site.shortName} connects contractors with a licensed insurance partner to get covered. We are a surety broker and referral, not the insurer, and there is no cost to be connected.`;

  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: `${p.name} referral`,
            description: p.intro,
            url: `/insurance/${p.slug}`,
          }),
          faqSchema(p.faqs),
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
              <li className="font-medium text-navy-800" aria-current="page">
                {p.shortName}
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow>Insurance referral</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              {p.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{p.intro}</p>
          </div>
        </Container>
      </section>

      {/* Body + form */}
      <section className="py-16">
        <Container size="wide">
          <TldrCard text={tldrText} className="mb-10 max-w-3xl" />
          <div className="grid gap-12 lg:grid-cols-[1fr_24rem]">
          <div className="max-w-[64ch]">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
                What it is
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700">{p.whatItIs}</p>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
                Who needs it
              </h2>
              <ul className="mt-4 space-y-2.5">
                {p.whoNeeds.map((w) => (
                  <li key={w} className="flex gap-2.5 text-ink-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-azure-600" aria-hidden="true" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-8 flex items-start gap-3 rounded-2xl border border-ink-200 bg-surface p-5 text-sm leading-relaxed text-muted">
              <Info className="mt-0.5 size-5 shrink-0 text-azure-500" aria-hidden="true" />
              <p>{insuranceDisclaimer}</p>
            </Reveal>

            <Reveal className="mt-8 text-muted">
              <p>
                Not sure how this differs from your bond? Read{" "}
                <Link
                  href="/bonding-vs-insurance"
                  className="font-medium text-azure-600 underline underline-offset-2 hover:text-azure-700"
                >
                  bonding vs. insurance
                </Link>
                . Need a bond instead? Start with the{" "}
                <Link
                  href="/contractor-license-bond"
                  className="font-medium text-azure-600 underline underline-offset-2 hover:text-azure-700"
                >
                  contractor license bond
                </Link>
                .
              </p>
            </Reveal>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <InsuranceReferralForm coverageName={p.shortName} coverageSlug={p.slug} />
          </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              {p.shortName} FAQs
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={p.faqs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
