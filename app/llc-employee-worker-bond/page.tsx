import type { Metadata } from "next";
import Link from "next/link";
import { BondPage } from "@/components/bond-page";
import { Prose } from "@/components/prose";
import { bonds, facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const bond = bonds["llc-employee-worker-bond"];

export const metadata: Metadata = {
  title: "LLC Employee/Worker Bond ($100,000)",
  description: `The ${usd(facts.llcWorkerBondAmount)} employee/worker bond required of California LLC contractors, in addition to the license bond. Fast quotes from a licensed broker, CA DOI #6009105.`,
  alternates: { canonical: bond.href },
  openGraph: {
    images: [
      {
        url: `/images/bonds/${bond.key}-hero.webp`,
        width: 1200,
        height: 675,
        alt: `Illustration for the ${bond.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`/images/bonds/${bond.key}-hero.webp`],
  },
};

const faqs = [
  {
    q: "Why do LLC contractors need a $100,000 bond?",
    a: `California requires every contractor licensed as an LLC to carry a ${usd(facts.llcWorkerBondAmount)} employee/worker bond in addition to the ${usd(facts.licenseBondAmount)} license bond. It protects employees' wages, benefits, and contributions.`,
  },
  {
    q: "Is this instead of the contractor license bond?",
    a: "No. It is on top of it. An LLC contractor carries both the license bond and the $100,000 LLC employee/worker bond.",
  },
  {
    q: "What does the $100,000 bond cost?",
    a: "You pay a premium that is a percentage of the $100,000, set by underwriting and driven mostly by credit. We quote it together with your license bond so you see the full picture.",
  },
];

export default function Page() {
  return (
    <BondPage
      bond={bond}
      eyebrow="LLC contractors"
      h1="LLC Employee/Worker Bond"
      intro={`California LLC contractors must carry a ${usd(facts.llcWorkerBondAmount)} employee/worker bond in addition to the license bond. We quote both together.`}
      faqs={faqs}
      related={["contractor-license-bond", "bond-of-qualifying-individual"]}
    >
      <Prose>
        <h2>What the LLC bond is</h2>
        <p>
          Under <code>{facts.llcWorkerBondStatute}</code>, every contractor licensed as a limited
          liability company must file a <strong>{usd(facts.llcWorkerBondAmount)}</strong>{" "}
          employee/worker bond. It protects your employees&apos; wages, fringe benefits, and benefit
          contributions. It is required <strong>in addition to</strong> the standard{" "}
          <Link href="/contractor-license-bond">{usd(facts.licenseBondAmount)} license bond</Link>.
        </p>

        <h2>Stacking the requirements</h2>
        <p>
          As an LLC contractor you carry both bonds at once. Many LLCs also need general liability
          insurance to maintain the license. We place the bonds and route your insurance need to a
          trusted licensed partner so you can satisfy the full LLC requirement in one conversation.
        </p>
      </Prose>
    </BondPage>
  );
}
