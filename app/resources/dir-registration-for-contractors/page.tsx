import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";

const guide = getGuide("dir-registration-for-contractors")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "DIR registration for California contractors: what it is under Labor Code §1725.5, who needs it for public works, and how it sits alongside your bid, performance, and payment bonds. Reviewed by a licensed broker.",
  alternates: { canonical: `/resources/${guide.slug}` },
};

const faqs = [
  {
    q: "What is DIR registration?",
    a: "Registering with California's Department of Industrial Relations (DIR). Under Labor Code §1725.5, it is required for any contractor or subcontractor that bids or works on public works projects. It is an annual registration with an annual fee.",
  },
  {
    q: "Who needs to register with the DIR?",
    a: "Any contractor or subcontractor that bids or works on public works in California. If public work is in your plans, you register before you bid. Confirm current requirements with the DIR.",
  },
  {
    q: "Does DIR registration replace my bonds?",
    a: "No. Registration is separate from, but parallel to, your bonding. You still need the bid, performance, and payment bonds the project requires.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      intro="If you want public works in California, DIR registration comes before the bid. Here is what it is, who needs it, and how it sits next to the bonds you still have to carry."
      faqs={faqs}
      related={[
        { label: "How to Bid Public Works", href: "/resources/how-to-bid-public-works-in-california" },
        { label: "Contract Bonds", href: "/contract-bonds" },
        { label: "Performance Bonds", href: "/contract-bonds/performance-bond" },
      ]}
    >
      <Prose>
        <h2>What DIR registration is</h2>
        <p>
          DIR registration is registering with California&apos;s{" "}
          <strong>Department of Industrial Relations (DIR)</strong>. Under{" "}
          <strong>Labor Code §1725.5</strong>, it is required for any contractor or subcontractor
          that bids or works on public works projects in the state.
        </p>
        <p>
          It is an <strong>annual registration</strong> with an annual fee, so it is something you
          keep current, not a one-time step. Requirements can change, so confirm the current rules
          with the DIR before you rely on them.
        </p>

        <h2>Who needs it</h2>
        <p>
          The requirement is broad. It is not just the prime contractor.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Contractors and subcontractors.</strong> Anyone that bids or works on a public
              works project needs to be registered.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Before you bid.</strong> If public work is in your plans, register first.
              Read the{" "}
              <Link href="/resources/how-to-bid-public-works-in-california">
                how to bid public works in California
              </Link>{" "}
              guide for where bidding fits.
            </span>
          </li>
        </ul>

        <h2>DIR registration vs. bonding</h2>
        <p>
          Registration and bonding are two different things, and you need both. DIR registration is
          separate from, but <strong>parallel to</strong>, your bonding. Being registered does not
          bond your project, and being bonded does not register you.
        </p>
        <p>
          You still need the <Link href="/contract-bonds">contract bonds</Link> the job requires:
          the bid bond to bid, then the{" "}
          <Link href="/contract-bonds/performance-bond">performance bond</Link> and payment bond if
          you win. Handle the registration with the DIR, and let us handle the bonding.
        </p>
      </Prose>
    </GuidePage>
  );
}
