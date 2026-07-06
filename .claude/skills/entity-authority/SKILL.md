---
name: entity-authority
description: When the user wants to build a business's entity and brand authority — branded search demand, knowledge panel, entity consistency across the web (sameAs, Wikidata/Wikipedia), and the brand-mention signals that feed both local prominence and AI search visibility. Also use when the user mentions "entity SEO," "brand SEO," "knowledge panel," "knowledge graph," "branded search," "sameAs," or "entity authority." For NAP/directory citations see local-citations; for AI visibility tactics see ai-local-search; for schema implementation see local-schema.
metadata:
  version: 1.0.0
  author: Garrett Smith
---

# Entity & Brand Authority

You build the signals that make Google (and AI systems) confident about *who a business is* — a clear, consistent, well-referenced entity. This underpins the "prominence/popularity" side of local ranking and is disproportionately important for AI visibility, where citation- and entity-based signals make up several of the top factors.

## Why Entity Signals Matter in 2026

- **Prominence.** Branded search volume and consistent, authoritative references signal a real, trusted business — the prominence half of relevance/proximity/prominence.
- **AI visibility.** AI Overviews, AI Mode, ChatGPT, and Gemini synthesize an answer about a business from many sources. A clean, consistent entity across the web makes the business legible to them; a fragmented one makes it invisible or wrong. Citations/entity signals weigh far more for AI than for the traditional pack.
- **Disambiguation.** Entity work prevents Google from confusing the business with similarly named ones, splitting signals, or attaching the wrong attributes.

Honesty note: "branded search as a trust signal" and "entity clarity helps AI" are strong consensus (Tier D) plus partial Google statements, not a measured weight — see `evidence-standards`. Build it because it's coherent and compounding, and label confidence honestly.

## The Entity Foundation

### 1. One canonical identity, everywhere
- Lock a single canonical business name, address format, and phone (the real-world brand — never a keyword-stuffed name; that's a suspension risk, see `gbp-spam-enforcement`).
- Enforce it across GBP, website, social, directories, and data aggregators. Inconsistency is the #1 way an entity fragments. → `local-citations`.

### 2. Organization schema + `sameAs`
- Implement `Organization` (or `LocalBusiness`) schema on the site with a complete `sameAs` array linking every official profile (social, major directories, Wikipedia/Wikidata if present). `sameAs` is how you tell search engines "all of these are the same entity." → `local-schema`.
- Keep the schema's name/logo/contact identical to GBP.

### 3. Authoritative reference nodes
- **Wikidata:** a well-formed Wikidata item (where genuinely notable/eligible) is a strong entity anchor that knowledge systems read. Don't fabricate notability.
- **Wikipedia:** only if the business genuinely meets notability — otherwise it gets removed and can backfire. Most local businesses won't qualify; that's fine.
- **Crunchbase, industry bodies, official registries:** legitimate, structured nodes that reinforce the entity.

### 4. Knowledge panel
- A branded search should surface a knowledge panel. Claim it (verification) when available, keep its data accurate, and feed it via consistent schema + authoritative references. The panel both reflects and reinforces entity strength.

## Growing Branded Search Demand

Branded search volume is the demand-side prominence signal. You grow it the legitimate way — by making the brand more known, not by faking queries (that's manipulation; see `behavioral-engagement`).
- Run brand-building across the channels the audience actually uses (local PR, community presence, content, social, offline marketing).
- Earn genuine media and "best of [city]" mentions of the brand by name → `local-link-building`.
- Track branded query volume over time (Search Console, keyword tools) as a leading indicator of prominence.

## Earned, Not Bought — the AI-Era Constraint

Brand mentions and citations matter more in the AI era, which makes paid manipulation tempting — and risky. Google's 2026 AI-search guidance states its spam policies apply to AI features and warns specifically against *manipulating or buying* citations/mentions to influence AI results. So:
- **Do:** earn mentions through genuine newsworthiness, partnerships, expertise, and community involvement.
- **Don't:** buy citation/mention placements engineered for AI visibility, or run mention/link networks. Earned compounds; bought is a stated spam risk.

## What to Do Next

| What You Found | Next Action | Skill |
|----------------|-------------|-------|
| NAP/entity inconsistent across the web | Clean up citations to one canonical identity | `local-citations` |
| Schema missing `sameAs` / Organization markup | Implement entity schema matching GBP | `local-schema` |
| Want the entity to surface in AI answers | Layer AI-visibility tactics on the entity foundation | `ai-local-search` |
| Need genuine brand mentions/links | Run earned local PR and digital PR | `local-link-building` |
| Tempted to buy mentions for AI visibility | Don't — it's a stated spam risk; earn them | this skill, `ai-local-search` |
| Want to prove branded search affects rankings | Treat as Tier D; design a test if it's a big bet | `evidence-standards`, `local-seo-experiments` |

**Default next step:** lock one canonical identity and enforce it everywhere (citations + `sameAs` schema), then grow genuine branded demand. Entity work is slow-compounding infrastructure, not a quick ranking lever — set expectations accordingly.

## Tools for This Skill

See `docs/tool-routing` to pick based on what's connected.

- **Branded search demand tracking** → Google Search Console (branded queries) + keyword tools
- **Entity/citation consistency** → citation tools (multiple options)
- **Schema (`sameAs`, Organization) validation** → Google Rich Results Test; `screaming-frog-tool` at scale
- **Brand mention monitoring** → web search / brand-mention monitoring tools
