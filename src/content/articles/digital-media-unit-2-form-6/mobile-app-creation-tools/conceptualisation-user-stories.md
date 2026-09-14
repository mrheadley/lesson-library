---
title: "Conceptualisation & User Stories"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Mobile App Creation Tools"
topicId: "mobile-app-creation-tools"
order: 1
---
# User Stories: Scoping an App You Can Actually Build

## From "How Might We" to "As a Student, I Want…"

Conceptualisation is where a framed need becomes a buildable plan. The ideation lesson (Lesson 116) gave you a disciplined way to arrive at a real problem — a "How Might We" question with a named user and a constraint. **User stories** are how you turn that need into concrete jobs the product must do, each one expressed from the end user's point of view.

The standard three-part format is **"As a [user], I want [functionality] so that [benefit]"** — and each part has a job. *Who* is doing this? *What action* do they need? **Why** does it matter to them? The why is as important as the what; it is the difference between a line of work and a piece of understanding. Take a school-notices concept: "As a student, I want push alerts for timetable changes so that I don't miss a class." Strip the why and you have "send push alerts" — a task any feature list can satisfy in the wrong way. Keep it, and every decision about wording, timing and urgency has a test against a real outcome.

A good story expresses a **need, not a solution**. "As a user, I want to sort products by price so that I can find what fits my budget quickly" beats "add a dropdown menu" — the dropdown is one possible implementation, and the need may be served better by a default cheapest-first view. Write the need; the build team chooses the mechanism.

## Acceptance Criteria: Defining "Done"

A story is only truly understood when **done** is testable. **Acceptance criteria** are the measurable conditions a story must meet to count as finished, and the cleanest form is **Given/When/Then**: *"Given I am logged in, when I submit an order, then I see a confirmation screen."* Written this way, a team can pass or fail the story without opinion — there is no arguing about whether "it works, kind of." The discipline pays off: without testable criteria, "done" is a matter of taste and the team reworks endlessly.

The drill that reveals their worth is to try to **break them**: write criteria for one story (say, "order a lunch"), then let classmates hunt the untested edge cases. "Given I am logged in, when I submit an order, then I see confirmation" — what if the kitchen is closed? What if my data connection drops mid-order? What if the menu item I picked just sold out? Each edge case becomes its own criterion or its own small story. That is the mental habit — *testable or it isn't done* — that separates a wish-list from a spec.

## Worked Set: A School-Notices App

Take the class's top concept from Lesson 116 — a school-notices app — and derive a starter story set. Each story is one concrete job; grouping them afterwards reveals the features:

