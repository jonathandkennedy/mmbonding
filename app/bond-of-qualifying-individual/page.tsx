import type { Metadata } from "next";
import Link from "next/link";
import { BondPage } from "@/components/bond-page";
import { Prose, Bullet } from "@/components/prose";
import { bonds, facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const bond = bonds["bond-of-qualifying-individual"];

export const metadata: Metadata = {
  title: "Bond of Qualifying Individual (BQI)",
  description: `The ${usd(facts.bqiAmount)} California Bond of Qualifying Individual, required when a license is qualified by an RME or a minority-owner RMO. Fast quotes from a licensed broker, CA DOI #6009105.`,
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
    q: "When is a Bond of Qualifying Individual required?",
    a: "It is required when the person qualifying the license is a Responsible Managing Employee (RME), or a Responsible Managing Officer (RMO) who owns less than 10% of the voting stock of the company. It is in addition to the license bond.",
  },
  {
    q: "How much is the BQI?",
    a: `The bond amount is ${usd(facts.bqiAmount)}, the same as the license bond. You pay a premium, not the full amount.`,
  },
  {
    q: "Is there a way to avoid the BQI?",
    a: "Yes. If the qualifier is an owner holding 10% or more of the company, the BQI is generally not required. The right structure depends on your situation, and we can point you to the exemption path.",
  },
];

export default function Page() {
  return (
    <BondPage
      bond={bond}
      eyebrow="Contractor licensing"
      h1="Bond of Qualifying Individual"
      intro={`A ${usd(facts.bqiAmount)} bond required when your license is qualified by an RME, or by an RMO who owns less than 10% of the company. We quote it alongside your license bond.`}
      faqs={faqs}
      related={["contractor-license-bond", "llc-employee-worker-bond", "disciplinary-bond"]}
    >
      <Prose>
        <h2>What the BQI is</h2>
        <p>
          The Bond of Qualifying Individual is a <strong>{usd(facts.bqiAmount)}</strong> bond required
          under <code>{facts.bqiStatute}</code> in specific qualifying situations. It sits on top of
          the standard <Link href="/contractor-license-bond">contractor license bond</Link>.
        </p>

        <h2>Who needs it</h2>
        <p>A BQI is required when the person qualifying the license is:</p>
        <ul>
          <li>
            <Bullet />
            <span>A Responsible Managing Employee (RME), or</span>
          </li>
          <li>
            <Bullet />
            <span>
              A Responsible Managing Officer (RMO) who owns less than 10% of the company&apos;s voting
              stock
            </span>
          </li>
        </ul>
        <p>
          If the qualifier owns 10% or more, the BQI is generally not required. We will confirm which
          applies to you before you buy anything you do not need.
        </p>
      </Prose>
    </BondPage>
  );
}
