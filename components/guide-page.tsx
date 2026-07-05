import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Phone, BookOpen } from "lucide-react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Eyebrow } from "./ui/eyebrow";
import { Slashes } from "./slashes";
import { Reveal } from "./reveal";
import { Faq } from "./faq";
import { ReviewedBy } from "./reviewed-by";
import { TldrCard } from "./tldr-card";
import { PreferredSource } from "./preferred-source";
import { JsonLd, faqSchema, breadcrumbSchema, type FaqItem } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { REGULATORY_REVIEWED } from "@/lib/regulatory";
import { guides, guideHref, guideHero, guideImageAlt, type Guide } from "@/lib/guides";

export function GuidePage({
  guide,
  intro,
  children,
  faqs,
  related,
  tldr,
}: {
  guide: Guide;
  intro: string;
  children: React.ReactNode;
  faqs: FaqItem[];
  /** Money-page links for the sidebar. */
  related?: { label: string; href: string }[];
  /** Answer-first TL;DR (under 60 words). Falls back to the registry excerpt. */
  tldr?: string;
}) {
  const tldrText = tldr ?? guide.excerpt;
  const href = guideHref(guide.slug);
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: guide.title, url: href },
  ];
  // Prefer guides in the same category so the "More guides" sidebar is
  // topically tight, then fill with others.
  const sameCategory = guides.filter(
    (g) => g.slug !== guide.slug && g.category === guide.category,
  );
  const otherGuides = guides.filter(
    (g) => g.slug !== guide.slug && g.category !== guide.category,
  );
  const moreGuides = [...sameCategory, ...otherGuides].slice(0, 4);

  return (
    <>
      <JsonLd
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: intro,
            author: { "@id": `${site.url}/about#michael-melshenker` },
            publisher: { "@id": `${site.url}/#organization` },
            datePublished: REGULATORY_REVIEWED.iso,
            dateModified: REGULATORY_REVIEWED.iso,
            mainEntityOfPage: `${site.url}${href}`,
          },
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-ink-100 bg-surface">
        <Container size="wide" className="py-12 lg:py-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              {crumbs.map((c, i) => (
                <li key={c.url} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.url} className="hover:text-azure-600">
                      {c.name}
                    </Link>
                  ) : (
                    <span className="font-medium text-navy-800" aria-current="page">
                      {c.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow>{guide.category}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl">
              {guide.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
          </div>
          <ReviewedBy className="mt-10 max-w-2xl" />
          <div className="mt-10 overflow-hidden rounded-2xl border border-ink-200 bg-white">
            <Image
              src={guideHero(guide.slug)}
              alt={guideImageAlt(guide)}
              width={1200}
              height={675}
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      {/* Body + sidebar */}
      <section className="py-16">
        <Container size="wide">
          <TldrCard text={tldrText} className="mb-10 max-w-3xl" />
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <article>{children}</article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl bg-navy-900 p-6 text-white">
              <Slashes tone="white" className="opacity-40" />
              <h2 className="mt-4 font-display text-xl font-bold tracking-tight">Ready to get bonded?</h2>
              <p className="mt-2 text-sm text-navy-200">
                Start a quote in two minutes, or call a real underwriter.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <Button href="/get-a-quote" variant="primary" className="w-full">
                  Get a Quote
                </Button>
                <a
                  href={site.phone.href}
                  data-callrail="phone"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/15 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="size-4 text-azure-300" aria-hidden="true" />
                  <span className="tabular">{site.phone.display}</span>
                </a>
              </div>
            </div>

            {related && related.length > 0 && (
              <div className="rounded-2xl border border-ink-200 bg-white p-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
                  Related
                </h2>
                <ul className="mt-4 space-y-1">
                  {related.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="group flex items-center justify-between gap-3 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-surface"
                      >
                        <span className="font-medium text-navy-800">{r.label}</span>
                        <ArrowRight className="size-4 shrink-0 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-azure-500" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border border-ink-200 bg-white p-6">
              <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-navy-900">
                <BookOpen className="size-4 text-azure-500" aria-hidden="true" /> More guides
              </h2>
              <ul className="mt-4 space-y-3">
                {moreGuides.map((g) => (
                  <li key={g.slug}>
                    <Link href={guideHref(g.slug)} className="group block">
                      <span className="block text-sm font-semibold text-navy-900 group-hover:text-azure-600">
                        {g.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              FAQs
            </h2>
            <p className="mt-4 text-muted">
              Reviewed by {site.founder.name}, {site.founder.title}. Updated {REGULATORY_REVIEWED.label}.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>

      {/* Preferred Source CTA */}
      <section className="pb-16">
        <Container size="wide">
          <PreferredSource className="max-w-3xl" />
        </Container>
      </section>
    </>
  );
}
