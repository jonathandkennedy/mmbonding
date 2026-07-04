import type { Metadata } from "next";
import Link from "next/link";
import { BondPage } from "@/components/bond-page";
import { Prose } from "@/components/prose";
import { bonds, facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const bond = bonds["disciplinary-bond"];

export const metadata: Metadata = {
  title: "CSLB Disciplinary Bond",
  description:
    "California CSLB disciplinary bonds to reinstate a suspended or revoked license. Amount set by the Registrar, with a 2-year minimum. Hard-to-place specialists, CA DOI #6009105.",
  alternates: { canonical: bond.href },
};

const faqs = [
  {
    q: "When do I need a disciplinary bond?",
    a: "When the CSLB requires one as a condition of reinstating or maintaining a license after a disciplinary action, such as a suspension or revocation. The Registrar sets the amount and the term.",
  },
  {
    q: "How much is a disciplinary bond?",
    a: `The amount is set by the Registrar. It is at least ${usd(facts.disciplinaryMin)} and can be up to ${facts.disciplinaryMaxMultiple} times the standard license bond amount, with a minimum term of ${facts.disciplinaryMinYears} years.`,
  },
  {
    q: "I have a disciplinary history. Can you still place it?",
    a: "Yes, this is squarely our specialty. Contractors needing a disciplinary bond have history by definition, which is exactly the kind of file instant-issue sites reject and we work to place.",
  },
];

export default function Page() {
  return (
    <BondPage
      bond={bond}
      eyebrow="Reinstatement · hard-to-place"
      h1="CSLB Disciplinary Bond"
      intro="Required to reinstate a license after a CSLB disciplinary action. The amount is set by the Registrar. These files have history by definition, which is exactly what we specialize in placing."
      faqs={faqs}
      related={["contractor-license-bond", "bond-of-qualifying-individual"]}
    >
      <Prose>
        <h2>What the disciplinary bond is</h2>
        <p>
          A disciplinary bond is required by the CSLB as a condition of reinstating, or continuing, a
          license after a disciplinary action. It provides additional protection to the public given
          the licensee&apos;s history.
        </p>

        <h2>Amount and term</h2>
        <p>
          The Registrar sets the amount case by case. It is at least{" "}
          <strong>{usd(facts.disciplinaryMin)}</strong> and can run up to{" "}
          <strong>{facts.disciplinaryMaxMultiple} times</strong> the standard{" "}
          <Link href="/contractor-license-bond">license bond</Link>, for a minimum of{" "}
          <strong>{facts.disciplinaryMinYears} years</strong>.
        </p>

        <h2>Why a broker matters here</h2>
        <p>
          By definition, a contractor who needs a disciplinary bond has a record. That makes it a
          hard-to-place file, the kind a vending-machine site auto-declines. We shop the markets that
          underwrite these situations and work to get you reinstated. Underwriting still applies, and
          we never promise guaranteed approval.
        </p>
      </Prose>
    </BondPage>
  );
}
