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
import { facts } from "@/lib/regulatory";
import { usd, clampDescription } from "@/lib/utils";
import { hreflangFor } from "@/lib/i18n";

const description = clampDescription(`La fianza de licencia de contratista de ${usd(facts.licenseBondAmount)} en California, exigida por ${facts.licenseBondStatute}. Cotizaciones rápidas y mal crédito bienvenido. Corredor con licencia, CA DOI #${site.doiLicense}.`);

export const metadata: Metadata = {
  title: "Fianza de Licencia de Contratista en California",
  description,
  openGraph: {
    locale: "es_US",
    title: "Fianza de Licencia de Contratista en California",
    description,
  },
  alternates: {
    canonical: "/es/fianza-de-contratista",
    languages: hreflangFor("/contractor-license-bond", "/es/fianza-de-contratista"),
  },
};

const heroFacts = [
  { label: "Monto de la fianza", value: usd(facts.licenseBondAmount) },
  { label: "Estatuto", value: facts.licenseBondStatute },
  { label: "Formulario CSLB", value: facts.licenseBondForm },
];

const faqs = [
  {
    q: "¿Cuánto cuesta la fianza de licencia de contratista en California?",
    a: `El monto de la fianza es de ${usd(facts.licenseBondAmount)}, establecido por ${facts.licenseBondStatute}. Usted no paga esa cantidad. Paga una prima anual, que es un pequeño porcentaje de ese monto (del ${facts.licensePremiumRange.lowPct}% al ${facts.licensePremiumRange.highPct}%), basada sobre todo en su crédito.`,
  },
  {
    q: "¿Quién necesita una fianza de licencia de contratista en California?",
    a: "Todo contratista con licencia de la CSLB, sin excepciones. La necesita para emitir una licencia nueva, renovar una activa o reactivar una inactiva. Aplica por igual a propietarios únicos, corporaciones y compañías de responsabilidad limitada (LLC).",
  },
  {
    q: "¿Qué cubre en realidad la fianza de licencia de contratista?",
    a: "Protege a los consumidores y a los empleados, no al contratista. Un reclamo válido puede pagarse por situaciones como violaciones intencionales o fraudulentas de la ley de contratistas, falta de pago de salarios a los empleados o daños derivados de una infracción del código. Si la afianzadora paga un reclamo, usted debe reembolsarle.",
  },
  {
    q: "¿Puedo obtener la fianza de licencia con mal crédito?",
    a: "Por lo general, sí. La fianza de licencia es una de las más fáciles de colocar incluso con crédito complicado. Las tarifas son más altas con un crédito más difícil, pero como corredores consultamos varios mercados para colocarlo en lugar de rechazarlo de plano. La evaluación de crédito sigue aplicando y no garantizamos la aprobación.",
  },
];

const crumbs = [
  { name: "Inicio", url: "/" },
  { name: "Español", url: "/es" },
  { name: "Fianza de Contratista", url: "/es/fianza-de-contratista" },
];

