---
title: "Usability Testing & Heuristic Evaluation"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Website Page Design & Layout"
topicId: "website-page-design-layout"
order: 5
---
# Usability Testing & Heuristic Evaluation

## Don't Guess — Test

You have designed a beautiful interface. The typography is clean, the colours are balanced, the hierarchy is clear. But does it actually work for the people who use it? You cannot answer that question from inside your own head. You need to test.

Usability testing and heuristic evaluation are the two primary methods for identifying problems before users encounter them. Neither replaces the other — they catch different types of issues and work best together.

## Heuristic Evaluation: The Expert Review

Heuristic evaluation is an expert review of an interface against established usability principles. The most widely used set is **Nielsen's 10 Usability Heuristics**, which you covered in the User-Centred Design lesson.

### How to Conduct a Heuristic Evaluation

1. Choose 3–5 evaluators (more evaluators find more problems — 3–5 evaluators find approximately 75% of issues)
2. Each evaluator independently reviews the interface against each of Nielsen's 10 heuristics
3. For each violation found, the evaluator records: which heuristic is violated, where the problem occurs, and a severity rating
4. Consolidate findings across evaluators, removing duplicates
5. Prioritise by severity

### Severity Rating Scale

| Rating | Level | Action |
|--------|-------|--------|
| 0 | Not a usability problem | No action needed |
| 1 | Cosmetic | Fix only if time allows |
| 2 | Minor | Low priority, fix when convenient |
| 3 | Major | High priority — fix before launch |
| 4 | Catastrophic | Fix immediately — blocks core functionality |

**Worked Example**: You are evaluating a classmate's CAPE project website. You find:

- Heuristic 4 (Consistency): The "Back" button appears top-left on some pages but bottom-right on others — Severity 2
- Heuristic 5 (Error Prevention): The contact form accepts submission without validating email format — Severity 3
- Heuristic 9 (Error Recovery): An error message says "Error 500" with no explanation or next step — Severity 4

The severity ratings tell you which problems to fix first: the error message is catastrophic, the form validation is major, and the button inconsistency is minor.

### Time Investment

Heuristic evaluation typically takes 1–2 hours per evaluator per focused user flow. It is fast, cheap, and catches structural problems that user testing might miss.

## Think-Aloud Testing: Watch Real Users

Think-aloud testing requires participants to verbalise their thoughts, feelings, and decision-making process while completing tasks on a website or app. It reveals the user's **mental model** — their internal understanding of how the system works — which may differ entirely from your assumptions.

### How to Run a Think-Aloud Session

1. **Recruit** 3–5 participants who match your target audience
2. **Prepare** 2–3 specific tasks: "Find the school's phone number on this website" — not "Explore the site"
3. **Explain** the protocol: "Please say out loud what you are thinking as you use this. There are no right or wrong answers. We are testing the design, not you."
4. **Observe** without helping — let participants struggle. Their confusion is your data
5. **Record** the session (with consent) for later analysis
6. **Debrief** afterward: ask what was confusing, what was clear, what they expected

### What to Look For

- **Hesitation** — Where do users pause? That is a sign of uncertainty
- **Wrong clicks** — Where do they click that is not clickable? That reveals broken affordances
- **Backtracking** — Where do they go back and try again? That reveals navigation failures
- **Task completion** — Do they complete the task? How long does it take?
- **Verbalised confusion** — What do they say when stuck? That reveals the gap between expectation and reality

**Worked Example**: You ask five classmates to find the registration form on your school event website. Three of five scroll past it because the Register button looks like a decorative element, not a button. One classmate says, "I don't see anywhere to sign up — maybe it's on a different page?" Your registration button needs higher visual contrast and clearer affordance.

### The Five-User Rule

Nielsen's research shows that testing with just **5 users** reveals approximately **85% of usability problems**. It is better to run 5 rounds of 1 user than 1 round of 5 users — each round lets you fix issues before the next session, catching new problems that were previously hidden.

## The RITE Method: Fix Between Sessions

The **RITE method** (Rapid Iterative Testing and Evaluation) takes the five-user approach further. Instead of completing all testing and then writing a report, you fix issues between sessions:

1. Test with one user in the morning
2. Identify the most critical issue
3. Make the fix over lunch
4. Verify the fix works in the afternoon with a new user
5. Repeat

This fast iteration prevents problems from compounding and ensures each subsequent user tests the improved version. In a classroom setting, RITE is practical — you can test, fix, and retest within a single lesson.

## Accessibility Audits

