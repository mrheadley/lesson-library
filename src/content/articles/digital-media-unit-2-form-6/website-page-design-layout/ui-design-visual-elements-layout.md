---
title: "UI Design: Visual Elements & Layout"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Website Page Design & Layout"
topicId: "website-page-design-layout"
order: 2
---
# UI Design: Visual Elements & Layout

## Every Element on Screen Makes a Promise

When you open an app or land on a webpage, you make judgements in milliseconds. You know where to look first, what matters, and what you can ignore — all before consciously thinking about it. That instinctive reading of a layout is the work of **visual hierarchy**, the silent language of UI design.

Understanding how typography, colour, spacing, and component design guide a user's eye is not decoration. It is architecture. Every pixel is either helping the user or fighting them.

## Visual Hierarchy: Directing the Eye

Visual hierarchy is the arrangement of elements so that the most important information is seen first, the second most important second, and so on. The tools are straightforward:

- **Size** — Bigger elements attract attention first
- **Colour and Contrast** — High-contrast elements pop against neutral backgrounds
- **Spacing** — Isolation through white space draws focus
- **Position** — Top-left receives the most attention in left-to-right reading cultures
- **Weight** — Bold text signals importance over regular text

### F-Pattern and Z-Pattern Scanning

Nielsen Norman Group's eye-tracking research found two dominant scanning patterns. The **F-pattern** appears on text-heavy pages: users read across the top, then scan down the left side, forming an F shape. The **Z-pattern** appears on minimal layouts: the eye moves top-left to top-right, diagonally to bottom-left, then across the bottom.

**Example**: A school event poster benefits from a Z-pattern — the headline sits at the top, the logo or hero image draws the eye diagonally, and the call-to-action (Register Now) lands at the bottom-right.

**Example**: A news blog uses F-pattern scanning — the headline across the top draws a horizontal sweep, then users scan down the left margin reading subheadings, skipping full paragraphs.

### The 8pt Grid System

Professional interfaces use an 8pt grid: all spacing, sizing, and positioning uses multiples of 8 (8, 16, 24, 32, 48, 64). This creates rhythm and consistency without conscious effort. A button with 16px padding looks cohesive with 24px margins between sections because they share a common mathematical relationship.

**Worked Example**: A Caribbean food delivery app sets its card component at 320px wide with 16px internal padding, 24px gap between cards, and 48px sections between page divisions — all multiples of 8. The result feels balanced even though the user never notices the grid.

## Typography: Rhythm and Readability

Typography establishes personality and readability simultaneously. The key principles are:

- **Type Scale** — A consistent ratio (at least 1.25x) between heading levels. If body text is 16px, the next level up is 20px, then 25px, then 31px
- **Line Height** — 1.4 to 1.6 times the font size for body text. 16px text needs 22–26px line height
- **Line Length** — 50 to 75 characters per line for optimal readability. Longer lines cause the eye to lose its place
- **Limit Typefaces** — One or two typefaces maximum. Mix weights (light, regular, bold) and sizes for variety

**Example**: The CXC timetable uses a clear type hierarchy — subject names in bold 16px, dates in regular 14px, and venue details in light 12px. Three levels, one typeface, immediate clarity.

**Analogy**: Think of typography like a soca rhythm section. The bass line (body text) holds everything steady. The snare (subheadings) provides accents. The horn stabs (headlines) are dramatic but brief. If everything is at the same intensity, there is no groove — just noise.

## Colour Systems: Restraint and Purpose

A strong colour palette uses one to three primary colours and reserves saturated, vivid colour for the single most important action on each screen. Everything else stays neutral.

### Colour Palette Structure

- **Primary colour** — The brand's dominant hue. Used sparingly for key actions and branding moments
- **Neutral palette** — Greys and off-whites for backgrounds, text, borders, and secondary elements
- **Accent colour** — One high-contrast colour reserved exclusively for primary CTAs (Call to Action) buttons

### Contrast Ratios

WCAG AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (18pt+). Use a contrast checker tool to verify every text-background combination.

**Worked Example**: A local restaurant's website uses deep maroon (#5C1A1B) as its primary colour for headings and the Reserve a Table button, warm greys for body text (#333333), and an off-white background (#FAFAFA). The maroon button against the off-white background gives a 7.2:1 contrast ratio — well above the 4.5:1 minimum.

**Bad**: Saturated red text on a saturated green background. The colours vibrate against each other, the contrast ratio is low, and colour-blind users (8% of men) cannot distinguish them at all.

## Spacing and White Space: Breathing Room

