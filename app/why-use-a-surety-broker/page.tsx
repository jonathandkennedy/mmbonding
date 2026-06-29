import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Phone,
  Check,
  X,
  SearchCheck,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { ReviewedBy } from "@/components/reviewed-by";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { REGULATORY_REVIEWED } from "@/lib/regulatory";

export const metadata: Metadata = {
  title: "Why Use a Surety Broker?",
  description:
    "A surety broker vs. an instant-issue bond site for California contractors. A broker shops multiple markets for the best placement, including hard-to-place credit and claims. Licensed CA DOI #" +
    site.doiLicense +
    ".",
  alternates: { canonical: "/why-use-a-surety-broker" },
};

const faqs = [
  {
    q: "Is a surety broker more expensive?",
    a: "No. We shop multiple surety markets for your best rate, and that competition often finds a lower premium than a single instant-issue program. The bond costs what underwriting says it costs based on your file; a broker does not add a separate fee for placing it. You get more markets working for you, not a higher price.",
  },
  {
    q: "What is the difference between a broker and a surety company?",
    a: "A surety company underwrites and issues the bond and stands behind the guarantee. A broker represents you, not one carrier, and shops your file across many surety markets to find the one that fits. An instant-issue site is usually tied to a single program, so you get one answer. A broker gets you the whole market.",
  },
  {
    q: "Why do California contractors use a broker?",
    a: "California has the largest licensee market in the country and a wide range of bonds, from the contractor license bond to contract and commercial bonds. A broker handles all of them in one relationship, builds bonding capacity as you take on bigger jobs, and knows which markets accept tougher credit, prior claims, or disciplinary history.",
  },
  {
    q: "Can a broker help if I was declined online?",
    a: "Often, yes. An instant-issue site declines when its one program says no. A broker takes that same file to other markets, including ones built for credit challenges, prior losses, new businesses, and high-risk classes. Underwriting still applies and we never promise guaranteed approval, but a declined application is where a broker earns its place.",
  },
];

const brokerWins = [
  "Shops multiple surety markets for your best placement",
  "Places bad credit, prior claims, and new businesses",
  "Builds bonding capacity for bigger contracts",
  "A real person who answers when the deadline is tomorrow",
  "One relationship for license, contract, and commercial bonds",
];

const instantLoses = [
  "One program, one algorithm, one yes-or-no",
  "Auto-declines tough credit at the door",
  "No capacity strategy for bigger contracts",
  "A form, a wait, and nobody to call",
];

const fitsInstant = [
  "Small, standard bonds with no complications",
  "Strong personal credit and a clean history",
  "A common bond type the program already prices",
  "No deadline pressure if it comes back declined",
];

const failsInstant = [
  "Bad credit or a past bankruptcy",
  "Prior claims or surety losses on your record",
  "A brand-new business with no track record",
  "Larger contract bonds that need real capacity",
  "Disciplinary history with the CSLB",
];