An accessibility audit evaluates a website against WCAG standards, combining automated scanning with manual testing.

### Automated Scan

Run axe-core, WAVE, or Google Lighthouse to catch the 30–40% of issues that automated tools detect:

- Missing alt text
- Insufficient colour contrast
- Missing form labels
- Missing document language attribute
- Missing page title

### Manual Check

The remaining issues require hands-on testing:

- Tab through every page — is focus visible and logical?
- Test with a screen reader — does the content make sense when heard?
- Check keyboard-only operation of all interactive elements
- Verify form error messages are descriptive and programmatically associated
- Test with browser zoomed to 200% — does the layout remain usable?

**Worked Example**: Your automated scan reports zero errors. You then tab through the site and discover that the dropdown menu cannot be opened with arrow keys, the image carousel has no keyboard controls, and three decorative images lack `alt=""`. The automated scan caught none of these.

## Card Sorting: Validating Information Architecture

Card sorting asks users to organise content into groups that make sense to them. It informs your navigation structure and information architecture.

### Open Sort

Users create their own categories. This discovers natural groupings that you might not have expected.

### Closed Sort

Users sort items into predefined categories. This validates whether your existing structure works.

**Worked Example**: For a study timetable app, give students cards labelled "Maths CSEC," "English CAPE," "Past Papers," "Video Lessons," "Physics CAPE," "Practice Questions." Let them organise them into categories. If most students group "Past Papers" and "Practice Questions" together, your navigation should reflect that — not force them apart into separate sections.

## Tree Testing: Finding Content in a Hierarchy

Tree testing asks users to find specific items in a text-only hierarchy — no visual design, no colour, no images. This isolates the navigation structure from visual influence. If users cannot find items in a text-only tree, no amount of visual polish will save the navigation.

## Iteration: Test, Fix, Repeat

Usability is not a one-time evaluation. It is an ongoing practice. Small, repeated tests throughout development catch problems early when they are cheap to fix, rather than discovering critical issues after development is complete.

**Practical workflow**:
1. Wireframe → heuristic evaluation (find structural problems)
2. Prototype → think-aloud test with 3–5 users (find interaction problems)
3. Build → accessibility audit (find compliance problems)
4. Launch → monitor analytics and collect feedback (find real-world problems)
5. Iterate based on findings

## Common Misconceptions

### "Heuristic evaluation is the same as user testing"
Heuristic evaluation is experts reviewing against principles; user testing involves real users performing real tasks. They catch different problems and should be used together.

### "If no one complains, the design is usable"
Most users do not complain — they just leave. Usability problems cause silent abandonment. 90% of users who encounter a usability issue never return.

### "You need a professional usability lab"
Usability testing can be done anywhere — a classroom, a library, via video call. The key is having real tasks, real users, and careful observation.

### "One big test at the end is enough"
Running small tests throughout development catches problems early when they are cheap to fix. One large test at the end discovers critical issues too late.

### "Heuristic evaluators need to be designers or developers"
Any trained evaluator can perform heuristic evaluation — it is about applying the 10 heuristics systematically, not about technical expertise. Domain knowledge helps but is not required.

### "Card sorting and tree testing are the same thing"
Card sorting asks "how should content be organised?" while tree testing asks "can users find content in this structure?" One creates the structure; the other validates it.

## Key Terms

| Term | Definition |
|------|-----------|
| Heuristic Evaluation | Expert review of an interface against established usability principles |
| Think-Aloud Protocol | Testing method where users verbalise their thoughts while completing tasks |
| RITE Method | Rapid Iterative Testing and Evaluation — fixing issues between testing sessions |
| Severity Rating | A 0–4 scale classifying the seriousness of a usability problem |
| Card Sorting | Users organise content into groups to inform information architecture |
| Tree Testing | Testing findability of items in a text-only navigation hierarchy |
| Mental Model | A user's internal understanding of how a system works |
| Accessibility Audit | Systematic evaluation against WCAG standards combining automated and manual testing |

## Summary

Heuristic evaluation and think-aloud testing are complementary methods for identifying usability problems. Heuristic evaluation — a fast, expert review against Nielsen's 10 heuristics — catches structural issues. Think-aloud testing with 3–5 real users reveals the gap between your assumptions and user reality. The RITE method enables fast iteration by fixing issues between sessions. Accessibility audits combine automated scanning with manual keyboard and screen reader testing. Card sorting and tree testing validate information architecture. None of these methods requires a lab, a large budget, or professional testers — just real tasks, real users, and the willingness to watch people struggle so they do not have to.
