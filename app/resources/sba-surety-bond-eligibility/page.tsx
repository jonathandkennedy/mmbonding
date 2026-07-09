import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";
import { sba } from "@/lib/regulatory";
import { usd, clampDescription } from "@/lib/utils";

const guide = getGuide("sba-surety-bond-eligibility")!;

export const metadata: Metadata = {
  title: guide.title,
  description: clampDescription(`Who qualifies for the SBA Surety Bond Guarantee program: small businesses that cannot get standard bonding, backed up to ${usd(sba.contractLimit)} per contract with a ${sba.guaranteeLowPct}% to ${sba.guaranteeHighPct}% guarantee. Reviewed by a licensed broker.`),
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
    q: "Who is eligible for the SBA bond program?",
    a: `Small businesses that meet SBA size standards and cannot get standard surety credit, including new and credit-challenged contractors. Socially and economically disadvantaged, 8(a), HUBZone, and veteran-owned firms qualify for the higher ${sba.guaranteeHighPct}% guarantee.`,
  },
  {
    q: "How big a contract will the SBA guarantee a bond for?",
    a: `Up to ${usd(sba.contractLimit)} per contract for any project, and up to ${usd(sba.federalContractLimit)} on federal contracts when the contracting officer certifies the guarantee is needed.`,
  },
  {
    q: "What do I need to apply?",
    a: "Business and personal financials, your work history, and the contract details. We help prepare the application and shop it to the right surety. We never promise guaranteed approval, but we work the file.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`You likely qualify for the SBA Surety Bond Guarantee program if you are a small business that meets SBA size standards and cannot get standard surety credit, including new and credit-challenged contractors. The SBA backs ${sba.guaranteeLowPct}% to ${sba.guaranteeHighPct}% of the surety&apos;s loss on contracts up to ${usd(sba.contractLimit)}, or ${usd(sba.federalContractLimit)} on certified federal contracts.`}
      intro="The SBA Surety Bond Guarantee program exists so small contractors who cannot get standard bonding still can. Here is who qualifies, the limits, and what it takes to apply."
      faqs={faqs}
      related={[
        { label: "SBA Surety Bonds", href: "/sba-surety-bonds" },
        { label: "Hard-to-Place", href: "/hard-to-place-surety-bonds" },
        { label: "Get a Quote", href: "/get-a-quote?path=hard-to-place" },
      ]}
    >
      <StatGrid
        heading="SBA bond program by the numbers"
        items={pickStats([
          "sbaContractLimit",
          "sbaGuarantee",
          "constructionSurvival",
          "caContractors",
        ])}
      />

      <Prose>
        <h2>Who qualifies</h2>
        <p>
          The <Link href="/sba-surety-bonds">SBA Surety Bond Guarantee program</Link> is for small
          businesses that meet SBA size standards and cannot get standard surety credit. If a
          surety has turned you down, this is often the path that gets you bonded.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>New and credit-challenged contractors.</strong> The program is built for
              firms that cannot yet qualify for standard bonding on their own.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Disadvantaged and certified firms.</strong> Socially and economically
              disadvantaged, 8(a), HUBZone, and veteran-owned firms get the higher{" "}
              {sba.guaranteeHighPct}% guarantee.
            </span>
          </li>
        </ul>

        <h2>The size and contract limits</h2>
        <p>
          The SBA will guarantee a bond on contracts up to{" "}
          <strong>{usd(sba.contractLimit)}</strong> per contract, and up to{" "}
          <strong>{usd(sba.federalContractLimit)}</strong> on federal contracts when the contracting
          officer certifies the guarantee is needed. On those bonds, the SBA guarantees{" "}
          <strong>
            {sba.guaranteeLowPct}% to {sba.guaranteeHighPct}%
          </strong>{" "}
          of the surety&apos;s loss, which is what lets the surety say yes. The full{" "}
          <Link href="/sba-surety-bonds">SBA surety bonds</Link> page breaks down how the guarantee
          works.
        </p>

        <h2>What you need to apply</h2>
        <p>
          Applying is paperwork, and we handle the heavy part. You will need:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Business and personal financials.</strong> Balance sheet, income statements,
              and personal financial detail for the owners.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Work history and contract details.</strong> What you have completed and the
              specifics of the job you are bidding.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>A prepared application.</strong> We help you assemble it and shop it to the
              right surety. We will not promise guaranteed approval, but we work the file.
            </span>
          </li>
        </ul>
        <p>
          If you have already been declined elsewhere, start with{" "}
          <Link href="/hard-to-place-surety-bonds">hard-to-place surety bonds</Link> or go straight
          to a <Link href="/get-a-quote?path=hard-to-place">quote</Link> and we will route you to
          the SBA program if it fits. The{" "}
          <Link href="/sba-surety-bonds">SBA surety bonds</Link> page has the rest.
        </p>
      </Prose>
    </GuidePage>
  );
}
