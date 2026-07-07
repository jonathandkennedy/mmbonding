import type { Metadata } from "next";
import { clampDescription } from "@/lib/utils";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  CreditCard,
  FileWarning,
  Sprout,
  TriangleAlert,
  Gavel,
  ShieldCheck,
  Check,
} from "lucide-react";
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

const description = clampDescription(`¿Lo rechazaron en otro lugar? Colocamos fianzas para casos difíciles: mal crédito, reclamos previos, contratistas nuevos y clases de alto riesgo. Corredor con licencia en California que consulta varios mercados. CA DOI #${site.doiLicense}.`);

export const metadata: Metadata = {
  title: "Fianzas con Mal Crédito y Casos Difíciles",
  description,
  openGraph: {
    locale: "es_US",
    title: "Fianzas con Mal Crédito y Casos Difíciles",
    description,
  },
  alternates: {
    canonical: "/es/fianzas-mal-credito",
    languages: hreflangFor("/hard-to-place-surety-bonds", "/es/fianzas-mal-credito"),
  },
};

const queColocamos = [
  {
    icon: CreditCard,
    title: "Mal crédito o sin crédito",
    body: "Puntajes bajos, historiales limitados, cuentas en cobranza o ningún historial de crédito.",
  },
  {
    icon: FileWarning,
    title: "Reclamos o pérdidas previas",
    body: "Una pérdida o un reclamo anterior en una fianza que lo dejó fuera en otros lugares.",
  },
  {
    icon: Sprout,
    title: "Negocios nuevos",
    body: "Empresas recién creadas que todavía no tienen un historial que mostrar.",
  },
  {
    icon: TriangleAlert,
    title: "Clases de alto riesgo",
    body: "Oficios y tipos de fianza que los programas automáticos sencillamente no emiten.",
  },
  {
    icon: Gavel,
    title: "Antecedentes disciplinarios",
    body: "Reinstalaciones y fianzas disciplinarias para titulares de licencia con antecedentes.",
  },
];

const procesoHonesto = [
  "Consultamos varios mercados especializados en casos difíciles, no un solo programa",
  "Trabajamos con crédito complicado, pérdidas previas y expedientes de alto riesgo",
  "Le explicamos en términos claros qué necesita la evaluación para aprobar su caso",
  "Nunca prometemos aprobación garantizada ni fingimos que no hay evaluación",
];

const faqs = [
  {
    q: "¿Puedo obtener una fianza con mal crédito?",
    a: "Por lo general, sí. Los sitios de emisión instantánea consultan un solo programa y rechazan todo lo que queda fuera. Como corredores, consultamos varios mercados, incluidos los que se especializan en crédito complicado y expedientes más difíciles. La evaluación de crédito sigue aplicando, pero un rechazo en una puerta no es un rechazo en todas.",
  },
  {
    q: "¿Garantizan la aprobación?",
    a: "No, y conviene desconfiar de quien lo prometa. Toda fianza de garantía pasa por una evaluación. Lo que sí prometemos es trabajar su expediente en los mercados que manejan los casos difíciles y ser claros con usted sobre lo que se necesita.",
  },
  {
    q: "¿Cuesta más la fianza si tengo mal crédito?",
    a: "Por lo general, sí. Un crédito más complicado significa una prima más alta. La ventaja es lograr la colocación y abrir un camino hacia mejores tarifas a medida que su crédito y su historial mejoran.",
  },
  {
    q: "¿Qué necesitan de mí para empezar?",
    a: "Solo lo básico para comenzar: el tipo de fianza y el monto, su número de licencia o de solicitud si lo tiene, y un panorama franco de la situación de crédito o del reclamo. No pedimos tarjeta ni número de seguro social para darle una cotización.",
  },
];

const crumbs = [
  { name: "Inicio", url: "/" },
  { name: "Fianzas con Mal Crédito", url: "/es/fianzas-mal-credito" },
];

