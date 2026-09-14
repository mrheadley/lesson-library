---
title: "Mobile Usability Testing"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Mobile User Experience"
topicId: "mobile-user-experience"
order: 8
---
# Mobile Usability Testing: Watching Users on Real Devices

## From Heuristics to Real Users

Lessons 64 and 124 gave you the expert's toolbox: heuristic evaluation, think-aloud testing and structured case-study analysis. This lesson adds the ground truth that no expert review can replace — watching **real users** try to get things done on a phone. **Usability testing on mobile is task-based observation**: you give a real user a concrete goal on a phone and watch how they get there. It is different from functional QA, which merely checks whether flows "work." The question is not *does the feature function* but *can a person actually use it to achieve their goal, without getting lost or giving up?*

Mobile testing differs structurally from desktop. Gesture inputs replace cursor clicks; the system itself intrudes — permission prompts, keyboards, share sheets; the network is variable; and use is fragmented and distracted. A desktop thinking about a web form is qualitatively different from a user on a bus, one-handed, tapping a banking app. Testing on mobile means designing for all of that.

## Guerrilla Testing: Speed and Low Cost

The fastest, cheapest way to start is **guerrilla testing**. Approach people in public — a café, the school yard, a transport hub — ask them to try a quick, concrete task on a prototype or first build, and capture the obvious issues fast. It is informal and low-cost by design: a few questions, a quick task like "order a roti for pickup," and immediate feedback on whether the flow makes sense. Guerrilla testing is the ideal early-validation method for basic flows and visual hierarchy, precisely because it costs almost nothing and surfaces glaring problems before you invest in polish.

## Task-Based Testing: The How-To

For deeper insight, run **task-based testing** — moderated (a facilitator guiding in real time) or unmoderated (participants completing on their own at scale). Give users a real outcome — "transfer $50 to your sister" — and observe. Track the quantitative metrics **task completion rate, time-on-task, error rate, tap accuracy/misclick and abandonment**; a representative target might be at least 85% task success. But never rely on metrics alone: combine quantitative measures with **qualitative observation** of where users hesitate, backtrack or verbalise confusion. Together they tell you both *what* happens and *why*.

A widely used tool turns perceptions into a number: the **System Usability Scale (SUS)** gives a 0–100 score, with about 68 as the industry average — a quick, standardised way to compare designs. Keep sampling in perspective: about **5–8 participants per segment** surface roughly 85% of major usability problems for *diagnostic* (qualitative) work, but quantitative metrics and A/B comparisons need larger samples (30+ per segment). And always test on **real devices**, not just simulators — emulators share the desktop's CPU and RAM and miss gesture latency, thermal and battery behaviour, permission prompts and budget-device limits.

## Analytics Tells You What; Testing Tells You Why

Analytics and **session replay** — automated funnel, heatmap and behavioural data — tell you *what* happened: where users dropped off, what they skipped, where they stalled. Usability testing explains *why*. The two belong together: let analytics point your testing at the spots that matter, then run usability sessions to find out what is going wrong there. This closes the what/why loop and ensures you are testing the problems that actually exist rather than guessing. Because most users silently abandon rather than complain, you must actively observe task performance rather than wait for feedback.

## A/B Testing: Validation at Scale

Where usability testing is qualitative discovery, **A/B testing** is quantitative validation at scale: run two (or more) design variants live and measure which performs better on a chosen KPI. The mobile-specific effects are striking. Reducing a form from 5 fields to 3 typically lifts mobile completion about **20–35%** (versus 10–15% on desktop); moving a call-to-action from the top-right to centre-bottom often improves conversion about **15–30%**; and a roughly 1-second improvement in LCP is associated with about a **7%** conversion gain. Run a mini-A/B with two variants of a CTA position or a 3-field versus 5-field form and measure which completes more — the logic of A/B made concrete.

## Test Small, Early, Continuously — and Cover the Device Base

Usability testing is not a one-shot event. **Test small, early and continuously**, at discovery, before releases, and whenever analytics flags a drop-off — catching issues when they are cheap to fix rather than discovering them too late. On mobile, add a device-OS dimension to sampling: a valid study must cover enough iOS and Android, screen sizes and device tiers. A study that lands "28 iPhones and 2 Androids" can say almost nothing about Android. Plan a **device matrix** — core, constrained/low-end, latest OS and long-tail devices — and recruit with device-OS quotas. Distribute real builds through TestFlight (iOS, up to ~10,000 external testers) and Google Play's internal/closed/open testing tracks. And because accessibility paths are chronically under-tested, include VoiceOver/TalkBack and screen-reader sessions in any serious mobile study (cf. Lesson 122).

