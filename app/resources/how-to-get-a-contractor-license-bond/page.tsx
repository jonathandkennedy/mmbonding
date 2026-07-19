import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";
import { facts } from "@/lib/regulatory";
import { usd, clampDescription } from "@/lib/utils";

const guide = getGuide("how-to-get-a-contractor-license-bond")!;

export const metadata: Metadata = {
  title: guide.title,
  description: clampDescription(`How to get a California contractor license bond, step by step: quote, pay the premium, and your surety e-files the ${usd(facts.licenseBondAmount)} bond with the CSLB. Often same-day. Reviewed by a licensed broker.`),
  alternates: { canonical: `/resources/${guide.slug}` },
  openGraph: {
    images: [
      {
        url: `/images/guides/${guide.slug}-hero.webp`,
        width: 1200,
        height: 675,
        alt: `Illustration for ${guide.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`/images/guides/${guide.slug}-hero.webp`],
  },
};

const faqs = [
  {
    q: "How long does it take to get bonded?",
    a: `Often the same business day. Once you accept a quote and pay, your surety e-files with the CSLB, and filings typically post within ${facts.filingWindow}.`,
  },
  {
    q: "What do I need to apply?",
    a: "Very little to start: your name, business details, and your CSLB license or application number if you have one. No payment or SSN is needed just to get a quote.",
  },
  {
    q: "Do I need good credit to get bonded?",
    a: "No. Good credit gets you the best rate, but the license bond is one of the most placeable bonds even with credit challenges. A broker shops markets so a tough file still gets placed.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`To get a California contractor license bond: request a quote, accept it, pay the annual premium, and your surety e-files the ${usd(facts.licenseBondAmount)} bond with the CSLB on Form ${facts.licenseBondForm}. Filings typically post within ${facts.filingWindow}, so most qualifying applicants finish the same business day. Good credit is not required to qualify.`}
      intro="Getting bonded for your CSLB license is faster than most contractors expect. Here is the whole process, and how to do it the same day."
      faqs={faqs}
      related={[
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "What it costs", href: "/resources/contractor-license-bond-cost" },
        { label: "Fast & same-day bonds", href: "/fast-surety-bonds" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Getting bonded by the numbers"
        items={pickStats([
          "caLicenseBond",
          "filingWindow",
          "caContractors",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>The short version</h2>
        <p>
          Get a quote, accept it, pay the premium, and your surety electronically files the{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong> bond with the CSLB on{" "}
          <strong>Form {facts.licenseBondForm}</strong>. Most qualifying applicants are done the same
          business day.
        </p>

        <h2>Step by step</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>1. Request a quote.</strong> Tell us the bond type, your CSLB license or
              application number, and a little about your situation. No card or SSN required to quote.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>2. Review your rate.</strong> We shop multiple markets and bring back the best
              premium you qualify for. Tough credit? We work the hard-to-place markets too.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>3. Accept and pay the premium.</strong> You pay the annual premium, not the{" "}
              {usd(facts.licenseBondAmount)} face amount.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>4. We e-file with the CSLB.</strong> Your surety files the bond electronically;
              it typically posts within {facts.filingWindow}.
            </span>
          </li>
        </ul>

        <h2>New, renewing, or reactivating</h2>
        <p>
          The process is the same whether you are getting a brand-new license, renewing, or{" "}
          <Link href="/resources/reactivate-cslb-license">reactivating an inactive license</Link>. If
          you are licensed as an LLC, you will also need the{" "}
          <Link href="/llc-employee-worker-bond">{usd(facts.llcWorkerBondAmount)} employee/worker bond</Link>.
        </p>

        <h2>Ready when you are</h2>
        <p>
          Start with a <Link href="/get-a-quote">quote</Link>, or read the full{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link> page for the details on
          what the bond covers.
        </p>
      </Prose>
    </GuidePage>
  );
}