export default function Page() {
  return (
    <>
      <SetHtmlLang lang="es" />
      <JsonLd
        schema={[
          serviceSchema({
            name: "Fianzas con Mal Crédito en California",
            description,
            url: "/es/fianzas-mal-credito",
          }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <div lang="es">
        {/* Hero navy, diferenciador */}
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
                  Fianzas con Mal Crédito
                </li>
              </ol>
            </nav>
            <div className="mt-6 max-w-3xl">
              <Eyebrow tone="dark">Nuestra especialidad</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                ¿Lo rechazaron en otro lugar?{" "}
                <span className="italic text-azure-400">Eso es lo que hacemos.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-200">
                Mal crédito, reclamos previos, negocios nuevos, clases de alto riesgo. Los
                expedientes que los sitios de emisión instantánea rechazan son justo los que estamos
                preparados para colocar.
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

        {/* Lo que colocamos */}
        <section className="py-16">
          <Container size="wide">
            <TldrCard
              lang="es"
              text="¿Puede obtener una fianza con mal crédito? Casi siempre, sí. El crédito sube su tarifa, no su elegibilidad. Como corredores consultamos varios mercados, incluidos los que se especializan en casos difíciles. La evaluación de crédito sigue aplicando y no garantizamos la aprobación."
              className="mb-10 max-w-3xl"
            />
            <Reveal className="max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Lo que colocamos cuando otros no
              </h2>
              <p className="mt-3 text-lg text-muted">
                Cinco situaciones que se rechazan de forma automática en línea y que nosotros
                trabajamos para colocar a mano.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {queColocamos.map((w, i) => {
                const Icon = w.icon;
                return (
                  <Reveal as="div" key={w.title} delay={(i % 3) * 60}>
                    <div className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6">
                      <span className="grid size-11 place-items-center rounded-xl bg-azure-50 text-azure-600">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-navy-900">
                        {w.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted">{w.body}</p>
                    </div>
                  </Reveal>
                );
              })}
              <Reveal delay={120}>
                <Link
                  href="/es/fianza-de-contratista"
                  className="group flex h-full flex-col justify-between rounded-2xl bg-navy-900 p-6 text-white transition-shadow hover:shadow-lg"
                >
                  <div>
                    <ShieldCheck className="size-7 text-azure-300" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight">
                      Fianza de licencia de contratista
                    </h3>
                    <p className="mt-2 text-sm text-navy-200">
                      La fianza base que todo contratista necesita. Vea cómo la colocamos incluso con
                      crédito complicado.
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-300 transition-transform duration-200 ease-out group-hover:translate-x-1">
                    Ver la guía
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Proceso honesto, la garantia de honestidad */}
        <section className="bg-surface py-16">
          <Container size="wide" className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Proceso honesto</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Sin promesas falsas. Un corredor que sigue trabajando.
              </h2>
              <p className="mt-4 text-lg text-muted">
                Que un caso sea difícil no significa que no haya evaluación. No prometemos aprobación
                garantizada, porque las fianzas no funcionan así y usted merece la verdad. Lo que sí
                hacemos es consultar los mercados que dicen que sí a los expedientes difíciles. La
                evaluación de crédito sigue aplicando y nunca garantizamos la aprobación.
              </p>
              <div className="mt-7">
                <ReviewedBy lang="es" />
              </div>
            </Reveal>
            <Reveal delay={80} className="rounded-2xl border border-ink-200 bg-white p-7">
              <ul className="space-y-4">
                {procesoHonesto.map((h) => (
                  <li key={h} className="flex gap-3 text-navy-800">
                    <Check className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>

        {/* Enlaces a otras fianzas en español */}
        <section className="py-16">
          <Container size="wide">
            <Reveal className="max-w-2xl">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                Otras fianzas que colocamos
              </h2>
              <p className="mt-4 text-muted">
                ¿Sabe qué fianza necesita? Estos son los tipos más comunes para contratistas en
                California. La{" "}
                <Link
                  href="/es/fianza-de-contratista"
                  className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                >
                  fianza de licencia de contratista
                </Link>{" "}
                es la base. Para presentarse a una obra suele necesitar una{" "}
                <Link
                  href="/es/fianza-de-licitacion"
                  className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                >
                  fianza de licitación
                </Link>
                , y al ganar un contrato afianzado, una{" "}
                <Link
                  href="/es/fianza-de-cumplimiento"
                  className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                >
                  fianza de cumplimiento
                </Link>
                . ¿No sabe por dónde empezar? Vuelva a la{" "}
                <Link
                  href="/es"
                  className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                >
                  página principal en español
                </Link>{" "}
                y le indicamos cuál le conviene.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Preguntas frecuentes */}
        <section className="bg-surface py-16">
          <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Eyebrow>Preguntas frecuentes</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
                Fianzas con mal crédito: preguntas
              </h2>
              <p className="mt-4 text-muted">
                Respuestas claras y honestas. Revisado por {site.founder.name}, {site.founder.title}.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <Faq items={faqs} />
            </Reveal>
          </Container>
        </section>

        {/* CTA */}
        <section className="pb-16 pt-16">
          <Container size="wide">
            <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 px-7 py-10 text-center text-white sm:flex-row sm:px-10 sm:text-left">
              <Slashes
                tone="white"
                size="lg"
                className="pointer-events-none absolute left-8 top-8 opacity-20"
              />
              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight">
                  ¿Tiene un caso difícil? Vamos a colocarlo.
                </h2>
                <p className="mt-1 text-navy-200">
                  Un evaluador de verdad, varios mercados y respuestas claras.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
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
