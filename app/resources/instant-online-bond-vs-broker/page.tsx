import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";

const guide = getGuide("instant-online-bond-vs-broker")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Instant online bond or a broker? Instant fits simple bonds with clean credit; a broker shops the market for tough credit, claims, or a declined file.",
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
    q: "Is it safe to buy a surety bond instantly online?",
    a: "Yes, for the right bond. A standard license or small commercial bond with clean credit is a good fit for instant purchase. The bond is real and filed the same way. The question is whether your file is simple enough that one automated market gives you a fair price.",
  },
  {
    q: "When is a broker clearly the better choice?",
    a: "A broker earns its keep when the file is not simple: challenged or thin credit, a prior claim, a bankruptcy, a contract or performance bond, a large or unusual bond, or any case an instant quote declines. Underwriting still applies, but a broker shops the file instead of stopping at one no.",
  },
  {
    q: "Does a broker cost more than buying online?",
    a: "Not necessarily. A broker is typically paid a commission built into the premium, and shopping multiple markets often lowers your price rather than raising it. For a tough file, a broker frequently finds a rate an automated market would not offer at all.",
  },
  {
    q: "Can I try online first and then call a broker?",
    a: "Absolutely. If an instant quote approves you at a fair rate, take it. If it declines you or the price looks high, a broker can re-market the same file. A decline from one automated market is not a verdict on whether you can be bonded.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`Both work, for different files. For a simple license or small commercial bond with clean credit, buying instantly online is fast and fine. For tough credit, a prior claim, a contract or performance bond, or anything an online quote declines, a broker who shops multiple markets gets you placed and priced better.`}
      intro={`The buy-it-now button and a surety broker both have a place. The trick is knowing which one fits your bond, your credit, and your timeline. Here is how to tell.`}
      faqs={faqs}
      related={[
        { label: "Why use a surety broker", href: "/why-use-a-surety-broker" },
        { label: "Hard-to-Place Bonds", href: "/hard-to-place-surety-bonds" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <Prose>
        <h2>When instant online is the right call</h2>
        <p>
          For a lot of bonds, the buy-it-now button is genuinely the best tool. If your
          situation is standard and your credit is clean, an instant quote can bind and file
          the bond in minutes, at a fair price.
        </p>
        <p>Instant online purchase tends to work well when:</p>
        <ul>
          <li>
            <Bullet />
            <span>
              You need a <strong>standard license or small commercial bond</strong>, the kind
              automated markets are built to write.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              Your <strong>personal credit is solid</strong>, so a soft credit pull is enough to
              price the bond.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              The <strong>bond amount is modest</strong> and the form is the usual one for your
              license, with no unusual conditions.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              You have <strong>no prior claims</strong> and nothing on the file that needs a person
              to explain it.
            </span>
          </li>
        </ul>

        <h2>When you want a broker</h2>
        <p>
          A broker matters most when the file is not simple. The moment an application needs
          judgment instead of a checkbox, a single automated market is the wrong place to stop.
          Reach for a broker when:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              Your <strong>credit is challenged or thin</strong>, or you are new to U.S. credit.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              There is a <strong>prior bond claim, a bankruptcy, or a tax lien</strong> in the
              picture.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              You need a <strong>contract or performance bond</strong>, which is underwritten, not
              sold at a checkout.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              The bond is <strong>large, unusual, or an uncommon class</strong> the automated
              markets do not handle well.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              An <strong>online quote already declined you</strong>, or the price it returned looks
              high.
            </span>
          </li>
        </ul>

        <h2>What a broker does that a button can&apos;t</h2>
        <p>
          An instant quote is a single surety answering a fixed set of questions. A broker does
          the work a form cannot:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Shops multiple markets.</strong> Different sureties price and accept the same
              file differently, so one quote is one opinion, not your best rate.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Structures the deal.</strong> For a tougher file, a broker can add funds
              control or collateral to turn a maybe into an approval.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Works the hard files by hand.</strong> A person can explain a one-time credit
              event or a strong track record that a form throws away.
            </span>
          </li>
        </ul>

        <h2>How to decide</h2>
        <p>
          Use the fast path when it fits. If your bond is standard and your credit is clean,
          buying it instantly online is a perfectly good choice. If your file is tougher, or an
          automated quote has already said no, that is exactly when a broker earns its keep. You
          can always start online and bring a broker in if the button does not work for you.
        </p>
        <p>
          Not sure which bucket you are in? Start a real{" "}
          <Link href="/get-a-quote">quote</Link>, read{" "}
          <Link href="/why-use-a-surety-broker">why a surety broker helps</Link>, or see how we
          place <Link href="/hard-to-place-surety-bonds">hard-to-place bonds</Link>.
        </p>
      </Prose>
    </GuidePage>
  );
}
