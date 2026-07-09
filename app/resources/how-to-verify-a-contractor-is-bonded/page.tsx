import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("how-to-verify-a-contractor-is-bonded")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `How to verify a California contractor is licensed and bonded: look up the license at cslb.ca.gov and confirm the ${usd(facts.licenseBondAmount)} bond is on file.`,
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
    q: "Where do I look up a California contractor?",
    a: "Use the CSLB license lookup at cslb.ca.gov. You can search by license number, business name, or the contractor's name. The record shows the license status, classification, bond, and any disciplinary history.",
  },
  {
    q: "Does bonded mean I am covered if the work goes wrong?",
    a: `Not the way insurance would be. The license bond can compensate you for specific violations of contractor law, up to ${usd(facts.licenseBondAmount)}, and it is shared among valid claims. It is not a general warranty on workmanship, so ask for proof of liability insurance too.`,
  },
  {
    q: "What if the contractor is not licensed?",
    a: "Unlicensed contracting is illegal for most California jobs above a small dollar threshold, and an unlicensed contractor has no license bond behind the work. Verify the license before you hire, and report unlicensed activity to the CSLB.",
  },
  {
    q: "Is the CSLB the official source?",
    a: "Yes. The CSLB is the California state agency that licenses and regulates contractors. Its website, cslb.ca.gov, is the official place to verify a license, confirm the bond, and file a complaint.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`How do you check a contractor is licensed and bonded? Look up their license number at the CSLB (cslb.ca.gov). Confirm the license is active, the classification fits your job, and the ${usd(facts.licenseBondAmount)} contractor license bond is on file. Remember bonded is not insured: ask separately for proof of liability insurance before you hire.`}
      intro="Before you hand a California contractor a deposit, you can confirm they are licensed and bonded in a few minutes at cslb.ca.gov. Here is exactly what to check, and what bonded does and does not mean for you."
      faqs={faqs}
      related={[
        { label: "What the bond covers", href: "/resources/what-a-contractor-license-bond-covers" },
        { label: "Bonded vs insured", href: "/bonding-vs-insurance" },
        { label: "File a bond claim", href: "/resources/how-to-file-a-claim-against-a-contractor-bond" },
      ]}
    >
      <StatGrid
        heading="Verifying a contractor by the numbers"
        items={pickStats([
          "caLicenseBond",
          "caContractors",
          "priorLicenseBond",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>Check the CSLB license first</h2>
        <p>
          Every legitimate California contractor carries a license number from the{" "}
          <strong>Contractors State License Board (CSLB)</strong>. Start there. Go to{" "}
          <a href="https://www.cslb.ca.gov" target="_blank" rel="noopener noreferrer">
            cslb.ca.gov
          </a>
          , open the license lookup, and search by the contractor&apos;s license number, business
          name, or personal name.
        </p>
        <p>
          Confirm two things on the record: the status reads <strong>Active</strong> (not expired,
          suspended, or inactive), and the <strong>classification</strong> matches your project. A
          license classified for general building (B) or a specific trade (the C classifications)
          tells you the contractor is authorized for that kind of work.
        </p>

        <h2>Confirm the bond is on file</h2>
        <p>
          California law requires every licensed contractor to carry a{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link> of{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong>. The CSLB record shows that bond, the
          surety company behind it, and the bond number, right alongside the license status.
        </p>
        <p>
          If the record shows the bond is missing, cancelled, or expired, the license may be
          suspended. A contractor cannot legally operate without the bond on file, so treat a
          bonding gap as a reason to pause.
        </p>

        <h2>Bonded is not insured</h2>
        <p>
          &quot;Licensed, bonded, and insured&quot; is a familiar phrase, but the three words mean
          different things:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Licensed</strong> means the state has vetted the contractor&apos;s experience
              and issued a number you can verify.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Bonded</strong> means the {usd(facts.licenseBondAmount)} license bond is on
              file. It can compensate you for certain violations of contractor law, up to the bond
              amount. It is not a warranty on the work itself.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Insured</strong> means the contractor carries liability insurance for property
              damage and injuries. The license bond is not insurance, so ask for proof of coverage
              separately.
            </span>
          </li>
        </ul>
        <p>
          For the full difference, see{" "}
          <Link href="/bonding-vs-insurance">bonding vs. insurance</Link>.
        </p>

        <h2>Red flags</h2>
        <ul>
          <li>
            <Bullet />
            <span>No license number, or a refusal to give one before you sign.</span>
          </li>
          <li>
            <Bullet />
            <span>A license that reads inactive, suspended, or expired on the CSLB record.</span>
          </li>
          <li>
            <Bullet />
            <span>
              Pressure to skip a written contract, or a demand for a large cash deposit up front.
            </span>
          </li>
          <li>
            <Bullet />
            <span>A bond or insurance the contractor will describe but not document.</span>
          </li>
        </ul>
        <p>
          When something looks off, check the license history and any disciplinary actions on the
          same CSLB record, or call the CSLB directly. If you have already been harmed, here is{" "}
          <Link href="/resources/how-to-file-a-claim-against-a-contractor-bond">
            how to file a claim against the bond
          </Link>
          .
        </p>
      </Prose>
    </GuidePage>
  );
}