- **As a student**, I want push alerts for timetable changes **so that** I don't miss a class. *(Given I have alerts enabled, when a timetable change is published, then I receive a notification with the affected class and time.)*
- **As a student**, I want to view my timetable for today **so that** I can plan my day. *(Given I am logged in, when I open the timetable, then I see today's classes with times and rooms.)*
- **As a teacher**, I want to publish a last-minute room change **so that** students find the right room. *(Given no students have signed out of alerts, when I publish a room change, then all affected students receive a notification within two minutes.)*
- **As an absent student**, I want to see what I missed **so that** I can catch up. *(Given I have missed a class, when I open a class, then I see the teacher's notes for the missed date.)*
- **As a parent**, I want a weekly summary of notices **so that** I can keep track without checking daily. *(Given the week is over, when I open the summary, then I see all notices from that week, read or unread.)*

Six to eight stories like these — each expressing one job, each with testable criteria — define the whole product at story level. The bloat check: if a story cannot be demonstrated in **under five minutes**, split it. Overloaded stories are the first sign of scope creep.

## The MVP: The Smallest Version That Proves the Idea

An **MVP (minimum viable product)** is the smallest usable version that validates the core idea — the discipline of deciding what *must* be built versus what would be nice. Use the one-essential-screen thinking from the design workshop (Lesson 117): what is the single screen without which this app is pointless? For the school-notices app, that is the alert-and-timetable home screen. Everything else — parent summaries, catch-up notes, room-change histories — is a candidate for later. MVP is cutting as much as it is building: a focused, buildable core beats a bloated wish-list that never ships.

## Prioritisation: MoSCoW, RICE, Dot-Voting, 100-Point

A wish-list becomes a build order through **prioritisation**, and the classroom has four lightweight tools — no heavy software required.

- **MoSCoW** buckets every requirement into **Must / Should / Could / Won't-have**. It needs no data and is ideal for scoping an MVP; deliberately naming the **Won't-haves** is how you practise the "say no" discipline of MVP. For the notices app: Must = alert + timetable; Should = catch-up notes; Could = parent weekly summary; Won't = chat and social feeds.
- **RICE** scores ideas mathematically: **(Reach × Impact × Confidence) ÷ Effort**. Give each factor a number and rank on the result. A data-driven ranking turns "I like this idea" into a defensible number — for example: alerts (Reach 300, Impact 3, Confidence 0.8, Effort 3) score 240, while chat (Reach 120, Impact 1, Confidence 0.5, Effort 5) scores 12 — build alerts first, in one spreadsheet column.
- **Dot-voting** gives each person a small fixed number of dots — a common rule is about **N/3** (so one dot per three options) — to place on the features they most care about. It is fast, visual and ideal for a workshop; the pattern matters more than the tally, so discuss the result rather than treating dots as final.
- **The 100-point method** gives each participant exactly **100 points** to spend across the story list, forcing real trade-offs and revealing the class's collective priorities democratically.

Pick by job size: **MoSCoW** for a short MVP scope, **RICE** for larger lists (20–50 comparable bets), and **dot-voting or 100-point** for the 10–25 brainstormed ideas a class actually generates. They are not rivals — teams often bucket with MoSCoW first, then score the shortlist with RICE.

## Stories Are a Team's Shared Language

Finally, stories are **communication, not a one-way spec**. Designers, developers, testers and stakeholders all read the same "As a… I want… so that…" line and stay aligned on *what* is being built and *why*. The story is the smallest unit of shared understanding on a team — and the better the stories, the fewer times "I thought you meant something different" happens. That alignment is the real product of this lesson.

## Common Misconceptions

### "A user story is just a task description like 'add a login'"
A proper story names who wants it and why — "As a returning customer, I want to stay logged in so I don't re-type credentials." Tasks are implementation details; stories carry intent.

### "The more features, the better the product"
MVP requires cutting. A focused, buildable core beats a bloated wish-list that never ships.

### "Acceptance criteria are optional nice-to-haves"
Without testable criteria, "done" is an opinion and the team reworks endlessly. Criteria make a story pass or fail without argument.

### "Prioritisation is just whoever argues loudest wins"
Dot-voting and the 100-point method give every voice equal weight and force real trade-offs — the loudest idea does not automatically win.

### "MoSCoW and RICE are the same thing"
MoSCoW is qualitative bucketing for scope; RICE is a numeric score for ranking many comparable bets. Teams often use both in sequence.

### "Stories are only for developers"
Stories are shared communication across designers, testers and stakeholders — everyone stays aligned on what is built and why.

## Summary

Conceptualisation turns the ideation of Lesson 116 into a buildable plan. User stories — "As a [user], I want [function] so that [benefit]" — express each user job with its why, complemented by **acceptance criteria** in Given/When/Then form that make "done" testable and breakable. Grouping stories reveals features, and **MVP thinking** cuts them down to the smallest version that proves the core idea (the one-essential-screen rule of Lesson 117). Four lightweight prioritisation methods — MoSCoW, RICE, dot-voting and the 100-point method — turn the wish-list into a justified build order, chosen by list size. And because stories are a team's shared language, the quality of the lesson's output is measured in alignment: everyone knows what is being built and why.
