---
title: "In-App Advertising"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Revenue Models"
topicId: "revenue-models"
order: 3
---
# In-App Advertising: The Trade-Off Between Revenue and User Experience

## The Big Contradiction of App Ads

In-app advertising is the **largest single revenue stream in mobile** — bigger in total than any other. But it is also the **lowest value per user**. That pair of facts defines the whole lesson:

> Advertising is a **volume** model. It only works at scale, with a big audience — and the moment it starts destroying the experience that earned that audience's attention, it eats its own future.

So the real subject of this lesson is not just "put ads in." It is the **trade-off**: revenue per impression versus the retention and trust of your users.

## The Formats and Their Value (eCPM)

The unit metric to anchor everything is **eCPM — effective cost per mille: revenue per 1,000 ad impressions**. Here is the crucial insight: formats differ wildly in what they earn. These are 2026 **ranges**, not absolutes — treat the *ranking* (which format earns more) as the stable lesson:

| Format | What it is | Relative eCPM |
|---|---|---|
| Banner | small ad anchored top/bottom | lowest (~a few $) |
| Native | matched to the host app's look/feed | low–mid |
| Interstitial | full-screen at natural transitions | mid–high |
| In-stream/playable | video / interactive demo | high |
| **Rewarded video** | **user opts in to watch for a reward** | **highest (~10–30× banner)** |

The spread is the lesson: **rewarded video earns dramatically more than banners, and it does so while *improving* user experience.** Because the user opts in (watching is a *choice* that earns a reward — extra lives, coins, content), completion is high and the ads are far more tolerated than an interrupting interstitial.

## The Rule: Format > Network

A common beginner error is to obsess over *which ad network* you use. The evidence says the opposite: **the format mix is a bigger revenue lever than the network choice.** A rewarded video slot will out-earn a banner regardless of network; eCPM moves with format, geography, vertical, and season. Choose your **format** deliberately first, then use a network to fill it.

## How the Ad Economy Is Designed (briefly)

Behind the scenes is a **programmatic** system: demand-side platforms (buyers) meet supply-side platforms (publishers) in an auction per impression. Most apps don't talk to every network individually — they use **ad mediation**, where a single SDK runs *many* networks that compete for each slot, so the app keeps the best-paying ad. This is "competition for your own inventory": the networks bid, and your yield rises. In-app advertising also offers richer targeting and measurement than web advertising (app events, lifecycle data, no cookie-dependence).

## eCPM Arithmetic (make it concrete)

The formula:

**eCPM = (total ad revenue ÷ impressions) × 1000**

**Worked example:** 50,000 impressions deliver $500 in ad revenue. eCPM = (500 ÷ 50,000) × 1000 = **$10** per thousand impressions. That means every block of 1,000 ads you show earns $10 — and a rewarded-video slot earning $15 eCPM with the same 50k impressions would bring $750 instead of $500. Format choice is real money.

## The User-Experience Trade-Off

This is the heart of the lesson, and it connects to your ethics/trust work:

- **Too many / intrusive ads** (spamming interstitials) raise short-term revenue but **drive users away** — hurting retention, and through retention your ASO ranking and long-term value. You monetise the *present* and strangle the *future*.
- **Rewarded, opt-in ads** earn more *and* feel fair — because the user trades attention for something they want.
- **Native, on-brand ads** respect the feed's look.

The professional approach is the **hybrid**: run a **free ad-supported tier**, and offer an **ad-free subscription/purchase path** as an alternative. This captures both audiences — users who'll tolerate ads for free, and users who'll pay to remove them — and lifts lifetime value, exactly the hybrid lesson from earlier.

The trade-off framing: **advertising monetises attention only as long as it doesn't destroy the experience that earned that attention.**

## Regional Reality

In lower-data, price-sensitive markets, an **ad-supported free path** can act as a genuinely *free* entry that reaches users a paid/subscription model would price out. But regional eCPMs run well below top-tier markets — so while ads can be the right *entry* model locally, the per-user economics are modest, which argues for pairing ads with a paid/ad-free alternative in a hybrid.

## Common Misconceptions

- **"More ads = more money."** Intrusive ads drive churn and hurt retention/ASO, cutting long-term value — the trade-off is real.
- **"All ad formats earn about the same."** Rewarded video earns ~10–30× a banner; format mix is the bigger lever than network choice.
- **"eCPM is one number."** It moves with format, geography, vertical, OS, season, and fill rate.
- **"Advertising and subscriptions are opposites."** The most successful apps run hybrid — a free ad-supported tier plus an ad-free/subscription path — lifting LTV.
- **"As long as users see the app, ads are fine."** Ads monetise attention only if they don't destroy the experience; user trust is the real currency.

## Key Terms

| Term | Definition |
|---|---|
| In-app advertising (IAA) | Displaying paid ads inside an app to monetise inventory |
| Banner / Interstitial / Rewarded / Native | Ad formats with very different intrusiveness and eCPM |
| Rewarded video | Opt-in ad viewed for a reward; highest eCPM, best tolerated |
| eCPM | Effective cost per mille — revenue per 1,000 impressions |
| Ad network / mediation | Networks connect advertisers to publishers; mediation lets one SDK run many networks bidding per slot |
| Fill rate | Share of impressions that get a paying ad |

## Summary

In-app advertising is the largest revenue stream but a volume, low-per-user model that carries a real trade-off: monetise attention without destroying the experience that earns it. Anchor decisions in **eCPM** (revenue per 1,000 impressions), remember that **format outweighs network** (rewarded video ≫ banners), and understand the auction/mediation behind the scenes. Use hybrid structures — a free ad-supported tier plus an ad-free subscription path — to capture both audiences and lift value. In the region, ads can be a free entry path, but pair them with a paid option because local eCPMs are modest.
