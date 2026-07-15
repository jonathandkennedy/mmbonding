import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-to-choose-a-surety-bond-broker")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "What to look for in a surety bond broker: one shop for every bond, same-day filing on small bonds, tough credit placed, and a licensed local expert.",
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
    q: "What should I look for in a surety bond broker?",
    a: "An independent broker that shops multiple A-rated markets, handles the full range of bonds you might need, files small bonds fast, places credit-challenged files, and is a licensed, reachable person, not an instant-quote form. Local knowledge of California agencies helps too.",
  },
  {
    q: "Is a local broker better than an online quote?",
    a: "For anything beyond the simplest clean-credit bond, usually yes. A broker shops your file across markets, handles the odd or tough bonds an instant site declines, and gives you a real person who knows California's agencies, courts, and county filing rules.",
  },
  {
    q: "Can a broker really file my bond the same day?",
    a: "Many license and small commercial bonds, like a contractor license bond or a notary bond, can be quoted and filed the same business day. Contract and performance bonds take real underwriting, so those take longer, but a good broker moves each as fast as its type allows.",
  },
  {
    q: "What questions should I ask a broker?",
    a: "How many markets do you shop? Can you handle every bond I might need as I grow? How fast can you file this one? Do you place bad credit or prior claims? Are you licensed, and what is your license number? The answers tell you who is really working for you.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Choose a surety bond broker that is independent (shops multiple A-rated markets), covers every bond you might need in one place, files small bonds fast (often same day), places tough credit instead of declining, and is a licensed, reachable person who knows California's agencies. That combination beats a single-carrier agent or an instant-quote site for all but the simplest bonds."
      intro="Not all surety help is equal. An instant-quote site is fine for one clean-credit license bond, but the moment your file is unusual, or you need more than one kind of bond, or you need it today, the broker you chose starts to matter. Here is what actually separates a good surety bond broker from the rest."
      faqs={faqs}
      related={[
        { label: "Why use a surety broker", href: "/why-use-a-surety-broker" },
        { label: "Online quote vs broker", href: "/resources/instant-online-bond-vs-broker" },
        { label: "How a broker shops the market", href: "/resources/how-a-surety-broker-shops-the-market" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Choosing a broker by the numbers"
        items={pickStats([
          "caContractors",
          "filingWindow",
          "caLicenseBond",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>What actually separates a good broker</h2>
        <p>
          A surety bond is only as good as the broker who places it. Five things tell you whether you
          are dealing with a real advocate or just a form.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-semibold text-navy-900"></th>
              <th className="p-4 font-display font-bold text-navy-900">Independent local broker</th>
              <th className="p-4 font-display font-bold text-navy-900">Instant online site</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">Markets shopped</td>
              <td className="p-4 text-ink-700">Multiple A-rated sureties</td>
              <td className="p-4 text-ink-700">Usually one automated program</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Bond types</td>
              <td className="p-4 text-ink-700">License, contract, court, notary, dealer, freight, more</td>
              <td className="p-4 text-ink-700">A short menu of standard bonds</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Tough credit</td>
              <td className="p-4 text-ink-700">Shopped and placed</td>
              <td className="p-4 text-ink-700">Often declined</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Speed on small bonds</td>
              <td className="p-4 text-ink-700">Often same business day</td>
              <td className="p-4 text-ink-700">Fast, if you fit the box</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Who you talk to</td>
              <td className="p-4 text-ink-700">A licensed person who knows CA rules</td>
              <td className="p-4 text-ink-700">A web form</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>1. Independent, shopping many markets</h2>
        <p>
          The single most important trait is <strong>independence</strong>. A broker tied to one
          carrier, or an instant site running one program, gives you one price. An independent broker
          shops your file across multiple A-rated sureties, which is how the same application gets a
          better rate, or gets placed at all. See{" "}
          <Link href="/resources/how-a-surety-broker-shops-the-market">
            how a broker shops the market
          </Link>
          .
        </p>

        <h2>2. Every bond, one relationship</h2>
        <p>
          Your bonding needs change as you grow. A general contractor may start with a{" "}
          <Link href="/contractor-license-bond">license bond</Link>, then need{" "}
          <Link href="/contract-bonds">bid, performance, and payment bonds</Link> for public work. A
          new business owner might need a{" "}
          <Link href="/commercial-bonds/notary-bond">notary bond</Link>, an{" "}
          <Link href="/commercial-bonds/auto-dealer-bond">auto dealer bond</Link>, or a{" "}
          <Link href="/commercial-bonds/probate-bond">court bond</Link>. A broker that writes the{" "}
          <Link href="/commercial-bonds">full range</Link> means one relationship handles all of it,
          instead of starting over with a new provider each time.
        </p>

        <h2>3. Fast when the bond allows it</h2>
        <p>
          For a license or small commercial bond, speed matters, and a good broker delivers. Many of
          these, a contractor license bond, a notary bond, a small permit bond, can be quoted and
          filed the <strong>same business day</strong>, with the surety e-filing electronically.
          Contract and performance bonds are different: they are underwritten, so they take longer, as
          we explain in{" "}
          <Link href="/resources/why-contract-bonds-are-not-instant">
            why contract bonds are not instant
          </Link>
          . The point is a broker who moves each bond as fast as its type honestly allows.
        </p>

        <h2>4. Places tough files, does not just decline</h2>
        <p>
          An instant site declines anything outside its box: bad credit, a prior claim, a bankruptcy,
          a new business. A real broker treats those as files to work, not walls, and shops the
          markets that write them. That is the whole point of{" "}
          <Link href="/hard-to-place-surety-bonds">hard-to-place surety bonds</Link>. Underwriting
          still applies, and no honest broker promises guaranteed approval, but the difference between
          a decline and an approval is usually the broker, not the borrower.
        </p>

        <h2>5. A licensed, local, reachable person</h2>
        <p>
          Finally, you want a <strong>licensed</strong> broker you can actually reach, one who knows
          California&apos;s agencies, the CSLB, the courts, and county filing rules. Local knowledge
          means the bond is issued on the exact form your agency accepts, the first time. Ask for the
          license number, ask who answers when you call, and ask what happens when something is not
          standard.
        </p>

        <h2>Questions to ask before you choose</h2>
        <ul>
          <li>
            <Bullet />
            <span>How many surety markets do you shop for my file?</span>
          </li>
          <li>
            <Bullet />
            <span>Can you handle every bond I might need as my business grows?</span>
          </li>
          <li>
            <Bullet />
            <span>How fast can you file this specific bond?</span>
          </li>
          <li>
            <Bullet />
            <span>Do you place bad credit, prior claims, or new businesses?</span>
          </li>
          <li>
            <Bullet />
            <span>Are you licensed, and what is your license number?</span>
          </li>
        </ul>
        <p>
          If you like the answers, put us to the test. Read{" "}
          <Link href="/why-use-a-surety-broker">why use a surety broker</Link>, or{" "}
          <Link href="/get-a-quote">start a quote</Link> and see how we work your file.
        </p>
      </Prose>
    </GuidePage>
  );
}
