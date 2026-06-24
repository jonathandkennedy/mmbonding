"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const inputCls =
  "h-11 w-full rounded-xl border border-ink-300 bg-white px-3.5 text-[0.95rem] text-navy-900 placeholder:text-ink-400 transition-colors focus:border-azure-500";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex items-center gap-4 rounded-2xl border border-success/30 bg-white p-6 shadow-sm">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-success-bg text-success">
          <Check className="size-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display font-bold tracking-tight text-navy-900">Message sent</h3>
          <p className="text-sm text-muted">
            We&apos;ll get back to you fast. For an urgent bond, call us directly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to Supabase server action + notifications (plan §7).
        setSent(true);
      }}
      className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm sm:p-8"
    >
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
      <button
        type="submit"
        className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl bg-azure-500 font-display font-semibold text-white shadow-[0_8px_22px_-8px_rgba(0,144,216,0.55)] transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-azure-600 active:scale-[0.98]"
      >
        Send message
      </button>
    </form>
  );
}
