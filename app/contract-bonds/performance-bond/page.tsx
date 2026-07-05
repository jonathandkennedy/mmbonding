import type { Metadata } from "next";
import Link from "next/link";
import { BondPage } from "@/components/bond-page";
import { Prose, Bullet } from "@/components/prose";
import { bonds } from "@/lib/regulatory";
import { hreflangFor } from "@/lib/i18n";

const bond = bonds["performance-bond"];
const parent = { name: "Contract Bonds", href: "/contract-bonds" };

export const metadata: Metadata = {
  title: "Performance Bond",
  description:
    "California performance bonds for construction. Guarantee project completion. Rates driven by contract size, credit, and experience. Hard-to-place capacity from a licensed broker, CA DOI #6009105.",
  alternates: {
    canonical: bond.href,
    languages: hreflangFor("/contract-bonds/performance-bond", "/es/fianza-de-cumplimiento"),
  },
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
    q: "What does a performance bond guarantee?",
    a: "It guarantees the owner that you will complete the project according to the contract terms. If you default, the surety steps in to ensure the work is finished, then looks to you to make it whole.",
  },
  {
    q: "How much does a performance bond cost?",
    a: "Rates are typically a small percentage of the contract amount, driven by contract size, your credit, your experience, and your work on hand. Larger and longer projects, and tougher credit, move the rate. We quote your specific job.",
  },
  {
    q: "Can a newer or credit-challenged contractor get bonded?",
    a: "Often, yes. This is where a broker earns its keep. We build a program and shop markets that write growing contractors and credit challenges, instead of declining at the first hurdle. Underwriting still applies.",
  },
];

export default function Page() {
  return (
    <BondPage
      bond={bond}
      parent={parent}
      eyebrow="Contract surety"
      h1="Performance Bonds in California"
      intro="A performance bond guarantees the owner that your project gets finished per the contract. We quote your specific job and build capacity for growth, including tougher credit and newer contractors."
      faqs={faqs}
      related={["bid-bond", "payment-bond", "contractor-license-bond"]}
      relatedGuideSlugs={["how-to-get-a-performance-bond", "why-contract-bonds-are-not-instant", "surety-bond-capacity", "california-public-works-bonds-by-obligee"]}
    >
      <Prose>
        <h2>What a performance bond does</h2>
        <p>
          A performance bond is the owner&apos;s guarantee that the work will be completed as agreed.
          It is usually required on public works and is common on larger private jobs, typically
          paired with a <Link href="/contract-bonds/payment-bond">payment bond</Link>. If the
          contractor defaults, the surety ensures completion and then seeks reimbursement from the
          contractor.
        </p>

        <h2>What drives the rate</h2>
        <p>Performance bond premiums are a percentage of the contract value. The biggest factors:</p>
        <ul>
          <li>
            <Bullet />
            <span>Contract size and duration</span>
          </li>
          <li>
            <Bullet />
            <span>Your credit and financial strength</span>
          </li>
          <li>
            <Bullet />
            <span>Your track record on similar work</span>
          </li>
          <li>
            <Bullet />
            <span>Work on hand and remaining capacity</span>
          </li>
        </ul>

        <h2>Building capacity for growth</h2>
        <p>
          The bigger the job, the more underwriting matters. As a broker we put together a surety
          program that grows your single-job and aggregate limits over time, and we shop the markets
          that handle hard-to-place files. Bidding work that is bigger than your current line? That is
          a conversation worth having early.
        </p>
      </Prose>
    </BondPage>
  );
}
