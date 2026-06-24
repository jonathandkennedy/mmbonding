"use client";

import { useState } from "react";
import { ArrowRight, Phone, Info } from "lucide-react";
import { cn, usd } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * Bond premium estimator. You pay a premium (a percentage of the bond amount,
 * driven by credit), not the bond's face value. This turns that into a quick,
 * honest estimate. Rate bands are industry-typical for license/commercial bonds
 * and are clearly labeled as estimates; the real rate comes from underwriting.
 */
const tiers = [
  { id: "excellent", label: "Excellent", hint: "720+", low: 0.0075, high: 0.015 },
  { id: "good", label: "Good", hint: "680-719", low: 0.015, high: 0.03 },
  { id: "fair", label: "Fair", hint: "640-679", low: 0.03, high: 0.075 },
  { id: "poor", label: "Poor / rebuilding", hint: "Under 640", low: 0.075, high: 0.15 },
] as const;

const presets = [7500, 12500, 15000, 25000, 50000, 100000];

function roundTo(n: number, step: number) {
  return Math.round(n / step) * step;
}

export function BondCostCalculator() {
  const [amount, setAmount] = useState(25000);
  const [tierId, setTierId] = useState<string>("good");

  const tier = tiers.find((t) => t.id === tierId)!;
  const low = Math.max(100, roundTo(amount * tier.low, 5));
  const high = Math.max(150, roundTo(amount * tier.high, 5));

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        {/* Inputs */}
        <div className="p-6 sm:p-8">
          <div>
            <label htmlFor="bond-amount" className="block text-sm font-semibold text-navy-900">
              Bond amount
            </label>
            <p className="mt-1 text-sm text-muted">The face amount the obligee requires.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {presets.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setAmount(p)}
                  className={cn(
                    "rounded-lg border px-3 py-1.5 text-sm font-semibold transition-colors",
                    amount === p
                      ? "border-azure-500 bg-azure-50 text-azure-700"
                      : "border-ink-200 text-navy-800 hover:border-azure-300",
                  )}
                >
                  {usd(p)}
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-ink-300 px-3.5 focus-within:border-azure-500">
              <span className="text-ink-400">$</span>
              <input
                id="bond-amount"
                type="number"
                min={500}
                step={500}
                value={amount}
                onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))}
                inputMode="numeric"
                className="h-11 w-full bg-transparent text-[0.95rem] font-semibold text-navy-900 outline-none"
              />
            </div>
          </div>

          <fieldset className="mt-7">
            <legend className="text-sm font-semibold text-navy-900">Your credit</legend>
            <p className="mt-1 text-sm text-muted">The biggest driver of your rate.</p>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {tiers.map((t) => {
                const active = tierId === t.id;
                return (
                  <label
                    key={t.id}
                    className={cn(
                      "cursor-pointer rounded-xl border p-3 transition-colors",
                      active ? "border-azure-500 bg-azure-50 ring-1 ring-azure-500" : "border-ink-200 hover:border-azure-300",
                    )}
                  >
                    <input
                      type="radio"
                      name="credit-tier"
                      value={t.id}
                      checked={active}
                      onChange={() => setTierId(t.id)}
                      className="sr-only"
                    />
                    <span className="block text-sm font-semibold text-navy-900">{t.label}</span>
                    <span className="block text-xs text-muted">{t.hint}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </div>

        {/* Result */}
        <div className="flex flex-col justify-between bg-navy-900 p-6 text-white sm:p-8">
          <div>
            <div className="text-sm font-medium text-navy-300">Estimated annual premium</div>
            <div className="mt-2 font-display text-4xl font-extrabold tracking-tight tabular sm:text-5xl">
              {usd(low)}
              <span className="text-navy-300"> to </span>
              {usd(high)}
            </div>
            <p className="mt-3 text-sm text-navy-200">
              For a {usd(amount)} bond with {tier.label.toLowerCase()} credit. You pay this premium,
              not the {usd(amount)}.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex flex-col gap-2.5">
              <a
                href="/get-a-quote"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-azure-500 font-display font-semibold text-white transition-colors hover:bg-azure-600"
              >
                Get my exact rate
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href={site.phone.href}
                data-callrail="phone"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/15 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="size-4 text-azure-300" aria-hidden="true" />
                <span className="tabular">{site.phone.display}</span>
              </a>
            </div>
            <p className="mt-3 flex items-start gap-1.5 text-xs text-navy-300">
              <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              Estimate only. Your real rate comes from underwriting, and minimum premiums may apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
