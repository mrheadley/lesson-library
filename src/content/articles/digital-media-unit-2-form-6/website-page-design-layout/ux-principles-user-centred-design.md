---
title: "UX Principles: User-Centred Design"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Website Page Design & Layout"
topicId: "website-page-design-layout"
order: 1
---
# User-Centred Design Principles

## Design for People, Not for Portfolios

A website can be visually stunning and still be a failure — if users can't find what they need, complete tasks, or understand how to interact with it. **User-Centred Design (UCD)** is the discipline of putting the user's needs, goals, and limitations at the centre of every design decision.

The core principle is simple: **understand the user, design for the user, test with the user, iterate based on feedback.** Designers are not their own users — assumptions must be validated.

## The UCD Cycle

UCD is not a one-time step. It's a continuous loop:

1. **Research** — Who are the users? What do they need? What are their constraints?
2. **Design** — Create solutions based on research, not assumptions
3. **Prototype** — Build quick, testable versions (paper sketches, wireframes, clickable mockups)
4. **Test** — Watch real users interact with the prototype
5. **Iterate** — Fix what's broken, refine what works, repeat

Each cycle brings the design closer to what users actually need.

## Nielsen's 10 Usability Heuristics

Jakob Nielsen's 10 heuristics (1994) are the most widely referenced principles in UX design. They're not rules — they're **thinking tools** that help you evaluate and improve interfaces.

### 1. Visibility of System Status
The system should always keep users informed about what's happening through appropriate feedback within a reasonable time.

**Examples**: Loading spinners, progress bars, confirmation messages ("Your message has been sent"), file upload indicators.

**Bad**: Clicking a button with no feedback — did it work? Is it loading? Did nothing happen?

### 2. Match Between System and Real World
Use language, concepts, and conventions that users are familiar with. Don't use technical jargon or system-oriented terms.

**Examples**: A trash bin icon for "delete," a shopping cart icon for "basket," using "Search" instead of "Query Execution Interface."

**Bad**: Error message says "Exception 0x80070005" instead of "You don't have permission to do that."

### 3. User Control and Freedom
Users make mistakes. Provide undo, back, and escape routes.

**Examples**: Gmail's "Undo Send," the back button, "Cancel" on a form, confirmation before destructive actions.

**Bad**: No way to go back after submitting a form, no undo for accidental deletion.

### 4. Consistency and Standards
Follow platform conventions and maintain internal consistency within your own design.

**Examples**: A back button in the same place on every page, consistent button styles, following iOS/Android design patterns on their respective platforms.

**Bad**: The "Save" button is green on one page and red on another. Links look like plain text on some pages and underlined on others.

### 5. Error Prevention
Design to prevent errors before they occur, rather than relying on error messages.

**Examples**: Confirmation dialogs before destructive actions ("Are you sure you want to delete this?"), input validation (showing "Password must be at least 8 characters" as the user types), disabling buttons when required fields are empty.

**Bad**: Letting users submit a form with invalid email format, then showing an error after submission.

### 6. Recognition Rather Than Recall
Make options, actions, and information visible. Don't rely on users remembering things from previous screens.

**Examples**: Breadcrumbs showing navigation path, recently viewed items, visible toolbar buttons instead of keyboard-only shortcuts.

**Bad**: A search interface that requires users to remember the exact syntax of a previous search.

### 7. Flexibility and Efficiency of Use
Support both novice and expert users. Shortcuts and customisations speed up interaction for experienced users.

**Examples**: Keyboard shortcuts (Ctrl+C, Ctrl+V), customisable toolbars, "Remember me" options, recently used lists.

**Bad**: Requiring every user to go through the same 10-step process regardless of experience.

### 8. Aesthetic and Minimalist Design
Show only relevant information. Every extra unit of information competes with relevant units and diminishes their relative visibility.

**Examples**: Clean layouts, progressive disclosure (showing advanced options only when requested), minimal form fields.

**Bad**: A homepage with 20 different CTAs, pop-ups, banners, and competing visual elements.

### 9. Help Users Recognise, Diagnose, and Recover from Errors
Error messages should be expressed in plain language (no codes), precisely indicate the problem, and suggest a solution.

**Examples**: "Password must be at least 8 characters and include a number" (specific, actionable). "Your session has expired. Please log in again." (clear, with next step).

**Bad**: "Error 500." "Something went wrong." "Invalid input."

