import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-to-get-a-bonded-title-in-california")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "California requires a motor vehicle ownership surety bond when you cannot prove title on a vehicle worth $5,000 or more. How it works and what it costs.",
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
    q: "What is a bonded title in California?",
    a: "California calls it a Motor Vehicle Ownership Surety Bond (form REG 5057). You post it when you cannot provide the usual proof of ownership for a vehicle, and it lets the DMV title and register the vehicle in your name while protecting any prior owner or lienholder.",
  },
  {
    q: "When do I need one?",
    a: "When the required evidence of ownership is not available and the vehicle is worth $5,000 or more. It also comes up when a vehicle is nontransferable or you cannot get a release from a prior legal owner or lienholder.",
  },
  {
    q: "How much is the bond, and what does it cost?",
    a: "The bond amount equals the vehicle's fair market value, often from a Kelley Blue Book average. The premium is small, typically 1% to 2% of the bond amount with a minimum around $100 to $150. For example, a $30,000 vehicle bond might cost about $270.",
  },
  {
    q: "Is a bonded title a clean title?",
    a: "It is a valid California title with a bond noted on it. The bond runs for three years; if no one makes a valid ownership claim in that time, the brand clears and you hold a normal title.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="When you cannot prove ownership of a California vehicle worth $5,000 or more, the DMV requires a Motor Vehicle Ownership Surety Bond (REG 5057). The bond equals the vehicle's fair market value, the premium is small (about 1% to 2%, minimum near $100), and the term is three years. After three years with no valid claim, the title clears."
      intro="Bought a vehicle without a proper title, or lost the paperwork on one you own? California uses a Motor Vehicle Ownership Surety Bond to get it titled in your name. Here is when it is required, how the amount is set, the steps, and what it costs."
      faqs={faqs}
      related={[
        { label: "Bonded Title Bond", href: "/commercial-bonds/bonded-title-bond" },
        { label: "Commercial Bonds", href: "/commercial-bonds" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="California bonded title by the numbers"
        items={pickStats(["vehicleBondThreshold", "vehicleBondTerm", "usSuretyPremium"])}
      />

      <Prose>
        <h2>What California requires</h2>
        <p>
          California does not use the phrase &quot;bonded title,&quot; but it has the same tool: the{" "}
          <strong>Motor Vehicle Ownership Surety Bond</strong>, DMV form{" "}
          <strong>REG 5057</strong>. You post it when you cannot provide the normal evidence of
          ownership and the vehicle is worth <strong>$5,000 or more</strong>. It lets the DMV title
          and register the vehicle to you while protecting any prior owner or lienholder who might
          later come forward.
        </p>

        <h2>The bond amount is the vehicle's value</h2>
        <p>
          The bond is written for the vehicle&apos;s <strong>fair market value</strong>, established
          by a licensed dealer or insurance appraisal, or by averaging the high and low{" "}
          <strong>Kelley Blue Book</strong> values on the DMV&apos;s Statement of Facts. You do not
          pick the number; the value does.
        </p>

        <h2>The steps</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>1. Apply with the DMV.</strong> Complete the application and Statement of Facts,
              and establish the vehicle&apos;s fair market value.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>2. Verify the vehicle.</strong> Complete any required vehicle verification or
              inspection the DMV asks for.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>3. Buy the bond.</strong> Purchase the Motor Vehicle Ownership Surety Bond for
              the vehicle&apos;s value from an admitted surety. This is the step we handle.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>4. Submit and title.</strong> File the bond with your DMV paperwork, and the DMV
              issues the title in your name.
            </span>
          </li>
        </ul>

        <h2>What it costs</h2>
        <p>
          The premium is small: typically <strong>1% to 2%</strong> of the bond amount, with a
          minimum around <strong>$100 to $150</strong>. A $30,000 vehicle bond, for instance, might
          run about $270. The bond term is <strong>three years</strong> and non-renewable; if no valid
          ownership claim is made in that time, the title clears to a normal one. See the full{" "}
          <Link href="/commercial-bonds/bonded-title-bond">bonded title bond</Link> page, then{" "}
          <Link href="/get-a-quote">start a quote</Link> with your vehicle&apos;s value.
        </p>
      </Prose>
    </GuidePage>
  );
}
