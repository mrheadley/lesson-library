---
title: "Algorithmic Bias — Training Data → Unfair Outcomes"
subject: "Information Technology"
subjectSlug: "digital-citizenship-form-2"
form: "Form 2"
topic: "Emerging Technology & AI Ethics"
topicId: "emerging-technology-and-ai-ethics"
order: 2
---
# Lesson 21 — Spotting the Bias: How Algorithms Can Be Unfair

In the last lesson, we discovered that every AI carries an opinion — the choices designers build into their rules. This lesson goes one step deeper and looks at where those opinions can go wrong: **algorithmic bias**.

Here's the uncomfortable truth in one sentence: an AI is only as fair as the data and rules people feed it. If that data has biases in it — or is missing whole groups of people — the AI can end up making wrong, unfair judgments. The good news? Once you can *see* the bias, you're already partway to fixing it.

---

## How does an AI learn? (a quick refresher)

An **algorithm** is a set of step-by-step instructions a computer follows to make a decision or prediction. An **AI** takes that idea further: it *learns* a task from examples called **training data** — the information people give it. Afterwards, we check it against **testing data** — fresh examples used to see whether the trained AI is actually reliable and accurate.

### Worked example: the flower classifier

Imagine you're training an AI to recognise flowers.

- You show it **80 pictures of sunflowers** and **10 pictures of roses**.
- The AI learns sunflowers really, really well — it's seen them eight times as often.
- Now show it a rose. **It can't recognise it.** It might even call it a sunflower, because "sunflower-ish" is all it has ever seen.

The AI didn't do anything malicious. It just learned the pattern from an unbalanced set of examples. This is called **representation bias** — bias caused by some groups being too rare in the training data.

And here's the point: **the exact same thing happens with people.** When whole groups of people are left out of (or over-represented in) the data, the AI underperforms for them.

**Bias in AI** means an AI makes a decision that is wrong or unfair because it learned from training data that didn't treat all people, places, or things accurately. **Algorithmic bias** is the pattern of unfair or inaccurate outcomes it produces for certain groups.

---

## Real cases: where this actually happened

These aren't hypothetical. Each is a documented, real-world example.

### Gender Shades (2018)

Researchers Joy Buolamwini and Timnit Gebru tested **three commercial facial-analysis systems** — the kind that try to tell if someone is a man or a woman, or match a face to a photo. The results:

- **Lighter-skinned men:** the systems were almost always right.
- **Darker-skinned women:** the error rate was far, far higher.

Buolamwini herself had to **wear a white mask** for one system to recognise her at all. Why? Because the training data contained mostly lighter-skinned faces — so the system had simply learned to do that job best.

### The wrong arrest (2020)

In Detroit, a Black man named **Robert Williams was falsely arrested** after a facial-recognition system misidentified him — the first documented case in the United States of a wrongful arrest linked to facial-recognition misidentification. Real people face real consequences when a tool is wrong for their group.

### The healthcare algorithm (2019)

A hospital algorithm helped decide **which patients got extra care**. It used past healthcare costs as a stand-in ("proxy") for how sick a person was. But less money had been spent on equally-sick Black patients — so the algorithm underestimated their illness, and roughly **halved** the number of Black patients identified for extra care.

Then the researchers fixed it — choosing a better measure of sickness. Correcting the bias cut the disparity by **84%**: Black patients auto-enrolled for extra care rose from 18% to 47%. Same data, better question, much fairer outcome.

### The Amazon hiring tool

Amazon built a hiring-screening tool trained on its own past hiring data. Because past hiring had favoured men, the AI **learned to filter out résumés it associated with women** — even though nobody told it to. The project was scrapped.

### The automatic crop

Twitter/X used an automatic image-cropping algorithm to pick the most interesting part of a photo. People discovered it tended to **crop in ways that seemed to favour lighter-skinned faces**. Here's the fun part: this one you can test yourself. Post (or preview) a photo with several faces of different skin tones and watch how it crops. You're running a mini-bias experiment with your own eyes.

### The filter bubble

Recommendation algorithms (YouTube, TikTok) keep serving content similar to what you already watched. That's pleasant — and it can become a **filter bubble**, where the feed narrows your viewpoint and you never see anything different. A bias you might not notice, because it feels like comfort.

### Bonus checks you can run yourself

