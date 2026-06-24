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

const description = `Fianzas de contrato en California para construcción pública y privada: fianza de licitación, de cumplimiento y de pago. Capacidad construida por un corredor, incluso para casos difíciles. CA DOI #${site.doiLicense}.`;

export const metadata: Metadata = {
  title: "Fianzas de Contrato (Licitación, Cumplimiento y Pago)",
  description,
  openGraph: {
    locale: "es_US",
    title: "Fianzas de Contrato (Licitación, Cumplimiento y Pago)",
    description,
  },
  alternates: {
    canonical: "/es/fianzas-de-contrato",
    languages: hreflangFor("/contract-bonds", "/es/fianzas-de-contrato"),
  },
};

const cards = [
  {
    name: "Fianza de Licitación",
    href: "/es/fianza-de-licitacion",
    summary:
      "Respalda su propuesta y garantiza que entregará las fianzas requeridas si gana la obra.",
  },
  {
    name: "Fianza de Cumplimiento",
    href: "/es/fianza-de-cumplimiento",
    summary:
      "Le garantiza al dueño que la obra se terminará conforme a los términos del contrato.",
  },
  {
    name: "Fianza de Pago",
    href: "/es/fianza-de-pago",
    summary:
      "Garantiza que sus subcontratistas y proveedores reciban su pago. Suele ir junto a la fianza de cumplimiento.",
  },
];

const lifecycle = [
  {
    phase: "Licitar",
    body: "Una fianza de licitación respalda su propuesta y promete que entregará las fianzas de contrato si gana.",
  },
  {
    phase: "Adjudicación",
    body: "Gana la obra. Ahora el dueño le exige fianzas de cumplimiento y de pago antes de empezar.",
  },
  {
    phase: "Construir",
    body: "La fianza de cumplimiento garantiza la terminación; la de pago garantiza que sus subcontratistas y proveedores cobren.",
  },
];

const faqs = [
  {
    q: "¿Cuál es la diferencia entre fianza de licitación, de cumplimiento y de pago?",
    a: "La fianza de licitación respalda su propuesta. La de cumplimiento garantiza que usted termina la obra. La de pago garantiza que sus subcontratistas y proveedores reciban su pago. En la mayoría de las obras públicas necesitará las tres a lo largo de la vida del proyecto.",
  },
  {
    q: "¿Por qué usar un corredor para las fianzas de contrato en lugar de un sitio instantáneo?",
    a: "La fianza de contrato se evalúa según sus finanzas, su experiencia y su capacidad, no con un algoritmo de un clic. Un corredor arma y hace crecer su línea de afianzamiento, consulta varios mercados y coloca a contratistas con mal crédito o sin trayectoria que los sitios automáticos rechazan. La evaluación de crédito sigue aplicando y no garantizamos la aprobación.",
  },
  {
    q: "¿Pueden afianzar una obra mayor que mi límite actual?",
    a: "Con frecuencia, sí, con la preparación adecuada. Trabajamos sus finanzas y su historial entre varios mercados para construir capacidad por obra y total. Conviene empezar la conversación temprano, antes de la fecha de la licitación.",
  },
];

const crumbs = [
  { name: "Inicio", url: "/" },
  { name: "Español", url: "/es" },
  { name: "Fianzas de Contrato", url: "/es/fianzas-de-contrato" },
];

export default function Page() {
  return (
    <>
      <SetHtmlLang lang="es" />
      <JsonLd
        schema={[
          serviceSchema({
            name: "Fianzas de Contrato en California",
            description,
            url: "/es/fianzas-de-contrato",
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
                  Fianzas de Contrato
                </li>
              </ol>
            </nav>
            <div className="mt-6 max-w-3xl">
              <Eyebrow tone="dark">Fianzas de contrato</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                Fianzas de licitación, cumplimiento y pago, en torno a su línea de afianzamiento.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-200">
                Las fianzas de contrato son un programa, no una compra exprés. Armamos y hacemos
                crecer su capacidad, consultamos varios mercados y colocamos los casos que los sitios
                automáticos rechazan.
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

        {/* The three bonds */}
        <section className="py-16 lg:py-20">
          <Container size="wide">
            <Reveal className="max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900">
                Las tres fianzas de contrato
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Cada obra afianzada pasa por tres garantías distintas. Esto es lo que hace cada una.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {cards.map((b, i) => (
                <Reveal as="div" key={b.href} delay={i * 70}>
                  <Link
                    href={b.href}
                    className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-[box-shadow,border-color] duration-200 hover:border-azure-300 hover:shadow-md"
                  >
                    <Slashes size="sm" />
                    <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-navy-900">
                      {b.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted">{b.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 transition-transform duration-200 ease-out group-hover:translate-x-1">
                      Más información
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Lifecycle */}
        <section className="bg-navy-900 py-16 text-white">
          <Container size="wide">
            <Reveal className="max-w-2xl">
              <Eyebrow tone="dark">El ciclo del proyecto</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight">
                Una obra, tres momentos en que necesita una fianza.
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {lifecycle.map((l, i) => (
                <Reveal as="li" key={l.phase} delay={i * 70}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-azure-300">0{i + 1}</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-azure-400/60 to-transparent" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{l.phase}</h3>
                  <p className="mt-2 text-navy-200">{l.body}</p>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* Why a broker */}
        <section className="py-16 lg:py-20">
          <Container size="wide" className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal className="max-w-2xl space-y-10">
              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Por qué un corredor construye su capacidad
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  La fianza de contrato no se emite con un solo clic. La afianzadora evalúa sus
                  finanzas, su experiencia y la obra que ya tiene en curso para fijar cuánto puede
                  afianzar por proyecto y en total. Ese límite es su capacidad de afianzamiento, y
                  crece con el tiempo a medida que construye un historial sólido.
                </p>
                <p className="mt-4 text-muted">
                  Como corredores, armamos su programa, presentamos su solicitud a los mercados que de
                  verdad afianzan construcción y negociamos límites que acompañen su crecimiento. En
                  vez de un único número de tómelo o déjelo, comparamos su caso entre varias
                  afianzadoras. Colocamos a contratistas nuevos y a los de mal crédito; la evaluación
                  de crédito sigue aplicando y no garantizamos la aprobación.
                </p>
                <p className="mt-4 text-muted">
                  ¿Va a licitar una obra mayor que su línea actual? Conviene conversarlo desde
                  temprano, antes de la fecha de la propuesta, para tener tiempo de preparar su
                  expediente y ampliar la capacidad.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Fianzas relacionadas
                </h2>
                <p className="mt-4 text-muted">
                  Toda obra afianzada se apoya en la{" "}
                  <Link
                    href="/es/fianza-de-contratista"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    fianza de licencia de contratista
                  </Link>{" "}
                  que todo contratista de California debe mantener. ¿Crédito difícil o un rechazo
                  reciente? Vea nuestras{" "}
                  <Link
                    href="/es/fianzas-mal-credito"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    fianzas para mal crédito
                  </Link>{" "}
                  o vuelva a la{" "}
                  <Link
                    href="/es"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    página principal en español
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
                  ¿Listo para licitar?
                </h2>
                <p className="mt-3 text-sm text-navy-200">
                  Cotizamos su obra y construimos la capacidad para crecer, incluso con crédito más
                  difícil. Hablemos.
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
                Fianzas de contrato: preguntas
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
                Construyamos su línea de afianzamiento.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-200">
                Cotizamos su obra y hacemos crecer su capacidad proyecto tras proyecto. Empecemos.
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
