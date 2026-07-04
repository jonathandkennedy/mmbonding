import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("how-to-file-a-claim-against-a-contractor-bond")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `How a homeowner files a claim on a California contractor's ${usd(facts.licenseBondAmount)} bond: document the loss, find the surety on the CSLB record, and file the claim.`,
  alternates: { canonical: `/resources/${guide.slug}` },
};

const faqs = [
  {
    q: "How long do I have to file a bond claim?",
    a: "Deadlines vary by surety and by the type of claim, so act quickly. Ask the surety named on the CSLB record about their filing window as soon as you document the loss, and do not wait.",
  },
  {
    q: "How much can I recover from the bond?",
    a: `Up to ${usd(facts.licenseBondAmount)}, the face amount of the license bond, and that sum is shared among all valid claims against it. If your loss is larger, you may need small claims, a lawsuit, or the contractor's liability insurance.`,
  },
  {
    q: "Do I file with the surety or the CSLB?",
    a: "Both, and they serve different purposes. The surety handles the bond claim for compensation. A CSLB complaint triggers a state review of the contractor's conduct. Filing both protects you.",
  },
  {
    q: "Can I claim against an unlicensed contractor's bond?",
    a: "No, because an unlicensed contractor has no license bond. That is one reason to verify the license before you hire. If unlicensed work harmed you, report it to the CSLB and consider small claims or a lawsuit.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`How do you file a claim against a contractor's license bond? Document your loss, look up the contractor and their surety on the CSLB record at cslb.ca.gov, contact the surety to file a bond claim, and file a CSLB complaint. The bond is ${usd(facts.licenseBondAmount)} and shared among valid claims, so larger losses may need small claims or a lawsuit.`}
      intro={`If a licensed California contractor has harmed you, their ${usd(facts.licenseBondAmount)} license bond may help make you whole. Here is how a homeowner files a bond claim, step by step, and what to do when the loss is larger than the bond.`}
      faqs={faqs}
      related={[
        { label: "What the bond pays a homeowner", href: "/resources/what-a-contractor-bond-pays-a-homeowner" },
        { label: "Verify a contractor", href: "/resources/how-to-verify-a-contractor-is-bonded" },
        { label: "Claims & lapses", href: "/resources/contractor-bond-claims-and-lapses" },
      ]}
    >
      <Prose>
        <h2>Who the bond protects</h2>
        <p>
          The California <Link href="/contractor-license-bond">contractor license bond</Link> exists
          to protect the public. When a licensed contractor violates contractor law, the{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong> bond can compensate the people harmed by
          that violation, including homeowners, employees owed wages, and other proper claimants.
        </p>
        <p>
          A bond claim is not automatic, and it is not a way to punish a contractor over a
          disagreement. It is a formal demand against the surety company that issued the bond, paid
          only when the claim is valid under the law.
        </p>

        <h2>Step by step</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Document the loss.</strong> Gather your written contract, invoices, payments,
              photos, permits, and any messages. A clear paper trail is the most important thing you
              can bring to a claim.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Find the contractor and surety.</strong> Look up the license at{" "}
              <a href="https://www.cslb.ca.gov" target="_blank" rel="noopener noreferrer">
                cslb.ca.gov
              </a>
              . The record names the surety company and the bond number you will need.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Contact the surety to file a claim.</strong> Reach the surety listed on the
              record and ask how to file a bond claim. They will tell you what proof they require and
              which deadlines apply.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>File a complaint with the CSLB.</strong> A CSLB complaint runs in parallel. The
              CSLB can investigate the contractor and, in the right cases, help resolve the dispute.
            </span>
          </li>
        </ul>

        <h2>The limits</h2>
        <p>
          Be realistic about the number. The license bond is{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong>, and that amount is shared among all valid
          claims against it. If several people have claims, or your loss is larger than the bond, the
          bond alone may not make you whole.
        </p>
        <p>
          For losses beyond the bond, other paths exist: <strong>small claims court</strong> for
          smaller disputes, a <strong>lawsuit</strong> for larger ones, or the contractor&apos;s{" "}
          <strong>liability insurance</strong> when the harm is property damage or injury the bond
          does not cover.
        </p>

        <h2>Get help</h2>
        <p>
          You do not have to navigate this alone. The CSLB publishes consumer guidance and a
          complaint process at{" "}
          <a href="https://www.cslb.ca.gov" target="_blank" rel="noopener noreferrer">
            cslb.ca.gov
          </a>
          , and for a significant loss a California construction attorney can advise on the bond
          claim, small claims, and a lawsuit together. Before your next project, it is worth learning{" "}
          <Link href="/resources/how-to-verify-a-contractor-is-bonded">
            how to verify a contractor is licensed and bonded
          </Link>
          .
        </p>
      </Prose>
    </GuidePage>
  );
}
