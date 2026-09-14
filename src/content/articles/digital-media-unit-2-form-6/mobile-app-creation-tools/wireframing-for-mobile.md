---
title: "Wireframing for Mobile"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Mobile App Creation Tools"
topicId: "mobile-app-creation-tools"
order: 2
---
# Wireframing for Mobile: Thumb Reach, Navigation and Screen Flow

## A Skeleton Before the Skin

A **wireframe** is the skeletal layout of a screen — structure, content and navigation, deliberately without colour, photos or final typography. Mobile wireframing applies the web wireframing method from the Lesson 65 workshop to the small, one-handed, on-the-go screen: you map where things go and how users move between screens *before* anyone cares what it looks like. You build directly on the user stories of Lesson 127 — each story implies screens, and the wireframe makes them concrete. The rule from the web lesson still holds: keep wireframes **annotation-faithful**. A static frame cannot show an empty state, an error, a loading spinner or a transition, so annotate them — the comments are part of the wireframe.

**Fidelity** is a spectrum, and you move along it deliberately. **Low-fidelity** wireframes are rough boxes, lines and placeholders — fast, cheap, and perfect for sorting out structure and flow, because reviewers focus on layout rather than polish (that is the point of the sketchy look). **High-fidelity** wireframes are pixel-accurate and often interactive; they specify the build. Starting high-fidelity wastes time polishing a structure that may be wrong — a cheap low-fidelity pass finds flow problems first.

## Navigation: The Backbone of a Mobile App

Navigation decides whether users find what they need or quietly leave in **10–15 seconds** — poor mobile navigation measurably loses users, and mobile traffic dominates, so this is not a decoration decision. The mobile standards are clear:

- **Bottom tab bars** (3–5 destinations) are the mobile standard. They sit in the **thumb zone**, stay always visible, and both Apple's Human Interface Guidelines and Google's Material Design recommend them for primary sections precisely because they are thumb-reachable.
- **Hamburger menus / drawers** hide the full navigation behind a top-corner icon. They get used less, and tapping them requires reaching across the top of the screen. Reserve them for secondary or overflow destinations, not your primary sections.
- **Gestures** are mobile-native, but limited: the proven trio is **swipe to go back**, **swipe-up to dismiss/close**, and **long-press for a context menu**. Anything invented beyond these is undiscoverable — a gesture users cannot discover is a failed design. Always pair gestures with visible affordances.

More than five bottom tabs becomes unreadable; the standard is 3–5 primary destinations with anything else in a secondary menu.

## The Thumb Zone: Design One-Handed

Roughly **60% or more** of mobile use is one-handed, so a fundamental mobile question is: what can one thumb reach comfortably? The comfortable area is the **bottom-centre** of the screen (the green zone); the top corners are the hardest to reach (the red zone), and the middle band is a stretch (the yellow). The consequence is a design rule, not a style: **primary actions belong low.** If your key button lives in a top corner, a one-handed user either juggles the phone or gives up.

Touch targets matter too: a tap target should be about **44×44 px minimum, with 48×48 px recommended**, to prevent mis-taps on a moving bus or with one hand. The walking check from the evaluation workshop applies at the wireframe stage: hold the phone one-handed, mark where your thumb comfortably reaches, and wireframe your key actions inside that zone.

## Worked Walkthrough: A Street-Food Ordering App

A group is wireframing the class's street-food ordering concept (the Caribbean context: mobile-first, prepaid data, one-handed use). From the Lesson 127 stories they derive five screens: Home, Menu, Item Detail, Order Confirmation and Checkout.

**Navigation pattern choice:** they pick a **bottom tab bar** with four destinations — Home, Menu, Cart, Orders — and argue it against the hamburger: the four are primary, always-needed sections, so hiding them behind a drawer would both hide core navigation and push taps out of the thumb zone. The 3–5 destination rule is satisfied. A fifth area, "Settings," goes in a secondary menu.

**Thumb-zone decisions:** the primary "Add to order" button on the Item Detail screen is wired at the **bottom, inside the green zone**, full-width and at least 48 px tall. The cart is a bottom tab, not a top-corner icon, so the running total and checkout are one thumb away. The earlier "Confirm" button that got flagged out of reach in Lesson 126's walking check is deliberately moved to the bottom band.