### A Worked Protocol for a Task-Based Mobile Test
1. **Define the goal** — one concrete outcome, e.g. "transfer money to a contact."
2. **Recruit 5–8 participants** across the device matrix (both iOS and Android, different screen sizes and device tiers).
3. **Prepare 2–3 tasks** with a clear end state — not "explore the app."
4. **Run each session** — observe task completion, time-on-task, errors, tap accuracy and signs of confusion; record with consent.
5. **Analyse** — score completion and error rates, replay where users struggled, and note what they said.
6. **Fix and retest** — iterate before the next round, then validate the fixes after release (not just in the lab).

### A Field Example in the Local Context

The method lands naturally in a school setting. Run an in-class guerrilla test where classmates ask other students in the school yard to complete one task on a prototype — "order a roti for pickup" or "transfer money to a contact" — and watch what happens without helping. Then run a task-based micro-test on a local app flow (say a bank transfer or delivery order), timing 5–8 users and logging completion, taps and errors, and compare against a redesign from Lesson 123 or 124. Pair that with an analytics view of a funnel to spot where users drop off, then run a usability session to find out exactly why — closing the what/why loop with evidence of your own.

### Why Invest at All

Usability research pays for itself. Organisations that use structured usability research have measured strong returns — a widely cited UserTesting/Forrester figure puts it at roughly **415% over three years** — because fixing a usability problem during design costs a fraction of fixing it after launch, and because a smoother flow converts more users on a data- and power-conscious mobile base. The point is to validate fixes after release, not only in the lab: a design that survives a lab test but fails in the field has not really been tested, so continuous measurement is what turns usability testing from a one-off event into a discipline.

## Common Misconceptions

### "Testing on a desktop emulator is good enough"
Emulators miss gesture latency, real network, permissions, battery and thermal behaviour, and ergonomics — test core findings on real devices.

### "One big test just before launch is enough"
Small repeated tests throughout development catch issues when they are cheap to fix; test at discovery, before releases and after analytics flags a drop (cf. Lesson 64).

### "Analytics replaces usability testing"
Analytics and session replay show *what* happened but not *why*; usability sessions supply the why — they work together.

### "A usability session with 5 people proves the design works"
5 users surface most *qualitative* problems, but quantitative metrics and A/B comparisons need larger samples — and device-OS coverage.

### "Users will complain if something's wrong"
Most users silently abandon; you must actively observe task performance rather than wait for complaints (cf. Lesson 64).

## Key Terms

| Term | Definition |
|------|-----------|
| Usability testing | Observing representative users complete realistic tasks to measure effectiveness, efficiency and satisfaction |
| Guerrilla testing | Quick, informal, low-cost testing — approach people in public and get fast feedback on core flows |
| Task-based testing | Giving a user a concrete goal and observing the route they take and where they get stuck |
| Moderated vs unmoderated | With a facilitator guiding in real time vs participants completing on their own at scale |
| Session replay / RUM | Automated funnel, heatmap and behavioural data showing *what* users did — the pointer to usability sessions for *why* |
| A/B testing | Running two (or more) design variants live to measure which performs better on a chosen KPI |
| SUS | The System Usability Scale, turning perceived usability into a 0–100 score (68 ≈ average) |
| Device matrix / quotas | Planning which device models, OS versions and device tiers a study must cover to be valid |

## Summary

Mobile usability testing is task-based observation — giving a real user a concrete goal on a phone and watching how they get there — and it is distinct from functional QA. Start cheap with **guerrilla testing**, then run **task-based tests** tracking completion, time-on-task, errors and abandonment, and scale perceptions with the SUS score. Pair **analytics** (what happened) with **usability sessions** (why) to close the what/why loop, and validate changes at scale with **A/B testing**, whose mobile effects are large. Test small, early and continuously on real devices, cover the device-OS matrix (including accessibility paths), and iterate fixes after release. Real design is proven by users — not by the designer's own confidence.
