---
title: "Mobile UX Case Studies"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Mobile User Experience"
topicId: "mobile-user-experience"
order: 7
---
# Mobile UX Case Studies: Learning From Successes and Failures

## Why Case Studies Matter

Case studies turn the abstract principles of Lessons 118–123 into evidence. Analysing real apps — both well- and poorly-designed — shows *why* a principle matters and what happens when it is ignored. Instead of arguing in the abstract, a case study traces a specific screen or flow and accounts for whether it works, and why. This is how mobile UX stops being taste and becomes engineering.

The analytical skill here is **structured evaluation**. You review a screen or flow against concrete criteria — usability heuristics, thumb-zone and touch-target sizing, hierarchy, performance and accessibility — rather than giving a vague "I like it" opinion. The method most case studies use is **heuristic evaluation** (cf. Lesson 64): a structured expert review against Nielsen's 10 usability heuristics, with each violation assigned a severity rating and a traceable fix.

## What Well-Designed Mobile Experiences Share

Well-designed mobile experiences share a recognisable set of traits: a **clear single goal per screen**, **thumb-reachable primary actions**, **visible navigation**, **progressive disclosure** (revealing detail only as intention sharpens) and **fast, stable performance**. Two case studies illustrate the positive pattern well.

**Swiggy**, the Indian food-delivery app, is a masterclass in decision-focused UX. Visual hierarchy, progressive disclosure and recognition-over-recall guide a user smoothly from "I want food" to a placed order, with each screen presenting a single clear decision. By FY2026 it reported 25.2 million monthly transacting users — evidence that a clear, low-friction flow converts. **JIFF**, a six-vertical Malaysian commerce app, shows the power of a **design system**: by building shared checkout, payment and order components first, it keeps a complex multi-part product consistent. The principle "design the system before the screens" is what lets a huge product feel like one app rather than six stitched together.

A third, more unusual example is **Locket**, a photo-sharing widget app, which turns a hard **constraint into a strength**. Its entire product lives in a non-interactive iOS widget — a passive surface — and the team embraced it rather than fighting it. It even prefaces permission prompts with motivation screens explaining *why* access is wanted, instead of firing requests cold. This is **constraint-driven design**: bending the experience around a hard limitation (a locked surface) so the constraint reinforces, rather than diminishes, the product.

## The Recurring Patterns of Poor Design

Poorly designed experiences typically fail the same way: hidden or missing navigation, no visibility of system status, small or cramped touch targets, invisible or colour-only cues, and flows that force the user to remember instead of recognise. The telltale insight is that **small, traceable failures compound** — an app that is "not completely broken" but adds steps, hides controls or misleads can quietly destroy trust and completion, especially where stakes are high. These recurring failures are also the cheapest audit fodder: hidden navigation, missing system-status feedback, no filtering at scale, small or close touch targets, colour-only states and pricing or steps revealed too late form a compact checklist a student can run against almost any app in minutes.

The **Gumroad** iOS app is a classic cautionary audit. Analysis found navigation missing, the most-used library "buried" behind taps, no filtering at scale, and key actions invisible until searched for — direct violations of Nielsen's Recognition-over-Recall and Consistency heuristics. The redesign added a persistent tab bar and inline actions, fixing discoverability at the root.

**Deutsche Bahn's** Navigator booking flow shows how **honest communication** fails. Users hit "ghost pricing" — a first-class upgrade shown as a standalone low price, only clarified late — plus settings that locked after a point, and a seat-booking step where travellers could pay for a reservation without choosing a seat. These violate Visibility of System Status, Error Prevention and User Control heuristics. Fixes surfaced real totals earlier and moved seat choice into the flow. **Ghost pricing**, remember, is displaying a partial or misleading price that is only clarified later — an error-prevention and transparency failure.

And **Too Good to Go**, a food-waste app with a genuinely admirable concept, still stumbled: unexplained jargon ("Collection," "Magic Bag") and a mismatch between its fun brand and a dull, unclear interface hurt an otherwise good idea. The lesson is that even a socially-good product fails if it does not communicate clearly — accessibility and clarity matter more than finish.

## Small Friction in Banking: The Case for the Region

The compounding-friction pattern is especially dangerous in banking and booking, where trust is currency. A case study of **Keystone Bank** (Nigeria) found small-but-compounding friction in core flows like transfers and navigation — nothing catastrophically broken, but steps, hidden controls and unclear states that eroded confidence. The redesign brief was "simplicity, speed and trust." This is the model for the region: for Caribbean service, banking, delivery and fintech apps (cf. Lesson 111's local apps and Lesson 112's regional needs, including QR/NFC payments), the same structured method applies — and it is more relevant to students' lived experience than an analysis of a distant global app.

