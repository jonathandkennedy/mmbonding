import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-to-become-a-process-server-in-california")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Who must register, the age and residency rules, and how to file the $2,000 process server bond with your county clerk to register in California.",
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
    q: "Do I have to register as a process server in California?",
    a: "You must register if you serve more than 10 processes in a calendar year for compensation. Under that, registration is not required. Registration is done with the county clerk where you live or have your principal place of business.",
  },
  {
    q: "What are the requirements to register?",
    a: "You must be at least 18, have been a California resident for one year before filing, and post a $2,000 surety bond (or a $2,000 cash deposit). You file a verified certificate of registration with your county clerk.",
  },
  {
    q: "What bond do I need, and how much is it?",
    a: "A $2,000 process server bond from an admitted surety, filed with your county clerk. It is a small, low-cost bond and we place it quickly. As an alternative, the law lets you deposit $2,000 in cash instead.",
  },
  {
    q: "How long does the registration last?",
    a: "A California process server registration is effective for two years, or until the bond expires, whichever comes first. You renew it and file a fresh bond to keep it active.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="If you serve more than 10 processes a year for pay in California, you must register as a process server. You need to be 18, a California resident for one year, and post a $2,000 surety bond (or $2,000 cash), then file a certificate of registration with your county clerk. Registration lasts two years. The bond is small and we place it."
      intro="Becoming a registered process server in California is a short, county-level process built around a $2,000 bond. Here is who has to register, the requirements, and the steps to file, with the bond piece handled for you."
      faqs={faqs}
      related={[
        { label: "Process Server Bond", href: "/commercial-bonds/process-server-bond" },
        { label: "Commercial Bonds", href: "/commercial-bonds" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Process server registration by the numbers"
        items={pickStats(["processServerBond", "processServerTerm", "usSuretyPremium"])}
      />

      <Prose>
        <h2>Who has to register</h2>
        <p>
          California requires registration if you serve <strong>more than 10 processes</strong> in a
          calendar year for compensation. Serve fewer than that, and you do not have to register. You
          register with the <strong>county clerk</strong> of the county where you live or keep your
          principal place of business.
        </p>

        <h2>The requirements</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Be at least 18.</strong> The minimum age to register.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Be a California resident for one year.</strong> You must have lived in the state
              for the year immediately before you file.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Post a $2,000 bond.</strong> A{" "}
              <Link href="/commercial-bonds/process-server-bond">process server bond</Link> from an
              admitted surety, or a $2,000 cash deposit with the clerk as an alternative.
            </span>
          </li>
        </ul>

        <h2>The steps to register</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>1. Get the $2,000 bond.</strong> We issue the process server bond fast, so it is
              ready to file.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>2. File with the county clerk.</strong> Submit a verified certificate of
              registration with the bond, and complete the clerk&apos;s photo and identification step.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>3. Pay the filing fee.</strong> The county charges a registration fee, and
              issues your registration number.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>4. Renew every two years.</strong> Registration lasts two years or until the
              bond expires, so file a fresh bond and renew to stay active.
            </span>
          </li>
        </ul>

        <h2>Get your bond</h2>
        <p>
          The bond is the one piece that needs a surety, and it is quick and inexpensive. See the{" "}
          <Link href="/commercial-bonds/process-server-bond">process server bond</Link> page, then{" "}
          <Link href="/get-a-quote">start a quote</Link> and we will issue it so you can file with
          your county.
        </p>
      </Prose>
    </GuidePage>
  );
}
