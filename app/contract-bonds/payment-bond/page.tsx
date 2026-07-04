import type { Metadata } from "next";
import Link from "next/link";
import { BondPage } from "@/components/bond-page";
import { Prose } from "@/components/prose";
import { bonds } from "@/lib/regulatory";
import { hreflangFor } from "@/lib/i18n";

const bond = bonds["payment-bond"];
const parent = { name: "Contract Bonds", href: "/contract-bonds" };

export const metadata: Metadata = {
  title: "Payment Bond",
  description:
    "California labor and material payment bonds. Guarantee that subcontractors and suppliers are paid. Usually paired with a performance bond. Licensed broker, CA DOI #6009105.",
  alternates: {
    canonical: bond.href,
    languages: hreflangFor("/contract-bonds/payment-bond", "/es/fianza-de-pago"),
  },
};

const faqs = [
  {
    q: "What does a payment bond guarantee?",
    a: "It guarantees that the subcontractors, laborers, and suppliers on a project get paid. On public works, where a mechanics lien is not available against public property, the payment bond is the protection those parties rely on.",
  },
  {
    q: "Is a payment bond the same as a performance bond?",
    a: "No, but they are usually issued together. The performance bond protects the owner that the work is completed; the payment bond protects the people who supplied labor and materials. Together they are often called P&P bonds.",
  },
  {
    q: "How much does a payment bond cost?",
    a: "When issued with a performance bond, the combined premium is generally a single percentage of the contract amount rather than a separate charge. Rate is driven by contract size, credit, and experience.",
  },
];

export default function Page() {
  return (
    <BondPage
      bond={bond}
      parent={parent}
      eyebrow="Contract surety"
      h1="Payment Bonds in California"
      intro="A payment bond guarantees your subcontractors and suppliers are paid. It is usually paired with a performance bond and is standard on California public works."
      faqs={faqs}
      related={["performance-bond", "bid-bond", "contractor-license-bond"]}
      relatedGuideSlugs={["how-to-get-a-performance-bond", "surety-bond-capacity", "california-public-works-bonds-by-obligee", "how-to-bid-public-works-in-california"]}
    >
      <Prose>
        <h2>What a payment bond does</h2>
        <p>
          A payment bond (also called a labor and material bond) guarantees that the subcontractors,
          laborers, and suppliers on a project are paid. On public projects, those parties cannot file
          a mechanics lien against public property, so the payment bond is their security. It is
          almost always issued alongside a{" "}
          <Link href="/contract-bonds/performance-bond">performance bond</Link>.
        </p>

        <h2>When you need one</h2>
        <p>
          Payment bonds are required on most California public works contracts above a statutory
          threshold and are frequently required on larger private jobs. If your contract calls for a
          performance bond, it almost certainly calls for a payment bond too.
        </p>

        <h2>What it costs</h2>
        <p>
          When written with the performance bond, the payment bond is generally covered by the same
          combined premium, a percentage of the contract amount set by underwriting. We quote the pair
          together for your specific project.
        </p>
      </Prose>
    </BondPage>
  );
}
