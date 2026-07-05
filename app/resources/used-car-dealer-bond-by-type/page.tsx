import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";

const guide = getGuide("used-car-dealer-bond-by-type")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Most retail used-vehicle dealers file a $50,000 California DMV motor vehicle dealer bond. Some license types differ, so confirm your exact requirement.",
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
    q: "How much is a California car dealer bond?",
    a: "For most retail used-vehicle dealers it is a $50,000 motor vehicle dealer bond filed with the DMV under Vehicle Code §11710. Some license types differ, so confirm your exact amount with the DMV.",
  },
  {
    q: "Does the bond amount change by dealer type?",
    a: "It can. Retail used dealers generally post $50,000, while wholesale-only, motorcycle, and other classes can have different amounts. The DMV sets the requirement by license class, so verify yours before filing.",
  },
  {
    q: "Do I pay the full $50,000?",
    a: `No. The $50,000 is the bond's face amount, not your cost. You pay an annual premium that is a percentage of it, based mostly on your credit. Strong credit means a lower rate.`,
  },
  {
    q: "Can I get a dealer bond with bad credit?",
    a: "Usually yes. Weaker credit means a higher premium, not an automatic decline, because we shop multiple surety markets. Underwriting still applies, but hard-to-place dealer bonds are something we handle.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Most retail used-vehicle dealers file a $50,000 motor vehicle dealer bond with the DMV. Some license types, like wholesale-only, can differ, so confirm your exact requirement with the DMV. You pay a premium on the bond, not the full amount, and we place them fast, tougher credit included."
      intro="Most California retail used-vehicle dealers file a $50,000 motor vehicle dealer bond with the DMV, but the requirement can vary by license type. Here is how the bond works, what it costs, and how to confirm your exact amount."
      faqs={faqs}
      related={[
        { label: "Auto Dealer Bond", href: "/commercial-bonds/auto-dealer-bond" },
        { label: "Commercial Bonds", href: "/commercial-bonds" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <Prose>
        <h2>The California dealer bond</h2>
        <p>
          To sell vehicles in California you need a Department of Motor Vehicles dealer license, and
          that license requires a <strong>motor vehicle dealer bond</strong> filed with the DMV. For
          most retail used-vehicle dealers, that bond is <strong>$50,000</strong> under{" "}
          <strong>California Vehicle Code §11710</strong>. The bond protects customers and the state
          if a dealer violates the Vehicle Code, for example by failing to clear a lien or deliver
          title.
        </p>
        <p>
          Treat the $50,000 figure as general guidance for standard retail used dealers. Your
          license type sets your exact requirement, so confirm it on your DMV application or with the
          DMV directly.
        </p>

        <h2>Does it change by dealer type?</h2>
        <p>
          It can. California licenses several kinds of dealers, and the bond requirement is not
          identical for all of them. The amount can differ based on the class of license and the kind
          of vehicles you sell.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Retail used-vehicle dealers.</strong> The common case, generally the $50,000
              bond.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Wholesale-only dealers.</strong> Dealers who sell only to other dealers can
              face a different, often lower, requirement.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Motorcycle and other specialty dealers.</strong> Certain classes have their own
              bond amounts set by the DMV.
            </span>
          </li>
        </ul>
        <p>
          Because the exact amount turns on your license class, do not assume. Confirm your specific
          requirement with the DMV before you file, and we will match the bond to it.
        </p>

        <h2>What it costs</h2>
        <p>
          You do not pay the full bond amount. You pay a <strong>premium</strong>, a percentage of
          the bond, set mostly by your personal credit. A $50,000 bond does not mean $50,000 out of
          pocket; it means an annual premium that is a fraction of that.
        </p>
        <p>
          Strong credit earns the lowest rate. Challenged credit costs more but is still very
          placeable, because we shop multiple sureties rather than declining the file. Underwriting
          still applies, and there is no guaranteed rate until a surety reviews your information.
        </p>

        <h2>How to get one fast</h2>
        <p>
          Tell us your dealer license type and we will confirm the right bond amount, quote your
          premium, and issue quickly once you are approved. See the{" "}
          <Link href="/commercial-bonds/auto-dealer-bond">auto dealer bond</Link> page for details,
          browse our other <Link href="/commercial-bonds">commercial bonds</Link>, or start a{" "}
          <Link href="/get-a-quote">quote</Link> now. Tougher credit is welcome.
        </p>
      </Prose>
    </GuidePage>
  );
}
