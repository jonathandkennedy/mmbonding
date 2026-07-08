# MM Bonding - Project Handoff

**Last updated:** 2026-07-08
**Repo:** `jonathandkennedy/mmbonding`
**Production:** https://mmbonding.com (hosted on Vercel; see the open canonical item in Section 1)
**Purpose of this doc:** Give any developer, SEO consultant, or future session enough context to pick up this project cold: what was built, why, how it is wired, the current live state, the open issues, and step-by-step runbooks.

---

## 1. Read this first: open / urgent items

### 1.1 CRITICAL (open): www vs apex canonical conflict

**Symptom:** Google Search Console reported "HTTPS not evaluated" for `https://www.mmbonding.com/`, and the omegaindexer tool flagged several `/resources/*` pages as "Non Indexable - canonical URL points to a different page."

**Root cause (confirmed by live curl, 2026-07-08):**
```
curl -sIL https://mmbonding.com/resources/what-a-contractor-license-bond-covers/
  -> HTTP/2 308
  -> location: https://www.mmbonding.com/resources/what-a-contractor-license-bond-covers/
```
The apex `mmbonding.com` **308-redirects to `www.mmbonding.com`**. So the site is actually being *served* on `www`. But every canonical tag, the sitemap, robots.txt, and all schema point to the **apex** (`https://mmbonding.com`). A crawler lands on `www`, reads a canonical pointing at the apex, and the apex bounces it back to `www`. That contradiction is what the tools are reporting. Both symptoms (GSC + omegaindexer) share this one root cause.

**The code is already apex-correct** (`lib/site.ts` -> `url: "https://mmbonding.com"`). The mismatch lives in Vercel's domain config, not the repo.

**Fix (recommended, ~30 seconds, no code change):** Make the apex the primary domain so the redirect direction flips to `www -> apex`.
> Vercel -> project -> Settings -> Domains -> set `mmbonding.com` as **Primary**, set `www.mmbonding.com` to **Redirect -> mmbonding.com**. It is currently the reverse.

This is a platform-edge redirect that runs before the Next.js app, so it cannot be fixed in `next.config.ts` (an app-level redirect never gets the chance to fire). It must be done in the dashboard.

**Alternative (not recommended):** keep `www` and change the code (`site.url` -> `https://www.mmbonding.com`), then re-generate/re-submit the sitemap, robots, schema, and IndexNow. More work; contradicts everything already submitted as apex.

**Verify after the flip:**
```
curl -sIL https://mmbonding.com/ | grep -iE "HTTP/|location"     # expect 200, no redirect
curl -sIL https://www.mmbonding.com/ | grep -iE "HTTP/|location" # expect 308 -> apex
```

**After the flip, re-ping IndexNow** (so Bing/Yandex re-crawl the now-consistent apex URLs). The daily Vercel cron does this automatically within 24h; to do it immediately, run `npm run indexnow` locally once the apex serves `200`. Do NOT run IndexNow before the flip - the apex URLs still redirect and the key-file check is unreliable while the apex redirects.

### 1.2 Launch checklist (needs the owner, not code)

- [ ] Flip Vercel primary domain to apex (Section 1.1).
- [ ] Confirm DNS is fully pointed and the SSL cert is valid on both apex and www.
- [ ] Send a live test lead through the contact / quote form and confirm it arrives (Formspree -> `letstalk@mmbonding.com`).
- [ ] Add the Google Business Profile URL to `lib/site.ts` `sameAs[]` once the GBP is live (there is a TODO there).
- [ ] Confirm the office map pin lat/long against GBP and update `site.geo` if it differs.
- [ ] Consider a LinkedIn **company** page (only a personal profile is linked today).

---

## 2. What this project is

**Business:** MM Bonding & Insurance Services, Inc. - a licensed California surety bond broker. It places contractor license bonds, contract bonds (bid/performance/payment), commercial and specialty bonds, and specializes in hard-to-place bonds (bad credit, tough files). Broker model: it shops A-rated surety markets on the client's behalf. Underwriting always applies; no guaranteed approval.

**Site goal:** Rank in California local + statewide organic search for surety-bond intent, convert via phone and lead forms, and be a credible, authoritative resource ("preferred source") on surety bonds.

