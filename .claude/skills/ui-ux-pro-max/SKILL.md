---
name: ui-ux-pro-max
description: AI-powered design intelligence. Searchable databases of UI styles, color palettes by product type, font pairings, chart types, landing-page structures, and UX guidelines. Use when you need grounded design recommendations (which palette/fonts/layout for a given product), not training-data guesses.
metadata:
  author: NextLevelBuilder
  upstream: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
---

# UI/UX Pro Max

A local, dependency-free search engine over curated design databases (BM25 + regex). Use it to ground color/type/layout/UX decisions in real data instead of defaulting to clichés.

## Usage

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain> [-n <max_results>]
```

**Domains:**
- `color` — color palettes by product type (returns primary/secondary/accent/bg/fg/border + on-colors)
- `typography` — font pairings with Google Fonts imports + Tailwind config
- `style` — UI styles (minimalism, glassmorphism, etc.) + AI prompts and CSS keywords
- `landing` — page structure and CTA strategies
- `chart` — chart types and library recommendations
- `product` — product-type recommendations
- `ux` — best practices and anti-patterns

**Stack-specific guidance:**
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --stack nextjs
```
Available stacks include: `nextjs`, `react`, `html-tailwind`, `shadcn`.

## Notes for this repo (MM Bonding)

The brand palette is locked to the logo (azure `#0090D8`, navy `#002040`). Use this skill for
*supporting* decisions (chart choices, UX patterns, landing structure), not to override the brand
colors. The 745KB `google-fonts.csv` and the duplicate `draft.csv` were intentionally not vendored
to keep the repo lean; everything the `search.py` domains above need is present.
