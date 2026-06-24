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
import {
  JsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/jsonld";
import { SetHtmlLang } from "@/components/set-html-lang";
import { site } from "@/lib/site";
import { hreflangFor } from "@/lib/i18n";

const description = `Fianzas de licitación en California para obras públicas y privadas. Garantice su oferta rápido, por lo general sin una prima aparte como parte de su programa de afianzamiento. Corredor con licencia, CA DOI #${site.doiLicense}.`;

export const metadata: Metadata = {
  title: "Fianza de Licitación en California",
  description,
  openGraph: {
    locale: "es_US",
    title: "Fianza de Licitación en California",
    description,
  },
  alternates: {
    canonical: "/es/fianza-de-licitacion",
    languages: hreflangFor("/contract-bonds/bid-bond", "/es/fianza-de-licitacion"),
  },
};

const faqs = [
  {
    q: "¿Qué garantiza una fianza de licitación?",
    a: "Garantiza dos cosas: que usted respaldará su oferta si gana y que entregará las fianzas de cumplimiento y de pago exigidas para tomar el contrato. Si se retira, el beneficiario puede recuperar la diferencia hasta el monto máximo de la fianza.",
  },
  {
    q: "¿Cuánto cuesta una fianza de licitación?",
    a: "La mayoría de las fianzas de licitación no llevan una prima aparte. Se emiten como parte de su programa general de afianzamiento, según su capacidad de quedar afianzado para la obra si gana. Por eso establecer una línea de afianzamiento con un corredor es lo importante.",
  },
  {
    q: "¿Qué tan rápido puedo obtener una fianza de licitación?",
    a: "Una vez que su programa de afianzamiento está configurado, cada fianza de licitación suele emitirse el mismo día. Si tiene una fecha límite de oferta cercana, llámenos y actuaremos con rapidez. La evaluación de crédito sigue aplicando y no garantizamos la aprobación.",
  },
];

const crumbs = [
  { name: "Inicio", url: "/" },
  { name: "Español", url: "/es" },
  { name: "Fianza de Licitación", url: "/es/fianza-de-licitacion" },
];

export default function Page() {
  return (
    <>
      <SetHtmlLang lang="es" />
      <JsonLd
        schema={[
          serviceSchema({
            name: "Fianza de Licitación en California",
            description,
            url: "/es/fianza-de-licitacion",
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
                  Fianza de Licitación
                </li>
              </ol>
            </nav>
            <div className="mt-6 max-w-3xl">
              <Eyebrow tone="dark">Fianzas de contrato</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                Fianza de Licitación para contratistas de California
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-200">
                Una fianza de licitación garantiza que respaldará su oferta y entregará las fianzas
                del contrato si gana. Configuramos su programa de afianzamiento para que cada oferta
                se emita rápido, por lo general sin una prima aparte.
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
              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Qué hace una fianza de licitación
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  En la mayoría de las obras públicas y en muchos proyectos privados, el dueño exige
                  una fianza de licitación junto con su propuesta. Protege al dueño si el postor
                  ganador se retira o no puede entregar las fianzas de{" "}
                  <Link
                    href="/es/fianza-de-cumplimiento"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    cumplimiento
                  </Link>{" "}
                  y de pago exigidas. La fianza le asegura al dueño que su oferta es seria y que usted
                  es elegible para afianzarse para la obra.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Cuánto cuesta
                </h2>
                <p className="mt-4 text-muted">
                  Las fianzas de licitación suelen emitirse <strong>sin un cargo aparte</strong>, como
                  parte de su programa de afianzamiento. La verdadera pregunta que responde una
                  afianzadora es si afianzaría el contrato terminado en caso de que usted gane. Esa
                  capacidad se construye desde el inicio, por lo que trabajar con un corredor en su
                  programa general es la clave para obtener fianzas de licitación rápidas y sin costo
                  aparte.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Cómo obtener una antes de una fecha límite
                </h2>
                <p className="mt-4 text-muted">
                  Una vez que su programa está en marcha, una fianza de licitación específica se
                  prepara con rapidez. Para actuar rápido nos hará falta:
                </p>
                <ul className="mt-4 space-y-2.5 text-muted">
                  <li className="flex gap-3">
                    <Slashes size="sm" className="mt-1.5 shrink-0" />
                    <span>El beneficiario, el nombre del proyecto y la fecha de la oferta</span>
                  </li>
                  <li className="flex gap-3">
                    <Slashes size="sm" className="mt-1.5 shrink-0" />
                    <span>El monto estimado del contrato y el porcentaje de fianza exigido</span>
                  </li>
                  <li className="flex gap-3">
                    <Slashes size="sm" className="mt-1.5 shrink-0" />
                    <span>Un panorama actual de su negocio y de la obra en curso</span>
                  </li>
                </ul>
                <p className="mt-4 text-muted">
                  ¿Aún no tiene una línea de afianzamiento? Empiece por la{" "}
                  <Link
                    href="/es/fianza-de-contratista"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    fianza de licencia de contratista
                  </Link>{" "}
                  y vea todas nuestras{" "}
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
                  ¿Tiene una fecha límite?
                </h2>
                <p className="mt-3 text-sm text-navy-200">
                  Configuramos su programa de afianzamiento para que sus ofertas se emitan rápido.
                  Llámenos antes de la fecha de su licitación.
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
                Fianza de licitación: preguntas
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
                Asegure su fianza de licitación a tiempo.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-200">
                Construimos su capacidad de afianzamiento para que cada oferta salga rápido.
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
