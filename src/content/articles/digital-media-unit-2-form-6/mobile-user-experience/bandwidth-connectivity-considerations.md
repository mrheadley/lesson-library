---
title: "Bandwidth & Connectivity Considerations"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Mobile User Experience"
topicId: "mobile-user-experience"
order: 2
---
# Bandwidth & Connectivity Considerations: Designing for the Lived Network

## Low Bandwidth Is the Default, Not an Edge Case

Every bandwidth discussion must start from the same reset already established in the infrastructure lessons: in the Caribbean, **low bandwidth and expensive, prepaid data are the default, not an emergency edge case.** Around 46% of connections lack 5G, fixed fibre reaches only ~1.9m households, and much of the region lives on 4G (parts on 3G) with data that is metered and pricey. Designing for limited connectivity is therefore a *first-class requirement*, not an optimisation you do if you have time.

**Bandwidth** — the data-carrying capacity of a connection; low bandwidth means slow, small-capacity — the regional norm. Closely tied to it is **data affordability** — the cost of data relative to income — which is the binding constraint that makes data-light design matter at all.

## The Core Toolkit for Limited Connectivity

Designing for weak, expensive connections comes down to a small set of proven techniques:

- **Compression** — shrinking asset file sizes (lossy or lossless) so fewer bytes travel and pages load faster.
- **Lazy loading** — loading content only when it scrolls into view, rather than everything up front, which slashes the initial load.
- **Caching / service workers** — storing resources (or running background logic) so the app loads fast, or works at all, on a weak signal.
- **Data-saving and degraded-quality modes** — lower-resolution media by default, thumbnails and placeholders, and options to go lighter — respecting prepaid bundles.
- **Graceful degradation** — the app stays functional and *clearly communicates its state* (syncing, offline) as connectivity worsens, instead of failing silently.

The theme: give the user control over how much data they spend, and never surprise them with a silent failure.

## Offline-First: Resilience by Architecture

The strongest response is **offline-first** — architecture where the *device is the primary store of truth*. The app's data lives on the phone; changes are made locally, queued, and **synced when a connection returns**. Offline-first is not "an app that works offline sometimes"; it is resilience by design, so the app remains usable on a dropped signal, in a blackout, or on a connection too expensive to use freely — precisely the moments the region's disaster context (Lesson 112) demands.

A practical, low-cost path to offline capability is the **Progressive Web App (PWA)**: a web app whose service worker caches resources locally, letting it behave like an offline-capable native app without the store or the heavy install. For low-bandwidth Caribbean apps, a PWA is a genuinely smart, cheap choice.

## Speed Is a Feature, and Data Is the Churn Driver

Two hard realities make performance a design feature rather than a nicety:

- **Speed is retention.** A majority of mobile users abandon a page that takes more than roughly three seconds to load. In an app economy, heaviness is not a flaw — it is the reason users leave.
- **Data is the churn driver.** Data bundle price is the number-one driver of churn in Caribbean telecoms. For prepaid, cost-sensitive users, **saving their data is a real feature** — a heavy, media-drenched app literally prices people out of using it.

So the region's design brief makes the data-conscious choice the *winning* choice: an app that loads light and spends little is not poorer than a heavy one — it is better suited to the market.

## The Extreme End: Designing for Users with No Smartphone at All

Low-connectivity design does not stop at optimisation — at its extreme it **meets users off the smartphone entirely.** The feature-phone/USSD bridge (see mCash-style payments for money) reaches users with no smartphone and no data plan at all, through USSD, SMS and voice. A farmer with a basic phone still gets prices; an unbanked user still pays a bill. Designing for limited bandwidth ultimately means designing for whoever has the least, because that is how the region's most excluded users are reached.

## Common Misconceptions

### "Fast internet is coming, so low-bandwidth design is temporary"
5G is only about 10% of Caribbean connections and data stays metered and expensive. Designing light is needed now and for years.

### "A beautiful app with big media is worth the data"
For prepaid, cost-sensitive users data savings are a real feature — heavy payloads literally price people out.

### "Offline-first is only for apps without internet"
Even with signal, local-first caching makes an app faster and cheaper on the region's real connections.

### "If there's a signal, payloads load and everything works"
Bandwidth, throttling, data budgets and device limits all degrade real performance despite a signal.

### "Connectivity design is a developer's concern, not a designer's"
Content and data choices — compression, lazy-load, offline states, degraded modes — are design decisions central to the Caribbean UX brief.

## Summary

Designing for **bandwidth and connectivity** must start from the region's reality: low bandwidth and expensive prepaid data are the default, not the edge case. The core toolkit is compression, lazy loading, caching/service workers, data-saving and degraded modes, and graceful degradation that never fails silently. The strongest response is **offline-first** architecture — the device as the primary store, syncing later — with the PWA as a cheap, practical path to it. Performance is a feature, because speed is retention and data price is the number-one churn driver: for prepaid Caribbean users, saving their data *is* the product. And at the extreme, low-connectivity design meets users with no smartphone at all through USSD/SMS/voice bridges. Designing light, resilient and honest about connectivity is not a compromise — it is the design the region's users actually need.
