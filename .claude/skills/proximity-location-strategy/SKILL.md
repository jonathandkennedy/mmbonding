---
name: proximity-location-strategy
description: When the user wants to address proximity — the single biggest Local Pack factor — through legitimate means: where to locate, pin/address accuracy, the service-area-business centroid reality, hours to widen the effective radius, and extending ranking radius via relevance/prominence. Also use when the user mentions "proximity," "I rank near my office but not farther out," "where should I open a location," "centroid," "pin placement," or "ranking radius." For SAB GBP setup see service-area-seo; for suspension risk see gbp-suspension-recovery and gbp-spam-enforcement.
metadata:
  version: 1.0.0
  author: Garrett Smith
---

# Proximity & Location Strategy

Proximity — distance from the searcher to the business — is rated the #1 Local Pack factor by the Whitespark survey, often described as outweighing other factors combined. Most skill sets shrug and call it "uncontrollable." That's half true and unhelpful. You can't move the searcher, but several proximity-adjacent levers are legitimate and real — and a few tempting ones will get the listing suspended. This skill draws that line clearly.

> Confidence note: proximity's dominance is Tier-D consensus (survey opinion), not a measured weight (see `evidence-standards`). It's directionally trusted; don't quote "55%" as a law.

## What You Genuinely Cannot Control
- Where a given searcher is standing when they search. Proximity is computed from *their* location, not your content. No on-page or GBP setting changes this.
- The blunt consequence: a business will often rank #1 at its own address and not appear several miles away. For a single fixed location, that falloff is normal, not a problem to "fix" — unless competitors with similar relevance/prominence beat you at that distance, which *is* addressable (below).

## Legitimate Levers

### 1. Pin and address accuracy
- Verify the map pin sits on the true business location and the address matches Google's understanding (and USPS formatting). A misplaced pin or address mismatch distorts the proximity calculation against you. Fix this first — it's free and often mis-set. → `gbp-optimization`, `local-seo-audit`.

### 2. Extend the *effective* ranking radius via relevance + prominence
- You can't change distance, but you can change how far your relevance/prominence carries. Stronger primary category match, a dedicated service page, reviews that mention outlying areas, area-specific content, and citations referencing surrounding cities all push your ranking outward from the centroid. This is the legitimate answer to "I rank well nearby but drop off at distance." → `local-landing-pages`, `local-citations`, `geogrid-analysis` (to measure the falloff curve and the improvement).

### 3. Hours / openness to widen the time window
- Being open when the searcher searches is a *tested* ranking factor (Sterling Sky), and rankings degrade in the final hour before close. Legitimate extended hours expand the windows in which you out-rank closed competitors — a real, controllable proximity-adjacent edge, especially off-peak. Don't fake 24/7; Google detects it and it burns trust when customers arrive to a closed business. → `gbp-optimization`.

### 4. New-location site selection (when a business is genuinely expanding)
- If the business is actually opening a real, staffed location, *where* it opens is a proximity decision. Use geogrid data on the existing footprint and competitor coverage to choose a site that fills a real coverage gap — a legitimate, high-leverage move for multi-location growth. → `geogrid-analysis`, `multi-location-seo`.

### 5. Legitimate additional locations and hybrid setups
- A business with multiple *real* locations earns proximity at each. A hybrid (storefront + service area) can show its address and set service areas — proximity from the pin plus coverage from the areas — but only if it genuinely serves customers at that location. → `service-area-seo`.

## The Service-Area-Business Reality
- SABs hide the address, so there's no visible pin; ranking keys off the hidden address as an approximate center plus service-area settings. There's a documented tension: complying with Google's "hide your address" rule correlates with weaker pack ranking versus storefronts (Sterling Sky). You can't fix the structural disadvantage by cheating — you compensate on every other signal (relevance, reviews, content, citations) and lean on hours/openness. → `service-area-seo`.

## The Line You Do Not Cross

These "proximity hacks" are the fastest way to lose the entire listing — and they're exactly what 2026's enforcement waves target:
- **Virtual offices, mailbox/UPS-store addresses, coworking desks, or empty lots** used to claim presence in a target area. High suspension risk; reportable spam.
- **A home address dressed up as a storefront**, or fake/duplicate listings in surrounding cities to manufacture coverage.
- **Keyword-stuffed names** to compensate for distance — separate issue, same outcome (suspension).

If a competitor is using these to outrank you, that's an enforcement matter, not a reason to copy them. → `gbp-spam-enforcement`. If your own legitimate listing got caught in a sweep, → `gbp-suspension-recovery`.

## What to Do Next

| What You Found | Next Action | Skill |
|----------------|-------------|-------|
| Rank well nearby, drop off at distance | Strengthen relevance/prominence to extend radius; measure the falloff | `local-landing-pages`, `local-citations`, `geogrid-analysis` |
| Pin/address may be off | Verify and correct pin placement and NAP | `gbp-optimization`, `local-seo-audit` |
| Considering a new real location | Use geogrid + competitor data to pick the site | `geogrid-analysis`, `multi-location-seo` |
| SAB fighting the hidden-address disadvantage | Compensate on other signals; optimize SAB setup | `service-area-seo` |
| A competitor uses fake addresses to fake proximity | Report it; don't copy it | `gbp-spam-enforcement` |
| Want to test whether a change extended the radius | Run a before/after geogrid experiment | `local-seo-experiments` |

**Default next step:** confirm the pin/address is correct, then treat distance falloff as a relevance/prominence problem — extend the radius with content, reviews, citations, and hours. Never buy a fake address to fake proximity.

## Tools for This Skill

See `docs/tool-routing` to pick based on what's connected.

- **Falloff curve + site selection** → Local Falcon geogrids (run multiple radii to see the curve)
- **Pin/NAP verification** → `localseodata-tool` `business_profile`; live Maps check
- **Competitor coverage** → `local-competitor-analysis`, geogrid competitor data
