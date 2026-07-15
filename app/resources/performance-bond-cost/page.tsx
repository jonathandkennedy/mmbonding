import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("performance-bond-cost")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "A performance bond costs a percentage of the contract, typically 1% to 3% on a sliding scale, driven by your credit, financials, and experience.",
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
    q: "How much does a performance bond cost?",
    a: "A performance bond premium is a percentage of the contract amount, typically 1% to 3% on a sliding scale that declines as the contract grows. Strong financials and credit earn the low end; larger, longer, or tougher-credit jobs cost more.",
  },
  {
    q: "Is the payment bond an extra cost?",
    a: "Usually not a separate one. On public work you post a performance bond and a payment bond together, and they are typically quoted as a single premium for the pair, not billed twice.",
  },
  {
    q: "Who pays for the performance bond?",
    a: "The contractor pays the premium, and most contractors build that cost into their bid so it is effectively passed through to the project. It is a cost of doing bonded work.",
  },
  {
    q: "Does my credit affect the performance bond cost?",
    a: "Yes. Contract bonds are underwritten on your financials, experience, and credit. A strong, well-documented file earns a lower rate and more capacity; a thinner file costs more, and the SBA program can help newer contractors qualify.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="A performance bond costs a percentage of the contract, typically 1% to 3% on a sliding scale that declines as the contract grows. It is underwritten on your credit, financials, and experience, so strong files pay the low end. On public work the performance and payment bonds are usually quoted together as one premium. The contractor pays, and most build it into the bid."
      intro="A performance bond is not a flat fee, it is a percentage of the contract, and what that percentage is depends on you. Here is how performance and payment bonds are priced, what moves the rate, and who pays."
      faqs={faqs}
      related={[
        { label: "Performance Bond", href: "/contract-bonds/performance-bond" },
        { label: "How to get a performance bond", href: "/resources/how-to-get-a-performance-bond" },
        { label: "Payment vs performance bond", href: "/resources/payment-bond-vs-performance-bond" },
        { label: "Get a Quote", href: "/get-a-quote?path=contract" },
      ]}
    >
      <StatGrid
        heading="Performance bond cost by the numbers"
        items={pickStats([
          "millerActThreshold",
          "usSuretyPremium",
          "caContractors",
          "sbaContractLimit",
        ])}
      />

      <Prose>
        <h2>A percentage of the contract, not a flat fee</h2>
        <p>
          A performance bond premium is a <strong>percentage of the contract amount</strong>,
          typically <strong>1% to 3%</strong>, on a sliding scale that declines as the contract grows.
          So a $100,000 job and a $2,000,000 job are not priced at the same rate, and the bigger job
          pays a lower marginal percentage. The premium is set by underwriting, not a published price.
        </p>

        <h2>What moves your rate</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Financials.</strong> Working capital, net worth, and CPA-prepared statements on
              larger bonds. The stronger the file, the lower the rate.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Experience.</strong> A track record on similar size and type of work earns
              better pricing and more capacity.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Credit.</strong> Personal and business credit factor into the rate, especially
              for smaller contractors.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Contract size and length.</strong> Larger and longer jobs carry more risk, which
              the sliding scale reflects.
            </span>
          </li>
        </ul>

        <h2>Performance and payment, one premium</h2>
        <p>
          On public work you post both a{" "}
          <Link href="/contract-bonds/performance-bond">performance bond</Link> and a{" "}
          <Link href="/contract-bonds/payment-bond">payment bond</Link>, and they are usually quoted{" "}
          <strong>together as a single premium</strong> for the pair, not billed separately. The{" "}
          contractor pays, and most build the cost into their bid.
        </p>

        <h2>Newer or credit-challenged?</h2>
        <p>
          If your financials or credit make the bond hard to place, the{" "}
          <Link href="/sba-surety-bonds">SBA Surety Bond Guarantee program</Link> and a broker who
          shops multiple markets can still get you bonded, often at a workable rate. Read{" "}
          <Link href="/resources/how-to-get-a-performance-bond">how to get a performance bond</Link>,
          then <Link href="/get-a-quote?path=contract">start a project intake</Link> for your real
          number.
        </p>
      </Prose>
    </GuidePage>
  );
}
