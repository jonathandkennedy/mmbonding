/**
 * Form delivery via Formspree (https://formspree.io). This is the launch
 * backend: no server code, works on static/Vercel, and emails leads to Michael
 * instantly. It is intentionally swappable — when the Supabase lead pipeline
 * (plan §7) lands, point submitLead() at the server action instead and the form
 * components do not change.
 *
 * Configure with env vars (set in Vercel + .env.local). A single shared form is
 * fine; separate quote/contact forms let you route them to different inboxes:
 *   NEXT_PUBLIC_FORMSPREE_FORM_ID      (shared fallback)
 *   NEXT_PUBLIC_FORMSPREE_QUOTE_ID     (optional, quote leads)
 *   NEXT_PUBLIC_FORMSPREE_CONTACT_ID   (optional, contact messages)
 *
 * The value is the Formspree form hashid (the part after /f/ in your endpoint).
 */

export type FormKind = "quote" | "contact";

/**
 * Default Formspree form. A Formspree form id is a PUBLIC identifier (it ships
 * in the client bundle either way), so committing it is fine and means the
 * forms work on every deploy with no dashboard step. Override per-environment
 * with the env vars below (e.g. a separate production form, or split
 * quote/contact inboxes).
 */
const DEFAULT_FORMSPREE_ID = "xdarajbg";

function formId(kind: FormKind): string | undefined {
  const specific =
    kind === "quote"
      ? process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID
      : process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID;
  return specific || process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || DEFAULT_FORMSPREE_ID;
}

export function isFormBackendConfigured(kind: FormKind): boolean {
  return Boolean(formId(kind));
}

/** UTM + click-id + referrer capture for lead attribution. */
export function getAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "gbraid",
    "wbraid",
    "fbclid",
  ]) {
    const v = params.get(key);
    if (v) out[key] = v;
  }
  if (document.referrer) out.referrer = document.referrer;
  out.landing_page = window.location.pathname + window.location.search;
  return out;
}

export type SubmitResult = { ok: boolean; configured: boolean; error?: string };

/**
 * Submit a lead. Appends attribution automatically. When no form id is
 * configured (e.g. preview deploys) it resolves ok:true with configured:false
 * so the UI still demonstrates the success state without claiming a real send.
 */
export async function submitLead(kind: FormKind, data: FormData): Promise<SubmitResult> {
  for (const [k, v] of Object.entries(getAttribution())) data.append(k, v);

  const id = formId(kind);
  if (!id) {
    await new Promise((r) => setTimeout(r, 350));
    return { ok: true, configured: false };
  }

  try {
    const res = await fetch(`https://formspree.io/f/${id}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) return { ok: true, configured: true };
    const json = (await res.json().catch(() => null)) as
      | { errors?: { message: string }[] }
      | null;
    const error = json?.errors?.map((e) => e.message).join(", ") || "Something went wrong.";
    return { ok: false, configured: true, error };
  } catch {
    return { ok: false, configured: true, error: "Network error. Please try again or call us." };
  }
}
