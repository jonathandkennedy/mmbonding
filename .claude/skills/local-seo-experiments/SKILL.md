---
name: local-seo-experiments
description: When the user wants to prove whether a change actually moves local rankings, design a controlled local SEO test, isolate a variable, or settle a debate about a ranking factor with first-party data instead of opinion. Also use when the user says "does X actually work," "can we test this," "prove this moves rankings," or wants to validate an optimization before rolling it out across locations. Pairs with geogrid-analysis (the measurement instrument), evidence-standards (promotes weak claims to strong ones), and meta/lessons.md (logs findings).
metadata:
  version: 1.0.0
  author: Garrett Smith
---

# Local SEO Experiments

You design controlled tests that establish *causation*, not correlation. This is how a local SEO program stops repeating industry folklore and starts running on first-party truth. Most "ranking factors" are Tier-C/D claims (correlation or expert opinion, see `evidence-standards`); a clean experiment is what promotes them to Tier B — or refutes them, the way Sterling Sky's controlled tests refuted GBP posts and geotagged photos as ranking levers.

## Why Most "Tests" Prove Nothing

The common failure: change five things at once, watch rankings go up, credit the change you liked. That's not a test — it's a story. A real experiment isolates one variable, holds everything else constant, and can be wrong. If your design can't produce a "no, that didn't work" result, it isn't an experiment.

## The Core Design

1. **One variable.** Change exactly one thing (primary category, a service-page addition, review velocity, the GBP primary photo). If you must test a bundle, label the finding as "bundle effect," not attributable to any single change.
2. **A written hypothesis with a falsification condition — before you start.** "Changing primary category from X to Y will improve SoLV for keyword Z by ≥10% within 14 days. If SoLV moves <3%, the hypothesis is rejected." Pre-registering the kill condition prevents post-hoc rationalization.
3. **A baseline.** Run a geogrid scan for the target keyword(s) immediately before the change. Same grid size, radius, and keyword you'll use to measure after. → `geogrid-analysis`.
4. **A control, where possible.** The gold standard. Pick comparable listings (similar category, market, profile strength) that you do *not* change, and track them over the same window. If the test listing moves and controls don't, your confidence jumps. Without a control, you can't separate your change from an algorithm update or seasonal shift.
5. **Hold everything else constant.** No other GBP edits, no review pushes, no new pages, no citation work on the test listing during the window. Co-occurring changes destroy attribution.
6. **Respect the known lag.** Don't measure before the effect could appear:
   - Category changes: often visible within days.
   - On-page changes: ~4–8 weeks.
   - Review-velocity changes: ~2–3 months for consistent movement.
   - Citation/aggregator changes: 4–8 weeks to propagate.
   Measuring too early produces false negatives; measuring once produces noise — take 2–3 readings.

## Confounders to Rule Out

A ranking change during your window might not be your change. Before crediting the variable, check:
- **Algorithm updates.** A core update (e.g., the May 2026 core update) or a local update during the window can swamp your signal. Check the Google Search Status Dashboard and industry trackers; if one landed mid-test, the test is compromised — re-run.
- **Seasonality.** HVAC, tax, retail, and tourism rankings shift with demand. Compare against the same listing's prior-year pattern or a seasonal control.
- **Competitor moves.** A competitor's new reviews, pages, or (de)suspension can move *your* relative position without you changing anything. Pull a competitor snapshot at baseline and at measurement → `local-competitor-analysis`.
- **Volatility floor.** Local rankings jitter day-to-day. A 1-position wobble at one grid point is noise. Look for a consistent, multi-point, sustained shift, not a single data point.

## Reading the Result

- **Clear pass:** test listing moves in the predicted direction and magnitude, controls don't, no confounder explains it, effect persists across readings. → promote the claim to Tier B in `evidence-standards`; log it in `meta/lessons.md`.
- **Clear fail:** no movement beyond the volatility floor by the end of the lag window. → the variable doesn't do what folklore says; log the refutation (these are the most valuable findings).
- **Ambiguous:** movement but a confounder is present, or controls moved too. → inconclusive. Don't claim a win. Re-run cleaner or widen the control set.

State the result at the confidence its design earns. A single-location test with no control is Tier C at best, even if it "worked."

## When You Can't Run a Clean Test

Be honest about the limits:
- **Single location, no comparable controls:** you can still do a before/after, but you cannot separate your change from external factors. Label findings Tier C and say so.
- **High-volatility or low-volume keyword:** the signal-to-noise ratio may be too low to read. Pick a more stable keyword to test, or extend the window.
- **Client won't hold other work constant:** then you're not running an experiment, you're doing optimization — report it as such, not as proof.
- **Irreversible/risky variable:** never test something that could trigger a suspension (e.g., adding keywords to the business name) just to "see." The downside is the whole listing. → `gbp-suspension-recovery`, `gbp-spam-enforcement`.

## Multi-Location: Experiments at Scale

A portfolio of locations is a natural experiment platform. Apply a change to a matched subset, hold a matched subset as control, measure both. This is how an agency builds a private, defensible knowledge base of what actually works in its verticals — far more valuable than any public ranking-factors report. Roll a validated change to the full portfolio only after it passes.

## Output: Experiment Record

Log every experiment so the knowledge compounds:
- Hypothesis + falsification condition (as pre-registered)
- Variable changed; everything held constant
- Baseline metrics (geogrid params, SoLV/ARP, date)
- Control set (or note: none)
- Measurement readings (dates, metrics)
- Confounders checked
- Result + the evidence tier it earns
- Decision (roll out / reject / re-run)

## What to Do Next

| Situation | Next Action | Skill |
|-----------|-------------|-------|
| Need the baseline and measurement instrument | Run matched geogrid scans before and after | `geogrid-analysis` |
| Experiment passed | Promote the claim's tier and roll out | `evidence-standards`, relevant strategy skill |
| Experiment refuted a common tactic | Log the refutation for the whole team | `meta/lessons.md` |
| Need competitor snapshots to control for their moves | Pull baseline + measurement competitor data | `local-competitor-analysis` |
| Validated change ready for the portfolio | Roll out across locations | `multi-location-seo` |

**Default next step:** if a decision is expensive or contested and the supporting claim is only Tier C–D, run a test before acting. A two-week experiment is cheaper than a quarter spent on a tactic that does nothing.

## Tools for This Skill

See `docs/tool-routing` to pick based on what's connected.

- **Baseline + measurement geogrids** → Local Falcon (only option for geogrid; use recurring campaigns to capture multiple readings)
- **Confounder check — algorithm updates** → Google Search Status Dashboard + industry trackers (no tool skill needed)
- **Confounder check — competitor moves** → competitor data via `localseodata-tool` `competitor_gap` or Local Falcon
- **On-site change validation** → Google Search Console (actual clicks/impressions over the window)
