---
name: gbp-spam-enforcement
description: When a competitor is outranking a business through spam (keyword-stuffed names, fake or virtual addresses, lead-gen listings, duplicates, fake reviews) and the user wants to audit and report it, or when a business is under attack (review-bombing, malicious profile edits, negative engagement) and needs to respond. Also use when the user mentions "competitor spam," "fake listings," "report a listing," "redressal form," "spam fighting," "review bombing," or "someone edited my profile." For reinstating your own suspended listing, see gbp-suspension-recovery. For general competitive analysis, see local-competitor-analysis.
metadata:
  version: 1.0.0
  author: Garrett Smith
---

# GBP Spam Enforcement & Attack Defense

You handle the two sides of GBP integrity work the optimization skills don't: getting illegitimate competitors removed, and defending a client's profile when it's attacked. In spam-heavy verticals — personal injury law, locksmiths, movers, contractors, home services — clearing a spammer ranking above you can move you up faster than months of optimization. But this work is proof-first and honest, or it backfires.

> **2026 context.** Enforcement is at a peak. Google activated Gemini-powered edit moderation in April 2026 that reviews profile changes before they publish, ran mass suspension waves (a large one hit California home-services in late April), and removed roughly 292 million policy-violating reviews in 2025. AI enforcement catches legitimate businesses too, so the defensive half of this skill matters as much as the offensive half.

## The First Rule: Unfair ≠ Against the Rules

A competitor can outrank you and be completely legitimate. That is not spam, and reporting it wastes your time and Google's. Spam is a *policy violation*, not "they're winning." Before reporting anything, separate the two:

- **Legitimate competition:** better profile, more/fresher reviews, closer proximity, stronger website. → don't report; out-compete them (`gbp-optimization`, `review-management`, `local-seo-audit`).
- **Actual violations (reportable):** impersonation; a "business" at a mailbox store, virtual office, or empty lot with no signage; multiple near-identical listings (duplicates); a keyword-stuffed name that isn't the real-world brand; a website that redirects to a different/lead-gen business; fake reviews.

If you can't point to a specific policy line being broken, it's not a report — it's a grievance.

## Offense: Auditing and Reporting Competitor Spam

### Step 1 — Audit the pack
Search the target keyword(s) in Maps and the Local Finder from the client's area. For each business ranking above the client, check:
- **Name:** extra keywords/locations not in the real-world brand ("Bob's Plumbing – Best Emergency Plumber Chicago"). Note: a *few* extra words on a legitimate business is low-priority and rarely actioned — focus on egregious stuffing.
- **Address:** UPS/mailbox store, coworking, virtual office, residential with no signage, or an address shared by many "different" businesses. Cross-check on Street View and the property record.
- **Phone:** routes to a call center / shared lead-gen number rather than the business.
- **Website:** redirects to a different brand or a generic lead-gen site (a strong lead-gen tell).
- **Duplicates:** the same operator under multiple names/pins.
- **Reviews:** implausible velocity, no-profile reviewers, off-topic text, reviewer reuse across the operator's listings.

### Step 2 — Build the evidence kit (per listing)
Reporting succeeds when it's specific and factual. For each violation gather: the listing URL, the violation type, dated screenshots, Street View / property-record proof of the address, the redirect chain for the website, an independent source (state license lookup, professional directory), and — for impersonation/confusion — redacted customer-confusion evidence (no private data). Store it once and reuse; never paste generic claims.

### Step 3 — Choose the right channel (escalate in order)
1. **Suggest an Edit** (on the listing): for name/address corrections and obvious duplicates/removals. Fast, but if the spammer has claimed the listing they can reject it.
2. **Business Redressal Complaint Form:** Google's official channel for fraudulent name/address/phone/URL activity, reviewed manually by the spam team. Attach the evidence kit; be specific. Removal isn't guaranteed and it often takes several days.
3. **Google Business Profile community / Product Experts:** for serious or stalled cases, the forum's Product Experts can escalate well-documented reports.

