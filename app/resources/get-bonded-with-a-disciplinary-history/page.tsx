import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("get-bonded-with-a-disciplinary-history")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Can you get bonded with a CSLB complaint or disciplinary history? Usually yes, though underwriting applies. How a broker still places the file.",
  alternates: { canonical: `/resources/${guide.slug}` },
};

const faqs = [
  {
    q: "Can I get bonded with an open CSLB complaint?",
    a: "Often yes, though an open complaint is harder to place than a resolved one. Sureties want to know the status and the likely outcome. A broker can shop the markets that will consider it, sometimes with funds control or collateral.",
  },
  {
    q: "Does a paid bond claim stop me from getting bonded again?",
    a: "Not usually, but it raises your rate and narrows your options. Sureties treat a paid claim as a real risk signal. Being able to explain what happened, and that it is resolved, helps the file underwrite.",
  },
  {
    q: "What is a disciplinary bond?",
    a: `It is a bond the CSLB can require to reinstate a license after discipline, on top of the standard license bond. The Registrar sets the amount, at least ${usd(facts.disciplinaryMin)} and up to ${facts.disciplinaryMaxMultiple} times the license bond, often for a set number of years.`,
  },
  {
    q: "Will you guarantee approval?",
    a: "No, and be cautious of anyone who does. Underwriting always applies. What we can do is shop the sureties that write disciplinary and claim-affected files, present your story well, and bring you the best real offer available.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`Can you get bonded with a CSLB complaint or disciplinary history? Usually, yes, though it moves you to hard-to-place. A prior complaint, discipline, or paid claim means a higher rate and fewer markets, and reinstating a license can require a disciplinary bond. We shop the sureties that write these files, sometimes with funds control. Underwriting still applies.`}
      intro="A CSLB complaint, a disciplinary action, or a paid claim does not close the door on bonding. It moves your file into hard-to-place territory, where the right markets and a broker matter. Here is how underwriting sees it, and how we place it."
      faqs={faqs}
      related={[
        { label: "Disciplinary Bond", href: "/disciplinary-bond" },
        { label: "Hard-to-Place Bonds", href: "/hard-to-place-surety-bonds" },
        { label: "Claims & lapses", href: "/resources/contractor-bond-claims-and-lapses" },
      ]}
    >
      <Prose>
        <h2>A disciplinary history is placeable</h2>
        <p>
          A CSLB complaint, a disciplinary action, or a prior paid claim does not end your bonding.
          It moves you out of the easy, instant-quote lane and into{" "}
          <Link href="/hard-to-place-surety-bonds">hard-to-place</Link> territory, where the file
          goes to sureties that actually underwrite it. Most contractors in this situation still get
          bonded.
        </p>
        <p>
          What changes is how the bond is priced and where it is placed, not whether a bond exists
          for you. The honest caveat: underwriting still applies, and no broker can promise approval
          before a surety reviews the file.
        </p>

        <h2>How it affects underwriting</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>A higher rate.</strong> A disciplinary record or a paid claim signals risk, and
              the premium reflects it. You will likely pay more than a clean file of the same size.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Fewer markets.</strong> Some sureties decline these files outright. The ones
              that write them are a smaller group, which is exactly where a broker earns their keep.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>More questions.</strong> Expect to explain what happened, what it cost, and
              what has changed since. A resolved, well-documented issue underwrites better than an
              open one.
            </span>
          </li>
        </ul>

        <h2>The disciplinary bond</h2>
        <p>
          If the CSLB has disciplined your license, reinstating it can require a separate{" "}
          <Link href="/disciplinary-bond">disciplinary bond</Link> on top of the standard license
          bond. The Registrar sets the amount case by case, at no less than{" "}
          <strong>{usd(facts.disciplinaryMin)}</strong> and as high as{" "}
          <strong>{facts.disciplinaryMaxMultiple} times</strong> the license bond, and it can be
          required for a period of years.
        </p>
        <p>
          A disciplinary bond is harder to place than a routine license bond, but it is a market we
          work. If a paid claim is part of your history, the guide on{" "}
          <Link href="/resources/contractor-bond-claims-and-lapses">
            contractor bond claims and lapses
          </Link>{" "}
          explains how that affects your record.
        </p>

        <h2>How we place it</h2>
        <p>
          We shop the sureties that specialize in tougher files rather than sending you to a single
          automated decline. When credit or history is the sticking point, tools like{" "}
          <strong>funds control</strong> or <strong>collateral</strong> can reassure a surety enough
          to approve the bond, sometimes at a better rate than a bare application would earn.
        </p>
        <p>
          Tell us the full story up front. The more complete the picture, the faster we can match
          your file to the right market. Start with a <Link href="/get-a-quote">quote</Link>, and we
          will place it honestly, with underwriting, and without a fake promise of guaranteed
          approval.
        </p>
      </Prose>
    </GuidePage>
  );
}
