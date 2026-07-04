"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HardHat, FileSignature, ShieldAlert, ArrowRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const paths = [
  {
    id: "license",
    label: "License & Permit",
    hint: "Contractor, BQI, LLC bonds",
    icon: HardHat,
  },
  {
    id: "contract",
    label: "Contract Bond",
    hint: "Bid, performance, payment",
    icon: FileSignature,
  },
  {
    id: "hard-to-place",
    label: "Tough Case",
    hint: "Bad credit, prior claims",
    icon: ShieldAlert,
  },
] as const;

/**
 * The hero's quote entry. A real, working control (not a mock screenshot):
 * picks a path and routes into /get-a-quote with it pre-selected. Doubles as
 * the primary site conversion and the hero's interactive visual.
 */
export function QuoteStarter() {
  const [selected, setSelected] = useState<string>("license");
  const router = useRouter();

  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-lg sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-bold tracking-tight text-navy-900">
          Start a fast quote
        </h2>
        <span className="rounded-full bg-success-bg px-2.5 py-1 text-xs font-semibold text-success">
          ~2 min
        </span>
      </div>
      <p className="mt-1 text-sm text-muted">What kind of bond do you need?</p>

      <fieldset className="mt-4 space-y-2.5">
        <legend className="sr-only">Bond type</legend>
        {paths.map((p) => {
          const Icon = p.icon;
          const active = selected === p.id;
          return (
            <label
              key={p.id}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-[border-color,background-color] duration-150",
                active
                  ? "border-azure-500 bg-azure-50 ring-1 ring-azure-500"
                  : "border-ink-200 hover:border-azure-300 hover:bg-ink-50",
              )}
            >
              <input
                type="radio"
                name="bond-path"
                value={p.id}
                checked={active}
                onChange={() => setSelected(p.id)}
                className="sr-only"
              />
              <span
                className={cn(
                  "grid size-10 shrink-0 place-items-center rounded-lg transition-colors",
                  active ? "bg-azure-500 text-white" : "bg-ink-100 text-navy-700",
                )}
              >
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-navy-900">{p.label}</span>
                <span className="block text-xs text-muted">{p.hint}</span>
              </span>
              <span
                className={cn(
                  "ml-auto grid size-5 place-items-center rounded-full border transition-colors",
                  active ? "border-azure-500 bg-azure-500" : "border-ink-300",
                )}
              >
                {active && <span className="size-2 rounded-full bg-white" />}
              </span>
            </label>
          );
        })}
      </fieldset>

      <button
        type="button"
        onClick={() => router.push(`/get-a-quote?path=${selected}`)}
        className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-azure-500 font-display font-semibold text-white shadow-[0_8px_22px_-8px_rgba(0,144,216,0.55)] transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-azure-600 active:scale-[0.98]"
      >
        Continue
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted">
        <Lock className="size-3.5" aria-hidden="true" />
        No payment, card, or SSN to get a quote.
      </p>
    </div>
  );
}
