import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("california-contractor-bond-requirements-by-city")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `Contractor bond rules don't change by California city: the ${usd(facts.licenseBondAmount)} CSLB license bond is statewide. Local permit and encroachment bonds are what vary.`,
  alternates: { canonical: `/resources/${guide.slug}` },
};

const faqs = [
  {
    q: "Do contractor bond requirements change from city to city in California?",
    a: `No. The ${usd(facts.licenseBondAmount)} CSLB license bond is set by state law under ${facts.licenseBondStatute} and is identical in every city. Only local permit and encroachment bonds vary by jurisdiction.`,
  },
  {
    q: "Does Los Angeles require a different contractor license bond than other cities?",
    a: "No. The state license bond is the same everywhere. A city like Los Angeles may separately require permit or encroachment bonds for work in the public right-of-way, but those are local permit requirements, not a different license bond.",
  },
  {
    q: "What is an encroachment bond?",
    a: "It is a local bond a city or county requires before you work in the public right-of-way, such as a sidewalk or street. It guarantees you restore public property, and the amount is set by that jurisdiction. Confirm the exact bond with the permit desk.",
  },
  {
    q: "Do I need a separate license bond for every city I work in?",
    a: "No. One state license bond covers you statewide. You only add a local permit or encroachment bond when a specific city requires it for a specific job, and we can place those alongside your license bond.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`No. The ${usd(facts.licenseBondAmount)} CSLB license bond is statewide, so it is identical in every California city. What varies locally is the permit and encroachment bonds a city or county requires for specific work, like cutting into the public right-of-way. We place both, in every California market.`}
      intro={`The ${usd(facts.licenseBondAmount)} CSLB license bond is statewide and uniform, so it does not change from city to city. Here is what stays the same everywhere, and the local permit bonds that actually vary.`}
      faqs={faqs}
      related={[
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "Permit bond requirements", href: "/resources/california-permit-bond-requirements" },
        { label: "Bonds by location", href: "/surety-bonds" },
      ]}
    >
      <Prose>
        <h2>The license bond is the same statewide</h2>
        <p>
          California sets the contractor license bond in state law, not by city. Under{" "}
          <strong>{facts.licenseBondStatute}</strong>, every CSLB-licensed contractor carries the
          same <strong>{usd(facts.licenseBondAmount)}</strong> license bond, whether you work in Los
          Angeles, Fresno, San Diego, or a town of two thousand people. The amount, the form, and
          the filing are identical statewide.
        </p>
        <p>
          So the short answer is no: your CSLB license bond requirement does not change when you
          cross a city line. A contractor in one city and a contractor in another post the exact
          same bond.
        </p>

        <h2>What actually varies by city</h2>
        <p>
          What changes locally is not the license bond. It is the{" "}
          <strong>permit and encroachment bonds</strong> a city or county can require before it
          lets you perform specific work, usually work that touches public property or the public
          right-of-way. These are set by the local agency, not the CSLB, so the rules, amounts, and
          forms differ from one jurisdiction to the next.
        </p>
        <p>
          Because a city sets these, always confirm the exact bond, amount, and form with the local
          building or public works department that issues your permit.
        </p>

        <h2>Examples of local bonds</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Encroachment bond.</strong> Required to work in the public right-of-way, such
              as a sidewalk, curb, or parkway fronting a job.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Street cut or excavation bond.</strong> Guarantees you restore the pavement
              after cutting into a public street for a utility tie-in or trench.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Grading bond.</strong> Backs a grading permit so the site is finished and
              stabilized to the approved plan.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Demolition bond.</strong> Some cities require it before issuing a demolition
              permit, covering safe teardown and site cleanup.
            </span>
          </li>
        </ul>
        <p>
          You will not need all of these. Which ones apply depends on the job and the city, which is
          exactly why the local permit desk is the source of truth. Our{" "}
          <Link href="/resources/california-permit-bond-requirements">permit bond requirements</Link>{" "}
          guide walks through how they work.
        </p>

        <h2>Find your city and your bonds</h2>
        <p>
          Start with the statewide bond every contractor needs, then layer on anything local. We
          place the <Link href="/contractor-license-bond">contractor license bond</Link> in every
          California market, and we write the local permit and encroachment bonds on top of it.
          Browse <Link href="/surety-bonds">bonds by location</Link> to find your city, or send us
          the permit and we will tell you exactly what it calls for. Underwriting still applies, and
          tougher credit is welcome.
        </p>
      </Prose>
    </GuidePage>
  );
}
