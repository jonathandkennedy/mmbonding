import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { Slashes } from "@/components/slashes";
import { Faq } from "@/components/faq";
import { ReviewedBy } from "@/components/reviewed-by";
import { TldrCard } from "@/components/tldr-card";
import {
  JsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/jsonld";
import { SetHtmlLang } from "@/components/set-html-lang";
import { site } from "@/lib/site";
import { hreflangFor } from "@/lib/i18n";

const description = `Fianzas de pago de mano de obra y materiales en California. Garantice que sus subcontratistas y proveedores reciban su pago. Suele ir junto a una fianza de cumplimiento. Corredor con licencia, CA DOI #${site.doiLicense}.`;

export const metadata: Metadata = {
  title: "Fianza de Pago en California",
  description,
  openGraph: {
    locale: "es_US",
    title: "Fianza de Pago en California",
    description,
  },
  alternates: {
    canonical: "/es/fianza-de-pago",
    languages: hreflangFor("/contract-bonds/payment-bond", "/es/fianza-de-pago"),
  },
};

const faqs = [
  {
    q: "¿Qué garantiza una fianza de pago?",
    a: "Garantiza que los subcontratistas, trabajadores y proveedores de una obra reciban su pago. En las obras públicas, donde no se puede registrar un gravamen de constructor contra la propiedad pública, la fianza de pago es la protección en la que esas partes confían.",
  },
  {
    q: "¿Es lo mismo una fianza de pago que una fianza de cumplimiento?",
    a: "No, pero por lo general se emiten juntas. La fianza de cumplimiento protege al dueño en cuanto a que la obra se termine; la fianza de pago protege a quienes aportaron mano de obra y materiales. Juntas se conocen muchas veces como fianzas P&P.",
  },
  {
    q: "¿Cuánto cuesta una fianza de pago?",
    a: "Cuando se emite junto con una fianza de cumplimiento, la prima combinada suele ser un solo porcentaje del monto del contrato y no un cargo aparte. La tarifa depende del tamaño del contrato, su crédito y su experiencia. Cotizamos el par para su obra específica.",
  },
];

const crumbs = [
  { name: "Inicio", url: "/" },
  { name: "Español", url: "/es" },
  { name: "Fianza de Pago", url: "/es/fianza-de-pago" },
];

export default function Page() {
  return (
    <>
      <SetHtmlLang lang="es" />
      <JsonLd
        schema={[
          serviceSchema({
            name: "Fianza de Pago en California",
            description,
            url: "/es/fianza-de-pago",
          }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <div lang="es">
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy-900 text-white">
          <Slashes
            size="lg"
            tone="white"
            className="pointer-events-none absolute right-10 top-16 opacity-20"
          />
          <Container size="wide" className="py-14 lg:py-20">
            <nav aria-label="Ruta de navegación">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-navy-300">
                <li>
                  <Link href="/es" className="hover:text-azure-300">
                    Inicio
                  </Link>
                </li>
                <ChevronRight className="size-3.5 text-navy-400" aria-hidden="true" />
                <li className="font-medium text-white" aria-current="page">
                  Fianza de Pago
                </li>
              </ol>
            </nav>
            <div className="mt-6 max-w-3xl">
              <Eyebrow tone="dark">Fianzas de contrato</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                Fianza de Pago en California
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-200">
                Una fianza de pago garantiza que sus subcontratistas y proveedores reciban su pago.
                Suele ir junto a una fianza de cumplimiento y es habitual en las obras públicas de
                California. Cotizamos el par para su obra específica.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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

        {/* Body */}
        <section className="py-16 lg:py-20">
          <Container size="wide" className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal className="max-w-2xl space-y-10">
              <TldrCard
                lang="es"
                text="La fianza de pago garantiza que sus subcontratistas y proveedores reciban su pago. Suele emitirse junto con la fianza de cumplimiento y es estándar en la obra pública de California, donde no se puede registrar un gravamen de constructor. Cotizamos el par para su obra específica."
                className="mb-10 max-w-3xl"
              />
              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Qué hace una fianza de pago
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Una fianza de pago, también llamada fianza de mano de obra y materiales, garantiza
                  que los subcontratistas, trabajadores y proveedores de una obra reciban su pago. En
                  los proyectos públicos, esas partes no pueden registrar un gravamen de constructor
                  contra la propiedad pública, así que la fianza de pago es su garantía. Casi siempre
                  se emite junto con una{" "}
                  <Link
                    href="/es/fianza-de-cumplimiento"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    fianza de cumplimiento
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Cuándo necesita una
                </h2>
                <p className="mt-4 text-muted">
                  Las fianzas de pago se exigen en la mayoría de los contratos de obra pública de
                  California por encima de un umbral legal, y con frecuencia se piden en proyectos
                  privados grandes. Si su contrato exige una fianza de cumplimiento, es casi seguro
                  que también exija una fianza de pago.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Cuánto cuesta
                </h2>
                <p className="mt-4 text-muted">
                  Cuando se emite con la fianza de cumplimiento, la fianza de pago suele quedar
                  cubierta por la misma prima combinada, un porcentaje del monto del contrato que fija
                  la evaluación de crédito. Cotizamos el par junto para su proyecto específico.
                  Colocamos a contratistas con mal crédito y a contratistas nuevos; la evaluación de
                  crédito sigue aplicando y no garantizamos la aprobación.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Fianzas relacionadas
                </h2>
                <p className="mt-4 text-muted">
                  La fianza de pago va de la mano de la{" "}
                  <Link
                    href="/es/fianza-de-cumplimiento"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    fianza de cumplimiento
                  </Link>{" "}
                  y, antes de eso, de la{" "}
                  <Link
                    href="/es/fianza-de-licitacion"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    fianza de licitación
                  </Link>{" "}
                  con la que se presenta a la obra. Vea cómo encajan las tres en nuestra página de{" "}
                  <Link
                    href="/es/fianzas-de-contrato"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    fianzas de contrato
                  </Link>
                  .
                </p>
              </div>

              <ReviewedBy lang="es" />
            </Reveal>

            {/* Side CTA */}
            <Reveal delay={80} className="lg:sticky lg:top-24">
              <div className="rounded-2xl bg-navy-900 p-8 text-white">
                <h2 className="font-display text-xl font-bold tracking-tight">
                  ¿Necesita fianzas P&amp;P?
                </h2>
                <p className="mt-3 text-sm text-navy-200">
                  Cotizamos juntas su fianza de cumplimiento y de pago para su obra, incluso con
                  crédito más difícil. Hablemos.
                </p>
                <div className="mt-6 flex flex-col gap-3">
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
            </Reveal>
          </Container>
        </section>

        {/* FAQ */}
        <section className="bg-surface py-16">
          <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Eyebrow>Preguntas frecuentes</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
                Fianza de pago: preguntas
              </h2>
              <p className="mt-4 text-muted">
                Revisado por {site.founder.name}, {site.founder.title}.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <Faq items={faqs} />
            </Reveal>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16">
          <Container size="wide">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 px-7 py-12 text-center text-white sm:px-12">
              <Slashes
                tone="white"
                size="lg"
                className="pointer-events-none absolute left-8 top-8 opacity-20"
              />
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                Afiance el pago de su obra.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-200">
                Cotizamos juntas su fianza de cumplimiento y de pago. Empecemos.
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
