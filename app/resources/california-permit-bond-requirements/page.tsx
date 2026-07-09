import type { Metadata } from "next";
import { clampDescription } from "@/lib/utils";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("california-permit-bond-requirements")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    clampDescription("When California cities, counties, and Caltrans require a permit or encroachment bond for public right-of-way work, how the amount is set, and how to get one fast."),
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
    q: "When does California require a permit bond?",
    a: "An agency requires one when your permit touches the public right-of-way or public infrastructure: excavating a street, building sidewalks and utilities in a subdivision, grading, demolition near the road, or drilling a well. The permit conditions spell out whether a bond is required.",
  },
  {
    q: "Who sets the bond amount?",
    a: "The agency does, not you and not us. Most cities and counties size the bond from the engineer's estimate of the work in the right-of-way, so the amount tracks the scope of your permit.",
  },
  {
    q: "How fast can I get a permit bond?",
    a: "Most permit bonds are small and issue quickly, often the same day, so you can pull your permit without delay. We confirm the exact form and wording your agency requires before we issue.",
  },
  {
    q: "Is a permit bond the same as insurance?",
    a: "No. A permit bond guarantees the agency that you will restore the right-of-way and meet the permit conditions. If a valid claim is paid, you repay the surety. It protects the public agency, not you.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="When does California require a permit bond? Cities, counties, and Caltrans require a permit or encroachment bond for work in the public right-of-way, guaranteeing you restore it and meet the permit's conditions. The agency sets the amount from its cost estimate. Most permit bonds are small and we issue them fast, often same day."
      intro="California agencies require a permit bond before you disturb the public right-of-way. Here is when one is required, who sets the amount, and how to get it issued in time to pull your permit."
      faqs={faqs}
      related={[
        { label: "Commercial & Permit Bonds", href: "/commercial-bonds" },
        { label: "Encroachment Bond", href: "/commercial-bonds/encroachment-bond" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="California permit bonds by the numbers"
        items={pickStats(["caLicenseBond", "caContractors", "usSuretyPremium"])}
      />

      <Prose>
        <h2>What a permit bond is</h2>
        <p>
          A <strong>permit bond</strong> is a guarantee to a government agency that you will complete
          permitted work to code, restore anything you disturb in the public right-of-way, and meet
          the conditions printed on the permit. It protects the agency and the public, not you. If a
          valid claim is paid, you repay the surety, so underwriting still applies.
        </p>
        <p>
          Many California agencies call this an <strong>encroachment bond</strong> when the work
          happens in the street, sidewalk, or other public right-of-way. The idea is the same: the
          agency wants assurance that the road is put back the way it found it.
        </p>

        <h2>When California agencies require one</h2>
        <p>
          A city, county, or Caltrans typically conditions your permit on a bond whenever the work
          touches public infrastructure. Common triggers include:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Work in the public right-of-way.</strong> Anything in the street, sidewalk,
              curb, or gutter, which is where an encroachment or permit bond usually comes in.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Subdivisions and site improvements.</strong> Public streets, sidewalks,
              sewers, and utilities that the agency will eventually own.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Grading.</strong> Larger earthwork permits often require a bond to guarantee
              erosion control and that the site is left stable.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Demolition.</strong> Especially near a public street, to cover cleanup and
              restoration.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Well drilling.</strong> County health or public works departments often bond
              well work to guarantee proper construction and destruction.
            </span>
          </li>
        </ul>

        <h2>Common California permit bonds</h2>
        <p>
          These are the permit and right-of-way bonds we place most often. Each has its own page with
          the details for that bond:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <Link href="/commercial-bonds/encroachment-bond">Encroachment bond</Link>, for work in
              the public right-of-way.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <Link href="/commercial-bonds/utility-street-cut-bond">Utility and street cut bond</Link>
              , for cutting into a street to reach utilities.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <Link href="/commercial-bonds/subdivision-bond">Subdivision and site improvement bond</Link>
              , guaranteeing the public improvements in a development.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <Link href="/commercial-bonds/street-improvement-bond">Street improvement and grading bond</Link>
              , for street work and larger earthwork.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <Link href="/commercial-bonds/demolition-bond">Demolition bond</Link>, for teardown and
              site cleanup.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <Link href="/commercial-bonds/well-drilling-bond">Well drilling bond</Link>, for water
              well construction and destruction.
            </span>
          </li>
        </ul>
        <p>
          Not sure which one your permit calls for? The{" "}
          <Link href="/commercial-bonds">commercial and permit bonds</Link> hub lists them all, and we
          can match your permit to the right bond.
        </p>

        <h2>How the amount is set</h2>
        <p>
          You do not choose the bond amount, and neither do we. The <strong>agency</strong> sets it,
          almost always from its <strong>engineer&apos;s estimate</strong> of the work in the public
          right-of-way. A small utility trench might carry a modest bond, while a full subdivision of
          public streets and utilities carries a much larger one. Whatever the agency requires, that
          becomes the face amount of the bond. As general guidance, expect the amount to track the
          scope of your permit.
        </p>

        <h2>How to get one fast</h2>
        <p>
          Most permit bonds are small, and small bonds move quickly, often issuing the{" "}
          <strong>same day</strong>. The key is getting the details right: the correct bond amount and
          the exact bond form and wording your agency requires. Have your permit or the agency&apos;s
          bond requirement handy, and we confirm the form before we issue so it is accepted the first
          time.
        </p>
        <p>
          Ready to pull your permit? <Link href="/get-a-quote">Start a quote</Link>, or read the full{" "}
          <Link href="/commercial-bonds/encroachment-bond">encroachment bond</Link> page if that is the
          one your agency named.
        </p>
      </Prose>
    </GuidePage>
  );
}
