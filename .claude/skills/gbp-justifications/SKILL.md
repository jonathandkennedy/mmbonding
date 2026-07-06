---
name: gbp-justifications
description: When the user wants to influence the justification snippets Google shows under local pack listings ("their website mentions…", review snippets, services, posts), understand why a competitor's listing shows a snippet theirs doesn't, or improve local pack click-through. Also use when the user mentions "justifications," "local pack snippets," "their website mentions," "review justifications," or "why does that show under their listing." For overall profile work see gbp-optimization; for posts see gbp-posts; for review strategy see review-management.
metadata:
  version: 1.0.0
  author: Garrett Smith
---

# GBP Justifications

You optimize the little snippets Google overlays on local pack listings — the "Their website mentions…", review excerpts, service checkmarks, and post highlights that tell a searcher *why* a business matches their query. Roughly half of local packs show them (Moz found ~57%), and in dense packs they're prime, free real estate.

## The Honest Framing (read first)

Justifications **do not cause ranking**. A justification appears *because* the business already ranks for that query — Google then decorates the listing with a matching snippet. So this is a **CTR play, not a ranking play**: a strong justification makes searchers pick you over equally-ranked neighbors, and that incremental engagement feeds the behavioral signals that *may* help ranking indirectly (Tier C/D, not confirmed — see `evidence-standards`).

The one partial exception is the **"Their website mentions…"** type. When you see it, it's a useful diagnostic: it often reveals which on-page content Google considers relevant to that query — i.e., a hint at what's actually helping the listing rank. Read competitors' website-mention justifications to reverse-engineer the content that's working.

## Justification Types and What You Can Influence

| Type | Looks like | Source | Can you influence it? |
|------|-----------|--------|----------------------|
| **Review** | A snippet from a customer review | Google reviews matching query language | Indirectly — via on-page content and natural review prompts (see the 2026 caveat below) |
| **Website mentions** | "Their website mentions [term]" + globe icon | Content on the GBP-linked website | Yes — comprehensive, accurate on-page content |
| **Services** | A checkmark + service name | The Services section of the GBP | Yes — but word services carefully |
| **Post** | A highlighted GBP post | Recent GBP posts | Yes — single-topic posts; updates in near real-time |
| **In stock / Sold here** | "In stock" / "Sold here" | Merchant Center / product feed (SWIS) | Partly — requires product listings |
| **Menu** | "On the menu: [item]" | GBP menu (restaurants) | Partly — fill out the GBP menu and menu photos |

## Optimization Playbook

### Website-mention justifications
- Make sure the GBP-linked page comprehensively, accurately describes the services, features, and specifics customers search for. Google pulls matching phrases from this page.
- This is the highest-value type to optimize because it doubles as on-page relevance work that *can* affect ranking → `local-landing-pages`, `local-content-briefs`.
- Audit competitors' website-mention justifications to find content gaps you should close.

### Review justifications — with the 2026 compliance catch
- Google matches review wording to query language, so reviews that naturally name your services win these snippets.
- **The catch:** the old tactic of asking customers to "mention [keyword]" now collides with Google's April 2026 review policy, which explicitly prohibits asking customers to use specific words or mention staff. Don't script reviewer language.
- **The compliant way:** earn keyword-rich reviews by (a) doing the on-page work so Google has matching context, and (b) prompting reviews at the moment a specific service was delivered ("we'd love your thoughts on the work we did today") so customers naturally describe that service — without you dictating words. → `review-management`.

### Services justifications
- Add your real services to the GBP Services section, worded the way customers search.
- Word them carefully — Google renders them literally, and clumsy phrasing reads badly (a law firm should not appear to "offer slip-and-fall injuries").

### Post justifications
- Single-topic posts win post justifications far better than a long post listing every service. One post, one theme.
- They update in near real-time, so a timely, query-relevant post can surface quickly. → `gbp-posts`, `local-news-posts`.

### The attribute that *blocks* justifications
- The **"onsite services"** and **"online appointments"** attributes suppress justifications from showing in the local pack. If a listing has them enabled and shows no justifications, removing them typically lets justifications appear within ~48 hours. Weigh this against the value of those attributes for the specific business.

## What to Do Next

| What You Found | Next Action | Skill |
|----------------|-------------|-------|
| Website-mention justifications reveal content gaps | Build/strengthen the on-page content Google is matching | `local-landing-pages`, `local-content-briefs` |
| Want review justifications (compliantly) | Earn keyword-natural reviews without scripting words | `review-management` |
| Want post justifications | Publish single-topic, query-relevant posts | `gbp-posts`, `local-news-posts` |
| No justifications showing at all | Check for the onsite-services/online-appointments block; verify the profile actually ranks | `gbp-optimization` |
| Unsure whether this moves rank | It doesn't directly — it's a CTR lever; treat claims accordingly | `evidence-standards` |

**Default next step:** justifications are an amplifier on a listing that already ranks. If the business isn't in the pack yet, fix ranking first (`gbp-optimization`); then optimize justifications to win the click.

## Tools for This Skill

See `docs/tool-routing` to pick based on what's connected.

- **See which justifications show** (yours and competitors') → manual searches in Google/Maps from the target area; live SERP tools
- **Find the matching on-page content** → `screaming-frog-tool` or `localseodata-tool` `page_audit`
