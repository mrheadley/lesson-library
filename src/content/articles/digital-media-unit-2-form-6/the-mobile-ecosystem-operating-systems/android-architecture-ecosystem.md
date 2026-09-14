---
title: "Android: Architecture & Ecosystem"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "The Mobile Ecosystem & Operating Systems"
topicId: "the-mobile-ecosystem-operating-systems"
order: 5
---
# Android: Architecture and Ecosystem

## The Open-Source House That Google Doesn't Quite Own

Android is the most-used mobile operating system on Earth, yet nobody "owns" its core code the way Apple owns iOS. The operating system lives in the **Android Open Source Project (AOSP)** — an open-source codebase licensed under **Apache 2.0** that anyone may legally use, modify, and redistribute. It sits on top of the **Linux kernel**, the same engine that powers everything from servers to supercomputers, which handles processes, memory, and hardware drivers underneath the friendly screen you interact with.

That openness is the whole story of Android. It is why a Samsung, a Xiaomi, and a US$80 generic phone can all be "Android" while looking and behaving completely differently. It is also why the platform dominates price-sensitive markets — including the Caribbean, where roughly 82–86% of mobile devices run Android.

But open does not mean everyone is equal. Android has two layers:

- **The open layer**: AOSP — the core OS, free for anyone to build on.
- **The Google layer**: Play Store, Google apps, Play Protect, and billing — Google's proprietary services that devices opt into.

This split is the key insight of the whole ecosystem. The OS is open, but Google still controls the default app store, which is where nearly all the money and most of the control flows. Amazon's Fire tablets illustrate the point perfectly: they run AOSP with no Google apps at all.

## The Open Handset Alliance

Android did not spring from a single lab. It was founded in **2007** by the **Open Handset Alliance (OHA)** — a consortium of hardware makers, software companies, and carriers (Samsung, HTC, Qualcomm, and others) led by Google. The first commercial phone, the HTC Dream (sold as the T-Mobile G1), shipped in 2008, about a year after the alliance was announced.

The alliance's promise was a counterweight to Apple's newly released iPhone: an open platform where any manufacturer could build phones, any carrier could sell them, and no single company could (in principle) shut the door. In practice Google leads the alliance and develops most of the platform in public, but the consortium's existence explains why Android is multi-vendor in a way iOS will never be.

## Fragmentation: The Price of Openness

Openness means choice — and choice means **fragmentation**. There is no one "Android." There is:

- A **version gamut**: as of late 2025, the most-used version was Android 15 at about 19% of devices, with Android 14, 13, 11, and 12 each above 11% — and Android 16 at just 7.5% months after its June 2025 release.
- **OEM skins**: Samsung layers One UI over AOSP, Xiaomi ships HyperOS, and every vendor tweaks the look, settings, and update schedule.
- **Hardware sprawl**: thousands of screen sizes, chips, and sensors a developer must think about.

The same app can therefore install, render, and behave differently on a friend's new Pixel than on an older budget Samsung running Android 12. A class app-testing project is genuinely a mini-fragmentation exercise: you build once and must verify it on the old Samsung, the Xiaomi, and the new flagship, because each one is a slightly different platform.

### Why Updates Lag

Android 16 reached only 7.5% of devices months after launch, while iOS 26 was on 79% of iPhones in about nine months. The cause is structural: Google writes the software, but the manufacturers build the phones and the carriers deliver updates — and neither is paid to update old hardware. On a US$150 budget phone, updates may slow to a trickle or stop entirely, which is a real security and feature gap for low-cost Android owners.

## Google Play, APKs, and Sideloading

Apps reach Android users in three ways:

- **Google Play** — the dominant store. It launched in 2008 as "Android Market" and now serves more than 2.5 billion monthly users across 190+ countries with over a million active developers.
- **APK / AAB** — the file formats of Android apps. An **APK** (Android Package) is a single compressed installable file. Modern Google Play publishing now requires **AAB** (Android App Bundle): developers upload the bundle and Play generates a device-optimised APK for each phone.
- **Sideloading** — installing an APK from outside an approved store: a website, a file share, an alternative marketplace like the Amazon Appstore or Samsung's Galaxy Store.

Sideloading is Android's double-edged sword. It gives Caribbean users a way around blocked or unaffordable apps — a VPN, a regional streaming service — but it is exactly how adware sneaks onto phones. A student who downloads a "cracked" game APK from a random website may trigger Google Play Protect's malware scanner (which now checks more than 350 billion apps daily) but may also end up with adware that silently burns data bundles and sim credit. Freedom and risk are two sides of the same open coin.

## Where the Money Flows

App stores are toll booths. Consumers buy digital goods inside apps — subscriptions, coins in games, premium features — the store collects the payment, and the developer keeps the rest minus a commission.

- **Google Play**: developers pay a one-time US$25 registration fee (a genuinely Caribbean-friendy entry point for a school app club). The standard commission on digital goods is 30%, with reduced rates for subscriptions and small developers.
- **Samsung Galaxy Store**: preloaded on about 1.2 billion devices. Since May 2025 it pays developers 80/20 on apps and games and 85/15 on subscriptions — better terms than Google's standard split, so a developer can list the same app twice for a better deal on Galaxy users.
- **Consumer spend**: roughly US$49 billion on Google Play in 2025 (games took about two-thirds), with more than 100 billion downloads. Third-party trackers put the figure a few billion higher on different methodologies; the order of magnitude is what matters.

Money also flows through Google's security gate: in 2025 Google rejected over 1.75 million app submissions for policy violations and banned more than 80,000 developer accounts.

## What Openness Means in Practice

The practical consequence of the open model is a market shaped like a pyramid. At the top, premium Pixels and Galaxy flagships run the newest Android with timely updates. At the base, a huge volume of low-cost devices — the default market in Latin America and the Caribbean — runs older versions on slower timelines. Features arrive unevenly: Android 16's Live Updates (ride-share and food-delivery progress in notifications) showed up on Pixels first and reached other brands later.

For a Caribbean media student this is the strategic reality of the platform: if your audience is local, they mostly hold Android in their hands — so you build for the broad, old, varied Android base, keep installs small to respect data bundles, and monetise with ads rather than paid downloads. That is the open-source model in action: the most phones, the most freedom, the least consistency.

## Common Misconceptions

**"Android is owned by Google and Google can see everything you do."** The OS is open source under AOSP. Google's Play services are a separate, optional layer — Fire tablets prove a working Android can exist with no Google at all.

**"The Play Store is the only way to get Android apps."** Android permits sideloading and alternative stores. That freedom is also the security trade-off.

**"Android is one OS that everyone runs."** Fragmentation means many versions, skins, and devices — a fact visible in the very data, where Google's install-based counts and Statcounter's web-traffic-based counts disagree about which version is most popular.

**"APK is how apps are distributed on the modern Play Store."** Google Play now requires publishers to upload AAB; APK is the file that gets produced and sideloaded outside the store.

**"The Galaxy Store is irrelevant."** It ships on over a billion devices and now pays developers a better split than Google Play's standard terms.

## Summary

Android is an open-source operating system built on the Linux kernel and backed by the Open Handset Alliance, but "open" describes the OS, not the whole ecosystem — Google's proprietary services control the default app store, the money, and the policies. The trade-off for openness is fragmentation: many versions, skins, and price points, with slow and uneven updates. Distribution runs through Google Play (using the AAB format) while sideloading offers freedom with risk. For a developer — especially a Caribbean one targeting a low-cost Android market — Android means the widest audience, the cheapest entry fee, and the least consistent environment to build for.
