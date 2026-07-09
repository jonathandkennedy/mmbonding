import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";
import { facts } from "@/lib/regulatory";
import { usd, clampDescription } from "@/lib/utils";

const guide = getGuide("bid-bond-cost")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    clampDescription("Most bid bonds carry no separate premium. They are issued as part of your surety program, and what underwriters really price is your full contract capacity. Reviewed by a licensed broker."),
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
    q: "Is a bid bond really free?",
    a: "Usually, yes. Most sureties issue bid bonds at no separate premium because they only obligate you to honor your bid. The real underwriting happens on the performance and payment bonds you would need if you win.",
  },
  {
    q: "Then what am I actually paying for?",
    a: "Your surety credit. Underwriters approve a program based on your finances, experience, and credit, then issue bid bonds against that approved capacity. The cost lives in the final bonds, not the bid bond.",
  },
  {
    q: "Can I get a bid bond the same day?",
    a: "Often, once your surety program is in place. If you have no program yet, we can move quickly, but a same-day turnaround depends on your file. Start early so a deadline never costs you the job.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Most bid bonds carry no separate premium. Sureties issue them as part of your surety program because a bid bond only obligates you to honor your bid. The real cost lives in the performance and payment bonds you furnish if you win, priced on your finances, experience, and credit."
      intro="Most bid bonds carry no separate premium. They are issued as part of your overall surety program, and what underwriters really price is whether they would bond the full contract if you win."
      faqs={faqs}
      related={[
        { label: "Bid Bonds", href: "/contract-bonds/bid-bond" },
        { label: "Contract Bonds hub", href: "/contract-bonds" },
        { label: "Get a Quote", href: "/get-a-quote?path=contract" },
      ]}
    >
      <StatGrid
        heading="Bid bonds by the numbers"
        items={pickStats([
          "bidSecurity",
          "millerActThreshold",
          "caContractors",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>Why bid bonds are usually free</h2>
        <p>
          A <strong>bid bond</strong> guarantees one thing: if you win, you will honor your bid and
          furnish the required performance and payment bonds. That is a short, low-risk promise, so
          most sureties issue the bid bond at <strong>no separate premium</strong> as part of your
          surety program.
        </p>
        <p>
          The cost you pay sits on the final bonds, not the bid. The bid bond is the door; the real
          underwriting is the room behind it.
        </p>

        <h2>What actually drives the cost</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Full contract capacity.</strong> Underwriters ask the real question up front:
              if you win, can they bond the whole job? Your approved program is what they are pricing.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Finances and experience.</strong> Working capital, completed work, and your
              track record set the size of program a surety will stand behind.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Credit.</strong> Personal and business credit shape your rate on the
              performance and payment bonds, and whether the file is hard to place.
            </span>
          </li>
        </ul>

        <h2>Getting one before a deadline</h2>
        <p>
          Bid deadlines do not wait. The fastest path is to have a surety program approved before
          you need the bond, so we can issue against it on short notice. If you are starting cold,
          we can still move fast, but do not leave it to the last hour. Read the full{" "}
          <Link href="/contract-bonds/bid-bond">bid bond</Link> page, then start a{" "}
          <Link href="/get-a-quote?path=contract">contract bond quote</Link>.
        </p>
      </Prose>
    </GuidePage>
  );
}
