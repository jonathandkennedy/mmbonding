import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("surety-bond-with-itin-or-thin-credit")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Yes, contractors with an ITIN or thin U.S. credit can often get bonded. Some markets accept an ITIN. See the paths that work. Underwriting still applies.",
  alternates: { canonical: `/resources/${guide.slug}` },
};

const faqs = [
  {
    q: "Can I get a surety bond with an ITIN?",
    a: "Often, yes. Some surety markets will write a contractor using an ITIN, and a broker knows which ones. It is not a guarantee, because underwriting still applies, but an ITIN alone does not close the door.",
  },
  {
    q: "I have thin or no U.S. credit. Am I automatically declined?",
    a: "No. A thin file means less history to score, not an automatic decline. Sureties weigh it alongside your experience and the bond type. The license bond in particular is very placeable with a thin file.",
  },
  {
    q: "Which bond should I start with?",
    a: `Usually the ${usd(facts.licenseBondAmount)} contractor license bond. It is the most placeable bond for a new or thin-credit contractor, so it gets you licensed and working while you build a U.S. credit and work history.`,
  },
  {
    q: "What helps my application?",
    a: "Your ITIN or SSN, your business details, and any credit or trade references you can show. Funds control can also reassure a surety on a contract bond. We shop the file to markets that write these profiles.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`Often, yes. A thin U.S. credit file or an ITIN is not an automatic decline. Some markets accept an ITIN, and a broker knows which. For the ${usd(facts.licenseBondAmount)} license bond especially, we shop markets that write new-to-the-country and thin-credit contractors. Underwriting still applies, so no honest broker guarantees approval.`}
      intro="Contractors who are new to the country or have a thin credit file can still get bonded, and often do. Here is how sureties read a thin file, the paths that work, and what to have ready."
      faqs={faqs}
      related={[
        { label: "Hard-to-Place Bonds", href: "/hard-to-place-surety-bonds" },
        { label: "Bonded as a new contractor", href: "/resources/how-to-get-bonded-as-a-new-contractor" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <Prose>
        <h2>Yes, thin credit and an ITIN are placeable</h2>
        <p>
          If you are new to the United States, or your U.S. credit file is thin, you can still get
          bonded, and contractors do it every day. A thin file or an ITIN is not an automatic decline.
          It is simply a file with less history, and the right market reads it as exactly that.
        </p>

        <h2>How sureties view a thin file</h2>
        <p>
          Underwriting leans on credit because credit is a fast read on how someone handles
          obligations. When there is little U.S. credit to read, a surety weighs what is there
          instead.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Less history, not a red flag.</strong> A short or thin file lowers the score a
              surety can lean on, but it is not the same as bad credit.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The bond type matters.</strong> The{" "}
              <Link href="/contractor-license-bond">license bond</Link> is far more forgiving of a
              thin file than a large contract bond.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The market matters.</strong> Sureties differ on how they treat an ITIN and a
              thin file, which is the whole reason to shop it.
            </span>
          </li>
        </ul>

        <h2>Paths that work</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>A market that accepts an ITIN.</strong> Some sureties will write a contractor on
              an ITIN, and a broker knows which ones to approach.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>
                <Link href="/resources/funds-control-for-contractors">Funds control</Link>.
              </strong>{" "}
              Letting a neutral party disburse job funds lowers the surety&apos;s risk and can carry a
              file that credit alone could not.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Start with the {usd(facts.licenseBondAmount)} license bond.</strong> Get
              licensed and working on the most placeable bond, then build U.S. credit and a track
              record for bigger bonds later.
            </span>
          </li>
        </ul>

        <h2>What to have ready</h2>
        <p>A little preparation speeds the whole thing up. Have these on hand.</p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Your ITIN or SSN</strong> and basic business details, such as entity type and
              license status.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Any credit or trade references</strong> you can show, including suppliers who
              extend you terms.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Nothing fancy.</strong> We shop the file to markets that write new-to-the-country
              and thin-credit contractors. Underwriting still applies, and no honest broker guarantees
              approval. Start with a <Link href="/get-a-quote">quote</Link> or see{" "}
              <Link href="/hard-to-place-surety-bonds">hard-to-place bonds</Link>.
            </span>
          </li>
        </ul>
      </Prose>
    </GuidePage>
  );
}