const brokerDoes = [
  {
    icon: SearchCheck,
    title: "Shops the market",
    body: "We take your file to multiple top-rated surety markets and bring back the best fit, instead of accepting the one answer a single program returns.",
  },
  {
    icon: TrendingUp,
    title: "Builds your program",
    body: "We structure your bonding so capacity grows as your jobs grow, so the next bigger contract has the backing it needs before you bid it.",
  },
  {
    icon: Wrench,
    title: "Handles the hard cases",
    body: "Bad credit, prior claims, new businesses, disciplinary history. We know which markets accept them and we work the file until it places.",
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
            headline: "Why Use a Surety Broker?",
            description:
              "A surety broker vs. an instant-issue bond site for California contractors, and why a broker gets the best placement on hard-to-place cases.",
            author: { "@id": `${site.url}/about#michael-melshenker` },
            publisher: { "@id": `${site.url}/#organization` },
            datePublished: REGULATORY_REVIEWED.iso,
            dateModified: REGULATORY_REVIEWED.iso,
            mainEntityOfPage: `${site.url}/why-use-a-surety-broker`,
          },
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Why Use a Surety Broker", url: "/why-use-a-surety-broker" },
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
                Why Use a Surety Broker
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow>Broker vs. instant-issue</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              Why use a surety broker instead of an instant-issue site?
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Instant-issue bond sites are fast right up until your file is not perfect. Then they
              decline and move on. A surety broker shops the whole market for you, places the tough
              cases, and is still there when a deadline is tomorrow. We are a licensed California
              broker, CA DOI #{site.doiLicense}, and here is the honest difference.
            </p>
          </div>
          <ReviewedBy className="mt-10 max-w-2xl" />
        </Container>
      </section>

      {/* Core comparison */}
      <section className="py-16">
        <Container size="wide" className="grid items-center gap-12 lg:grid-cols-2">
          <TldrCard
            className="mb-10 max-w-3xl lg:col-span-2"
            text="Use a broker because we shop multiple surety markets for your best placement, place tough credit and prior claims, and build bonding capacity for bigger contracts. An instant-issue site runs one program and declines anything outside it. Underwriting still applies; we never promise guaranteed approval."
          />
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              A broker works for you. A site works one program.
            </h2>
            <p className="mt-4 text-lg text-muted">
              An instant-issue site issues from a single program with one set of rules. A broker
              represents you and takes your file to many surety markets, then keeps working it when
              the easy answer is no. That is the whole difference, and it matters most exactly when
              you need the bond most.
            </p>
            <p className="mt-4 text-muted">
              If you have already been turned down online, that is not the end of the road. See how
              we place{" "}
              <Link
                href="/hard-to-place-surety-bonds"
                className="font-semibold text-azure-700 underline-offset-2 hover:underline"
              >
                hard-to-place surety bonds
              </Link>
              .
            </p>
            <div className="mt-7">
              <Button href="/get-a-quote" variant="navy">
                Get a Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={80} className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-azure-200 bg-azure-50/60 p-5">
              <div className="font-display text-sm font-bold uppercase tracking-wider text-azure-700">
                Surety broker
              </div>
              <ul className="mt-4 space-y-3">
                {brokerWins.map((w) => (
                  <li key={w} className="flex gap-2.5 text-sm text-navy-800">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-ink-200 bg-white p-5">
              <div className="font-display text-sm font-bold uppercase tracking-wider text-ink-500">
                Instant-issue site
              </div>
              <ul className="mt-4 space-y-3">
                {instantLoses.map((w) => (
                  <li key={w} className="flex gap-2.5 text-sm text-muted">
                    <X className="mt-0.5 size-4 shrink-0 text-ink-400" aria-hidden="true" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Honest: when each one works */}
      <section className="bg-surface py-16">
        <Container size="wide">
          <Reveal className="max-w-2xl">
            <Eyebrow>The honest version</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              When a site is fine, and when it is not.
            </h2>
            <p className="mt-3 text-lg text-muted">
              We will not pretend every bond needs a broker. Some are simple. The trouble is that the
              cases that need real help are exactly the ones a site cannot do.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal className="rounded-2xl border border-ink-200 bg-white p-7">
              <h3 className="font-display text-xl font-bold tracking-tight text-navy-900">
                When an instant-issue site is fine
              </h3>
              <p className="mt-2 text-sm text-muted">
                Small, standard, and clean. If everything below is true, a site will likely issue
                fast and that is a fine outcome.
              </p>
              <ul className="mt-5 space-y-3">
                {fitsInstant.map((p) => (
                  <li key={p} className="flex gap-2.5 text-navy-800">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="rounded-2xl border border-navy-200 bg-white p-7">
              <h3 className="font-display text-xl font-bold tracking-tight text-navy-900">
                When it fails you
              </h3>
              <p className="mt-2 text-sm text-muted">
                The moment your file has a wrinkle, a single program runs out of road. These are the
                cases we place every day.
              </p>
              <ul className="mt-5 space-y-3">
                {failsInstant.map((p) => (
                  <li key={p} className="flex gap-2.5 text-navy-800">
                    <X className="mt-0.5 size-4 shrink-0 text-ink-400" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="mt-8">
            <p className="text-muted">
              If any of those describe you, do not waste a deadline on a form that will decline.
              Bring it to a broker who places{" "}
              <Link
                href="/hard-to-place-surety-bonds"
                className="font-semibold text-azure-700 underline-offset-2 hover:underline"
              >
                hard-to-place surety bonds
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* What a broker actually does */}
      <section className="py-16">
        <Container size="wide">
          <Reveal className="max-w-2xl">
            <Eyebrow>What a broker actually does</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Three things a form cannot do for you.
            </h2>
            <p className="mt-3 text-lg text-muted">
              This is the work behind the bond, the part a single algorithm skips.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {brokerDoes.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal
                  as="div"
                  key={c.title}
                  delay={i * 70}
                  className="rounded-2xl border border-ink-200 bg-white p-6"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-azure-50 text-azure-600">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-navy-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{c.body}</p>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contractor-license-bond">
              Get the license bond
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href="/contract-bonds" variant="outline">
              Build contract bond capacity
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              Surety broker FAQs
            </h2>
            <p className="mt-4 text-muted">
              Straight answers from a licensed California broker, reviewed by {site.founder.name}.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="pb-4 pt-16">
        <Container size="wide">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-navy-900 to-navy-800 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              Put the whole market on your file.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-200">
              Start a quote in two minutes, or call and talk to a real broker today. Tough cases
              welcome.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/get-a-quote" variant="primary" size="lg">
                Get a Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={site.phone.href} variant="white" size="lg" data-callrail="phone">
                <Phone className="size-4 text-azure-500" aria-hidden="true" />
                <span className="tabular">{site.phone.display}</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
