import Link from "next/link";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { site } from "@/lib/site";
import { REGULATORY_REVIEWED } from "@/lib/regulatory";
import { cn } from "@/lib/utils";

/**
 * E-E-A-T byline. A named, licensed producer reviewed this page. Links to
 * /about (where the license and bio live), carries a real "Updated" date, and
 * surfaces the DOI license number. This is the trust signal the aggregators
 * fake; here it is real and consistent on every guide.
 */
const strings = {
  en: { by: "Reviewed by", license: "CA DOI License", updated: "Updated", aboutHref: "/about" },
  es: { by: "Revisado por", license: "Licencia CA DOI", updated: "Actualizado", aboutHref: "/about" },
} as const;

export function ReviewedBy({
  className,
  lang = "en",
}: {
  className?: string;
  lang?: "en" | "es";
}) {
  const t = strings[lang];
  return (
    <aside
      className={cn(
        "flex flex-col gap-3 rounded-2xl border border-ink-200 bg-surface px-5 py-4 sm:flex-row sm:items-center sm:gap-4",
        className,
      )}
    >
      <Image
        src="/images/team/michael-melshenker.webp"
        alt={site.founder.name}
        width={172}
        height={172}
        className="size-11 shrink-0 rounded-full object-cover"
      />
      <div className="text-sm leading-snug">
        <p className="text-muted">
          {t.by}{" "}
          <Link href={t.aboutHref} className="font-semibold text-navy-900 underline-offset-2 hover:underline">
            {site.founder.name}
          </Link>
          , {site.founder.title}
        </p>
        <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-muted">
          <span className="inline-flex items-center gap-1 font-medium text-success">
            <BadgeCheck className="size-3.5" aria-hidden="true" />
            {t.license}
          </span>
          <span className="font-mono text-xs text-navy-700">#{site.doiLicense}</span>
          <span className="text-ink-300">/</span>
          <span>
            {t.updated} <time dateTime={REGULATORY_REVIEWED.iso}>{REGULATORY_REVIEWED.label}</time>
          </span>
        </p>
      </div>
    </aside>
  );
}
