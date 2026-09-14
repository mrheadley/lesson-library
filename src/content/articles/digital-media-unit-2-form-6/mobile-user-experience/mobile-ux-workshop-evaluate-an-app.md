---
title: "Mobile UX Workshop: Evaluate an App"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Mobile User Experience"
topicId: "mobile-user-experience"
order: 9
---
# Finding Usability Problems in Your Daily Apps: A Mobile Evaluation Workshop

## The Workshop's Product: Evidence, Not Criticism

This lesson's output is a **prioritised findings report**: a list of concrete usability problems found in a real, everyday app, each one tied to the exact heuristic it violates, backed by evidence, rated for severity, and followed by a suggested fix. The point of **heuristic evaluation** is not to knock a popular app — it is a fast, cheap "discount" method that finds problems *before users meet them*, and it produces findings that others can check and reproduce. That discipline — find, evidence, rate, recommend — is exactly the review-and-rationale model CAPE wants in a Digital Media portfolio. You are not criticising; you are reporting what the interface does to a user.

The ten heuristics themselves are not new to you: **Nielsen's 10 Usability Heuristics** from the usability-testing lesson (Lesson 64) are your fixed yardstick, and the case studies of apps done right and wrong (Lesson 124) are your reference library. What is new is doing it yourself, with your own hands, on an app you use daily — and judging it in its **mobile reality**, not as a desktop idea: small screen, one hand, prepaid data, bright outdoor light (the on-the-move constraints of Lesson 120).

## Step 1 — Choose the App and Scope the Flow

Each group picks one real app from their daily phones. Local apps are fertile ground: a Caribbean service or remittance app, a food-delivery app, a government portal — they are often where the clearest mobile usability gaps appear, especially for prepaid, low-data, entry-level-phone users (ties to Lesson 106 and the local-app lessons). WhatsApp, a bank app and a delivery app all work too; popularity is not the point, usability is.

Scope hard. A full heuristic evaluation of an entire app can take an experienced evaluator **1–2 hours per focused flow** (Nielsen Norman Group), so a class sessions scopes to **one flow and 3–4 core screens** — say, "order a doubles with delivery" from search to confirmation. Keep the walkthrough timeboxed; a handful of screens reviewed properly beats a sweep of twenty reviewed thinly.

## Step 2 — Evaluate as a Team, Independently

Heuristic evaluation works best with **3–5 independent evaluators**, and the numbers are striking: a solo reviewer catches roughly **35%** of an interface's usability problems, while two evaluators working together catch about **60%**. So evaluate in small groups — but independently first. Each member walks the chosen flow against all ten heuristics on their own, logging every violation with evidence, *before* anyone shares. Only then do you merge the lists and remove duplicates. Independent inspection is what makes the method reliable; comparing notes afterwards is what makes it rich.

## Step 3 — Run the "What to Look At" Checklist

A bare heuristic name is too vague to be useful, so use a **"what to look at" checklist** — a prompt sheet that turns each heuristic into questions. For *visibility of system status*: "Is there a progress indication while something loads?" For *match with the real world*: "Are the labels plain language a user would say, or system jargon?" For *user control and freedom*: "Can the user undo or cancel?" For *error prevention*: "Does the form stop mistakes before they happen?" Work screen by screen, and for every violation you record three things in one line: **which heuristic, where (screen and element), and what happened** — plus a suggested fix. The **A/B "look" heuristic** is a useful companion trick: compare two versions of a screen head-to-head and note which one better satisfies the heuristic. And borrow *think-aloud* from the Lesson 64 toolkit: narrate your own attempts, because your confusion is data.

## Step 4 — The Walking Check: Judge Mobile Reality

A desktop-grade review would miss this lesson's whole point. Take the flow and do it **while walking outdoors, one-handed, in daylight** (the "walking check" from Lesson 120). Is the key button inside comfortable thumb reach or stranded in a top corner? Is the text readable in sun or grey-on-white washout? Does the screen survive a jolt and a break in connection? Mobile heuristics apply differently on a small screen, one hand, low data and bright light — a finding that only exists because you are popular is a finding the mobile reality torches. Record these movement findings alongside the screen-by-screen ones; they are real usability violations, not trivia.

## Step 5 — Guerrilla Intercepts: Ask Real People

