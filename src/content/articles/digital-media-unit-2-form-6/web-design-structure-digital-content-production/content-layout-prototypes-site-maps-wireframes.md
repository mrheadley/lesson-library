---
title: "Content Layout Prototypes, Site Maps, Wireframes"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Web Design, Structure & Digital Content Production"
topicId: "web-design-structure-digital-content-production"
order: 1
---
# Web Design: Content Layout Prototypes (Concept Maps, Navigational Charts, Site Maps, Hierarchy Maps)

## Introduction

Every website you've ever used — Instagram, Wikipedia, your school's portal — started as an idea. Before a single line of HTML was written, someone had to answer some fundamental questions: *What goes where? How do users get from A to B? Which content matters most?*

Content layout prototypes are the tools that answer those questions. They let you plan, test, and communicate the structure of a website before committing to code. In this lesson, we'll explore four types of layout prototypes — concept maps, navigational charts, site maps, and hierarchy maps — and learn how each one contributes to building websites that make sense to the people who use them.

---

## Part 1: Why Prototype at All?

### The Cost of Building Without Planning

Imagine you spent two weeks painting a house, only to realise the floor plan doesn't work — the living room leads to a dead end, the kitchen has no door to the hallway, and the bathroom is where the kitchen should be. You'd have to tear down walls and start over.

Building a website without prototyping has the same problem. Code is expensive to write, expensive to revise, and confusing to untangle once features are tangled together. Prototypes catch these problems when changes cost minutes, not days.

### What Prototyping Gives You

| Benefit | What It Means |
|---------|---------------|
| **Test ideas quickly** | Try multiple approaches in hours instead of days |
| **Identify usability issues early** | Users get confused by your layout? Change a sketch, not your codebase |
| **Communicate design intent** | Show your teacher, team, or client what you're building before you build it |
| **Validate user flows** | Does the path from "landing page" to "sign up" make sense? A prototype reveals it |
| **Save development time** | Every hour spent prototyping saves 3–10 hours of rework later |

### A Common Misconception: "Prototyping Is Just Making Pretty Pictures"

This is the biggest misunderstanding students have about prototyping. A prototype is not a finished product — it's a **thinking tool**. It exists to help you explore questions: *Should the navigation be at the top or the side? Is this page too cluttered? Can users find what they need?*

You don't need fancy software. You don't need design talent. You need a pencil, paper, and willingness to sketch rough ideas and test them with other people. The "roughness" is a feature, not a flaw — it invites honest feedback and makes it easy to change your mind.

### Fidelity Levels: Matching Detail to Purpose

Not every prototype needs to look polished. The right level of detail depends on the question you're trying to answer.

**Low-fidelity (paper sketches, whiteboards)**
- Purpose: Explore ideas, layouts, and user flows
- Speed: Minutes per sketch
- Example: Drawing a homepage layout on a sheet of paper with boxes and labels
- Best for: Early brainstorming, getting feedback on structure

**Medium-fidelity (digital wireframes)**
- Purpose: Define layout, spacing, and content placement
- Speed: Hours per screen
- Example: Using Figma or even Google Slides to create grayscale wireframes with placeholder text
- Best for: Refining structure, presenting to stakeholders, getting sign-off on layout

**High-fidelity (interactive mockups)**
- Purpose: Simulate the real look and feel with realistic content
- Speed: Days per screen
- Example: A clickable Figma prototype that looks nearly like the finished site
- Best for: User testing, presentations, final design decisions

**Live prototypes (coded versions)**
- Purpose: Test real interactions with real code
- Speed: Days to weeks
- Example: A static HTML/CSS site with basic JavaScript for navigation
- Best for: Testing performance, accessibility, and real-world behaviour

*Rule of thumb:* Start low-fidelity and increase fidelity only when you've answered the big questions. There's no point polishing pixel-perfect buttons if you haven't decided where the navigation should go.

---

## Part 2: Concept Maps — A Family Tree for Ideas

### What Is a Concept Map?

A concept map visualises the relationships between ideas, concepts, or pieces of information. Think of it as a **family tree for your website's content** — it shows how concepts are related to each other, which ones are parents of others, and which ones connect across branches.