### 2.1 Canonical NAP (single source of truth: `lib/site.ts`)

Use this **exactly** everywhere (directories, citations, GBP). NAP consistency is load-bearing for local SEO.

```
Legal name:  MM Bonding & Insurance Services, Inc.
Short name:  MM Bonding
Address:     699 Hampshire Rd Ste 107C, Westlake Village, CA 91361
Phone:       (805) 752-8600   (tel:+18057528600)
Email:       letstalk@mmbonding.com
Website:     https://mmbonding.com
Hours:       Mon-Sat 9:00am-5:00pm PT
Founded:     2022
Founder:     Michael Melshenker, CEO
CA DOI license #: 6009105
Geo:         34.1466, -118.8055  (approximate; confirm vs GBP pin)
Carriers:    CNA Surety, Merchants Bonding Company, Liberty Mutual Surety, TMHCC Surety
```

Everything in the app derives from `site.ts`: metadata, JSON-LD, footer, contact page, sitemap host, IndexNow host/key location. Change identity in one place.

---

## 3. Tech stack & how to run

| Thing | Value |
|---|---|
| Framework | Next.js **16.2.9**, App Router |
| React | **19.2.4** |
| Language | TypeScript 5 |
| Styling | Tailwind CSS **v4** (`@tailwindcss/postcss`), tokens in `app/globals.css` |
| Icons | `lucide-react` |
| Class utils | `clsx` + `tailwind-merge` (via `cn()` in `lib/utils.ts`) |
| Package manager | Bun 1.3.x locally (npm scripts also work) |
| Node (scripts) | v22 |
| Hosting | Vercel (auto-deploys `main` to production) |
| Forms | Formspree (client POST) |

**Scripts** (`package.json`):
```
npm run dev        # next dev
npm run build      # next build  (also the CI/Vercel build)
npm run start      # next start
npm run indexnow   # node scripts/indexnow.mjs  (submit sitemap URLs to IndexNow)
```

There is no test suite. "Verification" = `next build` passing (type-checks + static generation of all routes) plus manual review. Always run a build before pushing structural changes.

---

## 4. Repository architecture

The site is **data-driven**: content lives in typed registries under `lib/`, and a small number of template pages render it. To add content you almost always edit a `lib/*.ts` registry, not a new page component.

### 4.1 `lib/` - registries and identity (the heart of the project)