Heuristics tell you what experts can see; **guerrilla usability testing** tells you what real users actually do. Guerrilla testing is short, opportunistic and needs no lab: **5–15 minute intercept sessions** in natural settings — the school yard, the canteen, the bus stop — where you approach 3–5 passers-by and give them one task on *your* device: "Find the price of a doubles order." Watch and listen. Note where they hesitate, tap the wrong thing, or backtrack and try again. Ask them to think aloud so you can hear the confusion as it happens. Capture the session with your phone's built-in screen recording, or share your screen over Google Meet — a zero-budget class needs no lab, and an incentive is often just a thank-you or a soft drink. Real users rarely complain; they quietly quit — observation surfaces what people do not verbalise.

## Step 6 — Rate 0–4 and Defend the Top Three

A list of observations is not yet a report; **severity ratings** turn it into a prioritised fix list. Use the 0–4 scale from Lesson 64: **0** not a problem, **1** cosmetic, **2** minor, **3** major (fix before launch), **4** catastrophic (blocks core function). Rate every merged finding, then defend a **top-3 fix list** to the class with your reasoning. This rank-and-justify step is the exact *report-and-discipline* style the CAPE portfolio review demands — and it is how evaluation stops being a pile of complaints and becomes an action plan.

## Worked Walkthrough: A Remittance App

A group evaluates a Caribbean remittance app on the flow "send money home," three screens: Home, Send, Confirm. The independent passes merge to these findings:

- **Heuristic 1 (system status):** after tapping "Send," no progress indicator appears; the screen sits still for several seconds and users are unsure whether the transfer went through. *Severity 3.*
- **Heuristic 4 (consistency):** the primary "Send Money" action is a green filled button at the bottom of Home, but on the Confirm screen the same action becomes a blue text link at the top of the page. *Severity 2.*
- **Heuristic 9 (error recovery):** entering an invalid recipient ID shows "Error 502" with no explanation and no next step; the users guessed what to do and re-typed blind. *Severity 4.*
- **Heuristic 2 (match with the real world):** the transfer method screen labels options "TT" and "Wire" with no explanation; two of four classmates hesitated there in the guerrilla session, saying "I don't know what that means." *Severity 2.*
- **Walking check (thumb reach + ambient readability):** the final "Confirm" button sits in the top-right corner — out of one-handed reach — and is grey-on-white, unreadable in direct sun. *Severity 3.*

The prioritised fix list writes itself: fix the catastrophic Error 502 with a plain-language recovery message first; then the missing progress indicator and the unreachable confirm button before launch; then the consistency and label issues. That ordering — not the order findings were found in — is the report.

## The Share-Out

Sharing is where the method becomes a discipline. Each group presents its report: the flow, the top findings with heuristic + evidence + severity, the top-3 fixes, and the reasoning. Peers interrogate the findings against the same ten heuristics — turning the class into a structured quality filter. If a "finding" cannot name the heuristic it violates, it is an opinion, not a result. Evaluation and design feed each other: evidence about what fails is the direct input to what you will build.

## Common Misconceptions

### "A heuristic evaluation needs trained UX experts"
Any evaluator who has learned the ten heuristics and stays systematic can find real problems — students can do it.

### "Let users use it and they'll tell you what's wrong"
Users rarely complain; they just quit. Heuristics and observation surface problems people never verbalise.

### "Evaluation requires an expensive usability lab"
Guerrilla testing with a phone is enough — a quiet bench, one task and careful observation catch most findings without a lab.

### "If the app is popular, it must be usable"
Popularity reflects marketing and habit. Daily-use apps routinely fail several heuristics — hidden menus, unclear errors — and that is exactly what you will find.

### "The review is the same as user testing"
Heuristic evaluation is expert-led inspection; user testing watches real behaviour. They complement each other, and the best workshops do both.

## Summary

This workshop turns usability theory into a hands-on report. You choose a real daily app, scope one flow and a handful of screens, and evaluate it as a small independent team against Nielsen's 10 heuristics — recording every violation with the heuristic, evidence and a fix. The walking check forces you to judge the mobile reality (thumb reach, sun glare, one hand), and guerrilla intercepts with real users add the behaviour heuristics cannot see. Severity ratings (0–4) convert the findings into a defended top-3 fix list, in the same report-and-rationale style the CAPE portfolio requires. The lesson's product is not criticism of a popular app — it is a reproducible, evidence-backed plan for making an interface better.