Just like a family tree shows you that your grandmother, your uncle, and your cousin are all connected through different paths, a concept map shows you that "Contact Us" connects to both "Customer Support" and "Find a Store" — even though they live in different sections of the site.

### Structure: Nodes, Links, and Hierarchy

Every concept map has four key elements:

**Nodes** — The concepts themselves, represented as boxes, circles, or bubbles. Each node is one idea, one topic, or one piece of content. For a school website, nodes might be: "Academics," "Admissions," "Student Life," "About Us."

**Links** — Lines connecting nodes, showing relationships. Good concept maps label their links with a verb or phrase: "Academics *includes* Science Department," "Admissions *requires* Application Form." Unlabelled lines are ambiguous — always write what the connection means.

**Hierarchy** — The most general concepts go at the top; specific ones go below. For a music streaming app, "Browse Music" might be the top node, with "Playlists," "Artists," and "Albums" branching beneath it, and specific playlist names beneath that.

**Cross-links** — Connections between different branches of the map. A cross-link might show that "Student Events" in the "Student Life" branch connects to "Academic Calendar" in the "Academics" branch, because events need to avoid exam weeks.

### Why Concept Maps Matter for Web Design

Before you design individual pages, you need to understand how all the pieces of your site relate. A concept map helps you:

- **Brainstorm and organise thoughts** — Dump every idea onto paper, then find connections
- **Understand complex topics** — Mapping out a site with 20+ pages reveals which areas are dense and which are thin
- **Plan content relationships** — Which pages should link to each other? What should live where?
- **Communicate structure** — Show your teacher or team a bird's-eye view of the entire project

### Worked Example: School Website Concept Map

Imagine you're building a website for your school. Start with the central concept: **"School Website."**

From there, branch outward:

```
                    School Website
                   /      |       \
            Academics  Student Life  Admissions
           /     |        |      \       |
    Science  Arts     Events  Sports   Apply Now
     \       /         |        |
   Lab      Music    Calendar  Teams
   Reports  Dept
```

Now add cross-links:
- "Events" connects to "Academic Calendar" (events must not conflict with exams)
- "Apply Now" connects to "Academics" (parents want to know what programmes exist)
- "Sports" connects to "Student Life" (teams are part of the broader student experience)

### Creating a Concept Map: Step by Step

1. **Identify your central concept** — What is this site about?
2. **Brainstorm related ideas** — Write down every topic, feature, or content type. No judgement.
3. **Organise hierarchically** — Put the most important/broad concepts at the top. Put specific ones below.
4. **Group thematically** — Cluster related concepts together into branches.
5. **Connect with labelled links** — Draw lines between related nodes. Label each line with what the relationship means.
6. **Add cross-links** — Find connections between different branches.
7. **Review and refine** — Does the map make sense? Are there orphaned concepts with no connections? Are there too many things in one branch?

---

## Part 3: Navigational Charts — Road Signs for Your Website

### What Is a Navigational Chart?

Navigational charts map out how users will move through a website or application. If a concept map shows *what content exists*, a navigational chart shows *how users get from one piece of content to another*.

Think of navigational charts as **road signs**. A road sign tells you where you are ("You are here"), where you can go ("Downtown → 2km"), and how to get back ("← Return to Highway 1"). Good navigation does the same thing: users always know where they are, where they can go, and how to get back.

### Types of Navigation

Every well-designed website uses multiple navigation types, each serving a different purpose:

**Global navigation** — The primary menu, usually in the header, present on every page. It provides access to the main sections of the site. On Instagram, this is the row of icons at the bottom of your phone screen. On a school website, it might be: Home | Academics | Student Life | Admissions | Contact.

**Local (sectional) navigation** — A menu specific to one section or subsection. On an e-commerce site, the global navigation might say "Products," but the local navigation within "Products" lets you browse by category, price, or brand.

**Contextual navigation** — Links relevant to the current content, embedded within the page itself. Breadcrumbs ("Home > Products > Laptops > MacBook Pro"), related articles, or "People who bought this also bought..." are all contextual navigation. It answers: *What else is relevant to what I'm looking at right now?*

