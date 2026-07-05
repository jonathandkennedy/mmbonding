import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("how-to-get-bonded-with-a-new-business")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `Can a brand-new business get bonded with no financials? Usually yes. The ${usd(facts.licenseBondAmount)} license bond is underwritten on the owner's personal credit, so new contractors qualify routinely.`,
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
    q: "Can a brand-new business get bonded with no financials?",
    a: `For the ${usd(facts.licenseBondAmount)} California contractor license bond, usually yes. It is underwritten on the owner's personal credit, not company financials, so a business with no history still qualifies routinely. Underwriting still applies.`,
  },
  {
    q: "Why is the license bond easier for a new company?",
    a: "Because the surety looks at the owner's personal credit rather than years of business statements. A new LLC or corporation with no track record has a personal credit profile to underwrite from day one.",
  },
  {
    q: "What about a performance bond for a new business?",
    a: "That is harder. Contract and performance bonds want financials and a track record. New companies get there through the SBA Surety Bond Guarantee program, funds control, and starting with smaller bonded jobs to build a history.",
  },
  {
    q: "What should I have ready to apply?",
    a: "For the license bond, mostly your personal credit. For contract bonds, gather any business financials you have, a personal financial statement, and a resume of your experience so an underwriter can see the person behind the new company.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Can a brand-new business get bonded? Usually yes. The $25,000 contractor license bond is underwritten on the owner's personal credit, not company financials, so new contractors qualify routinely. Contract (performance) bonds need more, but the SBA program and funds control open doors. We place new-business files fast; underwriting still applies."
      intro="A company with no financial history can still get bonded. Here is why the license bond works for new businesses, where contract bonds get harder, and the realistic paths through it."
      faqs={faqs}
      related={[
        { label: "Hard-to-Place Bonds", href: "/hard-to-place-surety-bonds" },
        { label: "SBA Surety Bonds", href: "/sba-surety-bonds" },
        { label: "Bonded as a new contractor", href: "/resources/how-to-get-bonded-as-a-new-contractor" },
      ]}
    >
      <Prose>
        <h2>New business? The license bond still works</h2>
        <p>
          The most common worry for a brand-new company is that no surety will touch a business with
          zero financial history. For the California contractor license bond, that worry is mostly
          unfounded. The <strong>{usd(facts.licenseBondAmount)}</strong> license bond is underwritten
          on the <strong>owner&apos;s personal credit</strong>, not company financials. A brand-new LLC
          or corporation has a personal credit profile behind it from day one, which is exactly what
          the surety reads. That is why new contractors qualify for it routinely. Underwriting still
          applies, and your credit shapes the premium, but a lack of business history is not a wall
          here.
        </p>

        <h2>Where new businesses hit a wall: contract bonds</h2>
        <p>
          The picture changes with <strong>contract bonds</strong>, the bid, performance, and payment
          bonds you need to take on bonded construction work. These are underwritten like credit for
          the company, so a surety wants to see financials and a track record before guaranteeing that
          a job gets finished. A business with neither yet is a tougher file. That does not mean no,
          it means you take a different path to your first performance bond.
        </p>

        <h2>Paths that work</h2>
        <p>
          When a new company needs contract bonds, these are the routes that actually open doors:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>The SBA program.</strong> The{" "}
              <Link href="/sba-surety-bonds">SBA Surety Bond Guarantee</Link> program was built for
              small, new, and credit-challenged contractors. The SBA backs part of the surety&apos;s
              risk, so sureties can say yes to files they would otherwise decline.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Funds control.</strong> With{" "}
              <Link href="/resources/funds-control-for-contractors">funds control</Link>, a third party
              disburses job funds to make sure labor and materials get paid. That added control can
              unlock a bond when financials alone would not.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Start with smaller bonded jobs.</strong> Winning and completing a few smaller
              bonded projects builds the track record and financial history that make larger bonds
              routine later.
            </span>
          </li>
        </ul>
        <p>
          If your file is tough for any reason, that is our specialty. See how we place{" "}
          <Link href="/hard-to-place-surety-bonds">hard-to-place surety bonds</Link>.
        </p>

        <h2>What to have ready</h2>
        <p>
          A little preparation speeds things up, especially for contract bonds. Have these on hand:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Your personal credit.</strong> The backbone of a license bond, and a real factor
              in contract bonding for a new company.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Any business financials.</strong> Even a short history helps. A personal
              financial statement stands in when the company has little to show yet.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>A resume of your experience.</strong> Years in the trade and past projects tell
              an underwriter there is a capable operator behind the new name.
            </span>
          </li>
        </ul>
        <p>
          Ready to get bonded? <Link href="/get-a-quote">Start a quote</Link>, or if you are a new
          contractor specifically, read{" "}
          <Link href="/resources/how-to-get-bonded-as-a-new-contractor">how to get bonded as a new
          contractor</Link>.
        </p>
      </Prose>
    </GuidePage>
  );
}
