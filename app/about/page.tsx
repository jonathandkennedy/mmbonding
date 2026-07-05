import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Linkedin, BadgeCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { Slashes } from "@/components/slashes";
import { Prose, Bullet } from "@/components/prose";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, personSchema, organizationSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { facts } from "@/lib/regulatory";

export const metadata: Metadata = {
  title: "About MM Bonding",
  description: `MM Bonding & Insurance Services is a licensed California surety broker (CA DOI #${site.doiLicense}), led by Michael Melshenker. We place the bonds the robots decline.`,
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          { "@context": "https://schema.org", "@type": "AboutPage", url: `${site.url}/about` },
          personSchema(),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-ink-100 bg-surface">
        <Container size="wide" className="py-14 lg:py-20">
          <div className="max-w-3xl">
            <Eyebrow>About us</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
              The broker that places the bonds the robots decline.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {site.name} is a California-focused surety broker. When you qualify, we issue fast. When
              you don&apos;t, a real, licensed underwriter shops multiple markets until it is done.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="py-16 lg:py-20">
        <Container size="wide" className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <TldrCard
            className="mb-10 max-w-3xl lg:col-span-2"
            text={`MM Bonding is a licensed California surety broker (CA DOI #${site.doiLicense}), led by Michael Melshenker. We represent you, not one carrier, shopping multiple top-rated markets to place hard-to-place bonds: bad credit, prior claims, new businesses, and high-risk classes. No guaranteed approval; underwriting always applies.`}
          />
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-8 text-white lg:sticky lg:top-24">
              <Slashes tone="white" size="lg" className="absolute right-6 top-6 opacity-20" />
              <Image
                src="/images/team/michael-melshenker.webp"
                alt={`${site.founder.name}, ${site.founder.title} of ${site.shortName}`}
                width={172}
                height={172}
                priority
                className="size-20 rounded-2xl object-cover ring-1 ring-white/20"
              />
              <h2 className="mt-6 font-display text-2xl font-extrabold tracking-tight">
                {site.founder.name}
              </h2>
              <p className="text-azure-300">
                {site.founder.title}, {site.shortName}
              </p>
              <dl className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-navy-300">CA DOI License</dt>
                  <dd className="inline-flex items-center gap-1.5 font-mono font-semibold text-white">
                    <BadgeCheck className="size-4 text-success" aria-hidden="true" />#{site.doiLicense}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-navy-300">Founded</dt>
                  <dd className="font-semibold text-white">{site.founded}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-navy-300">Focus</dt>
                  <dd className="font-semibold text-white">Hard-to-place surety</dd>
                </div>
              </dl>
              <a
                href={site.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Linkedin className="size-4 text-azure-300" aria-hidden="true" />
                View profile on LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Prose>
              <h2>A named expert, not an anonymous form</h2>
              <p>
                Most surety websites are faceless. Ours is not. {site.founder.name} personally leads
                {" "}
                {site.shortName} and works the hard-to-place files himself. The license number is
                public and verifiable, and the guidance on every bond page is reviewed and dated by
                him.
              </p>

              <h2>Why a broker beats a vending machine</h2>
              <p>
                Instant-issue sites run one program and decline anything outside it. As a licensed
                broker, we represent <strong>you</strong>, not a single carrier. That means:
              </p>
              <ul>
                <li>
                  <Bullet />
                  <span>We shop multiple top-rated surety markets for the best placement.</span>
                </li>
                <li>
                  <Bullet />
                  <span>We place bad credit, prior claims, new businesses, and high-risk classes.</span>
                </li>
                <li>
                  <Bullet />
                  <span>We build and grow bonding capacity for contractors chasing bigger work.</span>
                </li>
                <li>
                  <Bullet />
                  <span>We answer the phone when a bid deadline is tomorrow morning.</span>
                </li>
              </ul>

              <h2>Built for California contractors</h2>
              <p>
                California has roughly {facts.caActiveLicensees.toLocaleString()} active contractor
                licensees, the largest market in the country. We focus on the bonds those contractors
                actually need: the{" "}
                <a href="/contractor-license-bond">{`$${facts.licenseBondAmount.toLocaleString()}`} license bond</a>,
                {" "}
                <a href="/contract-bonds">contract bonds</a>, and the supporting bonds that come with
                LLCs, qualifiers, and reinstatements.
              </p>

              <h2>Honest by design</h2>
              <p>
                We never promise guaranteed approval, because surety always involves underwriting.
                What we promise is straight answers, real effort across the market, and a person whose
                name and license are on the line with yours.
              </p>
            </Prose>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/get-a-quote">
                Get a Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={site.phone.href} variant="outline" data-callrail="phone">
                <Phone className="size-4 text-azure-500" aria-hidden="true" />
                <span className="tabular">{site.phone.display}</span>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Markets we place with */}
      <section className="border-t border-ink-100 bg-surface py-16">
        <Container size="wide">
          <Reveal className="max-w-2xl">
            <Eyebrow>Markets we place with</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Direct appointments with A-rated sureties.
            </h2>
            <p className="mt-3 text-lg text-muted">
              We hold direct appointments with established, A-rated surety companies, so we shop your
              bond across strong markets instead of running a single program.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.carriers.map((c) => (
              <div
                key={c}
                className="flex items-center gap-3 rounded-2xl border border-ink-200 bg-white p-5"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-azure-50 text-azure-600">
                  <BadgeCheck className="size-5" aria-hidden="true" />
                </span>
                <span className="font-display font-bold tracking-tight text-navy-900">{c}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm text-muted">
            Financial-strength ratings are set by the rating agencies and can change. We confirm the
            right market for your specific bond at quote.
          </p>
        </Container>
      </section>
    </>
  );
}