White space is not wasted space — it is an active design element. It creates focus, groups related items, and reduces cognitive load. The **Gestalt principle of Proximity** states that elements placed close together are perceived as related, while elements spaced apart are perceived as separate.

**Worked Example**: A school's event calendar app. Each event card has 24px internal padding, a 16px gap between the event title and description, and a 32px gap between cards. The generous spacing between cards signals that each event is distinct. Tight spacing between the title and description within a card signals that they belong together.

**Rule of Thumb**: After finalising a layout, try increasing all padding and margins by 20–30%. Interfaces almost always need more breathing room than the designer initially chose.

## Component Design: Communicating Function

Components are reusable UI elements — buttons, cards, input fields, navigation bars. Each must visually communicate its function through affordance (a property that suggests how it can be used).

### Buttons

- **Primary button**: High-contrast fill colour, bold text, rounded corners. Used for the single most important action on the screen
- **Secondary button**: Outlined or ghost style, neutral colour. Used for less important actions
- **Disabled button**: Greyed out, reduced opacity. Signals that the action is currently unavailable

**Touch targets**: Apple's Human Interface Guidelines specify a minimum of 44×44pt for mobile touch targets. WCAG 2.2 requires at least 24×24 CSS pixels. Bigger is better — cramped buttons cause mis-taps.

### Cards

Cards group related information into a scannable unit. A typical card contains an image, a heading, a short description, and a link or button. Cards use shadows or borders to signal that they are tappable or interactive.

**Example**: A tourism website for Trinidad and Tobago might show destination cards — each with a photo of Maracas Beach or the Asa Wright Nature Centre, a location name, a brief description, and a Learn More link. Cards with subtle shadows invite tapping.

### Input Fields

Input fields must signal that they accept text input. A visible border or bottom line, placeholder text, and a blinking cursor on focus all communicate the affordance of typing.

## From Components to Design Systems

When individual components follow the same rules — consistent spacing, shared colour tokens, matching type styles — they form a **design system**. A design system is a collection of reusable components, guidelines, and standards that ensure consistency across a product.

Design tokens (named variables for colours, spacing, font sizes) make this practical. Instead of writing `#5C1A1B` across fifty files, you define `--color-primary` once and reference it everywhere. Changing the brand colour means changing one token, not fifty hex values.

**Example**: You are building a portfolio site for your CAPE project. You define tokens for your two typefaces, three heading sizes, body text style, three grey values, one accent colour, and standard spacing increments (8, 16, 24, 32). Every page you build draws from these tokens — the result is cohesive without being monotonous.

## Common Misconceptions

### "More whitespace means less content fits"
White space improves comprehension. Users absorb information faster and feel less overwhelmed. The content that IS there becomes more effective, not less.

### "I need lots of different fonts to make a design interesting"
One or two typefaces used with varied weights, sizes, and spacing create more professional, cohesive designs than mixing many fonts.

### "Bright, saturated colours everywhere make a design vibrant"
Overuse of saturated colour creates visual noise and fatigues the eye. Reserve saturated accent colour for the single most important action on each screen.

### "If it looks good to me, it's good design"
Design must serve the user, not the designer. What feels intuitive to you may confuse your audience — that is why user testing and heuristic evaluation exist.

### "Design systems are only for huge companies like Google or Apple"
Even a simple project benefits from defining tokens upfront — it saves time and prevents inconsistencies as the project grows.

## Key Terms

| Term | Definition |
|------|-----------|
| Visual Hierarchy | The arrangement of UI elements to guide users through content in a deliberate order of importance |
| White Space | Empty area between design elements used to create focus and group related items |
| Type Scale | A set of predefined font sizes maintaining consistent proportional relationships |
| 8pt Grid | A spacing system where all values are multiples of 8, creating visual consistency |
| Component | A reusable, self-contained UI element such as a button, card, or input field |
| Design Tokens | Named visual attributes (colours, spacing, fonts) stored as variables for consistent application |
| Affordance | A visual cue suggesting how an element can be used |
| Design System | A collection of reusable components, guidelines, and standards ensuring product-wide consistency |

## Summary

UI design is the deliberate use of typography, colour, spacing, and component structure to guide users through content effortlessly. Visual hierarchy — established through size, contrast, spacing, and position — determines what users see first. A restrained colour palette with high-contrast accents communicates priority. Generous white space grouped by the Gestalt principle of Proximity reduces cognitive load. Consistent components built on shared design tokens form systems that scale. Good UI design is invisible when it works; the user feels guided, not manipulated.
