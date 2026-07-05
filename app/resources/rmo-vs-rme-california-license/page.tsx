import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("rmo-vs-rme-california-license")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `An RMO qualifies a CSLB license as an officer or owner; an RME as an employee. An RME, or an RMO owning under 10%, needs a ${usd(facts.bqiAmount)} BQI bond.`,
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
    q: "What is the difference between an RMO and an RME?",
    a: "An RMO, a Responsible Managing Officer, is an officer or owner of the company who qualifies the license. An RME, a Responsible Managing Employee, is an employee who qualifies it. The core difference is ownership: an RMO owns part of the business, an RME does not.",
  },
  {
    q: "When does a California contractor need a Bond of Qualifying Individual?",
    a: `When the license is qualified by an RME, or by an RMO who owns less than 10% of the company. In those cases ${facts.bqiStatute} requires a ${usd(facts.bqiAmount)} Bond of Qualifying Individual.`,
  },
  {
    q: "Does an owner who qualifies the license need the BQI bond?",
    a: "Usually not, if the owner is an RMO holding 10% or more of the company. An RMO owning less than 10% does need it. Ownership rules can change, so confirm your case with the CSLB before filing.",
  },
  {
    q: "Is the BQI bond separate from the license bond?",
    a: `Yes. The ${usd(facts.bqiAmount)} Bond of Qualifying Individual is in addition to the ${usd(facts.licenseBondAmount)} license bond, not a replacement. A company qualified by an RME carries both at the same time.`,
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`An RMO is a Responsible Managing Officer or owner who qualifies a license; an RME is a Responsible Managing Employee who does. When an RME, or an RMO owning less than 10% of the company, qualifies the license, California requires a ${usd(facts.bqiAmount)} Bond of Qualifying Individual.`}
      intro={`An RMO qualifies a California contractor license from ownership; an RME qualifies it as an employee. That distinction decides whether you also need a ${usd(facts.bqiAmount)} Bond of Qualifying Individual. Here is how the roles and the bond fit together.`}
      faqs={faqs}
      related={[
        { label: "Bond of Qualifying Individual", href: "/bond-of-qualifying-individual" },
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <Prose>
        <h2>What a qualifier is</h2>
        <p>
          Every California contractor license is tied to a person who proves the required experience
          and passes the exams. That person is the <strong>qualifier</strong>, or qualifying
          individual. The qualifier is the reason the license can exist, so the CSLB cares a great
          deal about who they are and how they are connected to the business.
        </p>
        <p>
          A license can be qualified in one of two ways: by a Responsible Managing Officer or by a
          Responsible Managing Employee. The difference between them is what decides whether an extra
          bond is required.
        </p>

        <h2>RMO vs. RME</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>RMO (Responsible Managing Officer).</strong> An officer or owner of the
              company, a person with an ownership stake and a title, who qualifies the license from
              inside ownership.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>RME (Responsible Managing Employee).</strong> An employee, not an owner, whose
              experience qualifies the license. The RME must be a bona fide employee actively
              engaged in the business.
            </span>
          </li>
        </ul>
        <p>
          The simple version: an RMO qualifies from ownership, an RME qualifies as staff. That single
          distinction, plus how much of the company an RMO owns, drives the bond question below.
        </p>

        <h2>When the BQI bond is required</h2>
        <p>
          California requires a <strong>Bond of Qualifying Individual</strong> (BQI) when the person
          qualifying the license is not a substantial owner. Under{" "}
          <strong>{facts.bqiStatute}</strong>, the BQI applies when the license is qualified by:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>an <strong>RME</strong>, since an employee qualifier is never an owner; or</span>
          </li>
          <li>
            <Bullet />
            <span>
              an <strong>RMO who owns less than 10%</strong> of the company&apos;s voting stock or
              membership interest.
            </span>
          </li>
        </ul>
        <p>
          When the RMO owns 10% or more, the BQI is generally not required. Because ownership tests
          and exemptions can change, confirm your situation with the CSLB before you file.
        </p>

        <h2>The bond itself</h2>
        <p>
          The BQI is a <strong>{usd(facts.bqiAmount)}</strong> bond, the same face amount as the
          license bond, and it is separate from and in addition to your{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link>. A company qualified
          by an RME therefore carries both bonds at once.
        </p>
        <p>
          We place the{" "}
          <Link href="/bond-of-qualifying-individual">Bond of Qualifying Individual</Link> right
          alongside the license bond, on one submission. Start a{" "}
          <Link href="/get-a-quote">quote</Link> and we will confirm which bonds your structure
          needs. Underwriting still applies, and we place tougher credit too.
        </p>
      </Prose>
    </GuidePage>
  );
}
