import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("why-was-my-surety-bond-declined")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Why was your surety bond declined? Usually credit, a bankruptcy, a prior claim, or an incomplete form. See how a broker re-markets and places it.",
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
    q: `Does one decline mean I can't get bonded?`,
    a: `No. A decline usually reflects a single automated market's rules, not the whole surety industry. Many sureties specialize in the exact situations that trip up instant quotes. A broker re-submits your file to those markets. Underwriting still applies, but one no is not the final answer.`,
  },
  {
    q: "What are the most common reasons for a decline?",
    a: "Severe or very thin credit, an open or recent bankruptcy, a prior bond claim, an incomplete or inconsistent application, or a bond class the automated system is not set up to write. Often it is a mix, and often it is fixable.",
  },
  {
    q: "Should I just reapply online again?",
    a: "Usually not. Submitting the same file to the same automated market tends to produce the same answer, and repeated hard credit pulls can hurt your score. The better move is to correct any application errors and let a broker route the file to a market that writes your situation.",
  },
  {
    q: "How does a broker place a file the robots turned down?",
    a: "The broker packages your full picture, credit, experience, and any explanation, then submits it to sureties that underwrite tough cases by hand. For higher-risk files, tools like funds control or collateral can turn a decline into an approval, sometimes at a higher rate.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`Usually the cause is severe or thin credit, an open bankruptcy, a prior claim, an incomplete application, or a bond class the automated market simply does not write. A single online decline is not the end. A broker re-markets the file to sureties that write tough cases, sometimes using funds control. Underwriting still applies.`}
      intro={`An automated decline feels final, but it usually is not. Here are the real reasons an online bond application gets rejected, and what a broker does to place the file anyway.`}
      faqs={faqs}
      related={[
        { label: "Hard-to-Place Bonds", href: "/hard-to-place-surety-bonds" },
        {
          label: "After a bankruptcy or lien",
          href: "/resources/surety-bonds-after-bankruptcy-or-tax-lien",
        },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Declines and re-placement by the numbers"
        items={pickStats([
          "caLicenseBond",
          "sbaGuarantee",
          "caContractors",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>A decline from one market is not the end</h2>
        <p>
          An automated decline can feel like a closed door, but it almost never is. An instant
          quote is one surety applying one fixed rulebook. When your file does not fit that
          rulebook, the system says no, even though other sureties may write your exact situation
          every day.
        </p>
        <p>
          The goal after a decline is simple: find out why, fix what can be fixed, and get the
          file in front of a market that wants it.
        </p>

        <h2>Common reasons for a decline</h2>
        <p>Most automated declines come down to one of these:</p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Severe or thin credit.</strong> A low score, or too little credit history to
              score at all, is the most common trigger.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>An open or recent bankruptcy.</strong> Many instant markets auto-decline an
              open bankruptcy, though a broker can often still place it.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>A prior bond claim.</strong> A paid claim on a past bond makes an automated
              market nervous, and the manual review it needs is not something a form can do.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>An incomplete or inconsistent application.</strong> A missing entity name, a
              mismatched address, or a blank field can bounce the whole submission.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>A class the market does not write.</strong> Some bond types simply are not in
              that provider&apos;s automated book, so the answer is no by default.
            </span>
          </li>
        </ul>

        <h2>What a broker does next</h2>
        <p>
          This is the part an instant quote cannot do. Once we know why the file was declined, we
          re-market it:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Package the file.</strong> We assemble your credit, experience, and a short
              explanation of anything unusual, presented the way underwriters want to see it.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Submit to the right markets.</strong> We send it to sureties that underwrite
              tough cases by hand instead of by algorithm.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Add structure when needed.</strong> For higher-risk files,{" "}
              <Link href="/resources/funds-control-for-contractors">funds control</Link> or
              collateral can turn a decline into an approval.
            </span>
          </li>
        </ul>

        <h2>What to expect on rate</h2>
        <p>
          Getting placed after a decline usually means a higher premium than a clean, instant
          approval, and that is normal. The rate reflects the added risk, and it is still far
          better than not being bonded at all. As your credit improves or a bankruptcy ages, we
          can re-shop the bond for a better rate at renewal. Underwriting still applies, so we
          quote your real number rather than a teaser.
        </p>
        <p>
          If an online quote just turned you down, see how we place{" "}
          <Link href="/hard-to-place-surety-bonds">hard-to-place bonds</Link>, read about getting
          bonded{" "}
          <Link href="/resources/surety-bonds-after-bankruptcy-or-tax-lien">
            after a bankruptcy or lien
          </Link>
          , or start a <Link href="/get-a-quote">quote</Link>.
        </p>
      </Prose>
    </GuidePage>
  );
}