export default function Page() {
  return (
    <>
      <SetHtmlLang lang="es" />
      <JsonLd
        schema={[
          serviceSchema({
            name: "Fianza de Licencia de Contratista en California",
            description,
            url: "/es/fianza-de-contratista",
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
                  Fianza de Contratista
                </li>
              </ol>
            </nav>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-2xl">
                <Eyebrow tone="dark">Principal · CSLB</Eyebrow>
                <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                  Fianza de Licencia de Contratista en California
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-navy-200">
                  La fianza de {usd(facts.licenseBondAmount)} que todo contratista con licencia en
                  California debe mantener. La cotizamos rápido, la colocamos incluso con mal crédito
                  y la presentamos electrónicamente ante la CSLB por usted.
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

              {/* Key facts card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-azure-300">
                  Datos clave
                </h2>
                <dl className="mt-5 space-y-5">
                  {heroFacts.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm text-navy-300">{f.label}</dt>
                      <dd className="font-mono text-lg font-semibold text-white tabular">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
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
                text={`La fianza de licencia de contratista es la garantía de ${usd(facts.licenseBondAmount)} que todo contratista con licencia de la CSLB debe mantener. Usted no paga esos ${usd(facts.licenseBondAmount)}, sino una prima anual pequeña según su crédito. Colocamos el mal crédito; la evaluación de crédito sigue aplicando y no garantizamos la aprobación.`}
                className="mb-10 max-w-3xl"
              />
              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Qué es la fianza de licencia de contratista
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  La fianza de licencia de contratista de California es una fianza de garantía de{" "}
                  <strong>{usd(facts.licenseBondAmount)}</strong> exigida a todo contratista con
                  licencia de la Junta Estatal de Licencias de Contratistas (CSLB). La establece{" "}
                  <code>{facts.licenseBondStatute}</code> y se presenta en el{" "}
                  <strong>formulario CSLB {facts.licenseBondForm}</strong>. El monto se elevó a{" "}
                  {usd(facts.licenseBondAmount)} con la ley SB 607, vigente desde el 1 de enero de
                  2023.
                </p>
                <p className="mt-4 text-muted">
                  Una fianza de garantía no es un seguro para usted. Es un acuerdo de tres partes:
                  usted (el contratista), la CSLB y el público (los beneficiarios) y la afianzadora.
                  Protege a los consumidores y a sus empleados contra ciertas violaciones de la ley
                  de contratistas. Si la afianzadora paga un reclamo válido, usted le reembolsa.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Quién la necesita
                </h2>
                <p className="mt-4 text-muted">
                  Todo contratista con licencia de la CSLB, <strong>sin excepciones</strong>. Debe
                  tener una fianza activa en archivo para:
                </p>
                <ul className="mt-4 space-y-2.5 text-muted">
                  <li className="flex gap-3">
                    <Slashes size="sm" className="mt-1.5 shrink-0" />
                    <span>Emitir una licencia de contratista nueva</span>
                  </li>
                  <li className="flex gap-3">
                    <Slashes size="sm" className="mt-1.5 shrink-0" />
                    <span>Renovar una licencia activa existente</span>
                  </li>
                  <li className="flex gap-3">
                    <Slashes size="sm" className="mt-1.5 shrink-0" />
                    <span>Reactivar una licencia que pasó a estar inactiva</span>
                  </li>
                  <li className="flex gap-3">
                    <Slashes size="sm" className="mt-1.5 shrink-0" />
                    <span>Mantener la licencia en regla año tras año</span>
                  </li>
                </ul>
                <p className="mt-4 text-muted">
                  Aplica ya sea que usted sea propietario único, corporación o LLC, ya que se exige a
                  los contratistas nuevos, a los que renuevan y a los que reactivan.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Cuánto cuesta
                </h2>
                <p className="mt-4 text-muted">
                  Usted paga una <strong>prima</strong>, no el monto nominal de{" "}
                  {usd(facts.licenseBondAmount)}. La prima es un porcentaje anual determinado sobre
                  todo por su crédito personal, por lo general un{" "}
                  <strong>
                    pequeño porcentaje del monto de la fianza (del {facts.licensePremiumRange.lowPct}%
                    al {facts.licensePremiumRange.highPct}%)
                  </strong>
                  . Un buen crédito puede empezar en pocos cientos de dólares al año. Un crédito más
                  difícil cuesta más, pero sigue siendo muy fácil de colocar.
                </p>
                <p className="mt-4 text-muted">
                  Como somos corredores, comparamos su solicitud entre varios mercados y le cotizamos
                  la tarifa más competitiva para la que califique, en lugar de un único número de
                  tómelo o déjelo. Colocamos casos de mal crédito; la evaluación de crédito sigue
                  aplicando y no garantizamos la aprobación.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Cómo funciona la presentación
                </h2>
                <p className="mt-4 text-muted">
                  Una vez que acepta su cotización y paga la prima, su afianzadora presenta la fianza
                  electrónicamente y de forma directa ante la CSLB. Las presentaciones electrónicas
                  suelen registrarse en un plazo de <strong>{facts.filingWindow}</strong>, y muchos
                  solicitantes que califican quedan afianzados el mismo día hábil. Nos encargamos del
                  papeleo y le confirmamos la presentación.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Otras fianzas para contratistas
                </h2>
                <p className="mt-4 text-muted">
                  La fianza de licencia es la base. Según su proyecto, también podría necesitar una{" "}
                  <Link
                    href="/es/fianza-de-licitacion"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    fianza de licitación
                  </Link>{" "}
                  para presentarse a una obra y una{" "}
                  <Link
                    href="/es/fianza-de-cumplimiento"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    fianza de cumplimiento
                  </Link>{" "}
                  cuando gane un contrato afianzado. ¿No sabe por dónde empezar? Vuelva a la{" "}
                  <Link
                    href="/es"
                    className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                  >
                    página principal en español
                  </Link>{" "}
                  y le indicamos cuál le conviene.
                </p>
              </div>

              <ReviewedBy lang="es" />
            </Reveal>

            {/* Side CTA */}
            <Reveal delay={80} className="lg:sticky lg:top-24">
              <div className="rounded-2xl bg-navy-900 p-8 text-white">
                <h2 className="font-display text-xl font-bold tracking-tight">
                  ¿Listo para afianzarse?
                </h2>
                <p className="mt-3 text-sm text-navy-200">
                  Comience su cotización en minutos, sin tarjeta ni número de seguro social para
                  empezar. Colocamos el mal crédito y los casos difíciles.
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
                Fianza de contratista: preguntas
              </h2>
              <p className="mt-4 text-muted">
                Cifras verificadas con la CSLB. Revisado por {site.founder.name}, {site.founder.title}.
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
                Obtenga su fianza de licencia hoy.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-200">
                Cotizamos rápido y presentamos ante la CSLB por usted. Empecemos.
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
