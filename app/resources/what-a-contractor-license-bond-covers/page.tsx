import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("what-a-contractor-license-bond-covers")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `What the ${usd(facts.licenseBondAmount)} California contractor license bond actually covers: it protects consumers, employees, and the public, not the contractor. Reviewed by a licensed broker.`,
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
    q: "Does the bond protect me?",
    a: "No. The contractor license bond protects consumers, your employees, and the public. It is not insurance for your own losses. If you want protection for your business, that is general liability and other coverage.",
  },
  {
    q: "What can a valid claim cover?",
    a: `A valid claim under ${facts.licenseBondStatute} can cover willful or fraudulent violations of contractor law, failure to pay employee wages, and damages a consumer suffers from a code violation, up to the ${usd(facts.licenseBondAmount)} bond amount.`,
  },
  {
    q: "If the surety pays a claim, do I owe anything?",
    a: "Yes. A surety bond is not insurance. If the surety pays a valid claim, you reimburse it in full. That is why keeping your record clean protects your money, not just your license.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`A California contractor license bond protects consumers, your employees, and the public, not you. A valid claim under ${facts.licenseBondStatute} can cover willful or fraudulent violations of contractor law, unpaid employee wages, and consumer damages from a code violation, up to ${usd(facts.licenseBondAmount)}. It is not insurance, so you reimburse the surety for any claim it pays.`}
      intro={`The ${usd(facts.licenseBondAmount)} contractor license bond protects consumers, your employees, and the public, not you. Here is what a valid claim can cover, and what it cannot.`}
      faqs={faqs}
      related={[
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "Bonding vs Insurance", href: "/bonding-vs-insurance" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <Prose>
        <h2>Who the bond protects</h2>
        <p>
          The most common misread of the contractor license bond is assuming it protects the
          contractor. It does not. The <strong>{usd(facts.licenseBondAmount)}</strong> bond, required
          under <code>{facts.licenseBondStatute}</code>, protects <strong>consumers</strong>, your{" "}
          <strong>employees</strong>, and the <strong>public</strong> from harm caused by your work.
        </p>
        <p>
          You carry it as a condition of your license. The people it pays out to are the ones you
          serve, not you.
        </p>

        <h2>What a valid claim looks like</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Violations of contractor law.</strong> Willful or fraudulent breaches of the
              rules that govern licensed work.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Unpaid employee wages.</strong> Failure to pay wages your employees earned on
              the job.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Damages from a code violation.</strong> Losses a consumer suffers because your
              work violated building code.
            </span>
          </li>
        </ul>

        <h2>What it does not cover</h2>
        <p>
          The bond does not cover <strong>your own losses</strong>. Damaged tools, an injured crew
          member, a lawsuit against your business: that is what insurance is for, and it is a
          separate product. See <Link href="/bonding-vs-insurance">bonding vs insurance</Link> for
          the full split.
        </p>
        <p>
          And remember the reimbursement rule: if the surety pays a valid claim, you pay the surety
          back. The bond backstops the public, not your wallet. The full{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link> page covers how to get
          and keep one.
        </p>
      </Prose>
    </GuidePage>
  );
}
