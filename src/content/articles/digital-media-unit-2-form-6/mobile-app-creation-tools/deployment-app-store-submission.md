---
title: "Deployment & App Store Submission"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Mobile App Creation Tools"
topicId: "mobile-app-creation-tools"
order: 8
---
# Shipping the App: App Store and Google Play Submissions

## Shipping Is a Submission, Not a Hand-In

Getting an app to users is not like handing in homework — once it is "up," nothing is done. Both stores enforce guidelines, metadata accuracy and privacy declarations before and after an app goes live, and a rejection means fixing and resubmitting, not a dead end. The testing and QA work of the previous lesson is one gate; this store review is the second, and both must be planned into the release, not bolted on afterwards.

## Two Different Review Machines

Apple reviews by hand: a human reads your app against the App Store Review Guidelines and cites exact rule numbers. Google Play is automation-first: it enforces policy systemically, checks your binary and declares, and does a great deal of its enforcement weeks after publication. Apple reviewed **9.1 million submissions in 2025 and rejected more than two million** — over one in five on the first pass, with crashes and privacy the top causes. Google's pipeline is less dramatic and more automated, but no less real. Same goal, different machinery.

## The Listing Is Checkable, Not Decorative

Both stores demand a complete listing: name, subtitle, short and long description, keywords, screenshots, icon, category and a privacy policy — collectively **metadata**, the store listing that reviewers and users both read. Two rules bite hardest. First, screenshots must show the **actual submitted build**: Apple's screenshot size slots for 2026 submissions include 1320×2868 for the iPhone 6.9-inch and 2064×2752 for the 13-inch iPad, and Play rejects screenshots that do not match the app. Second, Rule 2.3 bans keyword-stuffing in names and subtitles and competitor names in descriptions, and also rejects "wrapper" apps (Rule 4.2) that add nothing over a website. A missing or broken demo/test account — the working login a reviewer uses to exercise your app — is a top rejection reason all on its own.

## Privacy Is Now the #2 Rejection Cause

Privacy is the second most common rejection trigger across platforms. Apple's **App Privacy** "nutrition labels" and Google Play's **Data Safety form** are mandatory self-declarations of what an app collects and why — and the honest answer can be "no data." A zero-data app still completes both, and "no data" is a perfectly valid response. Google's Data Safety form declares against **14 data categories** and is cross-checked against your binary, your permissions and your privacy policy — it is the single most common new-app rejection cause on Play, and a mismatch between the form and the app will be found.

## The Real Prices of Publishing

Publishing is not free once the code is written. **Apple's Developer Program costs US$99 per year; Google Play is a US$25 one-time fee.** Launching on both stores costs at least **US$124 in year one and US$99 per year after**, payable even for apps that are free and collect no data. Coming on top of Google's 12-tester closed test before production, this is why many Caribbean indies launch on Play first and treat the Apple side as a later, budgeted step.

Digital goods have their own rule: anything sold inside an app must use the store's own billing — **Apple Guideline 3.1.1 (In-App Purchase)** and Google Play Billing — with commissions around **15–30%** depending on program and revenue tier, and Apple's App Tracking Transparency (ATT) governing tracking. IAP rules are not a big-company concern; a broken or missing IAP integration is a top-five rejection category for indies too.

## Apple's Top Rejection Triggers

The 2025 numbers give the checklist teeth. Apple reviewed 9.1 million submissions and rejected more than two million; across 2026 sources, the recurring reasons line up in a recognisable pattern:

- **Crashes and broken features** (Guideline 2.1) — roughly 18–20%+ of rejections; the app crashes, not the reviewer.
- **Privacy misdeclaration** (Guideline 5.1) — roughly 15–18%; the label says something other than what the binary does.
- **Incomplete apps or placeholders** (Guideline 2.1) — a skeleton or a "coming soon" screen is a rejection.
- **Misleading metadata** (Guideline 2.3) — screenshots, keywords or descriptions that do not match the build.
- **Missing or broken demo accounts** — a reviewer who cannot get in cannot review, so they cannot approve.

Every one of these is a fix-and-resubmit loop, not a dead end — and each is preventable by the same discipline a class prototype can practise: does it install, does it run, does the form match the app, is the login real.

## Fee Maths for the Region

