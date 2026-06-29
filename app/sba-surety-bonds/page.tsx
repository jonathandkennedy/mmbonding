import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  Sprout,
  Users,
  Landmark,
  TrendingUp,
  ShieldCheck,
  Check,
  Building2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { Slashes } from "@/components/slashes";
import { Faq } from "@/components/faq";
import { ReviewedBy } from "@/components/reviewed-by";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { sba } from "@/lib/regulatory";
import { hreflangFor } from "@/lib/i18n";
import { usd } from "@/lib/utils";

const limitM = `$${sba.contractLimit / 1_000_000}M`;
const federalM = `$${sba.federalContractLimit / 1_000_000}M`;

export const metadata: Metadata = {
  title: "SBA Surety Bonds for Small & Growing Contractors",
  description: `The SBA Surety Bond Guarantee program backs bid, performance, and payment bonds up to ${usd(sba.contractLimit)} per contract for small and credit-challenged contractors. Hard-to-place specialists, CA DOI #${site.doiLicense}.`,
  alternates: {
    canonical: "/sba-surety-bonds",
    languages: hreflangFor("/sba-surety-bonds", "/es/fianzas-sba"),
  },
};

// TODO (Michael): confirm MM's participation status in the SBA Surety Bond
// Guarantee program (SBA-authorized agent/surety relationship) so we can state
// it explicitly. Copy below is framed as "we help you access the program."

const whoFor = [
  { icon: Sprout, title: "New contractors", body: "No bonding track record yet? The SBA program is designed to get you started." },
  { icon: TrendingUp, title: "Growing firms", body: "Bidding bigger than your current line supports? The guarantee builds capacity." },
  { icon: ShieldCheck, title: "Credit-challenged", body: "Declined by standard surety markets for credit? The SBA backing changes the math." },
  { icon: Users, title: "Disadvantaged & veteran firms", body: "8(a), HUBZone, SDB, and veteran-owned businesses get the higher 90% guarantee." },
  { icon: Building2, title: "Subcontractors moving up", body: "Stepping into prime contracts that require bonds for the first time." },
  { icon: Landmark, title: "Public-works bidders", body: "Pursuing government work, up to $14M on federal contracts with certification." },
];

const numbers = [
  { label: "Per-contract limit", value: usd(sba.contractLimit), note: "Any project, bid / performance / payment" },
  { label: "Federal contract limit", value: usd(sba.federalContractLimit), note: "With contracting-officer certification" },
  {
    label: "SBA guarantee",
    value: `${sba.guaranteeLowPct}% to ${sba.guaranteeHighPct}%`,
    note: `90% up to ${usd(sba.guaranteeHighThreshold)} and for disadvantaged, 8(a), HUBZone & veteran firms`,
  },
];

const steps = [
  { title: "Tell us about your business and the job", body: "Your trade, your history, and the contract you are chasing. No card or SSN to start." },
  { title: "We help prepare the SBA application", body: "We assemble what the program needs and position your file with a participating surety." },
  { title: "Your bond is issued", body: "With the SBA backing the surety, bonds that were out of reach become possible." },
];

const faqs = [
  {
    q: "What is the SBA Surety Bond Guarantee program?",
    a: `It is a federal program where the U.S. Small Business Administration guarantees ${sba.guaranteeLowPct}% to ${sba.guaranteeHighPct}% of a surety's loss on bonds for small businesses. That guarantee lowers the surety's risk, so it can issue bonds to small, new, and credit-challenged contractors who would not qualify for standard surety credit.`,
  },
  {
    q: "How large a contract can the SBA guarantee a bond for?",
    a: `Up to ${usd(sba.contractLimit)} per contract for any project, and up to ${usd(sba.federalContractLimit)} on federal contracts when the contracting officer certifies that the guarantee is needed. It covers bid, performance, payment, and ancillary bonds.`,
  },
  {
    q: "Who qualifies for SBA-backed bonds?",
    a: "Small businesses that meet the SBA size standards and cannot obtain bonding through standard markets. New contractors, credit-challenged firms, and socially or economically disadvantaged, 8(a), HUBZone, and veteran-owned businesses are common fits.",
  },
  {
    q: "Can I get an SBA bond as a new contractor or with bad credit?",
    a: "Often, yes. That is the point of the program, and it is squarely our specialty. The SBA backing expands access, but underwriting still applies and no honest broker promises guaranteed approval. We work your file to get it placed.",
  },
  {
    q: "How much does an SBA bond cost?",
    a: "Pricing is comparable to standard surety premiums, plus a modest SBA fee. The program is about access, not a discount. We quote your specific bond so you see the real number.",
  },
];

