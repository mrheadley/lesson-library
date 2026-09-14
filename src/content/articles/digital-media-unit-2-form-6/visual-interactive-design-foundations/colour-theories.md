---
title: "Colour Theories"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Visual & Interactive Design Foundations"
topicId: "visual-interactive-design-foundations"
order: 2
---
# Lesson 2 — Colour Theories, Harmony Rules, Tints, Shades, Gradients, and Colour Mixing

## A Student's Guide to Colour in Design

Colour is the loudest tool in a designer's kit. It draws the eye, sets the mood, builds a brand, and — used badly — destroys an otherwise solid layout. This article walks through how colour is built, how it is combined, and how to use it with intention in digital media.

By the end, you should be able to look at any design and explain *why* the colours work (or do not).

---

## 1. The Colour Wheel: Your Map of Colour

Every colour theory conversation starts with the **colour wheel** — a circle that arranges colours by relationship.

### 1.1 Primary Colours
The three colours that cannot be created by mixing anything else:
- **Red**
- **Yellow**
- **Blue**

Everything else is built from these.

### 1.2 Secondary Colours
Created by **mixing two primaries in equal parts**:
- Red + Yellow = **Orange**
- Yellow + Blue = **Green**
- Blue + Red = **Violet** (or Purple)

### 1.3 Tertiary Colours
Created by mixing a **primary with a neighbouring secondary**. They have hyphenated names:
- Red-Orange
- Yellow-Green
- Blue-Violet
- (and so on around the wheel)

**Analogy:** Think of the colour wheel as a family tree. Primary colours are the grandparents — the source. Secondary colours are their children. Tertiary colours are the grandchildren — a blend of the two generations.

---

## 2. Tints, Shades, and Tones: Variations on One Colour

Once you have a colour, you rarely use just one flat version of it. You create a family of related colours for backgrounds, hover states, borders, and shadows.

- **Tint** = Colour + **White**. The result is **lighter** and softer. Pink is a tint of red.
- **Shade** = Colour + **Black**. The result is **darker** and heavier. Maroon is a shade of red.
- **Tone** = Colour + **Gray**. The result is **muted** and sophisticated. Dusty rose is a tone of red.

**Analogy:** Imagine a single cup of paint as the "base." Tints are that paint watered down (paler). Shades are that paint with black added (deeper). Tones are that paint with grey added (more dignified, more muted).

### Why this matters in UI
A single button on a website might use a **full scale of tints and shades** of one hue:
- A pale tint for the disabled state
- The base colour for the default state
- A slightly darker shade for the hover state
- An even darker shade for the pressed/active state

This is what gives a design system depth without feeling busy.

---

## 3. Colour Harmony Rules: Combining Colours That Work

Picking random colours rarely works. The colour wheel gives us four tested "harmony rules" — recipes for combinations that are known to look good together.

### 3.1 Analogous
**What it is:** Colours that sit **next to each other** on the wheel (within about 30°).
**Feel:** Harmonious, calm, natural — like a sunset, or autumn leaves.
**Rule of thumb:** Let one colour **dominate**, with the others as small accents. Otherwise the harmony looks like a blur.

*Example:* Blue, Blue-Green, and Green.

### 3.2 Complementary
**What it is:** Colours **directly opposite** each other on the wheel (180° apart).
**Feel:** High energy, high contrast, vibrant.
**Rule of thumb:** Use one as the dominant colour and the other as an **accent** (think 80/20). A 50/50 split creates visual fatigue because the two colours fight for attention.

*Example:* Blue and Orange; Red and Green; Yellow and Violet.

### 3.3 Triadic
**What it is:** Three colours **evenly spaced** around the wheel (120° apart).
**Feel:** Vibrant but balanced. Playful, energetic.
**Rule of thumb:** Same rule as the others — one colour dominates, the other two support.

*Example:* Red, Yellow, Blue (the original primaries).

### 3.4 Tetradic
**What it is:** Two complementary pairs that form a **rectangle** on the wheel.
**Feel:** Rich, complex, varied. Harder to balance.
**Rule of thumb:** This is the only harmony where you are strongly encouraged to use **tints, tones, and shades** of each colour rather than the pure hues. Otherwise the design looks like a clown's costume.

*Example:* Blue, Orange, Red-Orange, Yellow-Green.

**Analogy:** Think of harmonies like music. Monochrome is a single note (boring on its own, but powerful in context). Analogous is a chord. Complementary is call-and-response. Triadic is a three-part harmony. Tetradic is a full band — richer, but harder to keep in tune.

---

## 4. Colour Mixing in Digital Media

On a screen, colour is not paint. It is **light**. That changes the rules.

### 4.1 Additive Mixing (RGB)
Screens use **Red, Green, and Blue** light. Combining them:
- All three at full intensity = **white**
- All three off = **black**
- Two at full intensity = a secondary (cyan, magenta, yellow)

This is **additive** because you are *adding* light together. It is the opposite of paint, where mixing all colours gives you mud (subtractive).

### 4.2 HSL
Most digital tools also let you work in **HSL** — **Hue, Saturation, Lightness**. This is closer to how humans describe colour, which makes mixing more predictable.

