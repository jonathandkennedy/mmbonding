import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("california-money-transmitter-bond-requirements")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "California money transmitters must post a DFPI surety bond on a sliding scale from $250,000 to $7 million. How the amount is set, and what it costs.",
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
    q: "How much is the California money transmitter bond?",
    a: "The bond amount is set by the DFPI on a sliding scale, from a $250,000 minimum up to $7 million, based on your average daily outstanding obligations in California. You do not pay that amount; you pay an annual premium that is a percentage of it.",
  },
  {
    q: "Who requires the money transmitter bond?",
    a: "The California Department of Financial Protection and Innovation (DFPI), under the Money Transmission Act. You must have the bond in place to obtain and keep a money transmitter license in California.",
  },
  {
    q: "How much does the bond cost?",
    a: "You pay a premium, a percentage of the bond amount set by underwriting and driven mostly by your financials and credit. Larger bonds may involve collateral. We shop multiple markets to find the best rate, including for newer companies.",
  },
  {
    q: "Can a newer fintech qualify?",
    a: "Often, yes. Large financial bonds are underwritten on financials and may require collateral, which is exactly the kind of file a broker builds across markets. Underwriting still applies and no honest broker promises guaranteed approval.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="California money transmitters must post a surety bond set by the DFPI on a sliding scale, from a $250,000 minimum up to $7 million, based on average daily outstanding obligations in California. You pay an annual premium, a percentage of that amount, not the full bond. Larger bonds may require collateral. It is required to get and keep a money transmitter license."
      intro="If you move customer money in California, the state requires a surety bond that scales with the size of your operation. Here is how the money transmitter bond works, how the DFPI sets the amount, and what it costs to place."
      faqs={faqs}
      related={[
        { label: "Money Transmitter Bond", href: "/commercial-bonds/money-transmitter-bond" },
        { label: "Commercial & Specialty Bonds", href: "/commercial-bonds" },
        { label: "Bonding capacity", href: "/resources/surety-bond-capacity" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Money transmitter bond by the numbers"
        items={pickStats([
          "moneyTransmitterBond",
          "usSuretyPremium",
          "minEarnedPremium",
          "premiumDeductible",
        ])}
      />

      <Prose>
        <h2>A bond that scales with your volume</h2>
        <p>
          Under California&apos;s Money Transmission Act, a licensed money transmitter must maintain a{" "}
          <Link href="/commercial-bonds/money-transmitter-bond">surety bond</Link> that protects its
          customers. The <strong>DFPI</strong> sets the amount on a{" "}
          <strong>sliding scale</strong>, from a <strong>$250,000</strong> minimum up to{" "}
          <strong>$7 million</strong>, tied to your <strong>average daily outstanding obligations</strong>{" "}
          in the state. As you move more money, the required bond rises. (Older licensees sat under a
          flat $500,000 minimum that transitioned to the sliding scale.)
        </p>

        <h2>What it costs</h2>
        <p>
          You never pay the full bond amount. You pay an annual <strong>premium</strong>, a percentage
          of it, set by underwriting and driven mostly by your financial statements and credit.
          Because these bonds can be large, underwriting may ask for <strong>collateral</strong> on
          part of the exposure. A broker who shops multiple markets matters most here, especially for
          growing companies. See <Link href="/resources/surety-bond-collateral">how collateral
          works</Link> and <Link href="/resources/surety-bond-capacity">bonding capacity</Link> for
          the underwriting side.
        </p>

        <h2>Getting bonded</h2>
        <p>
          The bond must be in place to obtain and keep your license. We assemble your file, position
          it with the surety markets that write money transmitter bonds, and work newer or
          collateral-dependent files rather than declining them. Start a{" "}
          <Link href="/get-a-quote">quote</Link> with your license details and average daily
          obligations, and we will quote the exact bond. Underwriting still applies; we never promise
          guaranteed approval.
        </p>
      </Prose>
    </GuidePage>
  );
}
