import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Info, Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { LicenseSchoolReferralForm } from "@/components/license-school-referral-form";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { facts } from "@/lib/regulatory";
import { site } from "@/lib/site";
import { usd } from "@/lib/utils";

export const metadata: Metadata = {
  title: "California Contractor License School & Exam Prep",
  description: `Get your CSLB contractor license. We connect you with a trusted license-school and exam-prep partner, and the ${usd(facts.licenseBondAmount)} contractor license bond you will need once you are licensed.`,
  alternates: { canonical: "/contractor-license-school" },
};

const faqs = [
  {
    q: "How do I get a contractor license in California?",
    a: "In general, you qualify with the required journey-level experience in your trade, pass the Law and Business exam plus your trade exam, and submit your application to the CSLB. Specifics depend on your classification, so confirm the current requirements with the CSLB.",
  },
  {
    q: "Do I need a license school?",
    a: "No, a school is not required. But structured exam prep helps many applicants pass the Law and Business and trade exams the first time. We connect you with a trusted exam-prep partner so you can decide what fits you.",
  },
  {
    q: "How long does it take?",
    a: "It depends on your experience, how quickly you prepare, and CSLB scheduling and processing. We will not promise a specific timeline. Your prep partner can give you a realistic plan based on your situation.",
  },
  {
    q: "Do I need a bond once I'm licensed?",
    a: `Yes. Every licensed California contractor must carry the ${usd(facts.licenseBondAmount)} contractor license bond. We handle that part directly, see the contractor license bond for details.`,
  },
];

export default function Page() {
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Contractor License School", url: "/contractor-license-school" },
  ];

  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: "Contractor License School Referral",
            description:
              "We connect aspiring California contractors with a trusted license-school and exam-prep partner, and provide the contractor license bond you need once you are licensed.",
            url: "/contractor-license-school",
          }),
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
              <li className="font-medium text-navy-800" aria-current="page">
                Contractor License School
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow>License &amp; exam prep</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              Get your California contractor license.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Ready to get licensed by the CSLB? We connect you with a trusted contractor-license
              school and exam-prep partner, then handle the bond you will need once you pass. One
              path, two steps done right.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={site.phone.href} variant="outline" size="lg" data-callrail="phone">
                <Phone className="size-4 text-azure-500" aria-hidden="true" />
                <span className="tabular">{site.phone.display}</span>
              </Button>
              <Button href="/contractor-license-bond" variant="primary" size="lg">
                See the license bond you&apos;ll need
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Body + form */}
      <section className="py-16">
        <Container size="wide" className="grid gap-12 lg:grid-cols-[1fr_24rem]">
          <TldrCard
            className="mb-10 max-w-3xl lg:col-span-2"
            text={`To get a California contractor license, you document the required trade experience, pass the Law and Business exam plus your trade exam, and submit your application to the CSLB. We connect you with a trusted exam-prep partner, then handle the ${usd(facts.licenseBondAmount)} contractor license bond you will need once you pass.`}
          />
          <div className="max-w-[64ch]">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
                The path to a CSLB license
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700">
                Most applicants follow the same general path. You document the required experience in
                your trade, generally about four years of journey-level work. You pass the Law and
                Business exam plus the trade exam for your classification. Then you submit your
                application to the Contractors State License Board, post your bond, and meet the
                board&apos;s other requirements before your license issues.
              </p>
              <p className="mt-4 leading-relaxed text-ink-700">
                The exact experience, classifications, fees, and forms vary by situation and change
                over time. Confirm the current requirements with the CSLB before you apply, so you
                are working from the rules in effect today.
              </p>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
                Why a school helps
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700">
                The Law and Business and trade exams are the step that trips up the most people. A
                good exam-prep course teaches the material the way the test asks it, which helps many
                applicants pass the first time instead of re-testing. A school is not required, but
                structured prep is one of the simplest ways to keep your timeline short.
              </p>
              <p className="mt-4 leading-relaxed text-ink-700">
                We connect you with a trusted partner so you can get a plan that fits your trade and
                your schedule. You decide whether it is right for you.
              </p>
            </Reveal>

            <Reveal className="mt-8 flex items-start gap-3 rounded-2xl border border-ink-200 bg-surface p-5 text-sm leading-relaxed text-muted">
              <Info className="mt-0.5 size-5 shrink-0 text-azure-500" aria-hidden="true" />
              <p>
                MM Bonding &amp; Insurance Services connects you with a trusted contractor-license
                school and exam-prep partner. We are not the school, and we may receive a referral
                fee. There is no cost to you to be connected.
              </p>
            </Reveal>

            <Reveal className="mt-8">
              <h2 className="font-display text-xl font-extrabold tracking-tight text-navy-900">
                Already licensed, or almost?
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Once you pass, every California contractor must carry the{" "}
                <Link
                  href="/contractor-license-bond"
                  className="font-medium text-azure-600 underline underline-offset-2 hover:text-azure-700"
                >
                  {usd(facts.licenseBondAmount)} contractor license bond
                </Link>
                . We place it fast, even with tough credit. New to how bonds work? Read{" "}
                <Link
                  href="/resources/how-to-get-a-contractor-license-bond"
                  className="font-medium text-azure-600 underline underline-offset-2 hover:text-azure-700"
                >
                  how to get a contractor license bond
                </Link>
                .
              </p>
            </Reveal>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <LicenseSchoolReferralForm />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              License school FAQs
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container size="wide">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 px-7 py-10 text-white sm:flex-row sm:px-10">
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight">
                Ready to get licensed?
              </h2>
              <p className="mt-1 text-navy-200">
                We connect you with a trusted exam-prep partner, then handle your bond once you pass.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href="#top" variant="primary" size="lg">
                Connect me with a school
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
