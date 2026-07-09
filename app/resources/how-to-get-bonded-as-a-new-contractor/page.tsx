import type { Metadata } from "next";
import { clampDescription } from "@/lib/utils";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-to-get-bonded-as-a-new-contractor")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    clampDescription("How to get bonded as a new contractor: start with the very placeable license bond, then build contract bonding through the SBA program and a broker. Reviewed by a licensed broker, CA DOI #6009105."),
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
    q: "Can I get bonded with no track record?",
    a: "Yes for the license bond, which is very placeable even when you are brand new or your credit is thin. Contract bonds take more underwriting, which is where the SBA program and a broker come in.",
  },
  {
    q: "How do new contractors get performance and payment bonds?",
    a: "Through a broker who can use the SBA Surety Bond Guarantee program. The SBA backs a share of the surety's loss, so sureties can write small and new contractors who would not qualify for standard surety credit.",
  },
  {
    q: "How do I build my bonding capacity over time?",
    a: "Get the license bond placed, take on work you can finish clean, and keep your financials in order. A broker grows your single-job and aggregate capacity as your history builds. We never promise guaranteed approval, but we work the file.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Start with the contractor license bond. It is very placeable even with no track record or thin credit, so it gets you licensed and working. For bid, performance, and payment bonds, a broker uses the SBA Surety Bond Guarantee program and builds your capacity over time. No honest broker guarantees approval, but we work the file."
      intro="Brand new and need bonds to win work, but feel like you need work to get bonded? Here is the realistic path: start with the license bond, then build contract bonding from there."
      faqs={faqs}
      related={[
        { label: "SBA Surety Bonds", href: "/sba-surety-bonds" },
        { label: "Hard-to-Place", href: "/hard-to-place-surety-bonds" },
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
      ]}
    >
      <StatGrid
        heading="New-contractor bonding by the numbers"
        items={pickStats([
          "constructionSurvival",
          "caLicenseBond",
          "sbaGuarantee",
          "caContractors",
        ])}
      />

      <Prose>
        <h2>The new-contractor catch-22</h2>
        <p>
          It feels like a trap. You need a track record to get bonded, but you need bonds to land
          the work that builds that track record. New contractors hit this wall constantly, and it
          stops a lot of good operators before they start.
        </p>
        <p>
          The good news: it is not actually a dead end. You do not need years of history to get your
          first bond, and you do not have to solve contract bonding before you are licensed. You
          start in the right place and build from there.
        </p>

        <h2>Start with the license bond</h2>
        <p>
          The California contractor license bond is <strong>very placeable</strong>, even when you
          are brand new or your credit is thin. It is the bond every licensed contractor carries,
          and the market writes it for new entrants every day. So that is where you start.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>It is the entry point.</strong> Getting the license bond placed is the first
              proof that you are bondable, and it gets you licensed and working.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Thin credit is workable.</strong> A low or short credit file usually means a
              higher rate, not a decline. See{" "}
              <Link href="/hard-to-place-surety-bonds">hard-to-place surety bonds</Link> for how we
              place tougher files.
            </span>
          </li>
        </ul>
        <p>
          Read the full <Link href="/contractor-license-bond">contractor license bond</Link> page
          for what it covers and how the premium works.
        </p>

        <h2>Contract bonds: the SBA program and a broker</h2>
        <p>
          Bid, performance, and payment bonds take more underwriting, and that is exactly where new
          contractors need help. The{" "}
          <Link href="/sba-surety-bonds">SBA Surety Bond Guarantee program</Link> is built for this:
          the SBA backs a share of the surety&apos;s loss, so sureties can write small, new, and
          credit-challenged contractors who would not qualify for standard surety credit.
        </p>
        <p>
          On top of that, a broker builds your bonding program over time. We start with what the
          market will write today, then grow your single-job and aggregate capacity as your history
          builds. We will not promise guaranteed approval, but we work your file and shop the
          markets that write growing contractors.
        </p>
      </Prose>
    </GuidePage>
  );
}
