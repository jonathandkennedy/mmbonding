import type { Metadata } from "next";
import { clampDescription } from "@/lib/utils";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: clampDescription(`The terms and conditions that govern your use of ${site.url.replace("https://", "")} and requesting a quote from ${site.name}. Licensed California surety broker, CA DOI #${site.doiLicense}.`),
  alternates: { canonical: "/terms-of-service" },
};

const EFFECTIVE = "June 29, 2026";

const responsibilities = [
  "You are at least 18 years old and authorized to act for any business you submit information about.",
  "The information you give us is accurate, complete, and current, and you will keep it updated.",
  "You will not submit false, fraudulent, or misleading information, or anyone else's information without permission.",
  "You are responsible for the activity that happens under the requests and information you submit.",
];

const sections: LegalSection[] = [
  {
    id: "agreement",
    heading: "Agreement to these terms",
    body: (
      <>
        <p>{`These Terms of Service ("Terms") are an agreement between you and ${site.name} ("MM Bonding," "we," "us," or "our"), a licensed California surety bond broker, CA Department of Insurance License #${site.doiLicense}. They govern your use of ${site.url.replace("https://", "")} and the quote and contact tools on it.`}</p>
        <p>
          {`By using this website, you agree to these Terms and to our `}
          <Link href="/privacy-policy">Privacy Policy</Link>
          {`. If you do not agree, please do not use the site.`}
        </p>
      </>
    ),
  },
  {
    id: "what-we-do",
    heading: "What MM Bonding does",
    body: (
      <p>{`MM Bonding is a surety bond brokerage. We help you find and obtain surety bonds, and we can connect you with licensed partner agencies for insurance. This website provides general information about bonds and licensing and lets you request a quote. Using the site or submitting a request does not by itself create a bond, a binding application, or a brokerage relationship; a relationship begins only when we confirm we are working on your request.`}</p>
    ),
  },
  {
    id: "not-advice",
    heading: "Not legal or financial advice",
    body: (
      <p>{`The content on this site is general information about California surety bonds and contractor licensing. It is not legal, tax, accounting, or other professional advice, and it is not a substitute for the official rules. Bond amounts, statutes, and requirements change, and your situation may differ. Verify requirements with the CSLB, the California Department of Insurance, or your own advisor before you act.`}</p>
    ),
  },
  {
    id: "quotes",
    heading: "Quotes, underwriting, and no guarantee of approval",
    body: (
      <p>{`Quotes and premium figures we share are estimates based on the information available at the time. They are not offers and are not binding. The surety company sets the final terms, pricing, and decision after it reviews your application and underwrites the bond. We do not guarantee that any bond will be approved, issued, or issued at an estimated price, and we cannot promise a specific timeline. We work hard to place hard-to-place cases, but approval is always up to the surety.`}</p>
    ),
  },
  {
    id: "calculator",
    heading: "Cost calculator and estimates",
    body: (
      <p>
        {`Our `}
        <Link href="/surety-bond-cost-calculator">cost calculator</Link>
        {` and any figures it produces are rough estimates for planning only. Your actual premium depends on the specific bond, your credit and financials, and the surety's current rates. The calculator is not a quote, an application, or a promise of a rate.`}
      </p>
    ),
  },
  {
    id: "your-responsibilities",
    heading: "Your responsibilities",
    body: (
      <>
        <p>{`When you use the site or submit a request, you confirm that:`}</p>
        <ul>
          {responsibilities.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Intellectual property",
    body: (
      <p>{`The website and its content, including the text, design, layout, graphics, and the MM Bonding name and logo, are owned by MM Bonding or its licensors and are protected by law. We grant you a limited, personal license to view the site for your own bonding needs. You may not copy, scrape, republish, sell, or reuse the content or branding without our written permission.`}</p>
    ),
  },
  {
    id: "third-party",
    heading: "Third-party links and services",
    body: (
      <p>{`The site links to outside resources such as the CSLB, the California Department of Insurance, the SBA, and surety company sites, for your convenience. We do not control or endorse those sites and are not responsible for their content, products, or practices. Your dealings with any third party are between you and that third party.`}</p>
    ),
  },
  {
    id: "disclaimers",
    heading: "Disclaimers",
    body: (
      <p>{`The website is provided "as is" and "as available," without warranties of any kind, whether express or implied, including warranties of accuracy, completeness, merchantability, or fitness for a particular purpose. We work to keep figures such as bond amounts and statutes current and verified against CSLB and DOI sources, but we do not warrant that the site will be error-free, uninterrupted, or fully up to date. You use the site at your own risk.`}</p>
    ),
  },
  {
    id: "liability",
    heading: "Limitation of liability",
    body: (
      <p>{`To the fullest extent permitted by law, MM Bonding and its officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, or data, arising out of or relating to your use of the website. Our total liability for any claim relating to the website will not exceed one hundred dollars (US $100) or the amount you paid us to use the website, whichever is greater. Nothing in these Terms limits any rights or obligations under an actual bond, which is governed by the bond itself and the issuing surety.`}</p>
    ),
  },
  {
    id: "indemnification",
    heading: "Indemnification",
    body: (
      <p>{`You agree to indemnify and hold harmless MM Bonding and its officers, employees, and agents from any claims, losses, or costs, including reasonable attorneys' fees, arising out of your misuse of the website, the information you submit, or your violation of these Terms or applicable law.`}</p>
    ),
  },
  {
    id: "governing-law",
    heading: "Governing law and disputes",
    body: (
      <p>{`These Terms are governed by the laws of the State of California, without regard to its conflict-of-law rules. If a dispute arises, we ask that you contact us first so we can try to resolve it informally. Any dispute that cannot be resolved that way will be handled in the state or federal courts located in California, and you agree to that venue.`}</p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to these terms",
    body: (
      <p>{`We may update these Terms from time to time. When we do, we will change the "last updated" date at the top of the page. Your continued use of the site after an update means you accept the revised Terms.`}</p>
    ),
  },
  {
    id: "contact",
    heading: "Contact us",
    body: (
      <>
        <p>{`Questions about these Terms? Reach us at:`}</p>
        <ul>
          <li>
            {site.name}, CA DOI License #{site.doiLicense}
          </li>
          <li>
            Phone:{" "}
            <a href={site.phone.href} data-callrail="phone">
              {site.phone.display}
            </a>
          </li>
          <li>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>{`Serving contractors across ${site.areaServed}.`}</li>
        </ul>
      </>
    ),
  },
];

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated={EFFECTIVE}
      breadcrumbLabel="Terms of Service"
      breadcrumbHref="/terms-of-service"
      intro="The terms and conditions that govern this website and the quotes you request through it. Plain language, no surprises."
      summary="These terms govern your use of mmbonding.com. MM Bonding is a licensed California surety broker; the site provides general information and lets you request quotes. Quotes are estimates, not offers, and no bond is guaranteed until a surety approves it after underwriting. The site is provided as is, under California law."
      sections={sections}
    />
  );
}