| File | Role |
|---|---|
| `site.ts` | Identity / NAP / licensing / phone / hours / geo / carriers / IndexNow key. **Single source of truth.** Also `primaryNav`. |
| `regulatory.ts` | Bond definitions (`bonds` record keyed by `BondKey`), `facts` (dollar amounts, statutes), `sba`, `REGULATORY_REVIEWED` (review date stamped on pages), `contractBondKeys`, image helpers `bondHero/bondThumb/bondImageAlt`. |
| `locations.ts` | 74 California metros (`Metro` type: `slug`, `context`, optional `localNeeds`, optional `localFaq`, geo). Helper `getMetro()`, and `nearbyMetros(slug, n)` (haversine) for cross-linking. |
| `guides.ts` | 49 resource guides (`Guide` type: `slug`, `title`, `category`, `excerpt`, ...). Helpers `getGuide()`, `guideHref()`, `guideHero/guideThumb/guideImageAlt`, `guides`, `guideCategories`. |
| `commercial-bonds.ts` | 31 commercial/specialty bonds (notary, auto dealer, immigration consultant, freight, fidelity, cannabis, court/probate, etc.). |
| `trades.ts` | 10 contractor trades (for `/contractor-license-bond/trades/[trade]`). |
| `insurance.ts` | 2 insurance referral products (general liability, workers' comp). |
| `glossary.ts` | Surety term glossary (for `/surety-bond-glossary`). |
| `i18n.ts` | `localePairs` mapping English routes to Spanish (`/es/...`) for hreflang. 8 pairs + `/es` home. |
| `forms.ts` | `DEFAULT_FORMSPREE_ID = "mvzjllqa"`. Form endpoint config. |
| `indexnow.ts` | IndexNow submission: `sitemapUrls()`, `indexNowHost()`, `indexNowKeyLocation()`, `submitToIndexNow()`. URL list is derived from the sitemap so it never drifts. |
| `jsonld.tsx` | Schema.org JSON-LD: `organizationSchema` (LocalBusiness w/ geo, hours, priceRange, offer catalog, areaServed cities), `personSchema`, `serviceSchema`, `faqSchema`, `breadcrumbSchema`, and the `<JsonLd>` component. |
| `utils.ts` | `cn()` (class merge), `usd()` (currency format), `clampDescription(s, max=160)` (trims meta descriptions to a word boundary, <=160 chars). |

### 4.2 `components/`

Layout/shell: `site-header.tsx`, `site-footer.tsx`, `wordmark.tsx`, `slashes.tsx` (the three-slash brand motif), `cookie-consent.tsx`, `set-html-lang.tsx`.
Page templates: `bond-page.tsx`, `guide-page.tsx`, `legal-page.tsx`, `bond-path-cards.tsx`.
Content blocks: `prose.tsx`, `faq.tsx`, `tldr-card.tsx`, `reviewed-by.tsx`, `preferred-source.tsx`, `related-guides.tsx`, `reveal.tsx` (scroll reveal), `bond-cost-calculator.tsx`.
Forms: `contact-form.tsx`, `quote/quote-form.tsx`, `quote/quote-starter.tsx`, `insurance-referral-form.tsx`, `license-school-referral-form.tsx`.
Primitives: `ui/button.tsx`, `ui/container.tsx`, `ui/eyebrow.tsx`.

### 4.3 `app/` - routes

Static/flagship pages: `page.tsx` (home), `about`, `contact`, `get-a-quote`, `contractor-license-bond`, `contract-bonds`, `hard-to-place-surety-bonds`, `sba-surety-bonds`, `fast-surety-bonds`, `commercial-bonds`, `bonding-vs-insurance`, `how-surety-bonds-work`, `why-use-a-surety-broker`, `surety-bond-cost-calculator`, `surety-bond-glossary`, `contractor-license-school`, `bond-of-qualifying-individual`, `llc-employee-worker-bond`, `disciplinary-bond`, `surety-bonds` (locations hub), `resources` (guides hub), `privacy-policy`, `terms-of-service`, `es` (Spanish).
Dynamic templates:
- `surety-bonds/[metro]/page.tsx` -> 74 metro pages from `locations.ts`
- `resources/[slug]` is per-guide directories (each guide has its own `page.tsx` calling `getGuide(slug)`)
- `commercial-bonds/[type]/page.tsx` -> 31 bonds
- `contractor-license-bond/[city]` and `.../trades/[trade]` -> city combos + trade pages
- `insurance/[type]/page.tsx` -> 2 products
Infra routes: `layout.tsx` (root metadata, fonts, `metadataBase: new URL(site.url)`, `robots: {index:true, follow:true}`), `sitemap.ts`, `robots.ts`, `not-found.tsx` (branded 404), `api/indexnow/route.ts`, `globals.css`, favicon/icon assets.

---

## 5. Content inventory (verified against the live sitemap)

**205 published URLs total.** Breakdown:

| Section | Count | Route |
|---|---|---|
| Metro / city pages | 74 | `/surety-bonds/<metro>` |
| Guides (+ hub) | 49 (+1) | `/resources/<slug>` |
| Commercial/specialty bonds | 31 | `/commercial-bonds/<type>` |
| Contractor-license-bond combos | 14 | `/contractor-license-bond/...` (3 curated cities: LA, Orange County, San Diego; trades hub; 10 trades) |
| Spanish pages | 9 | `/es`, `/es/...` |
| Insurance referral | 2 | `/insurance/<type>` |
| Bond/flagship/static | remainder | see Section 4.3 |

The 205 URL list (one per line) has been exported for indexer submission; regenerate any time with:
```
# from repo root (Bun respects the @/* tsconfig alias)
bun -e 'import s from "@/app/sitemap"; for (const e of s()) console.log(e.url)'
```

---

## 6. SEO infrastructure

- **Canonical strategy:** apex, HTTPS, no trailing slash. Every page sets `alternates.canonical` (self-referential); `metadataBase` makes it absolute against `site.url`. See Section 1.1 for the open www/apex mismatch that must be fixed in Vercel.
- **Sitemap** (`app/sitemap.ts`): generated from all registries; single source for the 205 URLs. Served at `/sitemap.xml`.
- **Robots** (`app/robots.ts`): `allow: /`, declares sitemap + `host` (apex). Global `robots: {index:true, follow:true}` in the root layout.
- **IndexNow / Bing** (`lib/indexnow.ts`, `app/api/indexnow/route.ts`, `scripts/indexnow.mjs`, `vercel.json`):
  - Key: `1e3bbed70cd9e39c61d36b3821068a70` (public by design; served at `/<key>.txt` from `public/`).
  - A daily Vercel cron (`vercel.json`: `"23 11 * * *"`) POSTs the full sitemap to `api.indexnow.org`, fanning out to Bing/Yandex/Seznam/Naver.
  - Manual: `npm run indexnow` (all sitemap URLs) or `npm run indexnow -- <url> <url>` (specific URLs). Requires the production site reachable.
  - IndexNow does NOT include Google. Google indexing = sitemap in Search Console + normal crawl (+ URL Inspection "Request Indexing" for one-offs).
- **Structured data** (`lib/jsonld.tsx`): Organization/LocalBusiness (geo, opening hours, priceRange, `hasOfferCatalog`, city-level `areaServed` with Wikipedia `sameAs`), Person (Michael Melshenker), Service, FAQ, BreadcrumbList, Article (on guides).
- **Spanish / hreflang:** `lib/i18n.ts` pairs EN<->ES routes; each localized page declares hreflang; `set-html-lang.tsx` sets `<html lang>`.
- **Metadata length rules (enforced):** meta descriptions <=160 chars (via `clampDescription()` on dynamic templates + `site.description` kept short); title tags <=70 chars. These were audited to zero violations.
- **E-E-A-T signals:** `ReviewedBy` (Michael Melshenker, reviewer + `REGULATORY_REVIEWED` date), `PreferredSource` CTA, real carrier names, DOI license number displayed.

---

## 7. Content rules (do not break these)

1. **ZERO em-dashes (—) and en-dashes (–) in any rendered site copy.** This is the #1 anti-"AI slop" rule for this project. Use hyphens, colons, or restructured sentences. After any content batch, grep the changed files for `[—–]` and fix before committing. (Pre-existing dashes inside code comments/JSDoc are tolerated; only rendered copy matters.)
2. **Meta descriptions <=160 chars, titles <=70 chars.** Wrap dynamic descriptions in `clampDescription()`.
3. **No guaranteed-approval / no false-price claims.** Underwriting always applies. Prices are ranges ("premiums typically 1%-15% of the bond amount"); do not state a specific premium as fact.
4. **Match the surrounding voice:** plain, confident, broker-to-contractor. Answer-first (TL;DR cards), then detail.
5. **NAP must match `site.ts` exactly** anywhere it appears.
6. **Accuracy over confidence:** when citing an external figure or third-party fact, verify it (WebSearch) and state provenance/confidence. Do not present an unverified number as fact.

---

## 8. Design system

Tailwind v4 tokens live in `app/globals.css` (`@theme`). Brand palette derives from the logo:

- **Azure** (accent), logo azure `--color-azure-500: #0090d8`. Scale 50-900.
- **Navy** (primary dark), logo navy `--color-navy-900: #002040`. Scale 50-950.
- **Ink** (cool neutral slate), 50-900.
- Semantic: `--color-background #fff`, `--color-surface #f6f8fb`, `--color-foreground #0e1b2e` (cool near-black, never pure `#000`), `--color-muted #51617a` (AA on white), `--color-ring #0090d8`, `--color-success #1f9d6b` (semantic only: "License Active"/verified states).
- Fonts: `--font-display` = Archivo, `--font-sans` = Plus Jakarta Sans, `--font-mono` = IBM Plex Mono (loaded via `next/font` in the root layout).
- **Brand motif:** three forward slashes (`components/slashes.tsx`) echoing the logo; used as an accent across heroes/CTAs. The favicon is the three-slash mark.
- Accessibility: color choices are AA-minded; `Reveal` respects reduced motion.

The `.claude/skills/` folder holds design skills (`taste-skill`, `emil-design-eng`, `ui-ux-pro-max`, `web-design-guidelines`, `image-to-code-skill`) and the installed **Local SEO Skills** pack (garrettjsmith/localseoskills, MIT - ~47 skills for GBP, citations, schema, audits, etc.). See `.claude/skills/README.md`.

---

## 9. Deployment & Git workflow

- **Hosting:** Vercel. Pushing/merging to `main` auto-deploys to production. Vercel posts building -> ready statuses on PRs.
- **Working branch:** `claude/lucid-meitner-3x8bxa`. Develop here, open a **draft PR**, merge when the Vercel check is green.
- **Post-merge reset:** after a PR merges, reset the branch onto the merged main before starting new work:
  ```
  git fetch origin main && git checkout -B claude/lucid-meitner-3x8bxa origin/main
  ```
- **Merge mechanics (via GitHub MCP):** `update_pull_request` (draft:false) then `merge_pull_request` (method: merge).
- **Commit identity:** `git config user.email noreply@anthropic.com && git config user.name Claude` (so commits show as verified/attributed).

### 9.1 Known benign stop-hook warning

A local stop-hook flags commit `13469c1` (and similar) as "Unverified" because its committer is `noreply@github.com`. **This is GitHub's own merge commit for a merged PR** - it is already on `main` and is NOT ours to amend. Amending it would rewrite public history and desync from `origin/main`. The assistant's own commits are correctly attributed to `Claude <noreply@anthropic.com>`. When HEAD == origin/main (0 ahead / 0 behind), there is nothing to push or fix - ignore the warning.

---

## 10. Third-party accounts & tools (status)

| Tool | Purpose | Status / notes |
|---|---|---|
| Vercel | Hosting/CI/CD | Live. **Action:** flip primary domain to apex (Section 1.1). |
| Google Search Console | Google indexing/health | Active (Domain property, which is why the `www` variant surfaced). Sitemap should be submitted here. "HTTPS not evaluated" clears after the apex flip. |
| IndexNow (Bing/Yandex/...) | Instant re-crawl | Automated daily cron + manual `npm run indexnow`. Re-run after the apex flip. Not Google. |
| omegaindexer.com | 3rd-party force-indexer | Flagged the canonical mismatch (a real symptom of Section 1.1, not a site bug in code). Low-value supplemental tool; its indexability pre-check is shallow. |
| Formspree | Lead delivery | Form ID `mvzjllqa`. **Action:** send a live test lead. |
| CallRail | Call tracking | Phone links carry `data-callrail="phone"`; the tracking number is swapped client-side. `site.phone` is the fallback. |
| BrightLocal | Citations/audits | Business descriptions + category/services/keyword block prepared (see chat history). Not yet a code artifact. |
| CalBizJournal | Guest-post backlink | Two draft guest articles + images prepared in an earlier session (HTML deliverable). Paid-link caveats noted. |

---

## 11. Runbooks

### 11.1 Add a resource guide
1. Add an entry to `lib/guides.ts` (`slug`, `title` <=57 chars, `category`, `excerpt`, ...).
2. Create `app/resources/<slug>/page.tsx` using `GuidePage` (copy an existing guide; e.g. `payment-bond-vs-performance-bond`). Set `metadata` with `alternates.canonical: /resources/<slug>` and OG/twitter images.
3. Add hero/thumb images to `public/images/guides/<slug>-hero.webp` and `-thumb.webp`.
4. The guide auto-appears in the sitemap and the `/resources` hub.
5. Grep the file for em/en dashes; run `npm run build`.

### 11.2 Add a city/metro page
1. Add a `Metro` entry to `lib/locations.ts` (`slug`, ~90-120 word `context`, optional `localNeeds`, optional `localFaq`, geo lat/long). Keep content distinct (avoid near-duplicate boilerplate; the 74 pages were de-duplicated in PR #9).
2. The `surety-bonds/[metro]` template renders it and it enters the sitemap automatically.
3. `npm run build`.

### 11.3 Add a commercial/specialty bond
Add to `lib/commercial-bonds.ts`; the `commercial-bonds/[type]` template + sitemap pick it up.

### 11.4 Submit URLs to IndexNow
After deploy (and after the apex flip): `npm run indexnow` (all) or `npm run indexnow -- https://mmbonding.com/<path>` (specific).

### 11.5 Regenerate the full URL list for an external indexer
See Section 5 snippet.

### 11.6 Verify a canonical is healthy
```
curl -s  https://mmbonding.com/<path> | grep -i canonical    # tag should equal the URL
curl -sIL https://mmbonding.com/<path> | grep -iE "HTTP/|location"  # apex should 200 directly (post-flip)
```

---

## 12. Known gotchas

- **Vercel edge redirects beat app redirects.** The primary-domain redirect (Section 1.1) happens before Next.js runs; you cannot override it in `next.config.ts`. Fix host canonicalization in the Vercel dashboard.
- **`curl` without `-L` on a redirecting URL returns an empty body** (just the 3xx). Use `-L` to follow and see the real page/canonical. This caused a moment of confusion during the www/apex diagnosis.
- **Next.js default `trailingSlash: false`** 308-redirects `/path/` -> `/path`. Submit URLs to indexers without trailing slashes (the sitemap already has none).
- **Sandbox/agent network policy** (relevant only when this repo is worked via an agent in the cloud sandbox): outbound HTTPS to most external hosts (mmbonding.com, vercel.app, many third parties) returns `403 CONNECT tunnel failed`. WebSearch works; the Gemini API host is allowlisted. Consequence: an agent cannot fetch the live site to verify runtime behavior and must rely on source + the owner's own curl output.
- **Parallel subagents were unreliable** in a past session (a vendored skill pack injected instructions that derailed some agents). Prefer writing critical content directly or centrally validating all agent output.

---

## 13. Secrets policy

- **Never commit secrets.** The Gemini image-gen API key used in earlier sessions was kept only in the session scratchpad and used transiently via curl - it must never appear in the repo, code, comments, or PR text. A secret-scan grep was run before every image-related commit.
- The **IndexNow key** and the **Formspree form ID** are public by design (served to clients / crawlers) and are intentionally in the repo.

---

## 14. Change history (recent PRs, most recent last)

Initial build (pre-PR-4, see the completed task list in the repo history): Next.js + Tailwind v4 scaffold, brand design system, all page templates and registries, home + flagship + Tier 1/2 pages, city pages, guides registry + ~40 guides, commercial/specialty bonds, SBA page, cost calculator, glossary, Spanish pages + hreflang, TL;DR cards.

- **PR #4** - Launch data: Michael Melshenker headshot; confirmed founding year (2022), carriers, ERISA note; three-slash favicon across all devices.
- **PR #5** - Wire real Formspree endpoint (`mvzjllqa`) for lead delivery.
- **PR #6** - Address update to 699 Hampshire Rd **Ste 107C**, Westlake Village.
- **PR #7** - Wire up IndexNow (key file, route, cron, script) for instant search-engine indexing.
- **PR #8** - Apply local-schema recommendations; install the Local SEO Skills pack.
- **PR #9** - Deepen and de-duplicate all 74 city pages (local-landing-pages audit); on-page SEO fixes (title/meta lengths, remove footer H-tags, contact copy); expand `/contact` past the 400-word threshold.
- **PR #10** - Branded 404 page (`app/not-found.tsx`).
- **PR #11** - Two contract-bond comparison guides: `payment-bond-vs-performance-bond`, `bid-bond-vs-performance-bond`.

---

## 15. Backlog / recommendations

- **Canonicalization fix (Section 1.1)** - do this first.
- **Citations / directories:** build consistent NAP citations. Confirmed dofollow targets worth pursuing: Triple-I (iii.org) and NASBP. Avoid paid link schemes for ranking (nofollow / paid-link caveats).
- **Local content depth:** continue distinguishing city pages; add `localNeeds`/`localFaq` where thin.
- **Backlinks:** the CalBizJournal guest-post drafts are ready; weigh the paid vs editorial and nofollow considerations before publishing.
- **GBP:** stand up / verify the Google Business Profile, then add its URL to `site.sameAs` and reconcile the geo pin.
- **Analytics/conversion:** confirm CallRail swap works in production and that form submissions are tracked.

---

*This handoff reflects repo state at commit-time and the owner's live curl diagnostics of 2026-07-08. Live-site claims should be re-verified with the commands in Sections 1.1 and 11.6 after the Vercel domain change.*
