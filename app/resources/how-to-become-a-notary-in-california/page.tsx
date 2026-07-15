import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-to-become-a-notary-in-california")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "The step-by-step path: the six-hour course, the state exam, Live Scan fingerprinting, and filing the $15,000 notary bond and oath with your county.",
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
    q: "What are the steps to become a notary in California?",
    a: "Complete a six-hour approved course, pass the state exam, get fingerprinted through Live Scan, buy the $15,000 notary bond, then file the bond and your oath of office with your county clerk within 30 days of your commission. Finally, get your stamp and journal.",
  },
  {
    q: "How hard is the California notary exam?",
    a: "It is a 45-question proctored exam, and you need 70% to pass. The required six-hour course is designed to prepare you for it.",
  },
  {
    q: "What bond do I need, and when do I file it?",
    a: "A $15,000 notary surety bond. You file it, along with your oath of office, with your county clerk within 30 days of the start of your commission. Miss that window and your commission will not take effect.",
  },
  {
    q: "How much does it cost to become a notary?",
    a: "Usually around $150 to $200 total, covering the course, exam, Live Scan, the notary bond, and your stamp and journal. The bond itself is one of the smallest pieces of that.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="To become a California notary: complete a six-hour approved course, pass the 45-question state exam (70% to pass), get fingerprinted via Live Scan, buy the $15,000 notary bond, and file the bond and your oath with your county clerk within 30 days of your commission. Then get your stamp and journal. The commission lasts four years."
      intro="Becoming a notary in California is a set sequence: education, exam, background check, bond, and filing. The $15,000 bond is a small, quick piece of it, and it is ours. Here is the whole path, in order."
      faqs={faqs}
      related={[
        { label: "Notary Bond", href: "/commercial-bonds/notary-bond" },
        { label: "Notary bond cost", href: "/resources/notary-bond-cost" },
        { label: "Commercial Bonds", href: "/commercial-bonds" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Becoming a notary by the numbers"
        items={pickStats(["notaryCourse", "notaryBond", "notaryTerm"])}
      />

      <Prose>
        <h2>Step 1: Complete the six-hour course</h2>
        <p>
          First-time applicants must complete a <strong>six-hour course</strong> from a
          state-approved education provider. It covers California notary law and prepares you for the
          exam. Renewing notaries take a shorter refresher course instead.
        </p>

        <h2>Step 2: Pass the state exam</h2>
        <p>
          Sit for the <strong>proctored state exam</strong>: 45 questions, and you need{" "}
          <strong>70%</strong> to pass. You take it after the course, and passing is what moves your
          application forward.
        </p>

        <h2>Step 3: Get fingerprinted (Live Scan)</h2>
        <p>
          Complete a <strong>Live Scan</strong> background check through the California Department of
          Justice. Your fingerprints are submitted electronically, and the results go to the Secretary
          of State as part of your commission review.
        </p>

        <h2>Step 4: Buy the $15,000 notary bond</h2>
        <p>
          California requires a <strong>$15,000</strong>{" "}
          <Link href="/commercial-bonds/notary-bond">notary surety bond</Link> for your four-year
          commission. It protects the public, not you, and it is inexpensive, often a small one-time
          premium. See <Link href="/resources/notary-bond-cost">what the notary bond costs</Link>.
          This is the step we handle.
        </p>

        <h2>Step 5: File your bond and oath</h2>
        <p>
          Within <strong>30 days</strong> of the start of your commission, file the bond and your{" "}
          <strong>oath of office</strong> with your county clerk. This step activates your commission,
          so do not let the window pass.
        </p>

        <h2>Step 6: Get your stamp and journal</h2>
        <p>
          Finally, obtain your official <strong>notary stamp</strong> and a{" "}
          <strong>journal</strong> from an approved vendor. Then you are ready to notarize. When you
          reach the bond step, <Link href="/get-a-quote">start a quote</Link> and we will issue it
          fast.
        </p>
      </Prose>
    </GuidePage>
  );
}