Publishing economics deserve the calculator. On Google Play, a US$25 one-time registration gets a class app across the 14-day closed-test gate and into production — receivable within a small school's tech budget, and why many Caribbean indies launch on Play first. On Apple, the US$99/year Developer Program plus a Mac and Xcode makes iOS proportional, and it is exactly why the notes pair the two sides: Play is the affordable first step, Apple is the budgeted later one. Across both stores, year one costs at least US$124 and every year after US$99 — figures to weigh against asking a school for anything more. The app itself being free and collecting no data does not cancel these fees; the account is the price of the door.

## The Calendar: Review Cycles and Timelines

Review times are short but variable. Google Play runs a typical **24–48 hours**, stretching to about **7 days** for first submissions or sensitive permissions; the Data Safety form can take **1–2 weeks on first review** but re-reviews faster. Apple's process is measured in hours to a few days, longer the first time or with sensitive permissions. This is release buffer: the listing and privacy work must be done well before submission, not the night before. A **staged rollout** on Play — releasing to a small percentage of users and increasing it gradually — is standard practice precisely because post-publish policy enforcement is real.

## A Worked Submission Walkthrough

Take a finished, tested class app to Play: (1) pay the **US$25** one-time registration; (2) complete the **12-tester closed test** and run it for the required 14 days while (3) filling the **Data Safety form** honestly against the actual binary; (4) submit the listing — name, subtitle, description, keywords, screenshots rendered from the real build and an uploaded APK **targeting API 36** (the requirement for new apps and updates from 31 Aug 2026); (5) submit for review and absorb the 24–48 hour typical window; (6) launch, then watch the first user reports. Every step before submission is where the class's prototype (the next lesson's workshop build) either earns its honesty or loses it — a rejection role-play on a real reason (crash, broken demo account, metadata mismatch) is the fastest way to feel how a rejection is a loop, not a wall.

## Common Misconceptions

### "Once the app is up, it's done"
Reviews iterate, rejections mean fixing and resubmitting, and Google can enforce policies weeks after publication.

### "Google reviews the way Apple does"
Apple is human review citing guideline numbers; Google is automation-first, systemic and heavy on post-publish enforcement.

### "Privacy declarations only matter if you track users"
Even a zero-data app completes Apple's privacy labels and Play's Data Safety form — both mandatory, and "no data" is a valid honest answer.

### "Screenshots just make the listing prettier"
Screenshots are checkable metadata. Showing a feature absent from the build is a rejection trigger (Rule 2.3).

### "Publishing is free once the app is written"
Public distribution requires Apple's US$99/year or Google's US$25 one-time account — payable even for free, no-data apps.

### "IAP rules are a big-company concern"
Any digital sale or subscription must use the store's billing — a top-five rejection category for indies too.

## Key Terms

| Term | Definition |
|------|-----------|
| App Store review | Apple's human process of checking a build against the App Store Review Guidelines before publication |
| Play Console policy engine | Google's largely automated enforcement of Play policies (target API level, Data Safety form, permissions) |
| Metadata | The store listing — name, subtitle, description, keywords, screenshots, icon, category |
| App Privacy label ("nutrition label") | Apple's mandatory self-declaration of what data an app collects and why |
| Data Safety form | Google's required 14-category declaration of an app's data collection, cross-checked against the binary and privacy policy |
| In-App Purchase (IAP) | The store's billing service required for selling digital goods/subscriptions inside an app |
| Demo/test account | A working login a reviewer can use to exercise your app — a missing one is a top rejection reason |
| Staged rollout | Releasing to a small user percentage first and increasing it gradually — standard practice on Google Play |

## Summary

Shipping is a submission with a review attached: Apple reviews by hand against cited guidelines, rejecting over one in five first-time submissions (crashes and privacy the top causes), while Google Play enforces policy by automation, including well after publication. Both stores demand complete, honest metadata — screenshots that match the built app, no keyword-stuffed or placeholder listings, working demo accounts — and privacy declarations that must match what the app genuinely does. Publishing carries real fees (US$99/year Apple, US$25 one-time Google, US$124 for year one across both), and digital goods must use store billing. Reviews run from hours to about a week, with Google's Data Safety form taking up to two on first pass — so plan the listing and privacy work as release buffer, and treat rejection as a fix-and-resubmit loop.
