---
title: "App Distribution & Revenue Models"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Mobile Ecosystem, Design & App Development"
topicId: "mobile-ecosystem-design-app-development"
order: 6
---
# Getting Your App to Users: Distribution and Revenue in the Caribbean

---

## You Built It — Now What?

You have spent weeks conceptualising, designing, and building a mobile app. It works. It solves a real problem. But an app sitting on your laptop is not an app — it is a project. The moment you decide to put it in the hands of users, you enter the world of distribution and revenue: how people find your app, how they install it, and how you sustain its development without going broke.

For Caribbean developers, these questions have answers that differ significantly from what you might read in a Silicon Valley blog post. The app stores have their own rules. The Caribbean market has its own constraints. And the revenue models that work in New York may not work in Port of Spain or Kingston. Understanding these realities is not a limitation — it is a competitive advantage.

---

## The App Stores: Your Primary Distribution Channels

### Google Play Store

Google Play is the primary distribution channel for Android apps and is accessible from virtually every Caribbean market.

**Cost to register**: A one-time payment of $25 USD. No annual renewal. You can publish unlimited apps under one account.

**Service fees**: Google takes 15% on the first $1 million USD in annual earnings, then 30% above that. Subscriptions are charged at a flat 15% rate.

**Testing requirement (2026)**: New personal developer accounts must recruit at least 12 testers for a 14-day closed test before gaining production access. This adds two to four weeks to your first launch timeline.

**Review process**: New submissions typically take three to seven days. Updates to established accounts often publish within hours. Google blocked over 1.75 million apps in 2025 for policy violations — the review is real and enforced.

### Apple App Store

The App Store has a higher barrier to entry but reaches a high-value audience.

**Cost to register**: $99 USD per year for the Apple Developer Program. If your membership lapses, your apps are pulled from the store.

**Commission**: The standard rate is 30% on digital goods and services. The Small Business Program reduces this to 15% for developers earning under $1 million USD annually. Subscriptions after the first year also qualify for 15%.

**Review process**: New submissions typically take two to five days, with spikes of seven or more days during peak periods. Apple's review is more rigorous than Google's.

