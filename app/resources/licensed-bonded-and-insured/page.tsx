import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("licensed-bonded-and-insured")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Licensed, bonded, and insured are three separate things. What each means for a California contractor, what it protects, and how to verify all three.",
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
    q: "What does licensed, bonded, and insured mean?",
    a: `They are three separate protections. Licensed means the contractor holds a valid CSLB license to work legally. Bonded means they carry the ${usd(facts.licenseBondAmount)} contractor license bond that protects consumers from certain violations. Insured means they carry liability and, if they have employees, workers' compensation insurance.`,
  },
  {
    q: "Is bonded the same as insured?",
    a: "No, and this is the most common mix-up. The license bond protects consumers and the public from specific violations of contractor law. Insurance protects against property damage and injuries. A contractor can be bonded but underinsured, so verify both.",
  },
  {
    q: "Does the bond protect the homeowner or the contractor?",
    a: `The bond protects the homeowner and the public, not the contractor. A valid claim can compensate a consumer for certain violations, up to ${usd(facts.licenseBondAmount)}. It is not insurance for the contractor's own losses.`,
  },
  {
    q: "How do I confirm a contractor is all three?",
    a: "Look up the license at cslb.ca.gov to confirm it is active and the bond is on file, then ask the contractor for a certificate of insurance for liability and workers' compensation. Two quick checks cover all three.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`Licensed, bonded, and insured are three different things. Licensed means a valid CSLB license. Bonded means the ${usd(facts.licenseBondAmount)} license bond that protects consumers, not the contractor. Insured means liability and workers' compensation coverage. A contractor can be one without the others, so verify all three before you hire.`}
      intro="You see it on every truck and business card: licensed, bonded, and insured. It sounds like one thing, but it is three separate protections that cover very different risks. Here is what each one actually means, and how to confirm a California contractor has all three."
      faqs={faqs}
      related={[
        { label: "Verify a contractor", href: "/resources/how-to-verify-a-contractor-is-bonded" },
        { label: "What the bond pays a homeowner", href: "/resources/what-a-contractor-bond-pays-a-homeowner" },
        { label: "Bonding vs insurance", href: "/bonding-vs-insurance" },
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
      ]}
    >
      <StatGrid
        heading="Licensed, bonded, insured by the numbers"
        items={pickStats([
          "caLicenseBond",
          "caContractors",
          "priorLicenseBond",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>Three words, three protections</h2>
        <p>
          The phrase runs together, but each word covers a different risk and a different party.
          Understanding the split is what lets you actually vet a contractor instead of trusting a
          slogan.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-display font-bold text-navy-900">Term</th>
              <th className="p-4 font-display font-bold text-navy-900">What it is</th>
              <th className="p-4 font-display font-bold text-navy-900">Who it protects</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">Licensed</td>
              <td className="p-4 text-ink-700">A valid CSLB license to contract legally</td>
              <td className="p-4 text-ink-700">The public and the trade</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Bonded</td>
              <td className="p-4 text-ink-700">
                The {usd(facts.licenseBondAmount)} contractor license bond
              </td>
              <td className="p-4 text-ink-700">Consumers and employees</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Insured</td>
              <td className="p-4 text-ink-700">Liability and workers&apos; compensation coverage</td>
              <td className="p-4 text-ink-700">The contractor&apos;s business (and you)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>Licensed</h2>
        <p>
          Licensed means the contractor holds an active license from the Contractors State License
          Board. In California, most work of {usd(500)} or more in combined labor and materials
          requires one, and an unlicensed contractor cannot legally do the job or even sue to collect.
          The license is the foundation the other two build on. See{" "}
          <Link href="/contractor-license-bond">what the license requires</Link>.
        </p>

        <h2>Bonded</h2>
        <p>
          Bonded means the contractor carries the{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong> contractor license bond, required under{" "}
          <code>{facts.licenseBondStatute}</code>. Here is the part most people get wrong: the bond{" "}
          <strong>protects you, not the contractor</strong>. A valid claim can compensate a consumer
          for certain violations of contractor law, up to the bond amount, which is shared among
          claimants. It is not a warranty on workmanship and it is not insurance. See exactly{" "}
          <Link href="/resources/what-a-contractor-bond-pays-a-homeowner">
            what the bond pays a homeowner
          </Link>
          .
        </p>

        <h2>Insured</h2>
        <p>
          Insured means the contractor carries <strong>insurance</strong>, and it is a separate
          product from the bond. General liability covers property damage and injuries their work
          causes; workers&apos; compensation covers their crew and is legally required once they have
          employees. This is the coverage that pays when a job damages your home or someone gets hurt.
          The full split is in our{" "}
          <Link href="/bonding-vs-insurance">bonding vs. insurance</Link> guide.
        </p>

        <h2>Why the distinction protects you</h2>
        <p>
          A contractor can be bonded but carry thin insurance, or licensed but let a bond lapse. The
          three do not come as a package, so &quot;bonded and insured&quot; on a flyer is a claim to
          verify, not a guarantee. The bond answers for violations of the law; insurance answers for
          accidents and damage. You want both behind an active license.
        </p>

        <h2>How to verify all three</h2>
        <p>
          Two checks cover it. First, look up the license at{" "}
          <strong>cslb.ca.gov</strong> to confirm it is active and the bond is on file, exactly as our{" "}
          <Link href="/resources/how-to-verify-a-contractor-is-bonded">
            verify a contractor
          </Link>{" "}
          guide walks through. Second, ask the contractor for a current{" "}
          <strong>certificate of insurance</strong> showing liability and workers&apos; compensation.
          If a contractor hesitates on either, treat that as your answer.
        </p>
      </Prose>
    </GuidePage>
  );
}
