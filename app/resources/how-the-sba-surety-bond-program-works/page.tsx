import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-the-sba-surety-bond-program-works")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "The SBA bond program guarantees 80% to 90% of a surety's loss, so it can bond small, new, and credit-challenged contractors. How the program works.",
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
    q: "What is the SBA Surety Bond Guarantee program?",
    a: "A federal program where the U.S. Small Business Administration guarantees 80% to 90% of a surety's loss on bonds for small businesses. That backing lowers the surety's risk, so it can bond small, new, and credit-challenged contractors who would not qualify for standard surety credit.",
  },
  {
    q: "Is an SBA bond a loan?",
    a: "No. The SBA does not lend you money or issue the bond. It guarantees part of the surety's potential loss, which encourages the surety to issue you a normal bid, performance, or payment bond. You still work with a surety, through a broker.",
  },
  {
    q: "What bonds does the SBA program cover?",
    a: "Bid, performance, payment, and certain ancillary bonds, on contracts up to $9 million for any project, and up to $14 million on federal contracts when the contracting officer certifies the guarantee is needed.",
  },
  {
    q: "Who is the program for?",
    a: "Small businesses that meet SBA size standards and cannot get standard bonding: new contractors, credit-challenged firms, and socially or economically disadvantaged, 8(a), HUBZone, and veteran-owned businesses, which get the higher 90% guarantee.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="The SBA Surety Bond Guarantee program has the federal government guarantee 80% to 90% of a surety's loss on bonds for small businesses. That backing lets sureties issue bid, performance, and payment bonds to small, new, and credit-challenged contractors who would otherwise be declined. It covers contracts up to $9 million, or $14 million on certified federal work."
      intro="The SBA bond program is one of the most powerful tools for getting a growing contractor bonded, and it is simpler than it sounds. Here is how the federal guarantee actually works, what it covers, and who it is built for."
      faqs={faqs}
      related={[
        { label: "SBA Surety Bonds", href: "/sba-surety-bonds" },
        { label: "How to get bonded through the SBA", href: "/resources/how-to-get-bonded-through-the-sba" },
        { label: "How to get a performance bond", href: "/resources/how-to-get-a-performance-bond" },
        { label: "Hard-to-Place Bonds", href: "/hard-to-place-surety-bonds" },
      ]}
    >
      <StatGrid
        heading="The SBA bond program by the numbers"
        items={pickStats([
          "sbaContractLimit",
          "sbaGuarantee",
          "caContractors",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>A federal backstop, not a loan</h2>
        <p>
          The <Link href="/sba-surety-bonds">SBA Surety Bond Guarantee program</Link> works by
          sharing risk. The U.S. Small Business Administration promises to cover{" "}
          <strong>80% to 90%</strong> of a surety&apos;s loss if a bonded contractor defaults. That
          guarantee lowers the surety&apos;s exposure enough that it can issue a normal{" "}
          <Link href="/contract-bonds">bid, performance, or payment bond</Link> to a contractor it
          would otherwise decline. The SBA does not lend you money or issue the bond itself; it stands
          behind the surety.
        </p>

        <h2>Why that changes the math</h2>
        <p>
          Standard surety credit is hard to get when you are new, small, or have thin or challenged
          credit, because the surety carries the full risk. With the SBA covering most of a potential
          loss, a &quot;no&quot; often becomes a &quot;yes.&quot; It is the same reason the program
          pairs so well with tools like{" "}
          <Link href="/resources/funds-control-for-contractors">funds control</Link> on tougher files.
        </p>

        <h2>What it covers, and the limits</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Bonds:</strong> bid, performance, payment, and certain ancillary bonds.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Contract size:</strong> up to $9 million for any project, and up to $14 million
              on federal contracts when the contracting officer certifies the need.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Guarantee level:</strong> 80% on most contracts, and 90% for smaller contracts
              and for disadvantaged, 8(a), HUBZone, and veteran-owned firms.
            </span>
          </li>
        </ul>

        <h2>Who it is built for</h2>
        <p>
          New contractors with no track record, growing firms bidding bigger than their current line
          supports, and credit-challenged businesses. If a standard surety has turned you down, this
          is often the way in, and it is exactly the kind of file we specialize in. See{" "}
          <Link href="/resources/how-to-get-bonded-through-the-sba">
            how to get bonded through the SBA
          </Link>
          , or if you already have a specific job, read{" "}
          <Link href="/resources/how-to-get-a-performance-bond">how to get a performance bond</Link>{" "}
          and start there.
        </p>
      </Prose>
    </GuidePage>
  );
}