### 4.3 OKLCH
**OKLCH** is a newer colour space designed to be **perceptually uniform** — meaning equal numeric adjustments produce equal perceived changes. If you want consistent, predictable colour scales, OKLCH is the best modern choice.

### 4.4 CSS `color-mix()`
Modern browsers support a CSS function called `color-mix()` that lets you mix two colours in code:
```
background: color-mix(in oklch, blue 70%, white);
```
This is the practical tool for generating tints and shades dynamically in stylesheets.

---

## 5. A Practical Workflow for Building a Palette

Here is a step-by-step approach used by working designers:

1. **Pick a base colour** — usually a brand colour or the dominant colour of the design.
2. **Build a full tint-to-shade scale** — 9 to 11 steps from palest tint to deepest shade. You will use these for backgrounds, borders, hover states, and dark accents.
3. **Pick accent colours** using one of the harmony rules.
4. **Build tint-to-shade scales** for each accent.
5. **Design your neutrals intentionally** — a pure #808080 grey can look dead. Adding a tiny hint of your brand's hue to your greys makes the whole palette feel cohesive.
6. **Check the temperature balance** — is your palette mostly warm (reds, oranges, yellows) or mostly cool (blues, greens, purples)? A healthy palette usually has **one temperature dominant**, with the other as a small accent.

---

## 6. Colour Psychology and Visual Impact

Colour is not just decoration. It carries meaning.

### Cool vs. Warm
- **Cool colours** (blues, greens, purples) promote **concentration and calm**. Preferred for long-screen-use interfaces because they reduce visual fatigue.
- **Warm colours** (reds, oranges, yellows) generate **attention and arousal**. Use them sparingly for important elements — buttons, alerts, highlights.

### Common Meanings
- **Blue** — trust, stability, calmness. Common in finance and corporate design.
- **Yellow** — optimism, happiness. Good for highlights, but use sparingly — too much yellow causes eye strain.
- **Red** — excitement, urgency. Standard for errors and critical alerts.
- **Green** — success, growth, "go." Standard for confirmations.

**Analogy:** A red shirt and a green shirt are both just fabric, but they make you feel different things. The same is true of buttons on a screen. A red "Delete" button feels more urgent than a green one — even if the words are identical.

### Accessibility
About 1 in 12 people have some form of colour vision deficiency. Complementary colour schemes are **most effective for accessibility when chosen carefully**, because they keep strong contrast between pairs. Always check your palette with a colour-blindness simulator, and never use colour alone to convey meaning (e.g., add an icon or text label to a red error message, not just a red colour).

---

## 7. Common Misconceptions

- **"Colour mixing on screen is just like paint."** False. RGB additive mixing is non-intuitive. Use HSL or OKLCH for predictable results.
- **"More colours = better design."** False. Restraint wins. A small, well-chosen palette looks more professional than a rainbow.
- **"Gradients are inherently modern and better."** False. Gradients are a tool. A flat, well-chosen colour can be more professional and more accessible.
- **"High contrast always looks good."** False. Over-saturated, high-contrast combinations can cause **visual fatigue** and fail accessibility checks.

---

## 8. Worked Example: A Study App Colour Palette

Suppose you are designing a study app for Form 6 students. The goal is a focused, calm interface that still feels energetic enough to use.

1. **Base colour:** Deep blue (#1E40AF) — associated with focus and trust.
2. **Tint-to-shade scale of blue** — eleven steps from very pale (#EFF6FF) to very dark (#1E3A8A). Used for backgrounds, cards, hover states, and active buttons.
3. **Accent colour using complementary rule:** Orange (#F97316) — high-energy counterpoint to the calm blue. Used **only** for primary action buttons and progress indicators (the 80/20 rule).
4. **Tertiary accent using analogous rule:** A teal (#14B8A6) sits next to blue on the wheel. Used for "in progress" indicators so they do not fight the orange.
5. **Neutrals:** Greys with a hint of cool blue (#F8FAFC, #E2E8F0, #64748B) — feels cohesive with the base.
6. **Temperature check:** Cool colours dominate (calm study mood), warm orange is the single accent (energy, action).
7. **Accessibility check:** Tested with a colour-blindness simulator; the orange/blue pair remains distinguishable for the most common deficiencies, and every important state is also marked with an icon, not just colour.

---

## 9. Key Takeaways

- The **colour wheel** is your map. Primary → Secondary → Tertiary builds the family.
- **Tints** (lighter), **shades** (darker), and **tones** (muted) are how you build a full usable palette from a single hue.
- The four **harmony rules** — analogous, complementary, triadic, tetradic — are tested recipes. Use one dominant colour with accents.
- On screens, colour is **additive light** (RGB). For predictable mixing, use **HSL or OKLCH**.
- Build a real **workflow**: base colour → scale → accents → neutrals → temperature check.
- **Colour carries meaning**. Cool = calm, warm = attention. Use this on purpose.
- **Accessibility is not optional**. Use contrast, icons, and text — not colour alone.
- Restraint wins. A small, intentional palette looks more professional than a large chaotic one.

In the next lesson, we will take these visual building blocks and learn how to **arrange them on a page or screen** — the rules of composition.
