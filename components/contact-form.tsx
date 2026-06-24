"use client";

import { useState } from "react";
import { Check, Loader2, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { submitLead } from "@/lib/forms";

const inputCls =
  "h-11 w-full rounded-xl border border-ink-300 bg-white px-3.5 text-[0.95rem] text-navy-900 placeholder:text-ink-400 transition-colors focus:border-azure-500";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");
  const [done, setDone] = useState<null | { configured: boolean }>(null);

  if (done) {
    return (
      <div className="flex items-center gap-4 rounded-2xl border border-success/30 bg-white p-6 shadow-sm">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-success-bg text-success">
          <Check className="size-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display font-bold tracking-tight text-navy-900">Message sent</h3>
          <p className="text-sm text-muted">
            We&apos;ll get back to you fast. For an urgent bond, call us directly.
            {!done.configured && " (Preview: connect a Formspree form id to deliver this.)"}
          </p>
        </div>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    fd.set("_subject", "New contact message");
    setStatus("submitting");
    setError("");
    const res = await submitLead("contact", fd);
    if (res.ok) setDone({ configured: res.configured });
    else {
      setStatus("error");
      setError(res.error ?? "Something went wrong.");
    }
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm sm:p-8">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="cname" className="block text-sm font-semibold text-navy-900">
            Name
          </label>
          <input id="cname" name="name" required autoComplete="name" className={inputCls} placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="cphone" className="block text-sm font-semibold text-navy-900">
            Phone
          </label>
          <input id="cphone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={inputCls} placeholder="(555) 123-4567" />
        </div>
      </div>
      <div className="mt-4 space-y-1.5">
        <label htmlFor="cemail" className="block text-sm font-semibold text-navy-900">
          Email
        </label>
        <input
          id="cemail"
          name="email"
          type="email"
          required
          inputMode="email"
          autoComplete="email"
          spellCheck={false}
          className={inputCls}
          placeholder="you@company.com"
        />
      </div>
      <div className="mt-4 space-y-1.5">
        <label htmlFor="cmsg" className="block text-sm font-semibold text-navy-900">
          How can we help?
        </label>
        <textarea
          id="cmsg"
          name="message"
          rows={4}
          required
          className={cn(inputCls, "h-auto py-2.5")}
          placeholder="Tell us about the bond you need…"
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          aria-live="polite"
          className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
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
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
