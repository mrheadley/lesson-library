---
title: "Local Infrastructure Challenges"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Global vs. Caribbean Mobile Ecosystems"
topicId: "global-vs-caribbean-mobile-ecosystems"
order: 7
---
# Local Infrastructure Challenges: Bandwidth, Cost, Devices and Power

## The Physical Reality Beneath Every App

Every design decision in this course eventually runs into the same four walls of Caribbean infrastructure:

1. **Bandwidth is limited and expensive.**
2. **Data costs real money** and users are price-sensitive.
3. **Devices are often entry-level or older.**
4. **Power is not always on.**

None of these is an exotic edge case. Together they are the *default conditions* for most Caribbean users. An app that ignores them fails most of the region even if it is beautiful. An app that designs *for* them becomes genuinely more useful, more trusted and more widely used. This lesson turns those four walls from background noise into a design brief.

## Bandwidth: Thin, Shared, Expensive to Build

Bandwidth is the data-carrying capacity of a connection — and across most of the Caribbean it is limited. International traffic rides **submarine cables**; national traffic flows over **backhaul** that is thinner and pricier in rural and lower-income areas; and tower density is lower outside the cities. The result is simple: you cannot assume a fast, always-on pipe.

It is worth being precise about the cumulative picture. Roughly **46% of the region (outside Cuba) lacks 5G**, and only about **1.9 million households have fiber-to-the-home**. For years to come the realistic baseline is **4G, often congested, occasionally slower**. "There is a signal" says nothing about whether there is *capacity* to load a video-heavy page quickly.

## Data Cost: The Price-Sensitive, Prepaid Reality

If bandwidth asks "can the network carry it?", data cost asks "can the user *afford* it?" — and this, not network quality, is the binding constraint.

The evidence is striking: **data bundle pricing is the leading reason Caribbean consumers switch operators** ("churn") across virtually every English-speaking market, ahead of network quality and customer service. Prepaid is the structural norm, so every megabyte is experienced as spending from a budget. When data is metered and price-sensitive, an app that is fat with uncompressed photos and auto-playing video does not merely load slowly — it *costs people money they can't afford to spend on it*. Data-light design is therefore a feature of respect for the user, not a compromise.

## Devices: Entry-Level and Older

What is in the user's hand matters as much as the network. Across the region smartphones account for roughly **45% (Haiti) to 82% (Jamaica)** of phones — and the *capability* of those smartphones varies widely. A great many are **entry-level Android devices**: modest storage and RAM, older operating systems, simpler screens. Where smartphone rates are lowest, **feature phones** persist, unable to run native apps at all and limited to voice and **USSD** (text menus).

The consequence for design: "make it run on a 3-year-old budget Android with weak signal" is not the developer's excuse — it is the market. And where even that is too much, services reach users the way **mCash** does in Jamaica: via **USSD on a feature phone with no data plan and no app**, through an agent network. Designing to the *device floor*, not the flagship, is what makes a service reach the whole community rather than the comfortable top.

## Power Reliability: The Forgotten Constraint

This one slips past most designers who have never sat through a Caribbean outage. Island grids can be **fragile**, and **hurricanes** put networks and electricity down together. After a severe storm, an app that depends on always-on power, always-on data and a cloud server is useless to the very people who need it most.

Power reliability makes **offline and low-power design** a resilience feature rather than an optional extra. An app that keeps essential functions working offline, uses little battery, and tolerates interruptions is not merely nicer — after a disaster it may be the only thing that works. This is why later lessons pair "resilient design" with the region's real disaster exposure rather than treating it as a safety footnote.

## The Constraint Floor: Design for the Worst Realistic Combination

Here is the crux. These constraints do not strike in isolation — they **compound**. A single user may simultaneously have:

- limited bandwidth,
- expensive prepaid data,
- a low-end device,
- intermittent power,
- and an environment demanding quick, light access.

So the design rule is to build for the **worst realistic combination**, not the best case. "Works on the flagship with unlimited data and a full signal" is not a design target; "works on a budget Android with a weak signal, near the end of a data bundle, possibly on low battery" is. Products that internalise this — the wallets, the USSD payment services, the resilience-minded utilities — are precisely the ones that actually succeed in the region.

## Common Misconceptions

### "Everyone has a fast, modern phone and unlimited data"
Devices are often entry-level and data is metered and price-sensitive. Light, efficient design is the requirement.

### "If there's a signal, the app will just work"
Coverage is not usability. Bandwidth, data cost, device and power all degrade real performance even under a signal.

### "5G will fix the bandwidth problem soon"
5G is only ~10% of Caribbean connections and much of the region won't see it for years. Low-bandwidth design is needed now.

### "Power outages are a rare edge case"
Grid fragility and storms are recurring in the Caribbean, making offline and low-power design central, not optional.

### "Coverage everywhere means affordability everywhere"
Data *price*, not just availability, is the binding constraint — hence the premium on data-light design.

## Summary

Four infrastructure constraints shape every Caribbean app: limited, costly bandwidth; price-sensitive prepaid data; entry-level and feature-phone devices; and intermittent power. They are the default, not the exception, and they compound — so the rule is to design for the worst realistic combination, not the flagship. The evidence is everywhere: data price (not network quality) is the top churn driver; ~46% lack 5G and only ~1.9m households have FTTH; feature-phone services like USSD payments exist precisely to reach the device floor; and offline/low-power design is a disaster-resilience feature. The designer who treats these four walls as the brief — rather than as annoyances to ignore — builds apps that are lighter, more trusted and far more widely used across the Caribbean.