const crumbs = [
  { name: "Home", url: "/" },
  { name: "SBA Surety Bonds", url: "/sba-surety-bonds" },
];

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: "SBA Surety Bond Guarantee Assistance",
            description:
              "Help for small and credit-challenged California contractors accessing the SBA Surety Bond Guarantee program for bid, performance, and payment bonds.",
            url: "/sba-surety-bonds",
          }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* Hero: navy, differentiator */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Slashes size="lg" tone="white" className="pointer-events-none absolute right-10 top-16 opacity-20" />
        <Container size="wide" className="py-14 lg:py-20">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-navy-300">
              <li>
                <Link href="/" className="hover:text-azure-300">
                  Home
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-navy-400" aria-hidden="true" />
              <li className="font-medium text-white" aria-current="page">
                SBA Surety Bonds
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow tone="dark">SBA Surety Bond Guarantee Program</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              SBA surety bonds for small and{" "}
              <span className="italic text-azure-400">growing contractors.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-200">
              Cannot qualify for standard bonding yet? The SBA backs sureties so they can bond small,
              new, and credit-challenged contractors. It is built for exactly who we specialize in.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/get-a-quote?path=hard-to-place" variant="primary" size="lg">
                See if you qualify
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={site.phone.href} variant="white" size="lg" data-callrail="phone">
                <Phone className="size-4 text-azure-500" aria-hidden="true" />
                <span className="tabular">{site.phone.display}</span>
              </Button>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 lg:grid-cols-4">
            {[
              { v: `Up to ${limitM}`, l: "Per contract" },
              { v: `${federalM}`, l: "On federal contracts" },
              { v: `${sba.guaranteeLowPct}-${sba.guaranteeHighPct}%`, l: "SBA-backed guarantee" },
              { v: "Bid · Perf · Pay", l: "Bonds covered" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-extrabold tracking-tight text-white tabular sm:text-3xl">
                  {s.v}
                </div>
                <div className="mt-1 text-sm text-navy-300">{s.l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What it is */}
      <section className="py-16 lg:py-20">
        <Container size="wide" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <TldrCard
            className="mb-10 max-w-3xl lg:col-span-2"
            text={`The SBA Surety Bond Guarantee program backs sureties so small, new, and credit-challenged contractors can get bid, performance, and payment bonds. It covers contracts up to ${usd(sba.contractLimit)}, and up to ${usd(sba.federalContractLimit)} on federal work when the contracting officer certifies the need. Underwriting still applies.`}
          />
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              A federal backstop that gets small contractors bonded.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              The SBA Surety Bond Guarantee program is simple in principle. The SBA promises to cover{" "}
              <strong>
                {sba.guaranteeLowPct}% to {sba.guaranteeHighPct}%
              </strong>{" "}
              of a surety&apos;s loss if a bonded contractor defaults. That guarantee lowers the
              surety&apos;s risk enough that it can write bonds for contractors who would otherwise be
              declined, the small, the new, and the credit-challenged.
            </p>
            <p className="mt-4 text-muted">
              It covers bid, performance, payment, and ancillary bonds on contracts up to{" "}
              <strong>{usd(sba.contractLimit)}</strong>, and up to{" "}
              <strong>{usd(sba.federalContractLimit)}</strong> on federal work when the contracting
              officer certifies the need.
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl border border-ink-200 bg-surface p-7">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
              The numbers
            </h3>
            <dl className="mt-5 space-y-5">
              {numbers.map((n) => (
                <div key={n.label} className="border-b border-ink-200 pb-5 last:border-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-muted">{n.label}</dt>
                    <dd className="font-mono text-lg font-semibold text-navy-900 tabular">{n.value}</dd>
                  </div>
                  <p className="mt-1 text-xs text-muted">{n.note}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="bg-surface py-16 lg:py-20">
        <Container size="wide">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Who the SBA program is built for
            </h2>
            <p className="mt-3 text-lg text-muted">
              If a standard surety has turned you down, this is often the way in.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whoFor.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal as="div" key={w.title} delay={(i % 3) * 60} className="rounded-2xl border border-ink-200 bg-white p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-azure-50 text-azure-600">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-navy-900">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{w.body}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why MM + honesty */}
      <section className="py-16 lg:py-20">
        <Container size="wide" className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Why work with us</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Small and hard-to-place is our entire focus.
            </h2>
            <p className="mt-4 text-lg text-muted">
              The SBA program is one of the most powerful tools for getting a growing contractor
              bonded, and navigating it is exactly the kind of work we do every day. We help you
              assemble the application and place your bonds with participating surety markets.
            </p>
            <p className="mt-4 text-muted">
              We will be straight with you: the SBA backing expands access, but underwriting still
              applies and we never promise guaranteed approval. What we promise is real effort on a
              file other brokers will not take.
            </p>
            <div className="mt-7">
              <ReviewedBy />
            </div>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl bg-navy-900 p-8 text-white">
            <h3 className="font-display text-xl font-bold tracking-tight">How to start</h3>
            <ol className="mt-6 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-azure-500 font-mono text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-display font-bold tracking-tight">{s.title}</div>
                    <p className="mt-1 text-sm text-navy-200">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-6 text-sm text-navy-200">
              <Check className="size-4 text-success" aria-hidden="true" />
              No card or SSN to get started.
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              SBA bond FAQs
            </h2>
            <p className="mt-4 text-muted">
              Figures verified against SBA.gov. Reviewed by {site.founder.name}, {site.founder.title}.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container size="wide">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 px-7 py-12 text-center text-white sm:px-12">
            <Slashes tone="white" size="lg" className="pointer-events-none absolute left-8 top-8 opacity-20" />
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Think you can&apos;t get bonded? Let&apos;s find out.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-200">
              The SBA program has bonded thousands of contractors who heard no everywhere else. See if
              you are one of them.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/get-a-quote?path=hard-to-place" variant="primary" size="lg">
                See if you qualify
                <ArrowRight className="size-4" aria-hidden="true" />
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
