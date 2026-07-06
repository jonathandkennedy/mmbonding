---
name: behavioral-engagement
description: When the user wants to improve genuine engagement with a Google Business Profile or local listing (clicks, calls, direction requests, photo views, CTR from the pack), or to detect and defend against engagement-manipulation attacks (CTR bots, click attacks) aimed at their clients. Also use when the user mentions "CTR," "click-through rate," "behavioral signals," "engagement signals," "clicks to my listing," or "CTR bots." This skill optimizes real engagement and defends against attacks; it does not perform click/engagement manipulation. For the pack snippets that drive clicks, see gbp-justifications.
metadata:
  version: 1.0.0
  author: Garrett Smith
---

# Behavioral Engagement (and Defense Against Manipulation)

You improve the *genuine* engagement a listing earns — and you help defend clients when competitors attack their engagement signals. Two things this skill will not do: run CTR/click manipulation, or pretend behavioral signals are a confirmed ranking factor when they aren't.

## The Honesty Layer (read first)

The 2026 "prominence → popularity" shift made engagement signals (clicks, calls, direction requests, photo views, website visits) widely treated as among the strongest *local* signals. But be precise about confidence: **Google has never confirmed CTR or click behavior as a direct ranking factor.** This is Tier C/D — strong industry consensus and plausible, not a measured law (see `evidence-standards`). And notice who shouts loudest that "Google confirmed behavioral signals": the companies selling CTR bots. Discount conflicted sources.

So the honest position: optimize real engagement because it converts and *plausibly* helps ranking — not because anyone proved it does. And never manufacture it.

## Legitimate Engagement Optimization

These improve the engagement a listing genuinely earns from the visibility it already has. None of them are manipulation.

- **Primary photo and gallery.** The first image drives the click more than almost anything else on the listing. Use a strong, real, relevant primary photo; keep the gallery fresh. (Engagement, not metadata — geotagging does nothing.)
- **Justifications.** The snippet under your listing is a direct CTR lever — win the right ones. → `gbp-justifications`.
- **"Open now."** Being open at search time both lifts clicks and is a tested ranking factor (Sterling Sky). Accurate hours, special hours before holidays, and legitimate hour extensions help. → `gbp-optimization`.
- **Reviews shown in the pack.** Rating and count are visible in the listing and strongly affect whether searchers click and call. → `review-management`.
- **Posts and offers.** Timely, single-topic posts and live offers can surface on the listing and prompt action. → `gbp-posts`, `local-news-posts`.
- **Website sitelinks (for the organic + brand result).** Earned sitelinks materially raise CTR (one 2026 analysis put it near +49% at position 1) and are earned, not bought — clear site structure, consistent internal linking, and breadcrumb schema typically qualify. → `local-schema`, `local-landing-pages`.
- **Clear CTAs and the right landing page.** Send clicks to the most relevant page, with click-to-call prominent. → `local-landing-pages`.

Measure the outcome as engagement, not rank: track GBP actions (calls, directions, website clicks) and on-site conversions → `local-reporting`.

## Why This Skill Will Not Do CTR/Click Manipulation

CTR bots and "map ranking booster" services simulate searches and clicks to fake engagement. This skill refuses to set them up, and you should steer clients away from them, for concrete reasons — not just policy:

- **It's manipulation of a platform** and violates Google's spam policies; aggressive use risks the listing.
- **It's unstable.** Reported gains are short-lived and tend to evaporate when the campaign stops, because real engagement doesn't follow.
- **It's detectable.** Automated traffic leaves signatures (datacenter IPs, zero engagement time, impossible CTR-to-impression ratios). Google pattern-matches spikes, and the downside is the whole listing.
- **It's beatable by doing the real thing.** Genuine CTR optimization produces qualified traffic from visibility you already have — durable, and it can't be clawed back.

If a client asks for it, the honest answer is: no, here's why, and here's the legitimate version that actually lasts.

## Defense: Detecting Engagement-Manipulation Attacks

Competitors weaponize fake engagement *against* you, and this is where the skill earns its keep. Watch for the signatures of an attack on a client:

- **GSC anomaly:** a branded or local query showing high impressions with near-zero CTR (well under 1% where 15–35% is normal at position 1–3) — impressions with no real intent behind them.
- **GA4 anomaly:** clusters of sessions with zero engagement time, often from unexpected geographies/datacenters — the behavioral fingerprint of bots, since even bounced humans register some engagement time.
- **Server logs:** repeated requests from datacenter/VPS IP ranges, outdated user agents, and no sub-resource loading.

Two-signal confirmation (e.g., GSC + GA4 both anomalous over the same window) is stronger than any single metric. If confirmed:
- Document the pattern (dates, IPs, the GSC/GA4 evidence).
- Report it through Google's channels; for review-side attacks, see the Fake Engagement response in `gbp-spam-enforcement` and `review-management`.
- Don't "fight back" with your own bots — that compounds the violation. Document, report, and keep building real engagement.

## What to Do Next

| What You Found | Next Action | Skill |
|----------------|-------------|-------|
| Want to win the pack snippet that drives clicks | Optimize justifications | `gbp-justifications` |
| Low rating/few reviews suppressing clicks | Build review velocity | `review-management` |
| Listing ranks but underperforms on clicks | Strengthen primary photo, hours, posts | `gbp-optimization`, `gbp-posts` |
| Suspect a manipulation attack on a client | Confirm with two signals, document, report | `gbp-spam-enforcement` |
| Want to know if engagement actually moved rank | Treat as Tier C/D; test if it matters | `evidence-standards`, `local-seo-experiments` |
| Need to report engagement outcomes | Report GBP actions + conversions, not raw clicks | `local-reporting` |

**Default next step:** optimize the genuine drivers (photo, justifications, hours, reviews, CTAs) and measure GBP actions. If a client is losing clicks unexpectedly, check for an attack before assuming an SEO problem.

## Tools for This Skill

See `docs/tool-routing` to pick based on what's connected.

- **Engagement data (clicks, calls, directions)** → GBP Insights via `localseodata-tool` or the GBP API
- **Attack detection** → Google Search Console (CTR/impression anomalies) + Google Analytics (engagement-time anomalies); server logs where available
- **On-site CTR/conversion** → Google Search Console + Google Analytics
