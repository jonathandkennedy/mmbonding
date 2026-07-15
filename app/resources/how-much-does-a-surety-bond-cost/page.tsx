import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-much-does-a-surety-bond-cost")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "A surety bond costs a premium, not the full amount. What you pay depends on the bond type and your credit. Typical premiums by bond size, from $100 up.",
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
    q: "How much does a surety bond cost?",
    a: "You pay a premium, not the full bond amount. For most bonds it is a percentage of the bond, set by your credit and the bond type. Small bonds often hit a minimum premium around $100, while a credit-driven license bond can run 1% to 15% of the bond amount.",
  },
  {
    q: "Does the cost depend on the bond amount or the bond type?",
    a: "Both, but the type matters more than people expect. A $25,000 license bond and a $25,000 court bond are priced very differently. The bond amount sets the base; your credit and the type of bond decide the rate.",
  },
  {
    q: "Do I pay the full bond amount?",
    a: "No. The bond amount, say $25,000 or $50,000, is the coverage, not your cost. You pay an annual premium that is a fraction of it. Confusing the two is the most common mistake people make.",
  },
  {
    q: "Are surety bonds paid monthly or annually?",
    a: "Most are paid as a single annual premium, and some, like the notary bond, are paid once for a multi-year term. Financing is sometimes available on larger premiums, but small bonds are simply paid up front.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="A surety bond costs a premium, not the full bond amount. What you pay depends on the bond type and your credit, not just the size. Small bonds often hit a minimum premium near $100; a credit-driven license bond runs 1% to 15% of the amount; contract bonds run about 1% to 3% of the contract. Use our calculator or a specific cost guide for your bond."
      intro="The most common question in surety is also the most misunderstood: how much does a bond cost? You never pay the full bond amount, you pay a premium, and what sets that premium is the bond type and your credit more than the number itself. Here is how it works, with typical ranges by bond size."
      faqs={faqs}
      related={[
        { label: "Cost calculator", href: "/surety-bond-cost-calculator" },
        { label: "Cost by credit score", href: "/resources/surety-bond-cost-by-credit-score" },
        { label: "License bond cost", href: "/resources/contractor-license-bond-cost" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Surety bond cost by the numbers"
        items={pickStats([
          "caLicenseBond",
          "usSuretyPremium",
          "caContractors",
          "millerActThreshold",
        ])}
      />

      <Prose>
        <h2>You pay a premium, not the bond amount</h2>
        <p>
          The number on a bond, $10,000, $25,000, $50,000, is the <strong>coverage</strong>, the most
          a valid claim could pay. It is not your cost. You pay an annual <strong>premium</strong>,
          which is a percentage of that amount. So a $50,000 bond does not cost $50,000; it costs a
          fraction of it.
        </p>

        <h2>Type and credit set the rate, not just the size</h2>
        <p>
          Two bonds of the same size can cost very different amounts. A credit-driven{" "}
          <Link href="/contractor-license-bond">license bond</Link> is priced mostly on your personal
          credit and can run <strong>1% to 15%</strong> of the bond. A{" "}
          <Link href="/contract-bonds">contract bond</Link> is priced on the contract and your
          finances, usually <strong>1% to 3%</strong>. Small commercial bonds are so low-risk they
          often just hit a <strong>minimum premium</strong> near $100. The bond amount sets the base;
          the type and your credit set the rate.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-display font-bold text-navy-900">Bond amount</th>
              <th className="p-4 font-display font-bold text-navy-900">Typical annual premium</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">$1,000 to $10,000</td>
              <td className="p-4 text-ink-700">Often a minimum, around $100</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">$15,000</td>
              <td className="p-4 text-ink-700">Roughly $100 to $150</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">$25,000</td>
              <td className="p-4 text-ink-700">Roughly $150 to $500 (credit-driven)</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">$50,000</td>
              <td className="p-4 text-ink-700">Roughly $500 to $1,500</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">$75,000</td>
              <td className="p-4 text-ink-700">Roughly $750 to $2,250</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">$100,000</td>
              <td className="p-4 text-ink-700">Roughly $1,000 to $3,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <p>
          These are general ranges for reasonable credit, not quotes. Strong credit lands at the low
          end; challenged credit costs more but is still placeable.
        </p>

        <h2>Find your exact number</h2>
        <p>
          For a fast estimate, use our{" "}
          <Link href="/surety-bond-cost-calculator">surety bond cost calculator</Link>, which sizes
          the premium by bond and credit band. For a specific bond, we have detailed cost guides:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <Link href="/resources/contractor-license-bond-cost">Contractor license bond cost</Link>{" "}
              and <Link href="/resources/surety-bond-cost-by-credit-score">cost by credit score</Link>
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <Link href="/resources/bid-bond-cost">Bid bond</Link>,{" "}
              <Link href="/resources/performance-bond-cost">performance bond</Link>, and{" "}
              <Link href="/resources/auto-dealer-bond-cost">auto dealer bond</Link> cost
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <Link href="/resources/notary-bond-cost">Notary</Link>,{" "}
              <Link href="/resources/probate-bond-cost">probate</Link>, and{" "}
              <Link href="/resources/freight-broker-bond-cost">freight broker</Link> bond cost
            </span>
          </li>
        </ul>
        <p>
          Or skip the estimate and <Link href="/get-a-quote">get a real quote</Link>. We shop
          multiple markets and bring back the actual number you qualify for, credit challenges
          included.
        </p>
      </Prose>
    </GuidePage>
  );
}