**Utility navigation** — Items for account management and tools: login, search, settings, help. These are usually in the top-right corner or a separate utility bar. They're not about content — they're about actions.

### Best Practices

**Clear, concise labels** — "About Us" not "Information Regarding Our Organisation's History and Mission." Users scan labels; long labels don't get read.

**Consistent placement and styling** — The navigation should be in the same place on every page and look the same. Consistency builds user confidence.

**Logical grouping** — Related items belong together. Don't mix "Contact Us" between "Blog" and "Careers" unless there's a clear reason.

**Active states** — When a user is on a page, the corresponding navigation item should look different (bold, underlined, highlighted). Users need to know where they are.

**Accessibility** — Navigation must work with keyboard controls and screen readers. Not every user navigates with a mouse.

### Design Considerations: Mobile vs. Desktop

Navigation doesn't look the same on every device, and that's intentional:

- **Desktop:** Horizontal navigation bars with dropdown menus work well because there's screen space. Mega menus (large dropdown panels showing many options at once) work for sites with deep content.
- **Mobile:** The hamburger menu (three horizontal lines ≡) collapses the navigation into a compact icon. It saves space but hides content — use it sparingly and test that users can find it.
- **Sticky/fixed navigation:** Navigation that stays visible as you scroll. It reduces the effort of finding the menu on long pages. Common on news sites and e-commerce.

### Worked Example: Navigational Chart for a Music Streaming App

```
Global Navigation (bottom bar):
[Home] [Search] [Library] [Profile]

Home:
  ├── Recently Played (horizontal scroll)
  ├── Featured Playlists
  └── Daily Mix

Search:
  ├── Browse by Genre
  ├── Search Bar
  └── Trending

Library:
  ├── Playlists
  │     ├── Created by You
  │     └── Saved from Others
  ├── Albums
  ├── Artists
  └── Downloaded

Profile:
  ├── Account Settings
  ├── Notifications
  └── Help
```

Notice how each section has its own local navigation, and utility items (settings, help) live under Profile. The global navigation is always visible at the bottom, so users never feel lost.

---

## Part 4: Site Maps — The Floor Plan of Your Website

### What Is a Site Map?

A site map is a hierarchical diagram showing **all the pages on a website and how they relate to each other**. It's the floor plan of your digital building — it shows you how all the rooms connect before you start decorating.

Every building has a floor plan. A house has an entrance, a hallway, a living room, a kitchen, bedrooms, and a bathroom. Some rooms connect directly to the hallway; others connect through other rooms. A site map does the same thing for a website: it shows every page and every connection, so you can see the full structure at a glance.

### Two Kinds of Site Maps

**Visual site maps** — Hierarchical diagrams designed for humans. Home page at the top, main sections branching out, subpages beneath each section. These are planning and communication tools. They answer: *What pages exist, and how do they connect?*

**XML site maps** — Files designed for search engines. An XML site map is a structured list of every URL on your site, sometimes with metadata (when the page was last updated, how important it is). These help search engines like Google discover and index all your pages, especially on large or complex sites where not every page is easily found through links alone.

For this course, you'll primarily work with visual site maps — but it's good to know that the machine-readable version exists.

### Why Site Maps Matter

- **Planning information architecture** — Deciding what content goes where, before building pages
- **Communicating scope** — Showing your teacher or client the full extent of the project
- **Identifying orphaned pages** — Pages that aren't linked from anywhere else are effectively invisible; a site map reveals them
- **Planning user flows** — Tracing the path a user takes from entry to goal
- **SEO planning** — Ensuring every page is discoverable by search engines

### Creating Effective Site Maps

**Start with user goals, not your organisational chart.** Users don't care about your school's internal departments — they care about finding information. Structure the site around what users want to accomplish, not how your organisation is structured.

**Limit depth to three levels (ideally).** If a user has to click more than three times to reach important content, the structure is too deep. Flat, wide structures are easier to navigate than deep, narrow ones.

**Use clear, descriptive labels.** "Programmes" is better than "Academic Offerings." "Apply" is better than "Admissions Portal Access."

**Review with actual users.** Show your site map to someone who isn't on the design team. Ask them to find specific information. If they can't, your structure needs work.

