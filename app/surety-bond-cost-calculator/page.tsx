import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { Prose } from "@/components/prose";
import { Faq } from "@/components/faq";
import { BondCostCalculator } from "@/components/bond-cost-calculator";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { facts } from "@/lib/regulatory";
import { usd, clampDescription } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Surety Bond Cost Calculator",
  description:
    clampDescription("Estimate your surety bond premium in seconds. Pick a bond amount and your credit to see an estimated annual cost, then get your exact rate from a licensed California broker. CA DOI #6009105."),
  alternates: { canonical: "/surety-bond-cost-calculator" },
};

const faqs = [
  {
    q: "How much does a surety bond cost?",
    a: `You pay a premium, which is a percentage of the bond amount, not the bond's face value. For most license and commercial bonds it runs roughly ${facts.licensePremiumRange.lowPct}% to ${facts.licensePremiumRange.highPct}% a year, driven mostly by your credit. The calculator estimates that range for your amount.`,
  },
  {
    q: "Do I pay the full bond amount?",
    a: `No. A ${usd(facts.licenseBondAmount)} bond does not cost ${usd(facts.licenseBondAmount)}. You pay only the annual premium, a small percentage of it, which is what this tool estimates.`,
  },
  {
    q: "Why is the estimate a range, not one number?",
    a: "Because your exact rate depends on the specific bond, the surety market, and your full credit profile. As a broker we shop multiple markets to land you the best available rate, then give you a firm number.",
  },
  {
    q: "Can I get bonded with bad credit?",
    a: "Usually, yes. Credit raises the rate, not the eligibility. Hard-to-place is our specialty, and we shop the markets that write credit-challenged files. Underwriting still applies.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Surety Bond Cost Calculator", url: "/surety-bond-cost-calculator" },
          ]),
        ]}
      />

      <section className="border-b border-ink-100 bg-surface">
        <Container size="wide" className="py-12 lg:py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-azure-600">
                  Home
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />
              <li className="font-medium text-navy-800" aria-current="page">
                Cost Calculator
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-2xl">
            <Eyebrow>Cost calculator</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              What will your surety bond cost?
            </h1>
            <p className="mt-4 text-lg text-muted">
              Pick your bond amount and credit for an instant estimate of the annual premium. Then get
              your exact rate from a real broker.
            </p>
          </div>
          <div className="mt-8">
            <BondCostCalculator />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container size="wide" className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <TldrCard
            className="mb-10 max-w-3xl lg:col-span-2"
            text={`You never pay a bond's full face value. You pay a premium, a percentage of the bond amount driven mostly by your credit, typically about ${facts.licensePremiumRange.lowPct}% to ${facts.licensePremiumRange.highPct}% a year for license and commercial bonds. Estimate yours with the calculator above, then get an exact rate from a broker.`}
          />
          <Prose>
            <h2>How surety bond pricing works</h2>
            <p>
              The number you keep seeing, like <strong>{usd(facts.licenseBondAmount)}</strong> for the
              contractor license bond, is the bond&apos;s face amount, the maximum a valid claim could
              pay. You never pay that. You pay an annual <strong>premium</strong>, a percentage of the
              face amount set by underwriting.
            </p>
            <p>
              Credit is the biggest lever. Strong credit earns the lowest rates; tougher credit costs
              more but is still very placeable. Because we are a broker, we shop several surety markets
              and quote the most competitive rate you qualify for, instead of a single take-it-or-leave-it
              number.
            </p>
            <h3>Want the details by bond?</h3>
            <p>
              See the full breakdown on the{" "}
              <Link href="/resources/contractor-license-bond-cost">contractor license bond cost</Link>{" "}
              guide, or read about{" "}
              <Link href="/resources/surety-bonds-with-bad-credit">surety bonds with bad credit</Link>.
              Ready now? <Link href="/get-a-quote">Get a quote</Link>.
            </p>
          </Prose>
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
