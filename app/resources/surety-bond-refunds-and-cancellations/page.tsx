import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("surety-bond-refunds-and-cancellations")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Sometimes. Many filed contractor license bonds are fully earned and non-refundable once issued, while others allow a prorated refund on mid-term cancellation.",
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
    q: "Can I get my license bond premium back?",
    a: `Usually not. Once a California contractor license bond is filed with the CSLB, most carriers treat the premium as fully earned, meaning it is non-refundable even if you cancel. The ${usd(facts.licenseBondAmount)} is the coverage amount, not your premium.`,
  },
  {
    q: "What is a prorated refund?",
    a: "On bonds that are not fully earned, canceling mid-term returns the unused portion of the premium for the remaining term. So if you cancel halfway through, you may get roughly half back, minus any minimum-earned amount.",
  },
  {
    q: "What happens if I cancel my license bond without replacing it?",
    a: "Your license can be suspended. A California contractor license bond is required to hold an active license, so canceling without a replacement bond on file can jeopardize your ability to work legally.",
  },
  {
    q: "Can I just lower my rate instead of canceling?",
    a: "Often, yes. If your credit has improved, we can re-shop the bond at renewal for a lower premium rather than canceling. That keeps you continuously bonded while cutting the cost.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Can you get a surety bond refund? Sometimes. Many bonds, including filed contractor license bonds, are fully earned and non-refundable once issued. Others allow a prorated refund if you cancel mid-term. Cancellation usually requires notice to the obligee. At renewal, improved credit can lower your premium instead."
      intro="Whether a surety bond premium comes back to you depends on the bond type and the carrier's terms. Here is how refunds, cancellation, and license-bond rules actually work, and a better option at renewal."
      faqs={faqs}
      related={[
        { label: "License bond renewal", href: "/resources/contractor-license-bond-renewal" },
        { label: "What the bond costs", href: "/resources/contractor-license-bond-cost" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <Prose>
        <h2>Is a surety bond premium refundable?</h2>
        <p>
          Sometimes. There is no single rule, because it depends on the bond and the carrier&apos;s
          terms. Some bonds return the unused premium if you cancel early. Others treat the premium as
          spent the moment the bond is issued. The key is to read the terms before you assume a check
          is coming.
        </p>
        <p>
          Remember that the premium is not the bond amount. On a California license bond, the{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong> is the coverage figure, and your premium is
          a percentage of it. Any refund question is about that premium, not the face amount.
        </p>

        <h2>Fully earned vs prorated</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Fully earned.</strong> The premium is considered earned in full when the bond is
              issued. Canceling early returns nothing. Many filed license bonds work this way.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Prorated (minimum earned).</strong> The carrier keeps the portion of the
              premium for the time the bond was active and refunds the rest, often subject to a
              minimum-earned floor.
            </span>
          </li>
        </ul>
        <p>
          For details on how the premium is set in the first place, see{" "}
          <Link href="/resources/contractor-license-bond-cost">what the bond costs</Link>.
        </p>

        <h2>How canceling a bond works</h2>
        <p>
          Canceling a surety bond is not as simple as stopping payment. Most bonds require formal{" "}
          <strong>notice to the obligee</strong>, the party the bond protects, and there is usually a
          notice period before cancellation takes effect. On a contract bond you generally cannot
          simply walk away mid-project.
        </p>
        <p>
          If the bond is still required, you also need a <strong>replacement bond</strong> on file
          before the old one lapses. Otherwise you create a coverage gap that can carry real
          consequences, especially on a license bond.
        </p>

        <h2>License bonds specifically</h2>
        <p>
          For California contractor license bonds, two points matter most. First, once the bond is
          filed with the CSLB, most carriers treat the premium as fully earned, so it is typically{" "}
          <strong>non-refundable</strong>. Second, and more important, canceling the bond{" "}
          <strong>without a replacement can jeopardize your license</strong>. The bond is a condition
          of holding an active license, so a lapse can lead to suspension.
        </p>
        <p>
          If you are switching carriers, the move is to bind the new bond first and let it replace the
          old one, never to cancel and hope. See{" "}
          <Link href="/resources/contractor-license-bond-renewal">license bond renewal</Link> for how
          continuous coverage should be handled.
        </p>

        <h2>Lowering your rate at renewal instead</h2>
        <p>
          Often the real goal behind a cancellation question is simply paying less. If so, there is a
          cleaner path than canceling: re-shop the bond at renewal. As your credit improves, we can
          quote your file across multiple markets and move you to a lower premium without ever
          breaking coverage.
        </p>
        <p>
          That keeps your license safe and cuts your cost at the same time. Start with a{" "}
          <Link href="/get-a-quote">quote</Link> and we will tell you whether a better rate is
          available now.
        </p>
      </Prose>
    </GuidePage>
  );
}
