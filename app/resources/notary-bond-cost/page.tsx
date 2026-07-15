import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("notary-bond-cost")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "The $15,000 California notary bond is one of the cheapest bonds there is: a small one-time premium for the four-year term. How it differs from E&O.",
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
    q: "How much does a California notary bond cost?",
    a: "The bond amount is $15,000, but you pay only a small one-time premium for the full four-year commission, often around $25 to $50. It is one of the cheapest surety bonds there is.",
  },
  {
    q: "Is the notary bond an annual cost?",
    a: "No. You pay a single premium that covers the entire four-year commission term, not a yearly charge. When you renew your commission, you file a new bond.",
  },
  {
    q: "Is the notary bond the same as E&O insurance?",
    a: "No. The $15,000 bond protects the public; if a claim is paid, you reimburse the surety. Errors-and-omissions insurance protects you. Many notaries carry both, and E&O is a separate, optional cost.",
  },
  {
    q: "Does credit affect the notary bond price?",
    a: "Rarely. The notary bond is small and low-risk, so it is generally not credit-sensitive. Even challenged credit is usually no obstacle to getting it at the standard low rate.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="A California notary bond is $15,000 in coverage, but it costs only a small one-time premium for the full four-year commission, often around $25 to $50. It is one of the cheapest bonds there is and rarely credit-sensitive. The bond protects the public, not you, so many notaries also carry separate E&O insurance."
      intro="The California notary bond is about as affordable as surety bonds get. Here is what the $15,000 bond actually costs, why it is a one-time not annual charge, and how it differs from the E&O insurance notaries often add."
      faqs={faqs}
      related={[
        { label: "Notary Bond", href: "/commercial-bonds/notary-bond" },
        { label: "How to become a notary", href: "/resources/how-to-become-a-notary-in-california" },
        { label: "Commercial Bonds", href: "/commercial-bonds" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Notary bond cost by the numbers"
        items={pickStats(["notaryBond", "notaryTerm", "usSuretyPremium"])}
      />

      <Prose>
        <h2>A $15,000 bond for a few dollars</h2>
        <p>
          California requires every notary to file a <strong>$15,000</strong> surety bond, but that is
          the coverage amount, not your cost. You pay a small <strong>one-time premium</strong> for
          the entire four-year commission, often around <strong>$25 to $50</strong>. It is one of the
          cheapest bonds we place, and because it is small and low-risk, it is rarely credit-sensitive.
        </p>

        <h2>One premium, four years</h2>
        <p>
          Unlike a contractor bond that renews yearly, the notary bond is written for your full{" "}
          <strong>four-year commission</strong> and paid once. When your commission comes up for
          renewal, you file a fresh bond for the next term.
        </p>

        <h2>Bond vs. E&O insurance</h2>
        <p>
          The bond protects the <strong>public</strong>: if a valid claim is paid on your errors or
          misconduct, you reimburse the surety. It does not protect you. That is what{" "}
          <strong>errors-and-omissions (E&amp;O) insurance</strong> is for, and it is a separate,
          optional purchase many notaries add. The bond is required; the E&amp;O is your choice.
        </p>

        <h2>Getting the bond</h2>
        <p>
          If you are still commissioning, see{" "}
          <Link href="/resources/how-to-become-a-notary-in-california">
            how to become a notary in California
          </Link>{" "}
          for where the bond fits in the process. Ready to file? The{" "}
          <Link href="/commercial-bonds/notary-bond">notary bond</Link> page has the details, or{" "}
          <Link href="/get-a-quote">get a quote</Link> and we will issue it fast.
        </p>
      </Prose>
    </GuidePage>
  );
}
