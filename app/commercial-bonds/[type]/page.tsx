import type { Metadata } from "next";
import { clampDescription } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, ChevronRight, Check, Info } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Slashes } from "@/components/slashes";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import {
  commercialBonds,
  getCommercialBond,
  commercialReviewNote,
  commercialHero,
  commercialImageAlt,
} from "@/lib/commercial-bonds";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return commercialBonds.map((b) => ({ type: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const b = getCommercialBond(type);
  if (!b) return {};
  return {
    title: b.name,
    description: clampDescription(b.intro),
    alternates: { canonical: `/commercial-bonds/${b.slug}` },
    openGraph: {
      images: [
        {
          url: commercialHero(b.slug),
          width: 1200,
          height: 675,
          alt: commercialImageAlt(b),
        },
      ],
    },
    twitter: { card: "summary_large_image", images: [commercialHero(b.slug)] },
  };
}

export default async function Page({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const b = getCommercialBond(type);
  if (!b) notFound();

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Commercial Bonds", url: "/commercial-bonds" },
    { name: b.shortName, url: `/commercial-bonds/${b.slug}` },
  ];

  const facts: { label: string; value: string }[] = [
    { label: "Bond amount", value: b.amountLabel },
    { label: "Authority", value: b.authority },
    ...(b.statute ? [{ label: "Statute", value: b.statute }] : []),
  ];

  const amountClause = b.amountLabel.trim().startsWith("$")
    ? `is a ${b.amountLabel} surety bond`
    : `is a surety bond whose amount is ${b.amountLabel.toLowerCase()}`;
  const tldrText = `The ${b.shortName} ${amountClause}. ${b.whoNeedsIt[0]} need it. You pay a small premium, not the full amount, and we place it fast, credit challenges included.`;

  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: b.name,
            description: b.intro,
            url: `/commercial-bonds/${b.slug}`,
          }),
          faqSchema(b.faqs),
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
                <Link href="/commercial-bonds" className="hover:text-azure-600">
                  Commercial Bonds
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />
              <li className="font-medium text-navy-800" aria-current="page">
                {b.shortName}
              </li>
            </ol>
          </nav>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>{b.authority}</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
                {b.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{b.intro}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={`/get-a-quote`} size="lg">
                  Quote this bond
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
                {facts.map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-sm text-muted">{f.label}</dt>
                    <dd className="font-mono text-base font-semibold text-navy-900 tabular">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                The premium is a percentage of the bond amount, set by underwriting. The figures
                above are the bond amounts, not what you pay.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-16">
        <Container size="wide">
          <div className="mb-10 overflow-hidden rounded-2xl border border-ink-200 bg-white">
            <Image
              src={commercialHero(b.slug)}
              alt={commercialImageAlt(b)}
              width={1200}
              height={675}
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <TldrCard text={tldrText} className="mb-10 max-w-3xl" />
          <div className="max-w-[64ch]">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
                What it is
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700">{b.whatItIs}</p>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
                Who needs it
              </h2>
              <ul className="mt-4 space-y-2.5">
                {b.whoNeedsIt.map((w) => (
                  <li key={w} className="flex gap-2.5 text-ink-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-azure-600" aria-hidden="true" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-8 flex items-start gap-3 rounded-2xl border border-ink-200 bg-surface p-5 text-sm leading-relaxed text-muted">
              <Info className="mt-0.5 size-5 shrink-0 text-azure-500" aria-hidden="true" />
              <p>{commercialReviewNote}</p>
            </Reveal>

            <Reveal className="mt-8 text-muted">
              <p>
                Tough credit or a prior claim? It&apos;s welcome here. See how we place{" "}
                <Link
                  href="/hard-to-place-surety-bonds"
                  className="font-medium text-azure-600 underline underline-offset-2 hover:text-azure-700"
                >
                  hard-to-place surety bonds
                </Link>
                , or{" "}
                <Link
                  href="/get-a-quote"
                  className="font-medium text-azure-600 underline underline-offset-2 hover:text-azure-700"
                >
                  get a quote
                </Link>{" "}
                and we&apos;ll place your exact bond.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              {b.shortName} FAQs
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={b.faqs} />
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container size="wide">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 px-7 py-10 text-center text-white sm:flex-row sm:text-left sm:px-10">
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight">
                Ready for your {b.shortName.toLowerCase()}?
              </h2>
              <p className="mt-1 text-navy-200">
                Get the right bond fast, with a real underwriter on your side.
              </p>
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
