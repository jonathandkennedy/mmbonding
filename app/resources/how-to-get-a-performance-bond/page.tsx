import type { Metadata } from "next";
import { clampDescription } from "@/lib/utils";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-to-get-a-performance-bond")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    clampDescription("How to get a performance bond in California: what underwriters review, what it costs, and how to build the bonding capacity to win the job. Reviewed by a licensed broker, CA DOI #6009105."),
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
    q: "Where can I get a performance bond?",
    a: "Through a surety broker. Performance bonds are underwritten on your financials, experience, and capacity, not issued from a vending machine. A broker sets up your surety program and shops multiple markets to place the bond your project requires.",
  },
  {
    q: "How much does a performance bond cost?",
    a: "Typically a small percentage of the contract amount, driven by contract size, your credit, your experience, and your work on hand. Larger or longer projects, and tougher credit, raise the rate.",
  },
  {
    q: "Can a new or credit-challenged contractor get a performance bond?",
    a: "Often, yes. It takes more underwriting and the right market, which is where a broker earns its keep. We build programs for growing contractors and shop the markets that write harder files.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="You get a performance bond through a surety broker, who places it with a surety company. It is underwritten on your financials, experience, credit, and work on hand, not sold off a shelf. The premium is a small percentage of the contract value. New or credit-challenged contractors can often qualify with the right market."
      intro="A performance bond is not something you buy off a shelf. It is underwritten. Here is what that involves, what it costs, and how to get one placed for your project."
      faqs={faqs}
      related={[
        { label: "Performance Bonds", href: "/contract-bonds/performance-bond" },
        { label: "Contract Bonds hub", href: "/contract-bonds" },
        { label: "Talk to an underwriter", href: "/get-a-quote?path=contract" },
      ]}
    >
      <StatGrid
        heading="Performance bonds by the numbers"
        items={pickStats([
          "millerActThreshold",
          "bidSecurity",
          "usSuretyPremium",
          "caContractors",
        ])}
      />

      <Prose>
        <h2>Where you get one</h2>
        <p>
          You get a performance bond through a <strong>surety broker</strong>, who places it with a
          surety company. Unlike a quick license bond, it is underwritten on your business, so the
          path runs through a real underwriter, not an instant checkout. See the full{" "}
          <Link href="/contract-bonds/performance-bond">performance bond</Link> page for what it
          guarantees.
        </p>

        <h2>What underwriters look at</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Financials.</strong> Your balance sheet, working capital, and sometimes
              CPA-prepared statements for larger bonds.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Experience.</strong> Your track record on similar size and type of work.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Credit.</strong> Personal and business credit factor into the rate and capacity.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Work on hand.</strong> How much you already have under contract, against your
              capacity.
            </span>
          </li>
        </ul>

        <h2>What it costs</h2>
        <p>
          Performance bond premiums are a percentage of the contract value. Strong files pay the
          lowest rates; larger contracts, thinner experience, or tougher credit raise it. We quote
          your specific job rather than a generic rate.
        </p>

        <h2>Bidding bigger than your current line?</h2>
        <p>
          That is a conversation worth having early. As a broker we build single-job and aggregate
          capacity over time and shop hard-to-place markets when needed. Start a{" "}
          <Link href="/get-a-quote?path=contract">project intake</Link> and we will work your file.
        </p>
      </Prose>
    </GuidePage>
  );
}
