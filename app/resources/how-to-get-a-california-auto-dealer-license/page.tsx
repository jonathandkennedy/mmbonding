import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-to-get-a-california-auto-dealer-license")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "The DMV path to a California dealer license: the six-hour course, the exam, a business location, the application, and the $50,000 dealer bond.",
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
    q: "What are the steps to get a California auto dealer license?",
    a: "Complete a six-hour DMV pre-licensing course, pass the DMV dealer exam, secure a compliant business location, submit your application packet with fingerprints and fees, and file the $50,000 dealer bond. The bond is the piece we handle.",
  },
  {
    q: "How hard is the California dealer exam?",
    a: "It is a 40-question multiple-choice test, and you need 70% to pass. You get a few attempts with a short wait between tries. The six-hour pre-licensing course is designed to prepare you for it.",
  },
  {
    q: "What bond do I need for a dealer license?",
    a: "A $50,000 motor vehicle dealer bond for most retail dealers, or $10,000 for motorcycle/ATV-only and small wholesale-only classes. You pay a premium, not the full amount, and we can issue it quickly once you are ready.",
  },
  {
    q: "How much does the dealer bond cost?",
    a: "You pay an annual premium, a percentage of the bond amount set mostly by credit. See our note on the auto dealer bond cost for the detail. Strong credit pays the least.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="To get a California auto dealer license: finish a six-hour DMV pre-licensing course, pass the 40-question dealer exam (70% to pass), set up a compliant business location, submit your application packet with fingerprints and fees, and file the $50,000 dealer bond (or $10,000 for some classes). The bond is the last step, and it is ours."
      intro="Getting licensed to sell vehicles in California runs through the DMV in a set order: education, exam, location, application, and bonding. The bond is the final step. Here is the whole path, and where we come in."
      faqs={faqs}
      related={[
        { label: "Auto Dealer Bond", href: "/commercial-bonds/auto-dealer-bond" },
        { label: "Dealer bond cost", href: "/resources/auto-dealer-bond-cost" },
        { label: "Dealer bonds by type", href: "/resources/used-car-dealer-bond-by-type" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Dealer licensing by the numbers"
        items={pickStats(["dealerCourse", "dealerBond", "dealerBondLow"])}
      />

      <Prose>
        <h2>Step 1: Take the six-hour pre-licensing course</h2>
        <p>
          First-time California dealers must complete a{" "}
          <strong>six-hour DMV-approved pre-licensing course</strong>. It covers the vehicle code and
          the rules of running a dealership, and it prepares you for the exam. Most courses are online.
        </p>

        <h2>Step 2: Pass the DMV dealer exam</h2>
        <p>
          After the course you sit for the DMV dealer exam in person: <strong>40 multiple-choice
          questions</strong>, and you need <strong>70%</strong> to pass. You get a few attempts with a
          short wait between them, so prepare with the course material and take it seriously.
        </p>

        <h2>Step 3: Set up a compliant business location</h2>
        <p>
          California requires an established <strong>business location</strong> for your dealership.
          Retail dealers generally need a dedicated commercial space that meets the DMV&apos;s display
          and signage rules; wholesale-only dealers have more flexibility. The DMV inspects the site
          as part of licensing.
        </p>

        <h2>Step 4: Submit your application packet</h2>
        <p>
          File your application with the DMV, using the new-dealer or used-dealer forms packet for
          your class, along with <strong>fingerprinting</strong> (Live Scan) and the applicable{" "}
          <strong>fees</strong>. This is the paperwork stage, and getting the class and forms right up
          front avoids delays.
        </p>

        <h2>Step 5: File the dealer bond</h2>
        <p>
          The final requirement is the <strong>motor vehicle dealer bond</strong>: $50,000 for most
          retail dealers, or $10,000 for motorcycle/ATV-only and small wholesale-only classes. You pay
          a premium, not the full amount. This is the step we handle. See{" "}
          <Link href="/resources/auto-dealer-bond-cost">what the dealer bond costs</Link> and the full{" "}
          <Link href="/commercial-bonds/auto-dealer-bond">auto dealer bond</Link> page, then{" "}
          <Link href="/get-a-quote">start a quote</Link> when you reach this step. Tougher credit is
          welcome.
        </p>
      </Prose>
    </GuidePage>
  );
}
