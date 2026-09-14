---
title: "Cross-Platform Frameworks"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Mobile App Creation Tools"
topicId: "mobile-app-creation-tools"
order: 6
---
# One Codebase, Two Stores: Flutter, React Native and .NET MAUI

## The Cross-Platform Idea

**Cross-platform development** turns the native lesson on its head: instead of writing an app twice, you write **one shared codebase** that compiles to both iOS and Android apps. The trade is deliberate — you give up a little platform purity to buy one team, one language and one maintenance line. Where native tools reach 100% of a platform's capability (the previous lesson), cross-platform frameworks trade that ceiling for economy of effort. You already met the SDK layer these frameworks sit on in "SDKs & Development Kits Overview"; everything those kits offer, a framework packages into a single toolchain.

A **framework** is a pre-built structure of libraries and tools for developing apps in a given language. The three names that dominate 2026 are each giant-backed: **Flutter** (Google, language **Dart**), **React Native** (Meta, JavaScript/TypeScript) and **.NET MAUI** (Microsoft, C#, the successor to the retired Xamarin). Each is a full ecosystem, not a single library — choose the ecosystem, not the logo.

## "Write Once, Run Anywhere" — Reads the Fine Print

The slogan **"write once, run anywhere"** is the shared-codebase promise, and the realistic translation is "write the core once, verify per platform." The shared part is genuine: logic, screens and flows are written once and reused. The per-platform part is also genuine: hardware, gestures, permissions, store rules and device quirks still differ, which is why even a one-codebase team does the per-platform testing and store work of the next two lessons. You ship one core; you test and submit two platforms.

## The Performance Debate Has Largely Settled

The old claim that cross-platform apps are second-class is mostly obsolete for everyday business apps. Flutter compiles Dart ahead-of-time for release and renders its own UI with the **Impeller** GPU engine (successor to the Skia GL path), which gives fast startups and pixel-consistent UI at the price of larger app binaries; React Native renders through real native components via its **native bridge**. Heavy graphics and ultra-native feel still favour native code, but the gap has closed elsewhere — Google Pay and eBay Motors run on Flutter, Instagram and Shopify on React Native. Speed is no longer the automatic reason to avoid these stacks.

## Hot Reload: The Classroom Showstopper

**Hot reload** updates a running app's code instantly without a full rebuild — change a colour or a label and watch the emulator reflect it in under five seconds. It is easily the most classroom-friendly feature of Flutter and React Native: iteration becomes visible in real time, which is exactly the fast-feedback loop a period-length build session needs. (Flutter runs Dart under a JIT for hot reload during development, and ahead-of-time compiled for fast release builds.)

## The Language Pool Is the Biggest Real Difference

Which framework you choose is also a teaching choice about which language students meet. The 2025 Stack Overflow survey is the reason React Native endures: roughly **66%** of developers already use JavaScript and **44.7%** use React, while Dart sits at about **5.9%**. The talent pool is the largest practical difference between frameworks — a school with JavaScript-habituated students gets a head start in React Native; a school learning fresh picks Dart without baggage. C#, for MAUI, lives mostly in Microsoft-centric environments.

## The Market Signals — and an Honest Conflict

Adoption figures genuinely conflict across sources, and the verdict should say so. The Stack Overflow 2024 survey credits Flutter with roughly **9.4%** of professional developers versus about **9%** for React Native and **3.4%** for .NET MAUI, but one analysis (fullscale.io) re-reads the same survey as **9.4% vs 8.4%** — and industry estimates elsewhere put Flutter as high as 46–52%. The honest reading: Flutter leads on momentum and UI consistency, React Native on the JavaScript talent pool, MAUI on enterprise fit. .NET MAUI remains a niche option at roughly 3–8% depending on the survey; its predecessor Xamarin ended mainstream support in May 2024, so learning Xamarin today is learning a retired tool.

There is also a serious fourth pathway: **Kotlin Multiplatform (KMP)**, Google-endorsed since 2024, shares business logic in Kotlin while the UI is written natively per platform — the fastest-growing alternative, with roughly 120% year-on-year enterprise growth cited. "Shared logic + native UI" is no longer a fringe idea.

## The Trade-Off at a Glance

| | Flutter | React Native | .NET MAUI |
|---|---|---|---|
| Backer / language | Google / Dart | Meta / JavaScript, TypeScript | Microsoft / C# |
| UI rendering | Own renderer (Impeller engine) | Native components via a bridge | Native controls |
| Developer share (SO 2024) | ~9.4% | ~9% | ~3.4% |
| Best fit | Strong docs, UI consistency, hot reload | Students who already code in JS | Microsoft-centric schools |
| Classroom cost | Free toolchain, lab-friendly | Free toolchain, lab-friendly | Free toolchain |

The column that should drive a school choice is the language, not the logo: the framework decides which language students meet, and the JavaScript pool (roughly two-thirds of developers) is why React Native endures nearly a decade on. No column wins on all rows — that is the trade-off, not an oversight.

## What the Class Should Taste First

For a first real-code cross-platform taste at 16–18, the notes' recommendation is **Flutter**: free toolchain, hot reload, strong documentation, and slides from one project onto Android and web (and iOS where a Mac exists) to make "one codebase" visible on lab machines. Choose **React Native** if students already know JavaScript, and **.NET MAUI** only in a Microsoft-centric school. Compare languages by doing, not by leaderboards: two students adding the same screen, one in Flutter and one in React Native, teaches more than any benchmark. Two more demos make the trade-offs concrete. The "same app, two builds" exercise compiles one Flutter project for Android and web in the same session, proving that one codebase really is one project. And an **app-size audit** — comparing the installed size of a small Flutter app against a small native app — produces concrete, often surprising evidence about the binary-size cost of a shared stack. A Caribbean reality check completes the decision: a school timetable app built once in Flutter running on both a budget Android phone and an iOS simulator is precisely the split-platform classroom of the local-infrastructure lesson.

## Common Misconceptions

### "One codebase means zero platform work"
You write one core, but store review, permissions, gestures and device quirks still differ — you ship one core and test two platforms.

### "Cross-platform apps are always slow and second-class"
The gap has mostly closed for everyday apps; Google Pay and Instagram run on these stacks.

### "Flutter is being abandoned"
Google's roadmap commits to 4+ stable releases a year, and non-Google contributors now outnumber Google employees on the project.

### "Xamarin is still fine to learn today"
Xamarin mainstream support ended May 2024. .NET MAUI is the successor, and only a fit for Microsoft-centric settings.

### "Just pick the framework that 'wins' the leaderboard"
Sources disagree wildly on rankings — Flutter is quoted anywhere from ~9% (Stack Overflow) to ~46–52% (industry estimates). Fit to students' languages and school tools matters more than any crown.

### "Write-once apps feel identical on both phones"
Platform-native UI still differs; good cross-platform teams verify the native feel device by device.

## Key Terms

| Term | Definition |
|------|-----------|
| Cross-platform development | Building one codebase that produces apps for iOS, Android (and often web/desktop) |
| Framework | A pre-built structure of libraries and tools for developing apps in a given language (Flutter, React Native, MAUI) |
| "Write once, run anywhere" | The shared-codebase slogan — realistically "write the core once, verify per platform" |
| Hot reload | Updating a running app's code instantly without a full rebuild — near-immediate visual feedback |
| Dart | Google's strongly-typed language behind Flutter (AOT-compiled for release, JIT for hot reload) |
| Native bridge / renderer | How a framework turns shared code into real platform UI (React Native bridges to native components; Flutter draws its own widgets) |
| Impeller | Flutter's modern GPU rendering engine, replacing the older Skia GL path for consistent, fast rendering |
| Kotlin Multiplatform (KMP) | Sharing business logic in Kotlin while writing the UI natively per platform |

## Summary

Cross-platform frameworks write one shared codebase that compiles to both iOS and Android, trading some platform purity for one team, one language and one maintenance line. The 2026 trio is Flutter (Dart), React Native (JavaScript/TypeScript) and .NET MAUI (C#, Xamarin's successor), plus a rising Kotlin Multiplatform alternative — and "which is best" genuinely conflicts across sources, so the real choice is which language and which school ecosystem fit. Hot reload makes Flutter and React Native brilliantly classroom-friendly, and the performance gap against native has largely closed for everyday apps. The realistic reading of "write once, run anywhere" is "write the core once, verify per platform" — a phrase that hands you directly to the testing and store work ahead.
