import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, HardHat, Gavel, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { Slashes } from "@/components/slashes";
import { Faq } from "@/components/faq";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { SetHtmlLang } from "@/components/set-html-lang";
import { site } from "@/lib/site";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Fianzas de California de un corredor con licencia",
  description: `Fianzas de garantía en California de un corredor real. Fianza de licencia de contratista, de licitación y de cumplimiento. Rápido cuando califica y colocada en los casos difíciles, incluido el mal crédito. Licencia CA DOI #${site.doiLicense}.`,
  openGraph: {
    locale: "es_US",
    title: "Fianzas de California de un corredor con licencia",
    description:
      "Fianzas de garantía en California de un corredor real. Rápido cuando califica y colocada en los casos difíciles, incluido el mal crédito.",
  },
  alternates: {
    canonical: "/es",
    languages: hreflangFor("/", "/es"),
  },
};

const bondCards = [
  {
    href: "/es/fianza-de-contratista",
    icon: HardHat,
    title: "Fianza de Licencia de Contratista",
    body: `La fianza de ${usd(facts.licenseBondAmount)} que todo contratista con licencia de la CSLB debe mantener.`,
  },
  {
    href: "/es/fianza-de-licitacion",
    icon: Gavel,
    title: "Fianza de Licitación",
    body: "Garantiza que respaldará su oferta y entregará las fianzas del contrato si gana la obra.",
  },
  {
    href: "/es/fianza-de-cumplimiento",
    icon: ShieldCheck,
    title: "Fianza de Cumplimiento",
    body: "Garantiza al dueño de la obra que el proyecto se terminará conforme al contrato.",
  },
];

const faqs = [
  {
    q: "¿Qué es una fianza de garantía?",
    a: `Una fianza de garantía es un acuerdo de tres partes: usted (el contratista), la entidad que la exige (por ejemplo, la Junta Estatal de Licencias de Contratistas, CSLB) y la afianzadora. No es un seguro para usted; protege a terceros. Si la afianzadora paga un reclamo válido, usted debe reembolsarle. La fianza de licencia de contratista en California es de ${usd(facts.licenseBondAmount)}, exigida por ${facts.licenseBondStatute}.`,
  },
  {
    q: "¿Puedo obtener una fianza con mal crédito?",
    a: "Con frecuencia, sí. Los casos difíciles son nuestra especialidad. Los sitios de emisión instantánea rechazan el crédito complicado; nosotros, como corredores, consultamos varios mercados y trabajamos con mal crédito, reclamos previos y negocios nuevos. La evaluación de crédito sigue aplicando y no garantizamos la aprobación, pero colocamos casos que otros rechazan.",
  },
  {
    q: "¿Son ustedes una compañía de seguros?",
    a: `No. ${site.shortName} es un corredor de fianzas con licencia en California (CA DOI #${site.doiLicense}). Lo representamos a usted, consultamos varios mercados de afianzamiento de primera categoría y colocamos la fianza que mejor le conviene, en lugar de emitir desde un solo programa como un sitio de cotización automática.`,
  },
];

const crumbs = [
  { name: "Inicio", url: "/" },
  { name: "Español", url: "/es" },
];