- **Voice assistants and auto-captions** that misunderstand some accents but not others.
- **Search autocomplete** that finishes your sentence with a stereotype.
- **A chatbot** that describes "a family eating dinner" as one particular kind of family.
- **Subtitles or translation tools** that get lyrics wrong or turn friendly messages into rude ones.

Bias shows up in **faces, voices, hiring, healthcare, recommendations, search, and language**. It's everywhere — which is exactly why it matters to learn to see it.

---

## Common misconceptions (let's bust these)

1. **"Computers and math can't be biased — they're neutral."** — Computers do exactly what the data and rules tell them. AI is trained on human-chosen data and human-chosen rules, so it can inherit — and even amplify — human biases.
2. **"If the AI is biased, the programmers must be bad people."** — Almost never. Bias is usually *unconscious* — it comes from data reflecting society's existing inequalities, not from anyone's deliberate intent.
3. **"More data always means fairer AI."** — Not if the extra data repeats the same old, biased patterns. More biased data can make the bias *stronger*, not weaker.
4. **"Overall accuracy is all that matters."** — An AI can be accurate on average yet badly wrong for one group. Fairness means checking accuracy **for every group** — not just the average.
5. **"Bias only matters for faces and cameras."** — Nope: hiring, healthcare, recommendations, search, and language tools all show it.
6. **"Fixing bias is a one-time job."** — Teams must keep testing on diverse data and auditing outcomes **over time**, because both the data and the world keep changing.
7. **"The AI knows best / AI is always right."** — AI is probabilistic — it makes its best guess — and it can be confidently wrong. That's why humans must double-check important decisions.

---

## Fixing bias: fairness-aware thinking

Remember the "average looks fine" trap. A system can look great overall while being badly wrong for one group. The fix starts with one habit: **asking "who is missing from the data?" and "does this work for everyone, not just some people?"**

Real teams use a toolkit of fixes — and they stack them:

| Fix | What it means | In our flower example |
|-----|---------------|----------------------|
| **More diverse training data** | Collect examples from all the groups the tool will serve | Add many more rose photos |
| **Test across groups** | Check error rates per group, not just overall | Measure rose-accuracy separately from sunflower-accuracy |
| **Choose better target variables** | Pick a fairer thing to predict | In healthcare, predict sickness directly instead of using cost as a proxy |
| **Keep humans in the loop** | Let people review the AI's important decisions | A human double-checks before a wrong guess leads to an arrest |

> **A note for critical thinkers:** Some researchers argue bias is never fully "fixable" — because fairness itself is complicated. What does "fair" even mean? Equal accuracy? Equal outcomes? Mathematically, you sometimes can't maximise all definitions of fairness at once. So the honest goal isn't "a perfect, unbiased AI" — it's a **fairness-aware** one: built with diverse data, tested group by group, and checked by humans over time.

---

## What the experts are still figuring out

Three big open questions — worth knowing, and worth staying curious about:

1. **Where does the bias "live"?** Some experts say it's "in the algorithm," others say it's in the training data, and others argue the real root is **societal inequality that the data merely copies** (some readings of the healthcare study take this view). The framings differ, and reputable sources support all of them.
2. **Is facial-recognition bias shrinking?** One NIST study found newer, more accurate algorithms showed *less* demographic difference — some showed no measurable bias. Yet 2020s news reports (like the Detroit arrest) show real failures persist. Experts disagree on how fast it's improving.
3. **Is bias fully fixable?** Some algorithms show no discernible bias, which suggests it can be eliminated — while other researchers treat some bias as unavoidable and focus on redesigning the system around it.

Also note: some famous examples (like the Amazon hiring tool) are reported differently across sources and some fixes are unverified. Treat them as evolving stories, not settled facts — exactly the way a careful researcher would.

---

## Your challenge

Try the **cropping test**: pick a photo with several faces and watch the automatic crop. Then ask yourself the fairness-aware questions:

1. **Who is missing from the data?** (Who would this tool have been trained on — and left out?)
2. **Does this work for everyone?** (Which group gets the wrong answer?)
3. **What's the fix?** (More data? Better target? A human double-check?)

You've now seen how an AI learns, where its blind spots come from, and how real people and real teams push back. Being able to spot bias isn't a superpower reserved for programmers — it's a habit any digital citizen can build. Start testing the tools around you, and you'll never look at an autocomplete the same way again.
