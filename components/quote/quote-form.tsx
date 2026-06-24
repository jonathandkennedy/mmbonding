"use client";

import { useState } from "react";
import { HardHat, FileSignature, ShieldAlert, Check, Lock, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

type Path = "license" | "contract" | "hard-to-place";

const pathMeta: Record<Path, { label: string; hint: string; icon: typeof HardHat }> = {
  license: { label: "License & Permit", hint: "Contractor, BQI, LLC", icon: HardHat },
  contract: { label: "Contract Bond", hint: "Bid, performance, payment", icon: FileSignature },
  "hard-to-place": { label: "Tough Case", hint: "Bad credit, prior claims", icon: ShieldAlert },
};

const inputCls =
  "h-11 w-full rounded-xl border border-ink-300 bg-white px-3.5 text-[0.95rem] text-navy-900 placeholder:text-ink-400 transition-colors focus:border-azure-500";
const labelCls = "block text-sm font-semibold text-navy-900";

export function QuoteForm({
  initialPath = "license",
  initialBond,
}: {
  initialPath?: Path;
  initialBond?: string;
}) {
  const [path, setPath] = useState<Path>(initialPath);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) return <SuccessPanel path={path} />;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to Supabase server action + CallRail/UTM capture (plan §7).
        // For now this confirms client-side; no lead is persisted yet.
        setSubmitted(true);
        if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm sm:p-8"
    >
      {/* Path selector */}
      <fieldset>
        <legend className="text-sm font-semibold text-navy-900">What do you need?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {(Object.keys(pathMeta) as Path[]).map((p) => {
            const m = pathMeta[p];
            const Icon = m.icon;
            const active = path === p;
            return (
              <label
                key={p}
                className={cn(
                  "flex cursor-pointer flex-col gap-1 rounded-xl border p-3.5 transition-colors",
                  active ? "border-azure-500 bg-azure-50 ring-1 ring-azure-500" : "border-ink-200 hover:border-azure-300",
                )}
              >
                <input
                  type="radio"
                  name="path"
                  value={p}
                  checked={active}
                  onChange={() => setPath(p)}
                  className="sr-only"
                />
                <Icon className={cn("size-5", active ? "text-azure-600" : "text-navy-600")} aria-hidden="true" />
                <span className="text-sm font-semibold text-navy-900">{m.label}</span>
                <span className="text-xs text-muted">{m.hint}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7 space-y-5">
        {path === "contract" ? (
          <ContractFields />
        ) : (
          <LicenseFields path={path} initialBond={initialBond} />
        )}

        {/* Shared contact */}
        <div className="border-t border-ink-100 pt-5">
          <h3 className="font-display text-base font-bold tracking-tight text-navy-900">
            Where do we send your quote?
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Full name" htmlFor="name">
              <input id="name" name="name" required autoComplete="name" className={inputCls} placeholder="Your name" />
            </Field>
            <Field label="Company" htmlFor="company">
              <input id="company" name="company" autoComplete="organization" className={inputCls} placeholder="Business name" />
            </Field>
            <Field label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                spellCheck={false}
                className={inputCls}
                placeholder="you@company.com"
              />
            </Field>
            <Field label="Phone" htmlFor="phone">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                className={inputCls}
                placeholder="(555) 123-4567"
              />
            </Field>
          </div>
        </div>

        {path !== "hard-to-place" && (
          <label className="flex items-start gap-3 rounded-xl bg-surface p-4 text-sm text-navy-800">
            <input type="checkbox" name="hard_to_place" className="mt-0.5 size-4 accent-azure-500" />
            <span>
              I&apos;ve been declined before, or I have credit or prior-claim challenges. Route me to
              the hard-to-place team.
            </span>
          </label>
        )}
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-azure-500 font-display font-semibold text-white shadow-[0_8px_22px_-8px_rgba(0,144,216,0.55)] transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-azure-600 active:scale-[0.98]"
      >
        {path === "license" ? "See my estimate" : "Request a callback"}
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted">
        <Lock className="size-3.5" aria-hidden="true" />
        No payment, card, or SSN. We never collect financial credentials on this site.
      </p>
    </form>
  );
}

function LicenseFields({ path, initialBond }: { path: Path; initialBond?: string }) {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Bond type" htmlFor="bond">
          <select id="bond" name="bond" defaultValue={initialBond ?? "contractor-license-bond"} className={inputCls}>
            <option value="contractor-license-bond">Contractor License Bond ($25,000)</option>
            <option value="bond-of-qualifying-individual">Bond of Qualifying Individual ($25,000)</option>
            <option value="llc-employee-worker-bond">LLC Employee/Worker Bond ($100,000)</option>
            <option value="disciplinary-bond">Disciplinary Bond</option>
            <option value="other">Something else</option>
          </select>
        </Field>
        <Field label="CSLB license or application #" htmlFor="license" optional>
          <input id="license" name="license_number" className={inputCls} placeholder="e.g. 1098765" spellCheck={false} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Business structure" htmlFor="entity">
          <select id="entity" name="entity" defaultValue="" className={inputCls}>
            <option value="" disabled>
              Choose one…
            </option>
            <option>Sole proprietor</option>
            <option>Corporation</option>
            <option>LLC</option>
            <option>Partnership</option>
          </select>
        </Field>
        <Field label="How is your credit?" htmlFor="credit">
          <select id="credit" name="credit" defaultValue={path === "hard-to-place" ? "poor" : ""} className={inputCls}>
            <option value="" disabled>
              Choose one…
            </option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor or rebuilding</option>
            <option value="unsure">Not sure</option>
          </select>
        </Field>
      </div>
      {path === "hard-to-place" && (
        <Field label="Tell us about the situation" htmlFor="situation">
          <textarea
            id="situation"
            name="situation"
            rows={3}
            className={cn(inputCls, "h-auto py-2.5")}
            placeholder="Declined elsewhere, prior claim, new business, high-risk class…"
          />
        </Field>
      )}
    </div>
  );
}

function ContractFields() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Bond type" htmlFor="cbond">
          <select id="cbond" name="bond" defaultValue="not-sure" className={inputCls}>
            <option value="bid-bond">Bid bond</option>
            <option value="performance-bond">Performance bond</option>
            <option value="payment-bond">Payment bond</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </Field>
        <Field label="Contract amount" htmlFor="amount">
          <input id="amount" name="contract_amount" type="text" inputMode="numeric" className={inputCls} placeholder="$" />
        </Field>
      </div>
      <Field label="Project owner / obligee" htmlFor="obligee" optional>
        <input id="obligee" name="obligee" className={inputCls} placeholder="Who requires the bond?" />
      </Field>
      <Field label="Scope & timeline" htmlFor="scope" optional>
        <textarea
          id="scope"
          name="scope"
          rows={3}
          className={cn(inputCls, "h-auto py-2.5")}
          placeholder="What is the work, and when does it start?"
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Years in business" htmlFor="years" optional>
          <input id="years" name="years" type="text" inputMode="numeric" className={inputCls} placeholder="e.g. 4" />
        </Field>
        <Field label="Annual revenue" htmlFor="revenue" optional>
          <select id="revenue" name="revenue" defaultValue="" className={inputCls}>
            <option value="" disabled>
              Choose a range…
            </option>
            <option>Under $500k</option>
            <option>$500k to $2M</option>
            <option>$2M to $10M</option>
            <option>Over $10M</option>
          </select>
        </Field>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className={labelCls}>
        {label}
        {optional && <span className="ml-1.5 font-normal text-ink-400">(optional)</span>}
      </label>
      {children}
    </div>
  );
}

function SuccessPanel({ path }: { path: Path }) {
  const msg =
    path === "license"
      ? "Your details are in. We'll send your estimate and confirm the fastest path to bonded."
      : "Got it. An underwriter will call you fast to work your file and build your quote.";
  return (
    <div className="rounded-2xl border border-success/30 bg-white p-8 text-center shadow-sm">
      <div className="mx-auto grid size-14 place-items-center rounded-full bg-success-bg text-success">
        <Check className="size-7" aria-hidden="true" />
      </div>
      <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-navy-900">
        Request received
      </h2>
      <p className="mx-auto mt-3 max-w-md text-muted">{msg}</p>
      <a
        href={site.phone.href}
        data-callrail="phone"
        className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 font-display font-semibold text-white transition-colors hover:bg-navy-800"
      >
        <PhoneCall className="size-4 text-azure-300" aria-hidden="true" />
        Prefer to talk now? {site.phone.display}
      </a>
      <p className="mt-4 text-xs text-muted">
        Heads up: lead capture is not connected to the backend in this preview build.
      </p>
    </div>
  );
}
