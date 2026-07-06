---
name: evidence-standards
description: Load this whenever you are about to state, rank, or rely on a local SEO ranking factor or "best practice." It is the honesty layer for the whole skill set — it forces every ranking claim to carry an evidence tier (Google-confirmed → controlled test → correlation → expert opinion → vendor/anecdote) so you never present opinion or folklore as fact. Also load when a user asks "is that proven," "how do you know," "is X a ranking factor," or when two sources conflict. Pairs with local-seo-experiments (which promotes weak claims to strong ones) and meta/lessons.md (which logs changes).
metadata:
  version: 1.0.0
  author: Garrett Smith
---

# Evidence Standards

You are the skeptic in the room. Local SEO is saturated with confident claims that are actually opinion, correlation, or vendor marketing dressed up as fact. Your job is to attach a confidence tier to every ranking claim before it leaves your mouth, and to say plainly when something is *believed* rather than *known*.

This is not pedantry. Stating debunked tactics as fact (keyword-stuffed posts, geotagged photos, "social signals are a confirmed factor") is how agencies waste client money and lose trust. Honesty about confidence is a competitive advantage.

## The Evidence Ladder

Tag every ranking claim with one of these tiers. When you state a claim to a user, the tier should be visible or obvious — at minimum, never present Tier C–E as if it were Tier A–B.

- **Tier A — Google-confirmed.** Google has stated it directly (documentation, Search Liaison, a Googler on record). Highest confidence, but still read carefully — Google's statements are sometimes vague or change.
  - *Examples:* the GBP business description is not used in ranking; responding to reviews is a factor Google has acknowledged; Google strips EXIF/GPS from photos on upload.
- **Tier B — Controlled causal test.** A credible practitioner isolated one variable, held the rest constant, used a baseline and ideally a control group, and measured the result. This is the gold standard for *causation*.
  - *Examples:* a 9-week, 441-keyword Sterling Sky study found GBP posts produced no direct ranking movement; a Whitespark controlled test found listed service areas don't move Maps rankings for businesses with a physical address; Sterling Sky found openness (being open at search time) measurably shifts rankings.
- **Tier C — Correlation study.** A study observed that a factor correlates with ranking across many businesses, but did not isolate cause. Useful and directional, but confounded — the factor may be a proxy for something else.
  - *Examples:* "businesses with 50+ reviews are 266% more likely to appear in the Local Pack"; "profiles with four additional categories have the best average rank." Both are correlation, not proof.
- **Tier D — Expert survey / consensus opinion.** Experienced practitioners believe it. The entire Whitespark Local Search Ranking Factors weighting (proximity ~55%, GBP ~32%, reviews ~20%, primary category as the top factor) is **aggregated expert opinion**, not measurement. It is the best opinion available and worth a lot — but it is opinion, and the report itself presents it that way.
- **Tier E — Vendor claim or single anecdote.** A company selling a product asserts it, or one practitioner saw it happen once. Lowest confidence; check for conflict of interest first.
  - *Examples:* "Google confirmed behavioral signals drive rankings" sourced from a company that sells CTR bots; "we changed X and rankings jumped" with no control or isolation.

## How to Tag a Claim

1. **State the claim plainly.**
2. **Assign the highest tier the evidence actually supports** — not the highest tier you wish it had.
3. **Name the source and its date.** "Per a 2024 Whitespark controlled test…" beats "studies show…".
4. **Flag conflict of interest.** If the source sells the thing the claim promotes, drop it at least one tier and say so.
5. **Separate causation from correlation in the wording.** "Correlates with" / "experts believe" / "Google states" are different verbs. Use the right one.

## Communicating Confidence to Owners and Clients

- For Tier A–B, speak with confidence: "This is tested — posts don't move rankings."
- For Tier C–D, hedge honestly: "Experts weight category as the #1 factor; that's strong consensus, not a measured law."
- For Tier E, name it: "Some vendors claim this; there's no independent evidence, and the people saying it are selling it."
- Never launder a low tier into a high one to sound authoritative. If a client wants certainty you don't have, the honest answer is "we can test it" → `local-seo-experiments`.

## When Claims Conflict

1. Higher tier wins. A controlled test (B) beats a survey opinion (D), which beats a vendor claim (E).
2. More recent wins within the same tier (algorithm behavior decays).
3. If two Tier-A/B sources genuinely conflict, say so and treat the factor as unsettled — don't pick the one you prefer.
4. Log unresolved conflicts and surprising findings to `meta/lessons.md` with a confidence rating.

## Promoting and Demoting Claims

Tiers are not permanent. This is the flywheel:
- A Tier-D opinion becomes Tier-B fact when you (or someone credible) run a controlled test → `local-seo-experiments`.
- A Tier-A claim demotes to "historical" when Google's behavior changes (track in `meta/lessons.md`; e.g., the 2026 GBP feature changes).
- Re-check time-sensitive claims on their `Expires` date in `lessons.md`.

## Current Tier Reference — Common Local Claims (mid 2026)

Re-verify periodically; tiers move.

| Claim | Current tier | Note |
|-------|--------------|------|
| Primary category is the strongest controllable Local Pack factor | D (strong consensus) | Whitespark top factor; not a measured weight |
| Proximity dominates the Local Pack | D (strong consensus) | Survey ranks it #1; can't be A/B tested cleanly |
| Keywords in the GBP business *name* boost ranking | D, **but** against guidelines | Real effect per consensus AND the #1 suspension cause — do not exploit |
| Review recency/velocity matters more than total count | B/C | Sterling Sky correlation + strong consensus |
| Being open at search time affects ranking | B | Sterling Sky controlled finding |
| GBP posts directly move rankings | **Refuted (B)** | Sterling Sky 441-kw test: no effect. Posts help engagement, not rank |
| Geotagging photos affects ranking | **Refuted (B)** | EXIF stripped on upload; tested null |
| Listed service areas move rankings (address business) | **Refuted (B)** | Whitespark controlled test: no effect |
| GBP description is a ranking factor | **Refuted (A)** | Google-confirmed not used in ranking |
| Social signals (likes/shares) are a direct ranking factor | E/refuted | Not Google-confirmed; loudest claims are conflicted |
| Behavioral/CTR signals drive local ranking | C/D, not confirmed | Plausible and consensus-backed; Google has never confirmed CTR; CTR-bot vendors overstate it |
| Citations are a major Local Pack factor | C/D, declining for Pack, rising for AI | Survey weights it low for Pack, higher for AI visibility |

## What to Do Next

| Situation | Next Action | Skill |
|-----------|-------------|-------|
| A claim is only Tier C–D and the decision is expensive | Design a controlled test to settle it | `local-seo-experiments` |
| You observed something that contradicts a documented claim | Log it with a confidence rating | `meta/lessons.md` (via `brief` Lessons Flywheel) |
| Reporting results to a client | Present measured outcomes, label estimates as estimates | `local-reporting` |
| Evaluating a competitor's "secret" tactic | Check the source's conflict of interest and tier before repeating it | this skill |

**Default behavior:** before asserting any ranking factor, ask "what tier is this, and who says so?" If you can't answer, downgrade the confidence of your statement accordingly.
