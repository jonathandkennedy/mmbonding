"use client";

import { useState } from "react";
import { Check, Loader2, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { submitLead } from "@/lib/forms";

const inputCls =
  "h-11 w-full rounded-xl border border-ink-300 bg-white px-3.5 text-[0.95rem] text-navy-900 placeholder:text-ink-400 transition-colors focus:border-azure-500";

/**
 * Contractor license-school referral capture. On submit we route the lead to
 * MM's trusted exam-prep partner via Formspree. Compliance: the success copy
 * says "we'll connect you," never that a license is guaranteed. The school
 * handles exam prep, not MM.
 */
export function LicenseSchoolReferralForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="rounded-2xl border border-success/30 bg-white p-7 text-center shadow-sm">
        <div className="mx-auto grid size-12 place-items-center rounded-full bg-success-bg text-success">
          <Check className="size-6" aria-hidden="true" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-navy-900">
          We&apos;ll connect you
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
          Our partner school will reach out about exam prep and getting your California contractor
          license. You are not committed to anything.
        </p>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    fd.set("referral_type", "license-school");
    fd.set("_subject", "Contractor license school referral");
    setStatus("submitting");
    setError("");
    const res = await submitLead("contact", fd);
    if (res.ok) setDone(true);
    else {
      setStatus("error");
      setError(res.error ?? "Something went wrong.");
    }
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm sm:p-7">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <h2 className="font-display text-xl font-bold tracking-tight text-navy-900">
        Get connected with a license school
      </h2>
      <p className="mt-1 text-sm text-muted">
        Tell us your goal and we&apos;ll connect you with a trusted exam-prep partner. No cost to be
        connected.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="lsname" className="block text-sm font-semibold text-navy-900">
            Name
          </label>
          <input id="lsname" name="name" required autoComplete="name" className={inputCls} placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lsphone" className="block text-sm font-semibold text-navy-900">
            Phone
          </label>
          <input id="lsphone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={inputCls} placeholder="(555) 123-4567" />
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="lsemail" className="block text-sm font-semibold text-navy-900">
            Email
          </label>
          <input
            id="lsemail"
            name="email"
            type="email"
            required
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            className={inputCls}
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div className="mt-4 space-y-1.5">
        <label htmlFor="lsgoal" className="block text-sm font-semibold text-navy-900">
          Your trade or goal <span className="font-normal text-ink-400">(optional)</span>
        </label>
        <input
          id="lsgoal"
          name="goal"
          className={inputCls}
          placeholder="General contractor (B) license"
        />
      </div>

      {status === "error" && (
        <p role="alert" aria-live="polite" className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            {error} You can also call{" "}
            <a href={site.phone.href} className="font-semibold underline">
              {site.phone.display}
            </a>
            .
          </span>
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-azure-500 font-display font-semibold text-white shadow-[0_8px_22px_-8px_rgba(0,144,216,0.55)] transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-azure-600 active:scale-[0.98] disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Connect me with a school"
        )}
      </button>
    </form>
  );
}
