import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { Prose, Bullet } from "@/components/prose";
import { Faq } from "@/components/faq";
import { ReviewedBy } from "@/components/reviewed-by";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

export const metadata: Metadata = {
  title: "No-Credit-Check Contractor Bond",
  description:
    "How no-credit-check contractor bonds actually work in California, where the limits are, and how a broker places bad-credit files honestly. CA DOI #6009105.",
  alternates: { canonical: "/hard-to-place-surety-bonds/no-credit-check-contractor-bond" },
};

const faqs = [
  {
    q: "Is there really a no-credit-check contractor bond?",
    a: `For the standard ${usd(facts.licenseBondAmount)} contractor license bond, some markets will write smaller, standard bonds without a hard credit pull, often at a flat rate. The trade-off is that the rate is set for the risk rather than discounted for great credit.`,
  },
  {
    q: "Does no-credit-check mean guaranteed approval?",
    a: "No. It means credit is not the gating factor for that particular program. Other underwriting still applies. Anyone promising guaranteed approval on any surety bond is overselling.",
  },
  {
    q: "Is a no-credit-check bond more expensive?",
    a: "Usually it is priced for the risk, so it can cost more than a great-credit rate but less than the stress of being declined. As your credit improves, we can re-shop for a better rate.",
  },
];

const crumbs = [
  { name: "Home", url: "/" },
  { name: "Hard-to-Place", url: "/hard-to-place-surety-bonds" },
  { name: "No-Credit-Check Bond", url: "/hard-to-place-surety-bonds/no-credit-check-contractor-bond" },
];

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: "No-Credit-Check Contractor Bond",
            description:
              "No-credit-check and bad-credit contractor license bond options in California, placed by a licensed broker.",
            url: "/hard-to-place-surety-bonds/no-credit-check-contractor-bond",
          }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

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
                <Link href="/hard-to-place-surety-bonds" className="hover:text-azure-600">
                  Hard-to-Place
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />
              <li className="font-medium text-navy-800" aria-current="page">
                No-Credit-Check Bond
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow>Hard-to-place guide</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              No-Credit-Check Contractor Bonds, Explained Honestly
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              What no-credit-check really means, where it applies, and how we place bad-credit files
              without overpromising.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/get-a-quote?path=hard-to-place" size="lg">
                Quote my bond
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

      <section className="py-16">
        <Container size="wide">
          <Prose>
            <h2>What &quot;no credit check&quot; actually means</h2>
            <p>
              For the standard <Link href="/contractor-license-bond">{usd(facts.licenseBondAmount)}{" "}
              contractor license bond</Link>, certain markets will issue the bond without a hard
              credit pull, often at a flat published rate. It is real, but it is narrower than the ads
              suggest. It means <strong>credit is not the deciding factor</strong> for that specific
              program, not that there is no underwriting at all.
            </p>

            <h2>Where it fits, and where it does not</h2>
            <ul>
              <li>
                <Bullet />
                <span>
                  Best for smaller, standard license and permit bonds where flat-rate programs exist.
                </span>
              </li>
              <li>
                <Bullet />
                <span>
                  Less available on large{" "}
                  <Link href="/contract-bonds">contract bonds</Link>, which are underwritten on
                  financials and capacity, not a flat rate.
                </span>
              </li>
              <li>
                <Bullet />
                <span>Pricing is set for the risk, so expect a higher rate than top-tier credit.</span>
              </li>
            </ul>

            <h2>How we place a bad-credit file</h2>
            <p>
              Whether or not a true no-credit-check program fits, our job is the same: shop the markets
              that write credit-challenged contractors and find you the best available placement. We
              are straight about the rate and the path to improving it. We never promise guaranteed
              approval, because no honest broker can.
            </p>
          </Prose>
        </Container>
      </section>

      <section className="bg-surface py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              No-credit-check FAQs
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
