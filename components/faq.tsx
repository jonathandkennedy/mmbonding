import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/jsonld";
import { cn } from "@/lib/utils";

/**
 * FAQ accordion. Native <details> so it works without JS and is accessible by
 * default. Pair with faqSchema() on the page for FAQPage structured data.
 */
export function Faq({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={cn("divide-y divide-ink-200 overflow-hidden rounded-2xl border border-ink-200 bg-white", className)}>
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display font-semibold tracking-tight text-navy-900 transition-colors hover:bg-ink-50 [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink-100 text-navy-700 transition-transform duration-200 ease-out group-open:rotate-45 group-open:bg-azure-500 group-open:text-white">
              <Plus className="size-4" aria-hidden="true" />
            </span>
          </summary>
          <div className="px-5 pb-5 text-[0.95rem] leading-relaxed text-muted">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
