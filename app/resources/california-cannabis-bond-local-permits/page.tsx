import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("california-cannabis-bond-local-permits")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Every California cannabis licensee posts a $5,000 state surety bond. Cities like Los Angeles and Oakland can add local permit bonds. Placed fast.",
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
    q: "How much is the California state cannabis bond?",
    a: "It is a $5,000 surety bond, payable to the state and filed with the Department of Cannabis Control. Each state license carries one. It helps cover the cost of destroying cannabis goods if that becomes necessary.",
  },
  {
    q: "Do cities require their own cannabis bonds?",
    a: "They can. Cities and counties that permit cannabis businesses, such as Los Angeles and Oakland, may require local permit or regulatory bonds that vary by jurisdiction. Confirm the exact requirement with your local cannabis authority.",
  },
  {
    q: "What does a cannabis bond cost?",
    a: "The $5,000 state bond carries a small annual premium, and most local bonds are modest too. Exact pricing depends on the bond amount and your credit, so a quick quote beats a guess.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Every California cannabis licensee posts a $5,000 surety bond payable to the state, through the Department of Cannabis Control. On top of that, cities and counties that permit cannabis, like Los Angeles and Oakland, can require their own local bonds, which vary by jurisdiction. We place both, fast, and they carry small premiums."
      intro="California cannabis bonding has two layers: a $5,000 bond every state licensee posts, and the separate local permit bonds some cities and counties require. Here is how both work, and what each costs."
      faqs={faqs}
      related={[
        { label: "Cannabis Bond", href: "/commercial-bonds/cannabis-bond" },
        { label: "Commercial Bonds", href: "/commercial-bonds" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="California cannabis bonding by the numbers"
        items={pickStats(["cannabisBond", "usSuretyPremium"])}
      />

      <Prose>
        <h2>The state bond: $5,000</h2>
        <p>
          Every California cannabis license carries a $5,000 surety bond, payable to the state and
          filed with the Department of Cannabis Control. It is a condition of getting and keeping your
          license, and it helps cover the cost of destroying cannabis goods if that ever becomes
          necessary. One bond, per license, statewide.
        </p>

        <h2>Local permit bonds vary</h2>
        <p>
          Cannabis is also permitted locally, and a city or county that licenses cannabis businesses
          can require its own permit or regulatory bonds on top of the state bond. These local bonds
          vary widely.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Los Angeles</strong> runs its own cannabis permitting through the city.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Oakland</strong> and other cities operate local cannabis programs too.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Your jurisdiction may differ.</strong> Amounts, and whether a bond is required
              at all, change from place to place.
            </span>
          </li>
        </ul>
        <p>
          Because local rules move, confirm the exact requirement with your local cannabis authority
          rather than assuming.
        </p>

        <h2>What each costs</h2>
        <p>
          These are small bonds. The $5,000 state bond carries a modest annual premium, and most local
          permit bonds are inexpensive too. Your exact price depends on the bond amount and your
          credit, which is why a quick <Link href="/get-a-quote">quote</Link> beats a guess.
        </p>

        <h2>We place state and local cannabis bonds</h2>
        <p>
          We handle the $5,000 state{" "}
          <Link href="/commercial-bonds/cannabis-bond">cannabis bond</Link> and the local permit bonds
          a city or county may add, so you can license and operate without chasing paper. See our{" "}
          <Link href="/commercial-bonds">commercial bonds</Link> for the full list.
        </p>
      </Prose>
    </GuidePage>
  );
}
