# Installed design skills

These skills were installed to raise the design quality of the MM Bonding site. They are vendored
into the repo so they travel with it and work in any session.

| Skill | Source | What it gives us |
|---|---|---|
| `emil-design-eng` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Emil Kowalski's design-engineering philosophy: animation decision framework, custom easing curves, button press feedback, perceived performance, interruptible transitions. |
| `review-animations` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Standards + review checklist for animation quality (`STANDARDS.md`). |
| `web-design-guidelines` | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Vercel's Web Interface Guidelines: accessibility, focus states, forms, typography, performance, anti-patterns. |
| `taste-skill` | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Anti-slop frontend framework: design-read inference, the three dials, AI-tell bans, mechanical pre-flight checklist. |
| `image-to-code-skill` | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Translate brand imagery/screenshots into faithful, on-brand code. |
| `ui-ux-pro-max` | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Searchable design databases (color/type/style/landing/ux). Run via `scripts/search.py`. |

## Design read for this project

> Trust-first YMYL financial-services site for California contractors who need surety bonds fast.
> Bold, confident, fast language built on the logo's navy + azure and its forward-slash speed motif.
> Stack: Next.js 15 + Tailwind v4. Dials: `VARIANCE 6 / MOTION 4 / DENSITY 4`.

Brand colors are sampled directly from `mmbonding.png`: azure `#0090D8`, navy `#002040`.

## Installed local SEO skills

The **Local SEO Skills** pack ([garrettjsmith/localseoskills](https://github.com/garrettjsmith/localseoskills),
MIT, June 2026) is vendored here so local-search expertise travels with the repo. It adds 47
skills covering Google Business Profile, citations, local schema, location pages, service-area
SEO, reviews, AI local search, geogrid analysis, and reporting. License + README + the three
foundational docs live in [`localseoskills/`](localseoskills/).

Two things to know:

- **On-page vs. operational.** The website-facing skills (`local-schema`, `local-landing-pages`,
  `service-area-seo`, `entity-authority`) already shaped the site's structured data and location
  pages. Most of the rest (`gbp-optimization`, `local-citations`, `review-management`,
  `geogrid-analysis`, `ai-local-search`, reporting, ads) are **post-launch operations** that need a
  live Google Business Profile and connected data tools (LocalSEOData / GSC / GA4 MCPs) to run.
- **We applied the schema recommendations.** `local-schema` drove adding `geo`,
  `openingHoursSpecification`, `hasOfferCatalog`, `priceRange`, and city-level `areaServed` to the
  Organization JSON-LD in `lib/jsonld.tsx`.