### Step 4 — Operate it like a ticketing queue
For agencies/multi-location, treat removals as support tickets: one accountable owner; log every submission (date, Google account used, listing URL, channel, reason); set follow-up timers (e.g., 3 then 7 business days); reuse the stored evidence. Persistence with *tight* cases wins; repeated low-detail reports stall and can get ignored.

### Step 5 — When removal stalls
Don't spam low-detail reports. Tighten the case (add fresh dated photos, an independent license/registration source, documented customer confusion) and escalate one controlled step. If a spammer is permanent and unremovable, shift to out-ranking them and, where the spam also harms the brand in branded search, a suppression plan.

## Defense: When Your Client Is Attacked

### Review-bombing / fake negative reviews
- Flag each violating review in the GBP dashboard's Reviews Management Tool; file a removal report with the pattern documented.
- Know the automatic response: when Google detects a spam-review spike under the Fake Engagement policy, it now removes the fake content, pauses new reviews, alerts the owner, and can display a public banner telling consumers reviews were paused. That banner is a reputational cost even though you're the victim — be ready to explain it to the client.
- **Do not** rush to replace removed reviews with a burst of new ones; a sudden spike triggers further automated filtering. Resume normal, steady velocity → `review-management`.

### Malicious or unauthorized profile edits
- Monitor for edits to name, address, hours, and category (Google or third parties can push "suggested edits"). Reject incorrect edits promptly.
- Keep a saved baseline of correct profile data so you can prove and restore the right values. → daily change monitoring (`m3-gbp-change-monitor`).

### Negative engagement / CTR attacks
- Watch for the signatures of automated traffic against the client (impossibly low CTR with high impressions in GSC; GA4 sessions with zero engagement time from datacenter geographies). This is a competitor manipulation pattern, not your SEO failing. → detection and response in `behavioral-engagement`.

### If your *own* listing gets caught in an enforcement wave
A false-positive suspension during an AI enforcement sweep is a reinstatement problem, not an enforcement one. → `gbp-suspension-recovery`.

## Honesty & Ethics Guardrails

- Report only genuine policy violations with real evidence. Filing false or exaggerated reports against legitimate competitors is abuse of the system — don't do it, and don't help a client do it.
- Never fabricate evidence, customer-confusion claims, or reviewer patterns.
- This skill removes spam and defends against attacks. It does not create fake listings, fake reviews, or manipulate engagement — those are the violations you're reporting.

## What to Do Next

| What You Found | Next Action | Skill |
|----------------|-------------|-------|
| Competitor outranks you legitimately | Out-compete on profile, reviews, content | `gbp-optimization`, `review-management` |
| Spam cleared above you — measure the lift | Re-scan to quantify the ranking change | `geogrid-analysis` |
| Your own listing got suspended | Run the reinstatement process | `gbp-suspension-recovery` |
| Under a CTR/engagement attack | Detect and respond to manipulation | `behavioral-engagement` |
| Need to monitor for future edits/attacks | Set up daily change + review monitoring | `m3-gbp-change-monitor`, `m2-review-velocity` |
| Want competitive context before reporting | Benchmark the pack first | `local-competitor-analysis` |

**Default next step:** audit the pack and separate legitimate competitors from policy violators. Build tight, evidence-backed reports for the violators only — then go out-compete the legitimate ones.

## Tools for This Skill

See `docs/tool-routing` to pick based on what's connected.

- **Pack/competitor reconnaissance** → `localseodata-tool` (`local_pack`, `business_listings`), live SERP tools
- **Change monitoring** (unauthorized edits) → GBP change monitoring (`m3-gbp-change-monitor`); GBP API for baselines (`gbp-api-automation`)
- **Attack detection** (automated traffic) → Google Search Console + Google Analytics
- **Reporting** → Google's Suggest an Edit and Business Redressal Complaint Form (no tool skill needed)
