import type { Metadata } from "next";
import Link from "next/link";
import { BondPage } from "@/components/bond-page";
import { Prose, Bullet } from "@/components/prose";
import { bonds } from "@/lib/regulatory";
import { hreflangFor } from "@/lib/i18n";

const bond = bonds["bid-bond"];
const parent = { name: "Contract Bonds", href: "/contract-bonds" };

export const metadata: Metadata = {
  title: "Bid Bond",
  description:
    "California bid bonds for public and private construction. Guarantee your bid fast, often at no separate premium as part of your bonding program. Licensed broker, CA DOI #6009105.",
  alternates: {
    canonical: bond.href,
    languages: hreflangFor("/contract-bonds/bid-bond", "/es/fianza-de-licitacion"),
  },
};

const faqs = [
  {
    q: "What does a bid bond guarantee?",
    a: "It guarantees two things: that you will honor your bid if you win, and that you will furnish the required performance and payment bonds to take the contract. If you back out, the obligee can recover the difference up to the bond's penal sum.",
  },
  {
    q: "How much does a bid bond cost?",
    a: "Most bid bonds carry no separate premium. They are issued as part of your overall surety program, on the strength of your ability to be bonded for the project if you win. That is why establishing a bonding line with a broker matters.",
  },
  {
    q: "How fast can I get a bid bond?",
    a: "Once your surety program is set up, individual bid bonds can often be issued same day. If you have a bid deadline coming up, call us and we will move quickly.",
  },
];

export default function Page() {
  return (
    <BondPage
      bond={bond}
      parent={parent}
      eyebrow="Contract surety"
      h1="Bid Bonds for California Contractors"
      intro="A bid bond guarantees you will stand behind your bid and furnish the contract bonds if you win. We set up your bonding program so individual bids issue fast, often at no separate premium."
      faqs={faqs}
      related={["performance-bond", "payment-bond", "contractor-license-bond"]}
      relatedGuideSlugs={["bid-bond-cost", "how-to-get-a-performance-bond", "why-contract-bonds-are-not-instant", "california-public-works-bonds-by-obligee"]}
    >
      <Prose>
        <h2>What a bid bond does</h2>
        <p>
          On most public works and many private projects, the owner requires a bid bond with your
          proposal. It protects the owner if the winning bidder walks away or cannot furnish the
          required <Link href="/contract-bonds/performance-bond">performance</Link> and{" "}
          <Link href="/contract-bonds/payment-bond">payment</Link> bonds. The bond assures the owner
          that your bid is serious and that you are bondable for the job.
        </p>

        <h2>What it costs</h2>
        <p>
          Bid bonds are typically issued at <strong>no separate charge</strong>, as part of your
          surety program. The real question a surety answers is whether it would bond the finished
          contract if you win. That capacity is built up front, which is why working with a broker on
          your overall program is the key to fast, free bid bonds.
        </p>

        <h2>Getting one before a deadline</h2>
        <p>Once your program is in place, a specific bid bond can be turned around quickly. To move fast we will want:</p>
        <ul>
          <li>
            <Bullet />
            <span>The obligee, project name, and bid date</span>
          </li>
          <li>
            <Bullet />
            <span>The estimated contract amount and bid bond percentage required</span>
          </li>
          <li>
            <Bullet />
            <span>A current snapshot of your business and work on hand</span>
          </li>
        </ul>
      </Prose>
    </BondPage>
  );
}
