---
title: "Content & Infrastructure Players"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "The Mobile Ecosystem & Operating Systems"
topicId: "the-mobile-ecosystem-operating-systems"
order: 2
---
# Content & Infrastructure Players

## Two Teams, One Ecosystem

Think of the mobile ecosystem as splitting into two broad teams that feed each other. On one side are **content and app providers** — the people who give you something worth looking at. On the other are **infrastructure companies** — the operations that carry, store, and deliver that content to your screen. Neither team succeeds without the other.

The content team turns connectivity into value: streaming, social video, news, gaming — typically delivered as apps. The infrastructure team provides the physical "jolt" behind it all: data centres, cloud services, undersea and terrestrial cables, and content delivery networks (CDNs).

Underneath both sits the **network operator (MNO)** — the carrier like Digicel or Flow that owns the radio network and much of the backhaul connecting you, the end user, to the wider internet.

The layers are **mutually dependent**. Content players need capacity and bandwidth to reach users. Infrastructure and network players need content and apps to create the data demand that keeps them in business.

## The Physical Internet Is Not a Cloud

Here's the first thing to unlearn: the "internet" is not an abstract cloud with no physical limits. It runs on **undersea cables, data centres, and backhaul links that are finite, fragile, and shaped by geography**. Every video you stream has to physically travel a path to reach you.

Follow a video request from a user:

1. Your **device** sends a request.
2. The signal goes to a **local cell tower**, then along **backhaul** (the wired links connecting towers to the network core).
3. It passes through the **operator's core network**, out to the **national and international backbone**.
4. It crosses **undersea cables** to where the content is actually hosted.
5. It reaches a **CDN or cloud server** hosting the content, which sends it back.

**Caching at CDN edges shortens that path.** A CDN (Content Delivery Network) is a distributed network of servers that keep copies of content close to users, so a popular video doesn't have to cross the Atlantic every single time someone watches it. That's why a well-cached video loads faster than a niche one yanked from a faraway server.

| Infrastructure layer | What it is | Why it matters |
|----------------------|-----------|----------------|
| Data centres / cloud | Buildings of servers that host apps and store data | Run the services; their location determines latency |
| Undersea (submarine) cables | Fibre-optic cables laid on the seabed connecting continents | The backbone of all international traffic — finite and physical |
| CDNs | Distributed cached servers close to users | Cut latency and bandwidth bottlenecks |
| Backhaul | Wired links from cell sites to the network core | The quiet bottleneck when a tower is fast but the pipe is small |
| MNO / network operator | The carrier owning the radio network and much of the backhaul | Ties the end user to the whole system |

## Why You Experience Buffering

When a whole island streams at once and your video starts buffering, you are not imagining it — you are touching a real limitation. There are two different bottlenecks, and they are easy to confuse:

- **Radio spectrum** is how many signals can travel over the air at the tower.
- **Backhaul and international capacity** is how much data the tower can push out to the rest of the world.

Adding more radio spectrum does **not** fix a cable bottleneck. If the pipe from the island to the international backbone is full, a faster local tower just queues more traffic at the same exit. This is why "fast towers but slow internet" is such a common Caribbean complaint — the physical international links are often the constraint.

A student posting an Instagram Reel in Port of Spain is uploading to servers often hosted in US or EU cloud regions, traversing that finite subsea capacity. A soca playlist on a streaming service is pulled across a CDN edge and an undersea cable and a carrier network all at once.

## The Caribbean's Infrastructure Story

Small-island markets rely heavily on **imported capacity** — subsea cables and cloud hosting that mostly sit abroad. That makes the region's digital economy dependent on outside infrastructure, with real cost and latency consequences. But the region is also building more.

| Development | What happened | Significance |
|-------------|---------------|--------------|
| **Deep Blue One** (Digicel) | International subsea cable activated ~2024 | Boosted connectivity across the Caribbean, French Guiana, Suriname, Guyana, Trinidad and Tobago |
| **ENet–Bartica cable (Guyana)** | First direct domestic subsea fibre cable (2025) | Opened gigabit + 5G in hinterland areas after liberalisation |
| **Cerebras data centre (Guyana)** | MoU signed Nov 2025 for a ~100 MW facility at Wales | Aims to become the region's first large data centre, tied to a gas-to-energy plant |
| **Brava + Cloud Carib** | Subsea/fibre + sovereign cloud partnership | Hosts data regionally across seven data centres (Bahamas, Barbados, Jamaica, and more) — keeping Caribbean data in the Caribbean |

Guyana's moves are a clean case of **policy enabling infrastructure**. Since liberalising its telecom sector in 2020, new operators like ENet have entered, and the government has pursued a regional-scale data centre estimated to cost US$2–3 billion.

**Satellite is adding an alternative non-cable path.** In The Bahamas, URCA has licensed satellite operators including **Starlink, Viasat, and SES** for fixed satellite services and is building a framework for LEO (low-Earth-orbit) satellite services. In Jamaica, after Hurricane Melissa in 2025, Starlink-style Direct-to-Cell satellite links were used for emergency SMS. A rain of undersea cables is not the only way to reach the world.

## Content Giants vs. Network Operators — Not the Same Business

It is a mistake to think content giants and network operators are the same kind of company. They hold **different assets, different incentives, and sometimes competing interests**.

- Content platforms (Netflix, YouTube, WhatsApp/Meta) make money from subscriptions and advertising — their asset is attention and data.
- Network operators (Digicel, Flow) make money from selling connectivity — their asset is the physical network.

This friction is live in the region. In 2025, CARICOM heads began reviewing **platform economics** — how much revenue global digital platforms earn from Caribbean users and how little they contribute to the regional networks those users rely on. It's an open, unresolved debate about who should "pay their share" for the infrastructure underneath everyone.

## A Regional Creator's Reality

A local content creator monetising on YouTube depends on global CDNs to deliver their videos and on a Caribbean carrier to connect their audience. When a hurricane cuts power or subsea links, that creator's output — and income — stops too. A soca artist's big release crashing during a storm is a direct demonstration of how fragile the "abstract cloud" really is.

Infrastructure investment is also forecast strong globally: mobile technologies generated about **US$7.6 trillion (6.4% of global GDP) in 2025**, with GSMA forecasting growth toward ~$11.3 trillion by 2030 alongside 5G and AI adoption.

## Common Misconceptions

### "The internet is an abstract cloud with no limits"
It runs on undersea cables, data centres, and backhaul links that are finite, fragile, and shaped by geography.

### "Content giants and network operators are the same business"
They hold different assets and incentives, and often compete over revenue — as the CARICOM platform-economics debate shows.

### "More spectrum or coverage alone solves slow service"
Congestion is often backhaul, international capacity, or data-centre-side. Adding radio spectrum doesn't fix a cable bottleneck.

### "Caribbean traffic is fully regional"
Much content and cloud capacity sits abroad, so costs and latency are tied to expensive international subsea links.

## Summary

Content and app providers supply what you consume, while infrastructure companies — data centres, cloud, undersea cables, CDNs, and backhaul — carry, store, and deliver it. Beneath them all sit network operators connecting you to the wider internet. The "internet" is physical and fragile, and most Caribbean traffic crosses finite international subsea links to reach servers hosted abroad. The region is responding by building its own capacity — new cables like Deep Blue One, Guyana's data-centre and cable ambitions, sovereign clouds, and licensed satellite broadband — while a live debate continues over how much global platforms should contribute to the networks that make them possible.
