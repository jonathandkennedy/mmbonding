import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("what-a-contractor-bond-pays-a-homeowner")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `What a California contractor's ${usd(facts.licenseBondAmount)} bond pays a homeowner: what it covers, its limits, and when a lawsuit or insurance is the better path.`,
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
    q: "Will the bond pay me for bad workmanship?",
    a: "Only when the poor work amounts to a violation of contractor law, not for every quality complaint. The license bond is not a general warranty. For pure workmanship disputes, small claims or a lawsuit is often the right path.",
  },
  {
    q: "Is $25,000 the most I can get?",
    a: `Yes. ${usd(facts.licenseBondAmount)} is the face amount of the license bond, and it is shared among all valid claims against that contractor. If your loss is larger, you may need small claims, a lawsuit, or the contractor's liability insurance.`,
  },
  {
    q: "Does the bond cover property damage?",
    a: "Usually no. Property damage and injuries are what liability insurance is for. The license bond answers for violations of contractor law, so confirm a contractor is insured, not just bonded.",
  },
  {
    q: "Is a bonded contractor the same as insured?",
    a: `No. Bonded means the ${usd(facts.licenseBondAmount)} license bond is on file. Insured means the contractor carries liability insurance. They protect you in different ways, so verify both before you hire.`,
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`What does a contractor's ${usd(facts.licenseBondAmount)} bond pay a homeowner? It can compensate you for specific harms from violations of contractor law, up to ${usd(facts.licenseBondAmount)} total and shared among valid claimants. It is not a warranty on all bad work and it is not insurance. For larger losses you may need small claims, a lawsuit, or the contractor's liability insurance.`}
      intro={`A California contractor's ${usd(facts.licenseBondAmount)} license bond is real protection, but it is narrower than most homeowners expect. Here is what it actually pays, what it does not, and where to turn for losses beyond it.`}
      faqs={faqs}
      related={[
        { label: "File a bond claim", href: "/resources/how-to-file-a-claim-against-a-contractor-bond" },
        { label: "What the bond covers", href: "/resources/what-a-contractor-license-bond-covers" },
        { label: "Bonded vs insured", href: "/bonding-vs-insurance" },
      ]}
    >
      <Prose>
        <h2>What the bond covers</h2>
        <p>
          The California <Link href="/contractor-license-bond">contractor license bond</Link> is a{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong> guarantee that a licensed contractor will
          follow contractor law. When a contractor violates that law and you are harmed as a result,
          the bond can compensate you, up to the bond amount.
        </p>
        <p>
          In practice, that covers homeowners for specific, provable violations tied to a contract,
          rather than every complaint about a job. The surety pays valid claims, and a valid claim
          has to fit what the bond actually guarantees. For a deeper look, see{" "}
          <Link href="/resources/what-a-contractor-license-bond-covers">
            what a contractor license bond covers
          </Link>
          .
        </p>

        <h2>What it does not cover</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>It is not a general warranty.</strong> The bond does not pay for every defect
              or every disagreement about workmanship. It answers for violations of contractor law,
              not ordinary buyer&apos;s remorse.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>It is not insurance.</strong> A bonded contractor is not an insured
              contractor. Property damage and injuries are the job of liability insurance, which is
              separate from the bond.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>It is capped and shared.</strong> The most the bond can pay is{" "}
              {usd(facts.licenseBondAmount)}, and that amount is split among all valid claimants. A
              large loss, or several claims at once, can exceed it.
            </span>
          </li>
        </ul>

        <h2>When you will need another path</h2>
        <p>
          If your loss is larger than the bond, or the harm is not something the bond covers, you
          still have options:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Small claims court</strong> handles smaller disputes quickly and without a
              lawyer, up to California&apos;s small claims limit.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>A lawsuit</strong> is the path for larger losses, and it can pursue the
              contractor directly, beyond the bond.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The contractor&apos;s liability insurance</strong> is what responds to property
              damage or bodily injury, when that is the kind of harm you suffered.
            </span>
          </li>
        </ul>

        <h2>Bonded, insured, and licensed</h2>
        <p>
          Each word does a different job for you. <strong>Licensed</strong> means the state vetted
          and authorized the contractor. <strong>Bonded</strong> means the{" "}
          {usd(facts.licenseBondAmount)} license bond can answer for violations of contractor law.{" "}
          <strong>Insured</strong> means liability insurance covers accidents and damage. Before you
          hire, confirm all three, and know{" "}
          <Link href="/resources/how-to-file-a-claim-against-a-contractor-bond">
            how to file a bond claim
          </Link>{" "}
          if you ever need it.
        </p>
      </Prose>
    </GuidePage>
  );
}
