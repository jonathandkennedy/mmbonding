import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  Sprout,
  Users,
  Landmark,
  TrendingUp,
  ShieldCheck,
  Check,
  Building2,
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
import { sba } from "@/lib/regulatory";
import { usd } from "@/lib/utils";
import { hreflangFor } from "@/lib/i18n";

const limitM = `$${sba.contractLimit / 1_000_000}M`;
const federalM = `$${sba.federalContractLimit / 1_000_000}M`;

const description = `El programa de Garantía de Fianzas de la SBA respalda fianzas de licitación, cumplimiento y pago de hasta ${usd(sba.contractLimit)} por contrato para contratistas pequeños y con mal crédito. Especialistas en casos difíciles, CA DOI #${site.doiLicense}.`;

export const metadata: Metadata = {
  title: "Fianzas de la SBA para Contratistas Pequeños y en Crecimiento",
  description,
  openGraph: {
    locale: "es_US",
    title: "Fianzas de la SBA para Contratistas Pequeños y en Crecimiento",
    description,
  },
  alternates: {
    canonical: "/es/fianzas-sba",
    languages: hreflangFor("/sba-surety-bonds", "/es/fianzas-sba"),
  },
};

const whoFor = [
  {
    icon: Sprout,
    title: "Contratistas nuevos",
    body: "¿Todavía no tiene historial de afianzamiento? El programa de la SBA está diseñado para que pueda empezar.",
  },
  {
    icon: TrendingUp,
    title: "Empresas en crecimiento",
    body: "¿Está licitando obras mayores que su línea actual? La garantía construye capacidad.",
  },
  {
    icon: ShieldCheck,
    title: "Con crédito difícil",
    body: "¿Rechazado por los mercados estándar por su crédito? El respaldo de la SBA cambia el cálculo.",
  },
  {
    icon: Users,
    title: "Empresas desfavorecidas y de veteranos",
    body: `Las empresas 8(a), HUBZone, en desventaja y de veteranos obtienen la garantía más alta del ${sba.guaranteeHighPct}%.`,
  },
  {
    icon: Building2,
    title: "Subcontratistas que dan el salto",
    body: "Pasando por primera vez a contratos como contratista principal que exigen fianzas.",
  },
  {
    icon: Landmark,
    title: "Licitantes de obra pública",
    body: `Buscando obra del gobierno, hasta ${federalM} en contratos federales con la certificación correspondiente.`,
  },
];

const numbers = [
  {
    label: "Límite por contrato",
    value: usd(sba.contractLimit),
    note: "Cualquier proyecto, licitación / cumplimiento / pago",
  },
  {
    label: "Límite en contratos federales",
    value: usd(sba.federalContractLimit),
    note: "Con la certificación del oficial de contratación",
  },
  {
    label: "Garantía de la SBA",
    value: `${sba.guaranteeLowPct}% a ${sba.guaranteeHighPct}%`,
    note: `${sba.guaranteeHighPct}% hasta ${usd(sba.guaranteeHighThreshold)} y para empresas en desventaja, 8(a), HUBZone y de veteranos`,
  },
];

const steps = [
  {
    title: "Cuéntenos sobre su negocio y la obra",
    body: "Su oficio, su historial y el contrato que persigue. Sin tarjeta ni número de seguro social para empezar.",
  },
  {
    title: "Le ayudamos a preparar la solicitud de la SBA",
    body: "Reunimos lo que el programa necesita y presentamos su expediente ante una afianzadora participante.",
  },
  {
    title: "Se emite su fianza",
    body: "Con la SBA respaldando a la afianzadora, las fianzas que parecían fuera de alcance se vuelven posibles.",
  },
];