Worth remembering is that regional fintech already practises constraint-driven design at its best. QR merchant payments and NFC-based wallets are built around a hard constraint — a low-device, low-literacy, on-the-go user who should not have to type — and the constraint becomes the product's defining strength (cf. Lesson 120's proximity interactions). A Caribbean QR-payment flow, a delivery checkout, or a government service finder is therefore not a lesser subject for a case study; it is often a richer one, because it shows the very "constraints can become strengths" principle the Locket example illustrates, playing out in students' own neighbourhoods.

## The Bridge to Practice

Case studies are not an endpoint; they are a bridge to doing. The same heuristic-and-case-study method is what students will use to evaluate apps they use daily (Lesson 125) and eventually to redesign them (Lesson 126). Structure a mini-audit by opening a local app, running a few of Nielsen's heuristics against one core screen or flow, recording each violation with a severity rating, and proposing a concrete fix — the Gumroad and Deutsche Bahn method applied to a Caribbean bank, delivery or government-finder app.

A **worked mini-audit** makes the discipline concrete. Suppose you open a delivery app's checkout: the "pay" action is a colour-only green button with "Pay later" also in green (colour-only cue — violation), the size is only 24px and it sits at the top corner (target/size and thumb-zone issue — violation), and the true total with delivery is revealed only on the final confirmation (late pricing — the Deutsche Bahn ghost-pricing pattern). Each gets a severity rating and a concrete fix: add a distinct icon and label to the pay button, enlarge it and move it into the bottom thumb zone, and show the all-in total from the first screen. That is the whole method in miniature — identify, rate, fix — and it is exactly how the well-known case studies reached their redesigns.

The **compare-and-contrast pairing** sharpens the same skill: put a disliked app next to a liked one that does the same job (two banks, two delivery services, a local government finder against a national one) and explain, criterion-by-criterion, why one works and the other does not. Turning "I like this" into "its primary action is thumb-reachable, its total is shown up front, and its targets are large enough" is the entire point of structured evaluation — evidence replaces taste. And because the same method works on local Caribbean service, banking and delivery apps (Lesson 111, Lesson 112), the pairing is best done on apps students already live with — a QR payment flow, a delivery checkout, a government service — where a solid case study is more relevant than another analysis of a distant global product.

## Common Misconceptions

### "Case study analysis is just subjective opinion"
It is structured evaluation against heuristics, target sizes, hierarchy, performance and accessibility criteria — with severity ratings and traceable fixes.

### "If nothing is completely broken, the app is fine"
Small compounded friction — extra taps, hidden controls, misleading prices — quietly destroys trust and completion, as the bank and booking studies show.

### "Pretty UI means good UX"
Too Good to Go-style mismatches show that clarity, honest communication and usable flows matter more than visual finish.

### "Constraints are only obstacles"
Locket and offline/QR precedents show constraints can be designed around to create distinctive, resilient experiences.

### "Good case studies only come from big global apps"
The same method applies to local Caribbean service, banking and delivery apps — and is more relevant to students' lived experience.

## Key Terms

| Term | Definition |
|------|-----------|
| Case study (UX) | An in-depth analysis of a real product's design, evaluated against principles/heuristics for transferable lessons |
| Heuristic evaluation | Expert review of a UI against established usability principles (Nielsen's 10) — cf. Lesson 64 |
| Ghost pricing | Displaying a partial or misleading price (e.g. an add-on shown as the total) clarified only later |
| Progressive disclosure | Revealing detail as intention sharpens so no screen overwhelms (as in Swiggy) |
| Design system | Reusable components that keep a multi-part product consistent (as in JIFF) |
| Constraint-driven design | Bending the experience around a hard limitation (platform, network, widget) so it becomes a strength |

## Summary

Case studies turn mobile UX principles into evidence by analysing real apps against concrete criteria rather than taste. Well-designed experiences share a clear single goal per screen, thumb-reachable actions, visible navigation, progressive disclosure and fast performance — as Swiggy, JIFF's design system and Locket's constraint-driven widget show. Poor designs fail in recurring ways: hidden navigation, no system-status feedback, small targets, colour-only cues and flows that force recall, and small failures compound into lost trust and completion (Gumroad, Deutsche Bahn, Too Good to Go). The lesson is that clarity, honest communication and simplicity beat polish. And because the same method applies to local Caribbean banking, delivery and fintech apps, case studies are a direct bridge to evaluating and redesigning the apps students actually use.
