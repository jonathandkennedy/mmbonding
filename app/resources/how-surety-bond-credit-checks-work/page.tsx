import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-surety-bond-credit-checks-work")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Does a surety bond hurt your credit? Almost never. Most bond quotes use a soft pull that does not affect your score. Reviewed by a licensed broker.",
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
    q: "Does getting a surety bond hurt your credit?",
    a: "Almost never. Most surety quotes run a soft credit inquiry, which does not show on your report to lenders and does not affect your score. A quote is safe to request.",
  },
  {
    q: "Is it a soft pull or a hard pull?",
    a: "For the vast majority of license and commercial bonds, it is a soft pull. Some very large contract programs may ask for a hard pull, but you would know before it happens.",
  },
  {
    q: "Can I still get a bond with bad credit?",
    a: "Yes, in most cases. On a California license bond, credit usually sets your rate, not whether you qualify. Challenged credit costs more, but it is still placeable through the right market.",
  },
  {
    q: "Do you check business credit or personal credit?",
    a: "For most small-contractor bonds, underwriters look at the owner's personal credit. Larger contract programs also weigh business financials and history.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={
        "Does getting a surety bond hurt your credit? Almost never. Most surety quotes use a soft credit pull that does not affect your score. Underwriters review credit to set your rate, not usually to decide whether you qualify for a license bond. Even challenged credit is placeable, just at a higher rate. Underwriting still applies."
      }
      intro={
        "People worry that shopping for a bond will ding their score. In practice, a bond quote almost never does. Here is how surety credit checks actually work, and what underwriters do with the results."
      }
      faqs={faqs}
      related={[
        { label: "Bad credit surety bonds", href: "/resources/surety-bonds-with-bad-credit" },
        { label: "Hard-to-Place Bonds", href: "/hard-to-place-surety-bonds" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Surety credit checks by the numbers"
        items={pickStats(["caLicenseBond", "caContractors", "usSuretyPremium"])}
      />

      <Prose>
        <h2>Soft pull vs hard pull</h2>
        <p>
          A <strong>soft pull</strong> (or soft inquiry) lets an underwriter view your credit without
          leaving a mark that lenders see, and without affecting your score. A <strong>hard pull</strong>{" "}
          is the kind a mortgage or car lender runs, and it can nudge your score down a few points.
        </p>
        <p>
          For the large majority of surety bonds, including the California contractor license bond,
          the quote runs on a <strong>soft pull</strong>. That means you can request a real quote
          without any credit-score risk. A few large contract-surety programs may ask for a hard pull,
          but you would be told before anyone runs it.
        </p>

        <h2>What underwriters actually look at</h2>
        <p>
          A surety is not a bank, so it reads credit a little differently. It is looking for signals of
          reliability and financial stress, not just a single number.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Credit score.</strong> A quick proxy for overall risk. Higher scores earn lower
              rates.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Derogatory items.</strong> Collections, charge-offs, and late patterns matter
              more to a surety than the score alone.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Tax liens and judgments.</strong> Open liens or unsatisfied judgments are a red
              flag, but they do not automatically decline you.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Bankruptcies.</strong> A discharged bankruptcy is placeable. Sureties want to
              see time and rebuilt credit since discharge.
            </span>
          </li>
        </ul>

        <h2>How credit sets your rate</h2>
        <p>
          On a fixed-amount license bond, credit is mainly a <strong>pricing lever</strong>. The bond
          amount is set by law, so underwriting uses your credit to decide the premium percentage, not
          usually whether you can be bonded at all. Strong credit lands you at the low end of the
          range, and weaker credit moves you toward the high end.
        </p>
        <p>
          Because different sureties price the same file differently, a broker can shop your credit
          across markets to find the best available rate. See{" "}
          <Link href="/resources/surety-bonds-with-bad-credit">surety bonds with bad credit</Link> for
          how that plays out on a real file.
        </p>

        <h2>Bad credit is not a dead end</h2>
        <p>
          A low score does not mean no bond. It means a higher rate and, sometimes, a specialty market.
          Prior claims, open liens, or a bankruptcy move you into hard-to-place territory, which is
          exactly where an experienced broker earns its keep. We do not promise approval, since
          underwriting still applies, but we do know which markets say yes when others say no.
        </p>
        <p>
          Ready to see your actual rate? Start a{" "}
          <Link href="/get-a-quote">quote</Link>, or read how we place tough files on our{" "}
          <Link href="/hard-to-place-surety-bonds">hard-to-place surety bonds</Link> page.
        </p>
      </Prose>
    </GuidePage>
  );
}
