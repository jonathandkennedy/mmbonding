# MM Bonding

Marketing + lead-gen site for **MM Bonding & Insurance Services, Inc.** — a California
surety bond broker. *Get The Right Bond Fast.*

Built from the website build plan as a production **Next.js 16 (App Router)** app with a
custom, on-brand design system. Brand colors are sampled directly from the logo
(`mmbonding.png`): azure `#0090D8`, navy `#002040`.

## Stack

- **Next.js 16** App Router, React 19, TypeScript
- **Tailwind CSS v4** (CSS-first `@theme` tokens in `app/globals.css`)
- **Fonts:** Archivo (display) · Plus Jakarta Sans (body) · IBM Plex Mono (license #s, statutes, amounts)
- **Icons:** lucide-react

## Design system

The look is encoded as design tokens and a small set of primitives, applying guidance from
the skills in [`.claude/skills/`](.claude/skills/) (Emil Kowalski's design-engineering craft,
Vercel's web-interface guidelines, the anti-slop taste skill, and the UI/UX Pro Max databases).

- `app/globals.css` — brand color scales, semantic tokens, easing curves, radius + shadow locks
- `components/slashes.tsx` — the forward-slash "speed" motif from the logo, used site-wide
- `components/wordmark.tsx` — the wordmark rebuilt in type (crisp + theme-aware on navy/light)
- `components/ui/*` — Button (press feedback, custom easing), Container, Eyebrow
- `components/bond-page.tsx` — the reusable bond-page template (hero, sidebar, byline, schema)
- `components/reviewed-by.tsx` — the E-E-A-T byline (named expert + DOI license + dated review)

### Single sources of truth

- `lib/regulatory.ts` — **every** bond amount, statute, and form number. A rule change is a
  one-line edit here; never hardcode a figure in a page. Verify against cslb.ca.gov quarterly
  and bump `REGULATORY_REVIEWED`.
- `lib/site.ts` — company identity (NAP), licensing, contact, navigation.
- `lib/jsonld.tsx` — Organization / Service / FAQPage / BreadcrumbList / Person schema helpers.

## Pages (Tier 1)

Home · Contractor License Bond (flagship) · Contract Bonds hub + Bid/Performance/Payment ·
Hard-to-Place hub + No-Credit-Check · BQI · LLC Worker Bond · Disciplinary Bond ·
Get a Quote (two-path flow) · About · Contact. Plus `sitemap.xml`, `robots.txt`, per-page JSON-LD.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Still needed for launch (from Michael)

These are marked `TODO` in `lib/site.ts` and noted on-page where relevant:

- Confirmed **business address + hours** (must match the Google Business Profile exactly)
- The **published CallRail number** (the header/footer phone is a placeholder)
- Founding year / years in business, for the About page
- The **carriers/markets** MM is appointed with (for any "A-rated carrier" claim + carrier pages)
- A **headshot/bio** for Michael (the About page uses an initials avatar placeholder)
- The **insurance referral partner(s)** for routing GL / workers' comp leads

## Forms

All forms (quote, contact, insurance referral, license-school referral) deliver leads via
**Formspree** (the launch backend: no server code, works on Vercel, emails leads instantly). It is
already wired and live: the form id is committed as a default in `lib/forms.ts` (a Formspree id is
a public value), so submissions work on every deploy with no dashboard step. To point at a
different form, set an env var (see `.env.example`):

```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=yourid   # overrides the default; or use the quote/contact-specific vars
```

The submit handler (`lib/forms.ts`) captures UTM params + `gclid` for attribution, flags
hard-to-place leads with a priority subject, routes insurance and license-school referrals with
their own subjects, and includes a honeypot. It's deliberately swappable:
when the richer **Supabase** pipeline lands (structured `leads` / `insurance_referrals` tables, RLS,
CallRail integration, Slack/email webhooks, renewal reminders — plan §7), point `submitLead()` at a
server action and the form components don't change.

## Next phase

Supabase lead pipeline (plan §7), then Tier 2 (city pages + GBP, insurance referral pages, carriers).
