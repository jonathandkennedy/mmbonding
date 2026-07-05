import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ContactForm } from "@/components/contact-form";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, organizationSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name}. Call ${site.phone.display}, ${site.hours}. A licensed California surety broker, CA DOI #${site.doiLicense}.`,
  alternates: { canonical: "/contact" },
};

const methods = [
  { icon: Phone, label: "Call or text", value: site.phone.display, href: site.phone.href, callrail: true },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Clock, label: "Hours", value: site.hours },
  { icon: MapPin, label: "Serving", value: `All of ${site.areaServed}` },
];

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
        ]}
      />
      <section className="border-b border-ink-100 bg-surface">
        <Container size="wide" className="py-14 lg:py-16">
          <div className="max-w-2xl">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              Talk to a real underwriter.
            </h1>
            <p className="mt-4 text-lg text-muted">
              The fastest way to the right bond is a quick conversation. Call, or send a note and
              we&apos;ll get back to you fast.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container size="wide" className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <TldrCard
            className="mb-10 max-w-3xl lg:col-span-2"
            text={`Reach MM Bonding by phone at ${site.phone.display}, ${site.hours}. Call or text a real, licensed California surety broker, or send the form below. We serve contractors statewide across ${site.areaServed}.`}
          />
          <div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {methods.map((m) => {
                const Icon = m.icon;
                const inner = (
                  <>
                    <span className="grid size-10 place-items-center rounded-xl bg-azure-50 text-azure-600">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="mt-3 block text-sm text-muted">{m.label}</span>
                    <span className="mt-0.5 block font-display font-bold tracking-tight text-navy-900">
                      {m.value}
                    </span>
                  </>
                );
                return (
                  <li key={m.label} className="rounded-2xl border border-ink-200 bg-white p-5">
                    {m.href ? (
                      <a
                        href={m.href}
                        {...(m.callrail ? { "data-callrail": "phone" } : {})}
                        className="block transition-opacity hover:opacity-80"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 rounded-2xl border border-ink-200 bg-surface p-5 text-sm leading-relaxed text-muted">
              <p>
                <strong className="text-navy-900">Office:</strong> {site.address.street},{" "}
                {site.address.locality}, {site.address.region} {site.address.postalCode}
              </p>
              <p className="mt-2">
                <strong className="text-navy-900">Licensing:</strong> {site.name}, CA DOI License #
                {site.doiLicense}.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
              Send us a message
            </h2>
            <p className="mt-2 text-muted">
              For a formal quote, the{" "}
              <a href="/get-a-quote" className="font-medium text-azure-600 underline underline-offset-2 hover:text-azure-700">
                quote form
              </a>{" "}
              is faster. For anything else, this reaches us directly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