### Worked Example: Visual Site Map for a Restaurant Website

```
                         Home
           /        /      |      \        \
       Menu    Reservations  About   Gallery  Contact
        |           |          |        |        |
     /  |  \     Book Now   Story    Photos   Map + Hours
  Lunch Dinner  Events     Team     Food      Address
  Drinks          Chef              Video
  Specials
```

Notice:
- **Depth is limited** — No page is more than two clicks from Home
- **Labels are clear** — "Book Now" instead of "Reservation Request Form"
- **User goals drive the structure** — People want to see the menu, book a table, or find the restaurant. The site is built around those goals.
- **"Gallery" exists** because restaurants are visual — food photos drive bookings

### Common Site Map Mistakes

1. **Organisation-first structure** — Building the site around your org chart instead of user needs. Users don't care that your school has separate "Academic Affairs" and "Student Affairs" departments — they want to find "Maths classes" and "Student clubs."
2. **Too many pages at the same level** — If your home page has 15 direct children, you need to group them into sub-sections.
3. **Orphaned pages** — Pages that exist but aren't linked from the navigation or site map. They're invisible to users and search engines.
4. **No clear hierarchy** — Everything at the same level means nothing stands out.

---

## Part 5: Hierarchy Maps — Telling the Eye What Matters

### What Is a Hierarchy Map?

A hierarchy map shows the **relative importance of elements** on a page or across a system. It answers: *When a user lands on this page, what will they see first, second, and third?*

Every time you visit a website, your eyes follow a hierarchy. You don't read every element simultaneously — your eye is drawn to large text first, then to images, then to buttons, then to smaller text. Hierarchy maps plan this visual journey deliberately, so the most important things get attention first.

### Visual Hierarchy: What the Eye Sees First

The human eye follows predictable patterns. Designers use five tools to guide it:

**Size** — Larger elements are perceived as more important. A headline grabs attention before body text. On a landing page, the main call-to-action button should be larger than secondary buttons.

**Colour and contrast** — Bright, contrasting colours draw the eye. A red "Sign Up" button on a white page immediately stands out. Muted colours recede into the background.

**Position** — In Western cultures (where we read left to right, top to bottom), elements at the top and left get the most attention. This is why logos and navigation live in the header — they're the first things users see.

**Whitespace** — Elements surrounded by empty space feel more prominent. Cramping elements together makes them compete for attention. Giving one element room to breathe tells the eye: *this one matters.*

**Typography** — Bold text, larger font sizes, and distinctive typefaces create emphasis. A bold heading signals importance; a small, light caption signals supplementary information.

### Information Hierarchy: What Content Matters Most

Beyond visual hierarchy, you need to plan the **information hierarchy** — which content is primary, secondary, and tertiary.

| Level | Purpose | Example (School Website) |
|-------|---------|--------------------------|
| **Primary** | The main reason the user came | "Programmes and Courses" |
| **Secondary** | Supporting information | "Faculty Profiles," "Schedule" |
| **Tertiary** | Nice-to-have, related content | "Student Testimonials," "Gallery" |
| **Utility** | Functional elements | Navigation, search, contact info |

### Worked Example: Hierarchy Map for a News Website Homepage

When you land on a news website, your eye follows this hierarchy:

1. **Top-left / Hero area** — Breaking news headline (largest text, bold, high contrast). This is the primary content.
2. **Below hero** — Top 3-4 stories with thumbnails. Secondary content.
3. **Right sidebar** — "Trending," "Most Read," or "Opinion." Tertiary content.
4. **Header** — Navigation bar, search, logo. Utility elements.
5. **Footer** — About, Contact, Privacy Policy. Low-priority utility.

```
┌──────────────────────────────────────────────────┐
│  LOGO    Home | World | Sports | Tech | Opinion  │  ← Utility
├──────────────────────────────────────────────────┤
│                                                  │
│   ██████████████████████████████████████████     │
│   █  BIGGEST HEADLINE OF THE DAY          █     │  ← Primary
│   █  Largest text, hero image             █     │
│   ██████████████████████████████████████████     │
│                                                  │
├──────────────────┬───────────────────────────────┤
│  Story 2         │  Story 3         │ Story 4    │  ← Secondary
│  (thumbnail +    │  (thumbnail +    │ (thumbnail │
│   headline)      │   headline)      │  + HL)     │
├──────────────────┴───────────────────────────────┤
│  TRENDING: 1. ... 2. ... 3. ... 4. ... 5. ...   │  ← Tertiary
├──────────────────────────────────────────────────┤
│  About | Contact | Privacy | Terms | Newsletter  │  ← Utility
└──────────────────────────────────────────────────┘
```