**Gesture decisions:** the confirmation success screen can be **swiped up to dismiss** — but it also shows a visible "Done" button, so the gesture is a shortcut, not the only way. Long-press on a menu item opens a context "Add extra" sheet, paired with a small visible hint on first use.

**Annotations:** the Menu screen is annotated with an empty state (a tray graphic + "No items yet" when the vendor has nothing listed), a loading state (spinner while the menu fetches on prepaid data), and an error state (a retry message if the connection drops, referencing the bandwidth lesson's design pattern). Transitions between Home, Menu and Cart are marked as slide transitions; the confirmation is a modal overlay.

The walkthrough produces five wireframes, one navigation decision, three thumb-zone placements, two gesture annotations and three states annotated — that is a complete, reviewable base for the visual design that follows.

## The Tool Landscape, Classroom Realities

Wireframing does not need paid software. The classroom path that matches the region's student-device realities (Lesson 106): **paper first** — sketch the core screens by hand before any tool, because five minutes of sketching clarifies which screens must actually exist; then move into **Figma**, the leading all-in-one choice in 2026, with a free Starter plan, real-time collaboration, low-to-high fidelity in one file and developer handoff — the best free path for students. Use a **375px mobile frame** as a baseline.

The alternatives are worth knowing. **Balsamiq** remains the best fast low-fidelity option — its intentionally sketchy look keeps feedback on structure — but Balsamiq Desktop sales end in December 2026 and there is no free tier. **Miro** (free tier) suits team brainstorming, **Whimsical** (free tier) and **Excalidraw** (free, open-source) cover quick sketching, and **Penpot** is an open-source Figma alternative. AI-assisted drafting tools (Uizard, Visily, Figma Make) can speed up screen production, but they do not replace structured flow-mapping: the right screens still need human reasoning, and a fast wrong screen is still wrong.

## Common Misconceptions

### "Wireframing is only for graphic designers"
Anyone can wireframe — it is about structure and flow, not artistry. Students can do it with paper and a pencil.

### "High-fidelity is always better to start"
Starting high-fidelity wastes time on polish before the structure is right; a cheap low-fidelity pass finds flow problems first.

### "The hamburger menu is the standard for apps"
Hidden navigation gets used less and sits out of thumb reach. Bottom tabs are the app standard; the hamburger is for overflow and secondary sections.

### "Gestures are always great because they feel modern"
Gestures users cannot discover fail. Mobile design pairs gestures with visible controls and sticks to the proven trio.

### "Wireframes must show the finished, polished design"
Wireframes deliberately avoid colour, photos and typography so reviewers focus on structure — polish comes later.

### "Tab number doesn't matter"
More than five bottom tabs becomes unreadable. The standard is 3–5 primary destinations, with anything else in a secondary menu.

## Key Terms

| Term | Definition |
|------|-----------|
| Wireframe | A low-fidelity skeletal layout of a screen showing structure, content and navigation, not visuals |
| Fidelity | The level of detail and realism — from rough boxes (low) to near-final interactive (high) |
| Navigation pattern | The chosen way users move between an app's areas (bottom tabs, hamburger drawer, gestures) |
| Bottom tab bar | Primary navigation icons and labels fixed to the bottom edge, within thumb reach |
| Hamburger menu / drawer | A top-corner icon that slides out the full navigation — hides options, for deep or secondary sections |
| Thumb zone | The screen area a thumb can comfortably reach one-handed — easy at the bottom-centre, hardest in the top corners |
| Gesture navigation | Moving through an app with swipes or presses rather than taps on visible controls |
| Touch target | The tappable area of a control — about 44×48 px minimum recommended |

## Summary

Mobile wireframing is the skeleton of app screens before the visual design — deliberate **fidelity** progression (low → high), always **annotation-faithful** for states and gestures. **Navigation** is the backbone: bottom tab bars of 3–5 destinations are the mobile standard for primary sections, hamburger drawers are for overflow, and gestures stay within the proven trio of swipe-back, swipe-up dismissal and long-press. **Thumb-zone design** is the mobile rule: around 60% of use is one-handed, so primary actions belong in the bottom-centre zone with 44×48 px touch targets. The classroom path is paper first, then a free Figma project on a 375px frame, with Balsamiq, Miro, Whimsical and Excalidraw as alternatives — all chosen with the region's device realities in view. The result of a good mobile wireframe is not a prettier screen but a structure that survives the one-handed, on-the-go reality of its users.