const faqs = [
  {
    q: "¿Qué es el programa de Garantía de Fianzas de la SBA?",
    a: `Es un programa federal en el que la Administración de Pequeñas Empresas (SBA) garantiza del ${sba.guaranteeLowPct}% al ${sba.guaranteeHighPct}% de la pérdida de una afianzadora en fianzas para pequeñas empresas. Esa garantía baja el riesgo de la afianzadora, de modo que puede emitir fianzas a contratistas pequeños, nuevos y con mal crédito que no calificarían para crédito de afianzamiento estándar.`,
  },
  {
    q: "¿Para contratos de qué tamaño puede la SBA garantizar una fianza?",
    a: `Hasta ${usd(sba.contractLimit)} por contrato en cualquier proyecto, y hasta ${usd(sba.federalContractLimit)} en contratos federales cuando el oficial de contratación certifica que la garantía es necesaria. Cubre fianzas de licitación, cumplimiento, pago y accesorias.`,
  },
  {
    q: "¿Quién califica para las fianzas respaldadas por la SBA?",
    a: "Las pequeñas empresas que cumplen con los estándares de tamaño de la SBA y no pueden obtener afianzamiento por los mercados estándar. Los contratistas nuevos, las empresas con mal crédito y los negocios en desventaja social o económica, 8(a), HUBZone y de veteranos suelen encajar.",
  },
  {
    q: "¿Puedo obtener una fianza de la SBA siendo contratista nuevo o con mal crédito?",
    a: "Con frecuencia, sí. Ese es justamente el propósito del programa y es nuestra especialidad. El respaldo de la SBA amplía el acceso, pero la evaluación de crédito sigue aplicando y ningún corredor honesto promete la aprobación garantizada. Trabajamos su expediente para colocarlo.",
  },
];

const crumbs = [
  { name: "Inicio", url: "/" },
  { name: "Español", url: "/es" },
  { name: "Fianzas de la SBA", url: "/es/fianzas-sba" },
];