### Applying Hierarchy to Your Designs

When designing any page, ask yourself these questions:

1. **What is the single most important thing on this page?** Make it the largest, most contrasting, most prominent element.
2. **What are the 2-3 things users might also want?** Give them clear but secondary visual weight.
3. **What's nice to have but not essential?** Tuck it away or make it smaller.
4. **What's purely functional?** Navigation, search, login — accessible but not competing with content.

---

## Part 6: Putting It All Together

### The Prototype Workflow

These four tools aren't separate exercises — they build on each other in a logical sequence:

**Step 1: Concept map** — Brainstorm and organise all your ideas. What content exists? How does it relate?

**Step 2: Site map** — Structure that content into a hierarchical page layout. What pages will you build? How do they connect?

**Step 3: Navigational chart** — Plan how users will move between pages. What navigation patterns will you use? How will users find things?

**Step 4: Hierarchy map** — For each key page, plan what the user sees first, second, and third. What's primary content? What's secondary?

### A Real-World Scenario

Let's say you're designing a website for a local youth sports league:

**Concept map** would show: Teams → Coaches → Schedules → Venues → Registration → Results → News. Cross-links: Schedules connect to Venues. Registration connects to Teams. Results connect to Schedules.

**Site map** would structure: Home → About | Teams | Schedule | Register | Contact. Under Teams: U-12, U-15, U-18. Under Schedule: by Team, by Date, by Venue.

**Navigational chart** would plan: Global nav in header (Home, Teams, Schedule, Register, Contact). Local nav within Teams section (U-12, U-15, U-18). Breadcrumbs: Home > Teams > U-15 > Roster. Utility: Search, Account Login.

**Hierarchy map** for the Home page: Hero banner with league name and "Register Now" button (primary). Upcoming games this weekend (secondary). Latest news, photos (tertiary). Navigation, footer links (utility).

---

## Key Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Prototyping is just making pretty pictures" | Prototypes are thinking tools — they help you explore and test ideas, not produce finished work |
| "You need fancy software" | Paper and pencil work perfectly for low-fidelity prototypes; the best tool is the one that gets your ideas out fastest |
| "More detail = better prototype" | Match fidelity to the question you're answering; a paper sketch beats a polished mockup if you're still deciding on structure |
| "Users know what they want" | Prototypes help discover unspoken needs through observation and testing |
| "Prototyping is a one-time activity" | The best results come from iterative prototyping — test, learn, refine, repeat |

---

## Key Takeaways

1. **Prototype to think, not to impress** — Prototypes are disposable tools for exploring ideas, testing assumptions, and communicating structure. The rougher they are, the more honest the feedback.

2. **Match fidelity to purpose** — Low-fidelity for brainstorming, medium-fidelity for structure, high-fidelity for testing. Don't polish until you've decided what you're building.

3. **Concept maps reveal relationships** — Use nodes, labelled links, hierarchy, and cross-links to map how all your content connects before structuring it.

4. **Navigational charts map user journeys** — Global, local, contextual, and utility navigation each serve a purpose. Plan them deliberately.

5. **Site maps structure your content** — Organise by user goals, not your organisational chart. Keep depth to three levels or fewer.

6. **Hierarchy maps guide the eye** — Use size, colour, position, whitespace, and typography to direct attention. Primary content first, secondary next, tertiary last.

7. **These tools build on each other** — Concept map → Site map → Navigational chart → Hierarchy map is the natural workflow.

---

## What's Next

In Lesson 20, you'll move from planning to production — taking the prototypes and structures you've designed and beginning to build the actual digital artefacts. Your concept maps, site maps, and hierarchy maps will serve as the blueprint for everything that follows.
