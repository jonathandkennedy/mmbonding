import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { BondCostCalculator } from "@/components/bond-cost-calculator";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("how-much-surety-bond-do-i-need")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `How much surety bond you need depends on the type: the CA license bond is a fixed ${usd(facts.licenseBondAmount)}, contract bonds run up to 100% of the contract, and permit and court amounts are set for you.`,
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
    q: "How much surety bond do I need?",
    a: `It depends on the bond. The California contractor license bond is a fixed ${usd(facts.licenseBondAmount)}. Contract bonds can run up to 100% of the contract. Permit, court, and commercial bond amounts are set by the agency or court that requires them.`,
  },
  {
    q: "Do I pay the full bond amount?",
    a: "No. The bond amount is the maximum a valid claim could pay, not your cost. You pay an annual premium, a percentage of the bond amount set by underwriting and driven mostly by your credit.",
  },
  {
    q: "How is a contract bond amount decided?",
    a: "By the project. A bid bond usually runs about 5% to 10% of your bid. Performance and payment bonds are typically written up to 100% of the contract price, so the amount scales with the job.",
  },
  {
    q: "Who decides a permit or court bond amount?",
    a: "The obligee does: the city, county, state agency, or court that requires the bond. They set the amount from their own rules or cost estimate, so you do not choose it.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="How much surety bond do I need? It depends on the bond. The California contractor license bond is a fixed $25,000. Contract bonds can run up to 100% of the contract. Permit, court, and commercial bond amounts are set by the agency or court. Either way, you pay a premium, not the full bond amount."
      intro="The right bond amount depends on the type of bond, not just on you. Here is how each kind is sized, what you actually pay, and a quick way to estimate your premium."
      faqs={faqs}
      related={[
        { label: "Cost Calculator", href: "/surety-bond-cost-calculator" },
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "Contract Bonds", href: "/contract-bonds" },
      ]}
    >
      <Prose>
        <h2>It depends on the bond, not just you</h2>
        <p>
          There is no single surety bond amount. The number you need is set by the{" "}
          <strong>type of bond</strong> and who requires it. A license bond is a fixed statutory
          figure, a contract bond scales with the job, and a permit or court bond is whatever the
          obligee says it is. The good news is the same for all of them: you pay a{" "}
          <strong>premium</strong>, a small percentage of the bond amount, not the full amount itself.
        </p>

        <h2>License bonds: a fixed amount</h2>
        <p>
          The California contractor license bond is the simplest case. It is a fixed{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong> for every licensee, set by statute
          ({facts.licenseBondStatute}). You do not size it, and it does not change with your revenue
          or the jobs you take. What changes is your <strong>premium</strong>, typically{" "}
          {facts.licensePremiumRange.lowPct}% to {facts.licensePremiumRange.highPct}% of the{" "}
          {usd(facts.licenseBondAmount)}, driven mostly by credit. See the full{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link> page for details.
        </p>

        <h2>Contract bonds: a share of the contract</h2>
        <p>
          Contract bonds are sized off the project, so the amount grows with the work:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Bid bond.</strong> Usually about 5% to 10% of your bid amount, guaranteeing you
              will honor the bid if you win.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Performance bond.</strong> Typically written up to 100% of the contract price,
              guaranteeing the work is completed.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Payment bond.</strong> Also commonly up to 100% of the contract, guaranteeing
              your subs and suppliers get paid.
            </span>
          </li>
        </ul>
        <p>
          Because these track the contract, a bigger job means a bigger bond, which is why sureties
          look at your financials and track record. The <Link href="/contract-bonds">contract bonds</Link>{" "}
          page walks through how they work.
        </p>

        <h2>Permit, court, and commercial bonds: set by the obligee</h2>
        <p>
          For permit, court, and most commercial bonds, you do not pick the amount at all. The{" "}
          <strong>obligee</strong>, the city, county, state agency, or court that requires the bond,
          sets it. A permit bond amount usually comes from the agency&apos;s cost estimate; a court or
          license bond amount comes from a statute or the court&apos;s order. Your job is simply to
          post the amount they specify, and ours is to place it quickly on the exact form they accept.
        </p>

        <h2>Estimate your premium</h2>
        <p>
          Once you know the bond amount, you can estimate what you would actually pay. The tool below
          estimates the annual <strong>premium</strong>, not a quote, so treat it as general guidance.
          Your real rate comes from underwriting, and minimum premiums may apply.
        </p>
        <BondCostCalculator />
        <p>
          Want an exact number for your bond? <Link href="/get-a-quote">Start a quote</Link>, or open
          the full <Link href="/surety-bond-cost-calculator">cost calculator</Link>.
        </p>
      </Prose>
    </GuidePage>
  );
}
