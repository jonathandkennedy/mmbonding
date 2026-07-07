import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, ShieldCheck, Umbrella, BadgeCheck, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { ReviewedBy } from "@/components/reviewed-by";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { facts, REGULATORY_REVIEWED } from "@/lib/regulatory";
import { usd, clampDescription } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Bonded vs. Insured: What Licensed, Bonded & Insured Means",
  description:
    clampDescription("The difference between a surety bond and insurance for California contractors, and what 'licensed, bonded, and insured' actually means. Reviewed by a licensed broker, CA DOI #6009105."),
  alternates: { canonical: "/bonding-vs-insurance" },
};

const faqs = [
  {
    q: "Is a surety bond the same as insurance?",
    a: "No. A surety bond is a three-party guarantee that protects your customers and the public; if a claim is paid, you reimburse the surety. Insurance is a two-party contract that protects you against your own covered losses. They do different jobs, and most contractors need both.",
  },
  {
    q: "Does 'bonded' mean I'm insured?",
    a: "No. Being bonded means you carry a surety bond, like the $25,000 contractor license bond. It protects your customers, not you. To protect your own business you need insurance, typically general liability and workers' compensation.",
  },
  {
    q: "What does 'licensed, bonded, and insured' mean for a California contractor?",
    a: "Licensed means you hold a CSLB license. Bonded means you carry the required contractor license bond. Insured means you carry liability and, if you have employees, workers' compensation coverage. All three together signal a legitimate, compliant contractor.",
  },
];

const compare = {
  bond: {
    title: "Surety bond",
    points: [
      "A three-party guarantee (you, the obligee, the surety)",
      "Protects your customers and the public",
      "Required by the CSLB to hold a license",
      "If a claim is paid, you reimburse the surety",
    ],
  },
  insurance: {
    title: "Insurance",
    points: [
      "A two-party contract (you and the insurer)",
      "Protects your own business against covered losses",
      "General liability + workers' comp are the common policies",
      "The insurer absorbs covered claims, up to your limits",
    ],
  },
};

const triad = [
  {
    icon: BadgeCheck,
    word: "Licensed",
    body: "You hold an active CSLB license for your trade. It is the legal baseline to contract in California.",
  },
  {
    icon: ShieldCheck,
    word: "Bonded",
    body: `You carry the required ${usd(facts.licenseBondAmount)} contractor license bond, which protects your customers.`,
  },
  {
    icon: Umbrella,
    word: "Insured",
    body: "You carry liability coverage, and workers' compensation if you have employees, to protect your own business.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bonded vs. Insured: What Licensed, Bonded & Insured Means",
            description:
              "The difference between a surety bond and insurance for California contractors.",
            author: { "@id": `${site.url}/about#michael-melshenker` },
            publisher: { "@id": `${site.url}/#organization` },
            datePublished: REGULATORY_REVIEWED.iso,
            dateModified: REGULATORY_REVIEWED.iso,
            mainEntityOfPage: `${site.url}/bonding-vs-insurance`,
          },
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Bonding vs Insurance", url: "/bonding-vs-insurance" },
          ]),
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
                Bonding vs Insurance
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow>Contractor guide</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              Bonded vs. insured, and what &quot;licensed, bonded &amp; insured&quot; really means.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              They sound similar and get used together, but a surety bond and insurance do opposite
              jobs. Here is the plain-English difference, and why most California contractors need
              both.
            </p>
          </div>
          <ReviewedBy className="mt-10 max-w-2xl" />
        </Container>
      </section>

      {/* Core comparison */}
      <section className="py-16">
        <Container size="wide">
          <TldrCard
            className="mb-10 max-w-3xl"
            text="The difference: a surety bond protects your customers and the public, while insurance protects your own business against covered losses. They do opposite jobs, so most California contractors need both. Bonded is not insured: the contractor license bond covers your clients, not you."
          />
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              One protects your customers. One protects you.
            </h2>
            <p className="mt-3 text-lg text-muted">
              That single distinction explains almost everything about bonds versus insurance.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal className="rounded-2xl border border-azure-200 bg-azure-50/60 p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-azure-500 text-white">
                  <ShieldCheck className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight text-navy-900">
                  {compare.bond.title}
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {compare.bond.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-navy-800">
                    <Check className="mt-0.5 size-4 shrink-0 text-azure-600" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="rounded-2xl border border-ink-200 bg-white p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-navy-900 text-white">
                  <Umbrella className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight text-navy-900">
                  {compare.insurance.title}
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {compare.insurance.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-ink-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-navy-600" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The triad */}
      <section className="bg-surface py-16">
        <Container size="wide">
          <Reveal className="max-w-2xl">
            <Eyebrow>The phrase, decoded</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Licensed, bonded &amp; insured
            </h2>
            <p className="mt-3 text-lg text-muted">
              Three separate things a legitimate California contractor carries.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {triad.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal as="div" key={t.word} delay={i * 70} className="rounded-2xl border border-ink-200 bg-white p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-azure-50 text-azure-600">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-navy-900">
                    {t.word}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{t.body}</p>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contractor-license-bond">
              Get bonded
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href="/insurance/contractor-general-liability" variant="outline">
              Get connected for insurance
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              Bonded vs insured FAQs
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
