import type { Metadata } from "next";
import { clampDescription } from "@/lib/utils";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";

const guide = getGuide("surety-bonds-with-bad-credit")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    clampDescription("Yes, you can usually get a surety bond with bad credit. How bad-credit surety bonds work, what they cost, and how a broker places credit-challenged files. CA DOI #6009105."),
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
    q: "Can I get a surety bond with bad credit?",
    a: "Usually, yes. Credit affects your rate, not your eligibility outright. A broker shops markets that write credit-challenged files, including poor credit, thin credit, and no credit, so a tough file still gets placed. Underwriting still applies.",
  },
  {
    q: "How much more does bad credit cost?",
    a: "Expect a higher premium rate than top-tier credit. The exact number depends on the bond and the market. The trade-off is getting placed at all, plus a path to better rates as your credit improves.",
  },
  {
    q: "Is there a no-credit-check option?",
    a: "For some smaller, standard license bonds, yes, certain flat-rate programs skip the hard credit pull. It is narrower than the ads suggest, and it does not mean guaranteed approval.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Yes, you can usually get a surety bond with bad credit. Credit raises your rate, not your eligibility. A broker shops the markets that write credit-challenged files, including poor, thin, or no credit. Underwriting still applies and no honest broker guarantees approval."
      intro="Bad credit is the number one reason contractors get declined online, and the number one thing we fix. Here is how bad-credit surety bonds actually work."
      faqs={faqs}
      related={[
        { label: "Hard-to-Place Surety Bonds", href: "/hard-to-place-surety-bonds" },
        { label: "No-Credit-Check Bond", href: "/hard-to-place-surety-bonds/no-credit-check-contractor-bond" },
        { label: "Get a Quote", href: "/get-a-quote?path=hard-to-place" },
      ]}
    >
      <Prose>
        <h2>Credit is a rate factor, not a wall</h2>
        <p>
          Instant-issue sites treat credit as a yes-or-no gate: outside their box, you are declined.
          A broker treats it as a <strong>pricing</strong> factor and shops the markets that write
          credit-challenged files. The result is usually a higher rate, not a closed door.
        </p>

        <h2>What we place</h2>
        <ul>
          <li>
            <Bullet />
            <span>Low credit scores, collections, or a recent rough patch</span>
          </li>
          <li>
            <Bullet />
            <span>Thin or no credit history at all</span>
          </li>
          <li>
            <Bullet />
            <span>Prior surety claims or losses</span>
          </li>
          <li>
            <Bullet />
            <span>New businesses with no track record yet</span>
          </li>
        </ul>
        <p>
          See the full picture on{" "}
          <Link href="/hard-to-place-surety-bonds">hard-to-place surety bonds</Link>.
        </p>

        <h2>The honest part</h2>
        <p>
          We never promise guaranteed approval, because every surety bond goes through underwriting.
          What we promise is that we will work your file across the markets that say yes to tough
          credit, and tell you straight what it takes.
        </p>

        <h2>Start with a quote</h2>
        <p>
          Tell us about the situation and we will shop it. Begin a{" "}
          <Link href="/get-a-quote?path=hard-to-place">hard-to-place quote</Link>; there is no card or
          SSN to get started.
        </p>
      </Prose>
    </GuidePage>
  );
}