export default function Page() {
  return (
    <>
      <SetHtmlLang lang="es" />
      <JsonLd schema={[faqSchema(faqs), breadcrumbSchema(crumbs)]} />

      <div lang="es">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-ink-100 bg-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60rem 30rem at 85% -10%, rgba(0,144,216,0.10), transparent 60%), radial-gradient(40rem 24rem at 0% 110%, rgba(0,32,64,0.06), transparent 60%)",
            }}
          />
          <Slashes
            size="lg"
            className="pointer-events-none absolute -left-2 top-28 hidden opacity-[0.12] lg:flex"
          />
          <Container size="wide" className="py-14 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-surface px-3.5 py-1.5 text-sm font-medium text-navy-800">
              <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
              Licencia CA DOI #{site.doiLicense}
            </span>
            <h1 className="mt-5 max-w-3xl font-display text-[2.7rem] font-extrabold leading-[1.04] tracking-tight text-navy-900 sm:text-6xl">
              Obtenga la fianza correcta,{" "}
              <span className="italic text-azure-500">rápido.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Fianzas de garantía en California de un corredor real. Se emiten rápido cuando usted
              califica y las colocamos en los casos difíciles cuando no.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/get-a-quote" size="lg">
                Cotizar
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={site.phone.href} variant="white" size="lg" data-callrail="phone">
                <Phone className="size-4 text-azure-500" aria-hidden="true" />
                <span className="tabular">{site.phone.display}</span>
              </Button>
            </div>
          </Container>
        </section>

        {/* Three bond cards */}
        <section className="py-16 lg:py-20">
          <Container size="wide">
            <Reveal className="max-w-2xl">
              <Eyebrow>Nuestras fianzas</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Las fianzas que más necesitan los contratistas de California.
              </h2>
              <p className="mt-3 text-lg text-muted">
                Elija su tipo de fianza. Lo guiamos hacia una cotización rápida o hacia un evaluador
                real, según lo que la fianza requiera.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {bondCards.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal as="div" key={c.href} delay={(i % 3) * 60}>
                    <Link
                      href={c.href}
                      className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-[box-shadow,border-color] duration-200 hover:border-azure-300 hover:shadow-md"
                    >
                      <span className="grid size-11 place-items-center rounded-xl bg-azure-50 text-azure-600">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-navy-900">
                        {c.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-muted">{c.body}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 transition-transform duration-200 ease-out group-hover:translate-x-1">
                        Ver más
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Bad credit / tough cases band */}
        <section className="bg-navy-900 py-16 text-white">
          <Container
            size="wide"
            className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"
          >
            <Reveal className="max-w-2xl">
              <Eyebrow tone="dark">Nuestra especialidad</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                ¿Mal crédito o un caso difícil? Eso es lo que hacemos.
              </h2>
              <p className="mt-4 text-navy-200">
                Consultamos los mercados especializados en casos difíciles y trabajamos con mal
                crédito, pérdidas previas y clases de alto riesgo. La evaluación de crédito sigue
                aplicando y no garantizamos la aprobación. Simplemente colocamos los casos
                complicados cuando otros no lo hacen.
              </p>
            </Reveal>
            <Reveal delay={80} className="shrink-0">
              {/*
                Enlaza por ahora a la página en inglés de casos difíciles.
                Una versión en español es una página futura.
              */}
              <Button href="/hard-to-place-surety-bonds" variant="white" size="lg">
                Coloque mi caso difícil
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </Reveal>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20">
          <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Eyebrow>Preguntas frecuentes</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Respuestas claras, verificadas y con fecha.
              </h2>
              <p className="mt-4 text-muted">
                Cada cifra se verifica con las fuentes de la CSLB y del CA DOI, y la revisa{" "}
                {site.founder.name}.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <Faq items={faqs} />
            </Reveal>
          </Container>
        </section>

        {/* Closing CTA */}
        <section className="pb-16">
          <Container size="wide">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-navy-900 to-navy-800 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
              <Slashes
                tone="white"
                size="lg"
                className="pointer-events-none absolute left-8 top-8 opacity-20"
              />
              <Slashes
                tone="white"
                size="lg"
                className="pointer-events-none absolute bottom-8 right-8 opacity-20"
              />
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
                Obtenga la fianza correcta,{" "}
                <span className="italic text-azure-400">rápido.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-200">
                Comience su cotización en dos minutos o llame y hable hoy mismo con un evaluador real.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/get-a-quote" variant="primary" size="lg">
                  Cotizar
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button href={site.phone.href} variant="white" size="lg" data-callrail="phone">
                  <Phone className="size-4 text-azure-500" aria-hidden="true" />
                  <span className="tabular">{site.phone.display}</span>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