export default function Page() {
  return (
    <>
      <SetHtmlLang lang="es" />
      <JsonLd
        schema={[
          serviceSchema({
            name: "Programa de Fianzas de la SBA",
            description,
            url: "/es/fianzas-sba",
          }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <div lang="es">
        {/* Hero: navy, differentiator */}
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
                  Fianzas de la SBA
                </li>
              </ol>
            </nav>
            <div className="mt-6 max-w-3xl">
              <Eyebrow tone="dark">Programa de Garantía de Fianzas de la SBA</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                Fianzas de la SBA para contratistas pequeños y{" "}
                <span className="italic text-azure-400">en crecimiento.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-200">
                ¿Aún no califica para el afianzamiento estándar? La SBA respalda a las afianzadoras
                para que puedan afianzar a contratistas pequeños, nuevos y con mal crédito. Está hecho
                justo para los casos en que nos especializamos.
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

            {/* Stat strip */}
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 lg:grid-cols-4">
              {[
                { v: `Hasta ${limitM}`, l: "Por contrato" },
                { v: `${federalM}`, l: "En contratos federales" },
                { v: `${sba.guaranteeLowPct}-${sba.guaranteeHighPct}%`, l: "Garantía de la SBA" },
                { v: "Licit. · Cumpl. · Pago", l: "Fianzas cubiertas" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-extrabold tracking-tight text-white tabular sm:text-3xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-sm text-navy-300">{s.l}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* What it is */}
        <section className="py-16 lg:py-20">
          <Container size="wide" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <TldrCard
                lang="es"
                text={`El programa de Garantía de Fianzas de la SBA respalda a las afianzadoras para que los contratistas pequeños, nuevos o con mal crédito obtengan fianzas de hasta ${limitM} por contrato, o ${federalM} en contratos federales. La evaluación de crédito sigue aplicando y no garantizamos la aprobación.`}
                className="mb-10 max-w-3xl"
              />
              <Eyebrow>Cómo funciona</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Un respaldo federal que afianza a los contratistas pequeños.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                El programa de Garantía de Fianzas de la SBA es sencillo en principio. La SBA se
                compromete a cubrir del{" "}
                <strong>
                  {sba.guaranteeLowPct}% al {sba.guaranteeHighPct}%
                </strong>{" "}
                de la pérdida de una afianzadora si un contratista afianzado incumple. Esa garantía
                baja el riesgo de la afianzadora lo suficiente como para que emita fianzas a
                contratistas que de otro modo serían rechazados: los pequeños, los nuevos y los de mal
                crédito.
              </p>
              <p className="mt-4 text-muted">
                Cubre fianzas de licitación, cumplimiento, pago y accesorias en contratos de hasta{" "}
                <strong>{usd(sba.contractLimit)}</strong>, y hasta{" "}
                <strong>{usd(sba.federalContractLimit)}</strong> en obra federal cuando el oficial de
                contratación certifica la necesidad.
              </p>
            </Reveal>
            <Reveal delay={80} className="rounded-2xl border border-ink-200 bg-surface p-7">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
                Las cifras
              </h3>
              <dl className="mt-5 space-y-5">
                {numbers.map((n) => (
                  <div key={n.label} className="border-b border-ink-200 pb-5 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="text-sm text-muted">{n.label}</dt>
                      <dd className="font-mono text-lg font-semibold text-navy-900 tabular">
                        {n.value}
                      </dd>
                    </div>
                    <p className="mt-1 text-xs text-muted">{n.note}</p>
                  </div>
                ))}
              </dl>
            </Reveal>
          </Container>
        </section>

        {/* Who it's for */}
        <section className="bg-surface py-16 lg:py-20">
          <Container size="wide">
            <Reveal className="max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Para quién está hecho el programa de la SBA
              </h2>
              <p className="mt-3 text-lg text-muted">
                Si una afianzadora estándar lo rechazó, esta suele ser la vía de entrada.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whoFor.map((w, i) => {
                const Icon = w.icon;
                return (
                  <Reveal
                    as="div"
                    key={w.title}
                    delay={(i % 3) * 60}
                    className="rounded-2xl border border-ink-200 bg-white p-6"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-azure-50 text-azure-600">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-navy-900">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{w.body}</p>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Why MM + honesty */}
        <section className="py-16 lg:py-20">
          <Container size="wide" className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow>Por qué trabajar con nosotros</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Lo pequeño y lo difícil de colocar es nuestro enfoque entero.
              </h2>
              <p className="mt-4 text-lg text-muted">
                El programa de la SBA es una de las herramientas más poderosas para afianzar a un
                contratista en crecimiento, y guiarlo por él es justo el tipo de trabajo que hacemos
                todos los días. Le ayudamos a armar la solicitud y a colocar sus fianzas con mercados
                de afianzamiento participantes.
              </p>
              <p className="mt-4 text-muted">
                Le hablamos con franqueza: el respaldo de la SBA amplía el acceso, pero la evaluación
                de crédito sigue aplicando y nunca prometemos la aprobación garantizada. Lo que sí
                prometemos es esfuerzo real en un expediente que otros corredores no tomarían.
              </p>
              <div className="mt-7">
                <ReviewedBy lang="es" />
              </div>
            </Reveal>
            <Reveal delay={80} className="rounded-2xl bg-navy-900 p-8 text-white">
              <h3 className="font-display text-xl font-bold tracking-tight">Cómo empezar</h3>
              <ol className="mt-6 space-y-6">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-azure-500 font-mono text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-display font-bold tracking-tight">{s.title}</div>
                      <p className="mt-1 text-sm text-navy-200">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-6 text-sm text-navy-200">
                <Check className="size-4 text-success" aria-hidden="true" />
                Sin tarjeta ni número de seguro social para empezar.
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Related */}
        <section className="bg-surface py-16">
          <Container size="wide" className="max-w-3xl">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                Fianzas relacionadas
              </h2>
              <p className="mt-4 text-muted">
                El programa de la SBA respalda las{" "}
                <Link
                  href="/es/fianzas-de-contrato"
                  className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                >
                  fianzas de contrato
                </Link>{" "}
                de licitación, cumplimiento y pago. ¿No está seguro de calificar por su crédito? Vea
                también nuestras{" "}
                <Link
                  href="/es/fianzas-mal-credito"
                  className="font-semibold text-azure-700 underline-offset-2 hover:underline"
                >
                  fianzas para mal crédito
                </Link>
                .
              </p>
            </Reveal>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Eyebrow>Preguntas frecuentes</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
                Fianzas de la SBA: preguntas
              </h2>
              <p className="mt-4 text-muted">
                Cifras verificadas con SBA.gov. Revisado por {site.founder.name}, {site.founder.title}.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <Faq items={faqs} />
            </Reveal>
          </Container>
        </section>

        {/* CTA */}
        <section className="pb-16">
          <Container size="wide">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 px-7 py-12 text-center text-white sm:px-12">
              <Slashes
                tone="white"
                size="lg"
                className="pointer-events-none absolute left-8 top-8 opacity-20"
              />
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                ¿Cree que no puede afianzarse? Averigüémoslo.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-200">
                El programa de la SBA ha afianzado a miles de contratistas que oyeron un no en todas
                partes. Veamos si usted es uno de ellos.
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