### 10. Help and Documentation
Provide accessible help when needed, but design the interface so documentation is rarely necessary.

**Examples**: Tooltips on complex features, a searchable help centre, onboarding tours for new users.

**Bad**: Requiring users to read a 50-page manual before they can use the product.

## Don Norman's Design Principles

From *The Design of Everyday Things*, these concepts explain how people interact with physical and digital objects:

### Affordances
Properties of an object that suggest how it can be used. A button *affords* pressing. A text field *affords* typing. A slider *affords* dragging.

In digital design, affordances are communicated through visual cues: a raised button looks pressable, a text field with a blinking cursor invites typing.

### Signifiers
Visual or physical indicators that communicate where and how to take action. Underlined text signifies a link. A magnifying glass icon signifies search. A hamburger icon signifies a menu.

Signifiers are more specific than affordances — they tell you *where* to interact, not just *what* interactions are possible.

### Feedback
Immediate confirmation that an action was registered. A button changes colour when clicked. A form shows "Submitted successfully." A file upload shows a progress bar.

Without feedback, users don't know if their action worked — leading to repeated clicks, frustration, and errors.

### Constraints
Limiting possible actions to prevent errors. Greyed-out disabled buttons, character limits in text fields, date pickers instead of free-text date entry.

Constraints guide users toward correct actions and prevent them from making mistakes.

## Usability Testing: Five Users Is Enough

Research consistently shows that testing with just **5 users** reveals approximately **85% of usability problems** (Nielsen Norman Group). You don't need large sample sizes, expensive labs, or professional testers.

### Guerrilla Testing
The fastest, cheapest way to test:

1. Find 3–5 people in your target audience (classmates work fine)
2. Give them a task: "Find the school's phone number on this website"
3. Ask them to **think aloud** — narrate what they're doing and thinking
4. Observe where they hesitate, get confused, or make errors
5. Don't help them — let them struggle (this reveals real problems)

### What to Look For
- Where do users hesitate?
- Where do they click that isn't clickable?
- Where do they go back and try again?
- Do they complete the task? How long does it take?
- What do they say when they're confused?

## Applying Heuristics: A Worked Example

Imagine you're evaluating a classmate's website. Walk through each heuristic:

1. **Visibility**: Does the page show a loading indicator? Can I tell what's happening?
2. **Real world**: Are the navigation labels in plain language? Would my mum understand them?
3. **Control**: Is there a back button? Can I undo actions?
4. **Consistency**: Do buttons look the same on every page? Is the nav in the same place?
5. **Error prevention**: Does the form validate input before submission?
6. **Recognition**: Can I see my current location (breadcrumbs, highlighted nav)?
7. **Efficiency**: Are there shortcuts for common actions?
8. **Minimalism**: Is there unnecessary clutter competing for my attention?
9. **Error messages**: If I make a mistake, is the message clear and helpful?
10. **Help**: Is help accessible if I need it?

## Common Misconceptions

### "If it looks good, it works well"
Visual design and usability are different things. A beautiful interface can be confusing; a plain interface can be effortless. Good UX serves the user, not the designer's portfolio.

### "Users will read the instructions"
Users rarely read instructions — they try to accomplish tasks and refer to help only when stuck. Design for intuitive use, not for trained use.

### "UX is just about usability"
UX also encompasses usefulness, desirability, accessibility, and credibility. A product can be easy to use but useless — that's not good UX.

### "You need a big budget for user testing"
Guerrilla testing with 5 classmates is cheap, fast, and reveals the most critical issues. You don't need a lab, professional testers, or expensive tools.

## Key Terms

| Term | Definition |
|------|-----------|
| User-Centred Design | Iterative process focusing on understanding and meeting user needs |
| Heuristic evaluation | Expert review against established usability principles |
| Affordance | A property suggesting how an object can be used |
| Signifier | A visual cue indicating where to interact |
| Usability testing | Observing real users attempting tasks to find problems |
| Fitts's Law | Time to reach a target is a function of its distance and size |

## Summary

User-Centred Design puts the user at the centre of every decision. Nielsen's 10 heuristics and Don Norman's design principles provide frameworks for evaluating and improving interfaces. Usability testing — even guerrilla testing with 5 people — reveals the real problems that designer assumptions miss. The goal is not a beautiful interface; it's an interface that works for the people who use it.
