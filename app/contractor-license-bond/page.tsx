import type { Metadata } from "next";
import Link from "next/link";
import { BondPage } from "@/components/bond-page";
import { Prose, Bullet } from "@/components/prose";
import { bonds, facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const bond = bonds["contractor-license-bond"];

export const metadata: Metadata = {
  title: "California Contractor License Bond",
  description: `The ${usd(facts.licenseBondAmount)} California contractor license bond, required under ${facts.licenseBondStatute}. Fast quotes, bad credit welcome. Licensed broker, CA DOI #6009105.`,
  alternates: { canonical: bond.href },
};

const faqs = [
  {
    q: "How much is the California contractor license bond?",
    a: `The bond amount is ${usd(facts.licenseBondAmount)}, set by ${facts.licenseBondStatute}. You do not pay that amount. You pay an annual premium, which is a small percentage of it, based mostly on your credit.`,
  },
  {
    q: "Who has to have a contractor license bond in California?",
    a: "Every contractor licensed by the CSLB, with no exemptions. You need it to issue a new license, renew an active one, or reactivate an inactive one. It applies to sole proprietors, corporations, and LLCs alike.",
  },
  {
    q: "What does the contractor license bond actually cover?",
    a: "It protects consumers and employees, not the contractor. A valid claim can be paid out for things like willful or fraudulent violations of the contractor law, failure to pay employee wages, or damages from a code violation. If the surety pays a claim, you must reimburse it.",
  },
  {
    q: "Can I get the license bond with bad credit?",
    a: "Usually, yes. The license bond is one of the most placeable bonds even with credit challenges. Rates are higher for tougher credit, but as a broker we shop multiple markets to get you placed rather than declining you outright.",
  },
  {
    q: "How fast can the bond be filed with the CSLB?",
    a: `Once you are quoted and the premium is paid, your surety e-files the bond with the CSLB. Filings typically post within ${facts.filingWindow}. Many qualifying applicants are bonded the same day.`,
  },
];

export default function Page() {
  return (
    <BondPage
      bond={bond}
      eyebrow="Flagship · CSLB"
      h1="California Contractor License Bond"
      intro={`The ${usd(facts.licenseBondAmount)} bond every licensed California contractor must carry. We quote it fast, place it even with bad credit, and e-file it with the CSLB for you.`}
      heroFacts={[
        { label: "Bond amount", value: usd(facts.licenseBondAmount) },
        { label: "Statute", value: facts.licenseBondStatute },
        { label: "CSLB form", value: facts.licenseBondForm },
        { label: "Filing", value: facts.filingWindow },
      ]}
      faqs={faqs}
      related={[
        "bond-of-qualifying-individual",
        "llc-employee-worker-bond",
        "disciplinary-bond",
      ]}
    >
      <Prose>
        <h2>What the contractor license bond is</h2>
        <p>
          The California contractor license bond is a{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong> surety bond required of every contractor
          licensed by the Contractors State License Board (CSLB). It is mandated by{" "}
          <code>{facts.licenseBondStatute}</code> and filed on{" "}
          <strong>CSLB Form {facts.licenseBondForm}</strong>. The amount was raised to{" "}
          {usd(facts.licenseBondAmount)} by SB 607, effective January 1, 2023.
        </p>
        <p>
          A surety bond is not insurance for you. It is a three-party guarantee: you (the principal),
          the CSLB and public (the obligee and beneficiaries), and the surety. It protects consumers
          and your employees against certain violations of the contractor law. If the surety pays a
          valid claim, you reimburse the surety.
        </p>

        <h2>Who needs one</h2>
        <p>
          Every CSLB-licensed contractor, with <strong>no exemptions</strong>. You must have an
          active bond on file to:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>Issue a brand-new contractor license</span>
          </li>
          <li>
            <Bullet />
            <span>Renew an existing active license</span>
          </li>
          <li>
            <Bullet />
            <span>Reactivate a license that has gone inactive</span>
          </li>
          <li>
            <Bullet />
            <span>Maintain a license in good standing year to year</span>
          </li>
        </ul>
        <p>
          It applies whether you are a sole proprietor, a corporation, or an LLC. If you are switching
          your business structure (a sole proprietor moving to an{" "}
          <Link href="/llc-employee-worker-bond">LLC</Link>, for example), your bonding requirements
          change too, and we will walk you through it.
        </p>

        <h2>What it costs</h2>
        <p>
          You pay a <strong>premium</strong>, not the {usd(facts.licenseBondAmount)} face amount. The
          premium is an annual percentage driven mostly by your personal credit, typically a{" "}
          <strong>
            small percentage of the bond amount ({facts.licensePremiumRange.lowPct}% to{" "}
            {facts.licensePremiumRange.highPct}%)
          </strong>
          . Strong credit can start in the low hundreds of dollars per year. Tougher credit costs
          more, but is still very placeable.
        </p>
        <p>
          Because we are a broker, we shop your file across multiple markets and quote the most
          competitive rate you qualify for, instead of a single take-it-or-leave-it number.
        </p>

        <h2>The other bonds contractors often need</h2>
        <p>
          The license bond is the baseline. Depending on your license structure, you may also need:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              A <Link href="/bond-of-qualifying-individual">Bond of Qualifying Individual</Link> (
              {usd(facts.bqiAmount)}) when your license is qualified by an RME, or by an RMO owning
              less than 10% of the company.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              The <Link href="/llc-employee-worker-bond">LLC employee/worker bond</Link> (
              {usd(facts.llcWorkerBondAmount)}) if you are licensed as an LLC, on top of the license
              bond.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              A <Link href="/disciplinary-bond">disciplinary bond</Link> if you are reinstating a
              license after a CSLB disciplinary action.
            </span>
          </li>
        </ul>

        <h2>How filing works</h2>
        <p>
          Once you accept your quote and pay the premium, your surety e-files the bond directly with
          the CSLB. Electronic filings typically post within{" "}
          <strong>{facts.filingWindow}</strong>, and many qualifying applicants are bonded the same
          business day. We handle the paperwork and confirm the filing for you.
        </p>
      </Prose>
    </BondPage>
  );
}