**Common rejection reasons**: App crashes on launch, incomplete metadata, insufficient functionality (Apple's Guideline 4.2), health-related features, and children's content all trigger extended review cycles.

**Platform requirements (2026)**: All apps must be built with Xcode 26 and target iOS 26 SDK. Privacy manifest declarations are required for all APIs.

| Factor | Google Play | Apple App Store |
|---|---|---|
| Registration cost | $25 one-time | $99/year |
| Commission | 15% on first $1M; 30% above | 15% (Small Business); 30% standard |
| Review time | 3–7 days (new); hours (updates) | 2–5 days (new); 24–72 hours (updates) |
| Testing requirement | 12 testers, 14 days (new accounts) | None (but rigorous review) |
| Policy enforcement | 1.75M+ apps blocked in 2025 | Strict; health and children's content flagged |

---

## Direct Distribution: Going Around the Stores

### APK Sharing on Android

Android apps can be distributed as APK files outside the Play Store — a process called sideloading. Users enable "Install from unknown sources" in their settings and install the file directly.

This is particularly relevant in the Caribbean. Where Play Store monetisation options may be limited, small user bases make store review overhead disproportionate, or unreliable internet makes large downloads impractical, direct APK distribution offers a practical alternative.

However, direct distribution comes with trade-offs: no automatic updates, no store-level security vetting, potential for malware distribution if files are shared carelessly, no built-in payment processing, and limited discoverability.

### Enterprise Distribution

Apple's Enterprise Developer Program ($299 per year) allows internal app distribution without App Store review. It is designed for in-house employee apps, not public distribution, but organisations and schools sometimes use it to push apps to managed devices.

### Progressive Web Apps as a Distribution Channel

Progressive Web Apps (PWAs) are not distributed through app stores at all. They are distributed via URL — no developer registration fees, no store review process, no platform commissions on revenue.

A PWA is a web application that behaves like a native app: it can be installed on a home screen, works offline, supports push notifications, and feels like a proper app rather than a website. PWAs are built with HTML, CSS, and JavaScript — the same technologies used for websites.

| Distribution Method | Cost | Review Required | Updates | Discoverability |
|---|---|---|---|---|
| Google Play | $25 one-time | Yes | Automatic | High (store search) |
| Apple App Store | $99/year | Yes (rigorous) | Automatic | High (store search) |
| Direct APK | Free | No | Manual | Low |
| PWA | Free | No | Automatic (web) | Low (URL/share) |

For Caribbean developers, PWAs and direct APK distribution can be more practical than app store publishing for hyper-local apps with small user bases.

---

## Revenue Models: How Apps Make Money

Choosing the right revenue model is one of the most important decisions you will make. It affects your design, your user experience, and your long-term sustainability.

### Freemium

The freemium model offers a basic version of the app for free and charges for premium features. The free tier acts as an acquisition funnel — its job is to get users in the door, not to generate revenue directly.

**Conversion reality**: Industry data shows freemium apps convert roughly 2–5% of free users to paid. Hard paywalls — where users must pay to use the app at all — convert at approximately 10%, five times higher, but generate less total volume because fewer people try the app in the first place.

**When it works**: Freemium works best when network effects increase value with more users, the marginal cost of serving free users is near zero, and the free version has a strong hook that makes users want more.

**Common pitfall**: Giving away too much for free removes the incentive to upgrade. The free tier must be useful but incomplete — it should make users want the premium version, not feel satisfied without it.

Spotify is the classic example: free with ads, premium removes ads and adds offline playback. Dropbox offers free storage with paid upgrades. Candy Crush Saga lets you play for free but charges for lives and boosters.

### In-App Purchases

In-app purchases come in three types: consumable (coins, gems, lives that are used up), non-consumable (permanent features or ad removal), and subscriptions (recurring access to content or features).

Both Apple and Google process in-app payments and take 15–30% commission. Alternative billing is increasingly permitted in certain regions, but this remains limited in the Caribbean.

In-app purchases are engagement-driven. Apps like mobile games generate revenue through ongoing engagement rather than one-time purchases. Daily challenges, seasonal events, and social features keep users active and spending.

### Subscriptions

Subscriptions provide predictable monthly or annual income. Data shows that 82% of non-gaming app revenue from subscription-enabled apps comes from the subscription itself — not from in-app purchases or advertising.

**Trial periods**: 55% of three-day trial cancellations happen on Day 0. This means the onboarding experience and first-session value delivery are critical. If a user does not see value immediately, they will cancel before the trial ends.

**Churn management**: Reducing cancellation rates through engagement, feature updates, and proactive communication is as important as acquiring new subscribers. Retaining a subscriber is cheaper than finding a new one.

Subscriptions are not inherently greedy — they fund ongoing development, server costs, and updates. They align developer and user interests over time: the developer earns revenue for continuing to improve the app, and the user continues to receive value.

### Advertising

In-app advertising generates revenue through impressions (CPM — cost per thousand views) or clicks (CPC — cost per click). Major ad networks include Google AdMob, Facebook Audience Network, and Unity Ads.

The user experience trade-off is real. Aggressive advertising — full-screen interstitials, auto-playing video ads — drives short-term revenue but degrades retention. Users uninstall apps that feel like ad delivery systems. Rewarded video, where the user voluntarily watches an ad in exchange for an in-app benefit, performs better because the user controls the experience.

Ad revenue per user is generally lower than subscription or in-app purchase revenue. It succeeds with apps that have very large user bases.

### Paid Apps

The user pays once to download the app. Simple model, but it creates a high barrier to entry — users must decide to pay before experiencing the app. In an era where consumers expect free initial access, paid app downloads have declined significantly.

When paid works: niche professional tools, premium games with established brands, and apps targeting enterprise budgets can sustain paid models. For most Caribbean developers starting out, this is not the recommended path.

| Revenue Model | Barrier to Entry | Revenue Predictability | Best For |
|---|---|---|---|
| Freemium | None (free to download) | Low–Medium (depends on conversion) | Apps with network effects, large potential audiences |
| In-App Purchases | None | Medium–High (engagement-dependent) | Games, engagement-driven apps |
| Subscriptions | None | High (recurring revenue) | Content apps, tools with ongoing value |
| Advertising | None | Low (depends on volume) | Apps with very large user bases |
| Paid | High (upfront cost) | Low (declining model) | Niche tools, established brands |

### Open Source and Donation Models

Some apps are open source — their source code is publicly available. Revenue may come from donations (GitHub Sponsors, Patreon, Ko-fi), premium support, hosting services, or enterprise features.

Crowdfunding platforms like Kickstarter or GoFundMe can fund initial development, though success depends on a compelling pitch and community engagement.

Some apps are funded by grants, NGOs, or government programmes rather than user revenue. This is common in education, health, and disaster response — areas particularly relevant in the Caribbean.

### Civic and Public Good Apps

Government-funded apps for disaster preparedness, public health information, and civic services often receive government or international development funding. Organisations like UNICEF, PAHO, and regional Caribbean bodies fund mobile solutions for social impact.

The key challenge for public good apps is long-term sustainability. Initial development grants fund the build, but maintenance and updates require ongoing funding that is not always guaranteed.

---

## Caribbean Market Realities

Understanding the Caribbean market is essential for choosing the right distribution and revenue strategy.

### Small Market Sizes

Individual Caribbean territories have small populations, ranging from approximately 100,000 to 3 million people, making app monetization through any single territory challenging. Regional approaches that serve multiple territories simultaneously are more viable.

### Payment Infrastructure

Credit card penetration varies significantly across the Caribbean. Mobile money and carrier billing may be more accessible than credit card-based in-app purchases. If your revenue model depends on users entering credit card details, you may be excluding a significant portion of your potential audience.

### Data Costs

Users sensitive to data consumption may resist apps with large downloads or heavy ongoing data use. PWAs and optimised native apps perform better in this environment. A 50MB app download is a significant commitment for someone on a prepaid data plan.

### Tourism Overlap

Apps that serve both residents and visitors — transit apps, dining guides, event finders — can leverage tourism revenue to subsidise local user acquisition. A tourist is more likely to pay for a premium feature than a local resident, and the dual audience expands your market.

### Regional Distribution

Direct APK distribution or PWA channels may be more practical than app store publishing for hyper-local Caribbean apps. The app store review process was designed for global scale — for a community app serving a specific neighbourhood or island, the overhead may not be justified.

---

## Real-World Analogy: The Roadside Vendor and the Shopping Mall

Think of app distribution like selling food. You can set up a roadside stand (direct APK or PWA) — low cost, low overhead, but you depend on people walking past. Or you can rent a stall in a shopping mall (app store) — higher cost, more foot traffic, but the mall takes a percentage of your sales and has rules about what you can sell.

Neither approach is wrong. The roadside vendor serving a specific neighbourhood does not need a shopping mall. The vendor aiming for regional recognition benefits from the mall's traffic. Your distribution strategy should match your audience and your resources.

---

## Common Misconceptions

**"Free apps make no money."**
Freemium and advertising models can generate substantial revenue. Most top-grossing apps are free to download. The money comes from what happens after the download.

**"App stores take 30% of everything."**
Both platforms offer reduced rates of 15% for small developers and subscriptions. The 30% rate applies only above certain thresholds. Understanding the fee structure helps you plan realistically.

**"You need to publish on both stores to succeed."**
Many successful Caribbean apps use single-platform or PWA distribution based on audience behaviour. If 90% of your users are on Android, publishing on iOS may not be worth the cost.

**"Subscriptions are greedy."**
Subscriptions fund ongoing development, server costs, and updates. They align developer and user interests over time. A one-time purchase gives the developer no incentive to keep improving the app.

**"Open source means no revenue."**
Many open-source projects sustain themselves through donations, support contracts, and premium features. Open source is a distribution strategy, not a business model.

---

## Key Takeaways

1. Google Play costs $25 one-time; Apple costs $99 per year. Both take 15–30% commission on revenue.
2. Direct APK distribution and PWAs offer alternatives to app stores, particularly for hyper-local Caribbean apps.
3. The freemium model converts 2–5% of users; hard paywalls convert 10% but attract fewer users overall.
4. Subscriptions provide the most predictable revenue and account for 82% of non-gaming subscription app revenue.
5. Caribbean market constraints — small populations, limited credit card penetration, high data costs — require context-specific distribution and revenue strategies.
6. Apps serving both locals and tourists can leverage tourism revenue to sustain local user acquisition.
7. Public good apps funded by grants face a long-term sustainability challenge that must be planned for from the start.

---

## Sources

1. Pegotec — iOS App Store vs Google Play 2026 Fee & Approval Guide
2. Google Play Console Help — Understanding Service Fees
3. Iconikai — App Publishing Cost 2026
4. Apple Daily — App Publishing Cost Guide (2026)
5. Chargebee — The Pros and Cons of Freemium (2024)
6. ContentGrip — Subscription App Growth Playbook (2026)
7. First Round Review — Freemium Glossary
8. Business of Apps — App Subscriptions Guide
9. CAPE Digital Media Syllabus — Items 7(a), 7(b), 8(a), 8(b), 8(c)
