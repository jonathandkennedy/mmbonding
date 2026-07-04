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

const description = `Fianzas de cumplimiento en California para construcción. Garantice la terminación del proyecto. Tarifas según el tamaño del contrato, el crédito y la experiencia. Capacidad para casos difíciles de un corredor con licencia, CA DOI #${site.doiLicense}.`;

export const metadata: Metadata = {
  title: "Fianza de Cumplimiento en California",
  description,
  openGraph: {
    locale: "es_US",
    title: "Fianza de Cumplimiento en California",
    description,
  },
  alternates: {
    canonical: "/es/fianza-de-cumplimiento",
    languages: hreflangFor("/contract-bonds/performance-bond", "/es/fianza-de-cumplimiento"),
  },
};

const faqs = [
  {
    q: "¿Qué garantiza una fianza de cumplimiento?",
    a: "Le garantiza al dueño que usted terminará el proyecto conforme a los términos del contrato. Si incumple, la afianzadora interviene para asegurar que la obra se complete y luego le exige a usted que la reembolse.",
  },
  {
    q: "¿Cuánto cuesta una fianza de cumplimiento?",
    a: "Las tarifas suelen ser un pequeño porcentaje del monto del contrato, determinado por el tamaño del contrato, su crédito, su experiencia y la obra que tenga en curso. Los proyectos más grandes y largos, y un crédito más difícil, suben la tarifa. Cotizamos su obra específica.",
  },
  {
    q: "¿Puede afianzarse un contratista nuevo o con mal crédito?",
    a: "Con frecuencia, sí. Aquí es donde un corredor demuestra su valor. Construimos un programa y consultamos los mercados que afianzan a contratistas en crecimiento y con mal crédito, en lugar de rechazar al primer obstáculo. La evaluación de crédito sigue aplicando y no garantizamos la aprobación.",
  },
];

const crumbs = [
  { name: "Inicio", url: "/" },
  { name: "Español", url: "/es" },
  { name: "Fianza de Cumplimiento", url: "/es/fianza-de-cumplimiento" },
];

export default function Page() {
  return (
    <>
      <SetHtmlLang lang="es" />
      <JsonLd
        schema={[
          serviceSchema({
            name: "Fianza de Cumplimiento en California",
            description,
            url: "/es/fianza-de-cumplimiento",
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
                  Fianza de Cumplimiento
                </li>
              </ol>
            </nav>
            <div className="mt-6 max-w-3xl">
              <Eyebrow tone="dark">Fianzas de contrato</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                Fianza de Cumplimiento en California
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-200">
                Una fianza de cumplimiento le garantiza al dueño que su proyecto se terminará
                conforme al contrato. Cotizamos su obra específica y construimos capacidad para
                crecer, incluso con crédito más difícil y contratistas nuevos.
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
                text="La fianza de cumplimiento le garantiza al dueño que su obra se terminará conforme al contrato. La prima es un pequeño porcentaje del valor del contrato, según su crédito, su experiencia y el tamaño del proyecto. Cotizamos su obra específica y construimos capacidad, incluso con crédito difícil."
                className="mb-10 max-w-3xl"
              />
              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Qué hace una fianza de cumplimiento
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Una fianza de cumplimiento es la garantía del dueño de que la obra se terminará
                  según lo acordado. Suele exigirse en obras públicas y es común en proyectos privados
                  grandes, por lo general junto con una fianza de pago. Si el contratista incumple, la
                  afianzadora asegura la terminación y luego busca el reembolso del contratista.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Qué determina la tarifa
                </h2>
                <p className="mt-4 text-muted">
                  Las primas de la fianza de cumplimiento son un porcentaje del valor del contrato.
                  Los factores principales:
                </p>
                <ul className="mt-4 space-y-2.5 text-muted">
                  <li className="flex gap-3">
                    <Slashes size="sm" className="mt-1.5 shrink-0" />
                    <span>El tamaño y la duración del contrato</span>
                  </li>
                  <li className="flex gap-3">
                    <Slashes size="sm" className="mt-1.5 shrink-0" />
                    <span>Su crédito y su solidez financiera</span>
                  </li>
                  <li className="flex gap-3">
                    <Slashes size="sm" className="mt-1.5 shrink-0" />
                    <span>Su trayectoria en obras similares</span>
                  </li>
                  <li className="flex gap-3">
                    <Slashes size="sm" className="mt-1.5 shrink-0" />
                    <span>La obra en curso y la capacidad restante</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Capacidad para crecer
                </h2>
                <p className="mt-4 text-muted">
                  Cuanto más grande es la obra, más importa la evaluación de crédito. Como corredores,
                  armamos un programa de afianzamiento que aumenta con el tiempo sus límites por obra
                  y totales, y consultamos los mercados que manejan los casos difíciles. Colocamos a
                  contratistas con mal crédito y a contratistas nuevos; la evaluación de crédito sigue
                  aplicando y no garantizamos la aprobación. ¿Va a licitar una obra mayor que su línea
                  actual? Conviene conversarlo desde temprano.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Fianzas relacionadas
                </h2>
                <p className="mt-4 text-muted">
                  La fianza de cumplimiento suele ir de la mano de una{" "}
                  <Link
                    href="/es/fianza-de-licitacion"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    fianza de licitación
                  </Link>{" "}
                  cuando se presenta a la obra, y de la{" "}
                  <Link
                    href="/es/fianza-de-contratista"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    fianza de licencia de contratista
                  </Link>{" "}
                  que todo contratista de California debe mantener. Vea todas nuestras{" "}
                  <Link
                    href="/es"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    fianzas en español
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
                  ¿Listo para una obra mayor?
                </h2>
                <p className="mt-3 text-sm text-navy-200">
                  Cotizamos su proyecto y construimos la capacidad para crecer, incluso con crédito
                  más difícil. Hablemos.
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
                Fianza de cumplimiento: preguntas
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
                Afiance la terminación de su obra.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-200">
                Cotizamos su proyecto y construimos capacidad para crecer. Empecemos.
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
