---
title: "Design Workshop: Wireframe a Multi-Page Site"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Website Page Design & Layout"
topicId: "website-page-design-layout"
order: 6
---
# Design Workshop: Wireframing a Multi-Page Site

## Build the Blueprint Before the Building

Before you write a single line of code or choose a single colour, you need to know what you are building. A wireframe is the blueprint — a skeletal representation of a page that shows where content goes, not how it looks.

Skipping wireframing is like building a house without a floor plan. You might end up with a kitchen where the bathroom should be, or a front door that opens into a wall. The 15 minutes you spend wireframing saves hours of rework in development.

## What Wireframes Are (and Are Not)

A wireframe shows:

- **Content placement** — Where does the headline go? The images? The form?
- **Navigation structure** — How do users move between pages?
- **Content hierarchy** — What is the most important element on this page?
- **Functional areas** — Where are buttons, input fields, and interactive elements?

A wireframe does NOT show:

- Colours or fonts
- Final imagery or photography
- Detailed visual styling
- Animations or transitions

**Analogy**: A wireframe is like the pencil sketch of a painting. It captures composition and proportion without committing to colour or detail. You can rearrange the entire composition in 5 minutes — try that after you have spent hours on a digital painting.

## Levels of Fidelity

| Fidelity | What It Includes | When to Use It |
|----------|-----------------|---------------|
| Low-fi | Boxes, lines, rough shapes, placeholder text | Early ideation, exploring layout options quickly |
| Mid-fi | Labeled content areas, approximate proportions, clear navigation | Communicating structure to team members or teachers |
| High-fi | Real content, precise spacing, grey-scale styling | Validating layout with real content before visual design |

Start low-fi. The roughness of a low-fidelity wireframe invites feedback on structure rather than aesthetics. If your wireframe looks polished, people will comment on the colour choices instead of the layout.

## Planning the Site Map First

A site map is a hierarchical diagram showing the structure of a website — all pages and how they relate through navigation. Create this before any individual page wireframe.

### Minimum Multi-Page Structure

A functional site requires at minimum:

1. **Home page** — The entry point, the overview
2. **About / Info page** — Who or what the site represents
3. **Content page(s)** — The primary content (one or more)
4. **Contact page** — How to get in touch

### Building a Site Map

**Worked Example**: A portfolio site for a CAPE Digital Media project:

```
Home
├── About Me
├── Projects
│   ├── Photography
│   ├── Video
│   └── Web Design
├── Blog
└── Contact
```

This hierarchy tells you everything before you start wireframing: six pages, three of which are sub-pages under Projects, a clear navigation path from Home to any content.

**Worked Example**: A local tourism site for Trinidad and Tobago:

```
Home
├── Destinations
│   ├── North Coast
│   ├── South and Central
│   └── Tobago
├── Activities
├── Plan Your Trip
│   ├── Getting Here
│   └── Accommodation
└── Contact Us
```

## Mobile-First Wireframing

Start wireframing at 375px width (standard phone), then expand to 768px (tablet), then 1024px (desktop). This forces you to prioritise essential content.

### At 375px (Phone)

- Single-column layout
- Hamburger menu for navigation
- Hero image or headline fills the screen
- Content stacked vertically in priority order
- Large, tappable buttons (minimum 44×44pt)

### At 768px (Tablet)

- Two-column layouts become possible
- Navigation may expand to a horizontal bar
- Cards and content blocks can sit side by side
- Generous spacing between elements

### At 1024px (Desktop)

- Full layout with sidebar, multi-column grids
- Navigation fully expanded with dropdowns if needed
- Maximum content width of 1200px to prevent overly long line lengths
- Hover states and richer interactions

**Worked Example**: Wireframing a school event page:

- **Phone**: Event title at top (full width), single hero image, event details stacked below, Register button at bottom (full width, high contrast)
- **Tablet**: Title and image side by side (50/50 split), details in two columns, Register button right-aligned
- **Desktop**: Three-column layout — image left, details centre, registration form right with sidebar for related events

## Annotation: Communicating What Wireframes Cannot Show

Static wireframes cannot show hover states, click behaviours, transitions, or form validation. Annotation adds these details as written notes.

### Annotation Conventions

- **Numbered callouts** — Assign numbers to interactive elements and describe their behaviour in a separate list
- **Sticky notes** — Digital or physical sticky notes attached to specific elements
- **State descriptions** — Note what happens when: default state, hover state, active state, loading state, error state, empty state

**Worked Example**: A wireframe for a contact form page:

1. Name field — Required. Placeholder text: "Enter your full name"
2. Email field — Required. Validates email format on blur. Shows error if invalid
3. Message field — Required. Minimum 20 characters. Character counter shown
4. Submit button — Disabled until all fields pass validation
5. On success — Show confirmation message: "Your message has been sent. We will respond within 48 hours"
6. On error — Show inline error messages next to the relevant field

