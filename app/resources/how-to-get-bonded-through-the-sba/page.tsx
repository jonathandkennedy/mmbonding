import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-to-get-bonded-through-the-sba")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "The steps to get an SBA-backed bid, performance, or payment bond: confirm you qualify, gather your file, and let a broker place it with a participating surety.",
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
    q: "How do I apply for an SBA bond?",
    a: "You do not apply to the SBA directly. You work with a broker or agent who prepares the SBA guarantee application and places your bond with a participating surety. We assemble the file and position it for you.",
  },
  {
    q: "What documents do I need?",
    a: "Business and personal financial statements, a work-in-progress schedule if you have open jobs, a resume of your experience, and the details of the contract you are bonding. The stronger and cleaner the file, the faster it moves.",
  },
  {
    q: "How long does it take to get an SBA bond?",
    a: "With a complete file, a modest bond can move in days. A first-time program takes a bit longer while your capacity is established. Having current financials ready is the single biggest way to speed it up.",
  },
  {
    q: "How much does an SBA bond cost?",
    a: "Pricing is comparable to standard surety premiums, a percentage of the contract, plus a modest SBA fee. The program is about access, not a discount. See our performance bond cost guide for the ranges.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="To get bonded through the SBA: confirm you qualify (a small business that cannot get standard bonding), gather your financials, work-in-progress, experience, and the contract, then let a broker prepare the SBA guarantee application and place the bond with a participating surety. You do not apply to the SBA yourself. Underwriting still applies."
      intro="Getting an SBA-backed bond is a guided process, and most of the work is preparation. Here are the steps to get a bid, performance, or payment bond through the SBA program, and what your file needs."
      faqs={faqs}
      related={[
        { label: "SBA Surety Bonds", href: "/sba-surety-bonds" },
        { label: "SBA eligibility", href: "/resources/sba-surety-bond-eligibility" },
        { label: "How to get a performance bond", href: "/resources/how-to-get-a-performance-bond" },
        { label: "Get a Quote", href: "/get-a-quote?path=hard-to-place" },
      ]}
    >
      <StatGrid
        heading="Getting an SBA bond by the numbers"
        items={pickStats([
          "sbaContractLimit",
          "sbaGuarantee",
          "caContractors",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>Step 1: Confirm you qualify</h2>
        <p>
          The program is for a <strong>small business</strong> that meets SBA size standards and
          cannot get bonding through standard markets. New contractors, credit-challenged firms, and
          disadvantaged, 8(a), HUBZone, and veteran-owned businesses are common fits. Not sure? Our{" "}
          <Link href="/resources/sba-surety-bond-eligibility">SBA eligibility</Link> guide walks
          through it.
        </p>

        <h2>Step 2: Gather your file</h2>
        <p>
          Most of the outcome is decided by how well your file is prepared. Have these ready:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Financial statements,</strong> business and personal. Balance sheet, income
              statement, and a personal financial statement for the owners.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Work-in-progress schedule,</strong> if you have open jobs, showing billings and
              cost to complete.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Resume of experience,</strong> the similar jobs you have completed.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The contract,</strong> the specific job you are bonding, with its scope and
              amount.
            </span>
          </li>
        </ul>

        <h2>Step 3: We prepare and place it</h2>
        <p>
          You do not apply to the SBA yourself. We assemble the <strong>SBA guarantee
          application</strong>, position your file, and place the bond with a{" "}
          <strong>participating surety</strong>. With the SBA backing part of the risk, the surety can
          issue your <Link href="/contract-bonds/bid-bond">bid</Link>,{" "}
          <Link href="/contract-bonds/performance-bond">performance</Link>, or{" "}
          <Link href="/contract-bonds/payment-bond">payment</Link> bond.
        </p>

        <h2>Step 4: Your bond is issued</h2>
        <p>
          Once approved, the bond is issued and you can move on your contract. For what it costs, see{" "}
          <Link href="/resources/performance-bond-cost">performance bond cost</Link>. If a standard
          surety has already declined you, that is exactly the file we work; start a{" "}
          <Link href="/get-a-quote?path=hard-to-place">quote</Link> and we will tell you honestly
          where you stand. Underwriting still applies, and no honest broker promises guaranteed
          approval.
        </p>
      </Prose>
    </GuidePage>
  );
}
