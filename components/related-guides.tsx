import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "./ui/container";
import { Eyebrow } from "./ui/eyebrow";
import { Reveal } from "./reveal";
import { getGuide, guideHref, guideThumb, guideImageAlt, type Guide } from "@/lib/guides";
import { cn } from "@/lib/utils";

/**
 * A "Related guides" section for money and hub pages, so link equity and
 * readers flow from the money pages into the resource guides (and back, via the
 * guides' own related links). Pass the guide slugs to feature.
 */
export function RelatedGuides({
  slugs,
  heading = "Related guides",
  eyebrow = "Learn more",
  className,
}: {
  slugs: string[];
  heading?: string;
  eyebrow?: string;
  className?: string;
}) {
  const items = slugs.map((s) => getGuide(s)).filter((g): g is Guide => Boolean(g));
  if (items.length === 0) return null;

  return (
    <section className={cn("py-16", className)}>
      <Container size="wide">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
          {heading}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g, i) => (
            <Reveal as="div" key={g.slug} delay={(i % 3) * 60}>
              <Link
                href={guideHref(g.slug)}
                className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-[box-shadow,border-color] duration-200 hover:border-azure-300 hover:shadow-md"
              >
                <div className="mb-4 overflow-hidden rounded-xl border border-ink-100">
                  <Image
                    src={guideThumb(g.slug)}
                    alt={guideImageAlt(g)}
                    width={640}
                    height={640}
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-navy-900">
                  {g.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">{g.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 transition-transform duration-200 ease-out group-hover:translate-x-1">
                  Read guide
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
