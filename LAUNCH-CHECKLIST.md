# MM Bonding — Pre-Launch Checklist

The website is built and working. Before we point the domain at it and turn on
ads, please confirm or correct the items below. Check a box once it is confirmed.

_Last updated: July 2026._

## 1. Business identity (NAP) — must match your Google Business Profile exactly

These appear in the footer, the contact page, and the structured data Google
reads. Inconsistency hurts local SEO.

- [x] **Published phone number** — confirmed: **(805) 752-8600**. (Swap for a
  CallRail tracking number later if you want call attribution.)
- [x] **Email** — confirmed: **letstalk@mmbonding.com**. Live on the contact page
  and in the Organization schema.
- [x] **Street address + suite + ZIP** — confirmed: **699 Hampshire Rd Ste 107C,
  Westlake Village, CA 91361**. Live on the contact page, footer, and schema.
- [x] **Business hours** — confirmed: **Mon-Sat, 9:00am-5:00pm PT**.
- [ ] **Google Business Profile URL** — send it once live so we can link your
  profile in the site's data.
- [x] **Founding year** — confirmed: **2022**. Shown on the about page and in the
  company `foundingDate` schema.

## 2. Lead delivery

- [ ] **Form inbox** — the quote, contact, and insurance-referral forms submit
  through your confirmed Formspree endpoint (form `mvzjllqa`). Last step: send a
  test lead from the live site and confirm it lands in the inbox someone watches.

## 3. Legal review (important for a financial-services site)

The Privacy Policy and Terms of Service are professional drafts grounded in how
the business actually works, but they should be reviewed by counsel before
launch, since the site collects credit/SSN-level underwriting data and
phone-contact consent.

- [x] **Privacy Policy** — reviewed and approved by counsel.
- [x] **Terms of Service** — reviewed and approved by counsel.

## 4. Regulatory figures — confirm these are current

Every dollar amount and statute on the site lives in one file, reviewed-dated
**June 2026**. They were verified against public CSLB / DOI / agency sources, but
please have your team confirm. Re-verify quarterly. Each specialty page already
shows a "general guidance, confirm with the agency" note.

**Contractor licensing**

- [ ] License bond **$25,000** (BPC 7071.6) · LLC worker bond **$100,000**
  (7071.6.5) · Bond of Qualifying Individual **$25,000** (7071.9) · Disciplinary
  **at least $25,000, up to 10x** · Premium range shown **1% to 15%** · Filing
  window **24 to 48 business hours**.

**Specialty bonds (first batch)**

- [x] Notary **$15,000** · Auto dealer **$50,000** · Immigration consultant
  **$100,000** · Freight broker BMC-84 **$75,000** · Cannabis **$5,000** · Talent
  agency **$50,000** · Debt collector **$25,000** (DFPI) · CTEC tax preparer
  **$5,000** · ERISA **10% of plan funds, $1,000 to $500,000** (up to $1M with
  employer securities; higher limits for non-qualified assets). Confirmed.

**Specialty bonds (newest batch — highest priority to confirm)**

- [ ] **Money transmitter** — shown as **$250,000 to $7 million**, a DFPI sliding
  scale by volume. Confirm the range.
- [ ] **Process server** — shown as **$2,000** (BPC 22350). Confirm the amount and
  the cite.
- [ ] **Health studio** — shown as "set by California health studio law" (Civil
  Code 1812.80 et seq.). Confirm the bond requirement and how the amount is set.
- [ ] **Telephonic seller** — shown as "set by California telephonic seller law"
  (BPC 17511 et seq.). Confirm applicability and amount.
- [ ] **Ticket seller** — shown as "set by the requirement" (no fixed figure).
  Confirm whether a statewide bond applies to the customers you would target.
- [ ] Lease guarantee and wage & welfare bonds show variable amounts ("set by the
  lease" / "set by the collective bargaining agreement"), so there is no fixed
  figure to verify.

**SBA program (federal)**

- [x] Contract limit **$9M** · federal contract limit **$14M** · guarantee share
  **80% to 90%**. Confirmed current.

**Bonds-by-trade pages**

- [ ] The 10 trade pages (C-10, C-36, and so on) describe which bonds each trade
  commonly needs in general terms (the license bond always; performance and
  permit bonds by job). No new dollar figures; just confirm the general framing
  reads right to you.

## 5. Carrier / appointment claims

- [x] **Appointed-carrier / surety list** — confirmed direct appointments: **CNA
  Surety, Merchants Bonding Company, Liberty Mutual Surety, TMHCC Surety**. Now
  shown in a "Markets we place with" section on the about page.

## 6. Brand assets

- [x] **Michael's headshot** — live on the about page, the reviewer byline
  site-wide, and Michael's Person schema. Note: the supplied file is only
  172px; a ~800px original would render crisper if available.
- [ ] **Insurance referral partner** — the general-liability and workers'
  compensation pages route leads to a licensed partner agency. Confirm the
  partner so we name them correctly, or we keep it generic.

## Already handled

- LinkedIn wired into Michael's profile data
- Brand colors sampled from the logo
- Sitemap, robots, structured data, and English/Spanish hreflang
- IndexNow instant-indexing (Bing, Yandex, Seznam, Naver): key file +
  `/api/indexnow` endpoint + a daily Vercel cron. It auto-submits the sitemap
  once the domain is live; run `npm run indexnow` to push a submission sooner
  after publishing something new.
- Honest "no guaranteed approval" and "bonded is not insured" copy throughout
- 74 city pages, 10 bonds-by-trade pages, 30+ guides, a surety glossary, a cost
  calculator, and a visual "how surety bonds work" guide
- Privacy Policy and Terms of Service