## The States You Must Wireframe

Every screen needs more than the default state. Wireframe these too:

- **Default state** — The normal, resting appearance
- **Empty state** — No content to display (empty inbox, no search results)
- **Error state** — Something went wrong (form validation error, failed connection)
- **Loading state** — Content is being fetched (spinner, skeleton screen)
- **Success state** — Action completed (confirmation message, thank-you screen)

**Worked Example**: A class voting system for student council elections needs wireframes for:

- **Default** — List of candidates with photos and positions
- **Empty** — "No elections currently active" message
- **Loading** — "Fetching results..." with a skeleton placeholder
- **Error** — "Unable to load results. Please try again."
- **Success** — "Your vote has been recorded" confirmation
- **Already Voted** — "You have already voted in this election" with no voting buttons

## Reviewing Wireframes as a Flow

Never review wireframes as isolated screens. Walk through the complete user journey — from landing on the homepage, navigating to the target page, performing the action, and reaching the confirmation screen. This reveals gaps that individual screen reviews miss.

**Worked Example**: Walking through a school event registration flow:

1. User lands on the Events page — sees a list of upcoming events
2. User taps "Carnival Friday" — sees event details
3. User taps "Register" — sees the registration form
4. User fills in the form and taps Submit — sees confirmation

At which step does the user get lost? What if they want to go back from step 3 to step 2? What if the form has an error at step 4? Each transition needs a wireframe.

## Tools for Wireframing

- **Pen and Paper** — Fastest for initial ideation. No learning curve. Every professional UX designer starts here
- **Balsamiq** — Sketch-style, intentionally rough to prevent premature design discussions
- **Figma** — Free tier available, most widely used in industry. Auto-layout for responsive wireframes, component variants for different states
- **Whimsical** — Fast and simple, ideal for quick site maps and wireframes

**Practical recommendation**: Start every project on paper. Spend 10–15 minutes sketching layout ideas. Then move to Figma or Balsamiq to create cleaner versions for sharing.

## Design Systems in Wireframes

Even wireframes should show consistency. Use the same button shape, input field style, and spacing patterns across all pages. This means:

- Same button corner radius on every page
- Same input field height and padding
- Same spacing between content blocks (use multiples of 8 from Lesson 61)
- Same heading hierarchy (H1, H2, H3 used consistently)

**Worked Example**: If your wireframe uses a button that is 48px tall with 16px horizontal padding and a 4px corner radius, every button on every page of the wireframe should match that specification. Consistency in wireframes signals consistency in the final product.

## Common Misconceptions

### "Wireframes need to look polished"
The whole point of low-fidelity wireframes is to be rough — polish invites feedback on aesthetics rather than structure. Save polish for high-fidelity prototypes.

### "I can skip wireframing and go straight to coding"
Jumping to code without wireframing means making structural decisions during implementation, which is expensive to change. A 15-minute wireframe can save hours of refactoring.

### "One wireframe per page is enough"
Each page may need multiple wireframes showing different states: default, loading, error, empty, and success. A form page needs at minimum the empty form and the validation error states.

### "Wireframes are just for designers"
Wireframes are communication tools for the entire team — developers use them to understand structure, stakeholders use them to approve scope, and content creators use them to know what content to prepare.

### "A site map is optional for small sites"
Even a 4-page site benefits from a site map — it forces you to think about navigation and hierarchy before getting lost in individual page details.

### "Paper sketches aren't professional"
Many professional UX designers start every project on paper. Paper is the fastest, cheapest, lowest-stakes way to explore layout ideas. Digital tools come after the initial concept is validated.

## Key Terms

| Term | Definition |
|------|-----------|
| Wireframe | A low-fidelity visual guide representing the skeletal framework of a page |
| Site Map | A hierarchical diagram showing all pages and their navigation relationships |
| Fidelity | The level of detail in a design artifact — low is rough, high is detailed |
| Annotation | Written notes on wireframes describing interactions, states, and behaviours |
| Empty State | The screen shown when there is no content to display |
| Error State | The screen shown when something goes wrong |
| Auto-Layout | A Figma feature that spaces and aligns elements automatically for responsive wireframes |
| Low-Fidelity | A basic wireframe using simple shapes and placeholder text, no visual design |

## Summary

Wireframing is the practice of creating skeletal page layouts before committing to visual design or code. A site map should be created first to establish page hierarchy. Wireframing starts mobile-first at 375px, expanding to tablet and desktop breakpoints. Annotation communicates interactions, states, and behaviours that static wireframes cannot show. Every screen needs multiple states — default, empty, error, loading, and success. Wireframes should be reviewed as complete user flows, not isolated screens. Tools range from pen and paper (fastest) to Figma (industry standard). Low-fidelity wireframes invite structural feedback; save polish for later.
