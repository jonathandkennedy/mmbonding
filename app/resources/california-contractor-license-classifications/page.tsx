import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd, clampDescription } from "@/lib/utils";

const guide = getGuide("california-contractor-license-classifications")!;

export const metadata: Metadata = {
  title: guide.title,
  description: clampDescription(`What the A, B, and C-## CSLB classifications mean, and why every class carries the same ${usd(facts.licenseBondAmount)} license bond. What changes by trade is the project and permit bonds.`),
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
    q: "Do different contractor classifications need different bonds?",
    a: `Not for the license bond. Every California classification, Class A to any C-##, carries the same ${usd(facts.licenseBondAmount)} contractor license bond. What changes by trade is the contract and permit bonds a specific job requires.`,
  },
  {
    q: "What is the difference between a Class A, B, and C license?",
    a: "Class A is general engineering (infrastructure and heavy civil work), Class B is general building (structures with two or more unrelated trades), and each C classification is a single specialty trade like electrical or plumbing.",
  },
  {
    q: "Does my classification change my license bond amount?",
    a: `No. The ${usd(facts.licenseBondAmount)} amount is set by ${facts.licenseBondStatute} and applies to every licensee regardless of classification. Only your credit affects your premium, not your trade.`,
  },
  {
    q: "Which bonds change depending on my trade?",
    a: "Project and permit bonds. A roofer pulling a city permit, an engineering firm bidding public works, and an excavator working in the public right of way each need different bonds for those specific jobs.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`No. Every California classification, from Class A engineering to a C-10 electrician, carries the same ${usd(facts.licenseBondAmount)} license bond. What changes by trade is the contract and permit bonds each one needs on specific jobs, like performance, payment, or encroachment bonds.`}
      intro={`California groups contractors into Class A, Class B, and dozens of C-## specialty trades. A common worry is that a specialty class means a different bond. For the license bond, it does not. Here is what actually changes.`}
      faqs={faqs}
      related={[
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "Bonds by Trade", href: "/contractor-license-bond/trades" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <Prose>
        <h2>What a CSLB classification is</h2>
        <p>
          A CSLB classification is the scope of work your license lets you contract for. When you
          pass the trade exam, you are licensed in one or more classifications, and you can only bid
          and perform work that falls within them. The classification defines your{" "}
          <strong>trade</strong>, not your bonding.
        </p>

        <h2>The groups: A, B, and C</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Class A, General Engineering.</strong> Fixed works that take specialized
              engineering knowledge: roads, bridges, grading, pipelines, and heavy civil work.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Class B, General Building.</strong> Structures that involve two or more
              unrelated trades. A general builder framing a home and coordinating the trades is a
              classic Class B.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Class B-2, Residential Remodeling.</strong> A newer general classification for
              residential remodel work involving at least three unrelated trades.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Class C, Specialty.</strong> Single-trade licenses, each identified by a
              number, for contractors who specialize in one craft.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Class D, Limited Specialty.</strong> Narrow specialty work that does not fall
              under a standard C classification.
            </span>
          </li>
        </ul>

        <h2>Common C classifications</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>C-10 Electrical.</strong> Wiring, panels, and electrical systems.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>C-36 Plumbing.</strong> Water, gas, and drainage piping and fixtures.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>C-20 HVAC.</strong> Heating, ventilation, and air conditioning systems.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>C-39 Roofing.</strong> Installing and repairing roof coverings.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>C-27 Landscaping.</strong> Grounds, irrigation, and outdoor improvements.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>C-8 Concrete.</strong> Forming, pouring, and finishing concrete.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>C-33 Painting.</strong> Surface preparation and coatings.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>C-46 Solar.</strong> Solar energy systems and installation.
            </span>
          </li>
        </ul>

        <h2>Do different classifications need different bonds?</h2>
        <p>
          For the license bond, no. Every classification carries the same{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong>{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link> under{" "}
          <code>{facts.licenseBondStatute}</code>. A C-10 electrician, a Class A engineer, and a
          Class B builder file the identical bond. Your classification does not raise or lower it,
          and it does not set your premium. Credit does.
        </p>
        <p>
          What changes by trade is the <strong>project and permit bonds</strong> a specific job
          requires. A contractor bidding public works may need a bid, performance, and payment bond.
          A trade pulling a city permit or working in the public right of way may need a permit or
          encroachment bond. Those are job-driven, not classification-driven.
        </p>

        <h2>See bonds by trade</h2>
        <p>
          Because the project bonds differ trade to trade, we break them down by craft. See{" "}
          <Link href="/contractor-license-bond/trades">bonds by trade</Link> to find what your
          specific classification tends to need on a job, then start a{" "}
          <Link href="/get-a-quote">quote</Link> for your license bond.
        </p>
      </Prose>
    </GuidePage>
  );
}
