---
title: "Processing Power & Performance"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Mobile User Experience"
topicId: "mobile-user-experience"
order: 4
---
# Processing Power & Performance: The Budget of a Small Computer

## Performance Is a Design Constraint, Not a Developer Afterthought

A phone is a real, small computer with finite CPU, RAM and battery — and that finiteness is a *design constraint*, not an engineering footnote. It is the tightest budget the mobile designer works inside. Together with the small screen (Lesson 118), the limited and expensive bandwidth (Lesson 119) and the fact that the device moves with the user all day (Lesson 120), the phone's modest hardware decides what an app can reasonably do. These four constraints compound: a screen that forces an interface toward more graphics, a network that risks heavy payload transfer, a moving user who needs speed, and a processor and battery that have to pay for all of it. An interface that asks for heavy graphics, constant background calls or long processing on the main thread will feel slow and drain the device — and in an app economy where users walk away, that slowness is the product failing, not a detail to fix later.

Performance, as users experience it, is **speed and stability**: how fast the app starts up, how smoothly it scrolls, how quickly it responds to a tap, and whether it ever freezes or crashes. These are not minor preferences; they are the difference between an app people keep and one they delete within minutes. Recall the three-second rule from Lesson 119 — a majority of mobile users abandon a page that takes longer than roughly three seconds to load. The same impatience applies to a stuttering feed or a spinning loader inside an app. This is why **performance is a feature, not a nicety**: you can design the most beautiful interface in the world, and if it janks, users will delete it and never return.

## The Performance Budget: Making Constraints Explicit

Good performance rarely happens by hoping. It is planned through a **performance budget** — a written contract, agreed before building, that defines how much time, memory, battery and data each part of the app is allowed to consume. Instead of "we'll try to make it fast," the budget asks the team to commit to measurable targets: how fast the cold start must be, how many frames per second must hit the screen, how much battery an active flow may spend, and how much data a launch may transfer. Making those limits explicit and measurable is what turns performance from good intentions into an enforced design decision.

A useful analogy is a family budget. You do not discover at the end of the month that you overspent on food, phone credit and transport; you set limits up front, track against them weekly and adjust. A performance budget works the same way: it makes the app's "spending" of time, memory and battery visible and auditable before problems blow the month. Realistic mobile budgets, current as of 2026, look like this: a **cold start to interactive (TTID)** at the P90 (i.e. for 90% of launches) of under roughly 1.2 seconds even on low-end devices; at least 95% of frames delivered on time; battery drain kept below about 2–3% per minute for active flows; and binary or JavaScript size growth capped per release (for example at 2% or less).

These are written targets, and they are enforced continuously — in CI with every build and in production via analytics — because without enforcement, regressions creep back in silently, one small change at a time. A designer who ships a new animation that doubles frame work, a developer who adds a chatty background sync, a content editor who uploads an uncompressed image: any of these can quietly break a budget that nobody is watching. The budget is what makes the team notice the moment it happens, while a fix is still cheap.

## The Frame Budget: Why a "Faster" Screen Is Harder to Please

At the heart of smooth performance is the **frame budget** — the time each frame of animation gets. A phone that refreshes at 60Hz gives the device about **16.6 milliseconds per frame** to draw; a 120Hz screen gives only about **8.33ms**. Here is the counterintuitive result: a "faster" screen gives your code *less* time per frame, not more. Code that was perfectly smooth at 60Hz can suddenly stutter on a 120Hz display simply because it now has half the time to finish. A good way to feel this is to watch a smoothly scrolling list next to a stuttery one on the same phone: both have the same screen, but one is comfortably inside the frame budget while the other keeps missing it, and your eye reads that as jank.

The practical lesson is that heavy work — parsing, complex drawing, machine learning — must be moved off the main/UI thread so the interface always has room to keep up, and the frame budget must be treated as a hard limit: if a frame misses its window, the user sees the stutter we call **jank**. The goal is that 95% or more of frames land on time, so the design must not demand more from a frame than the weakest target device can deliver.

## Thermal Throttling, Memory Leaks and the Quiet Battery Killer

Sustained heavy use also bumps into physics. When a device works hard, it heats up, and the operating system responds with **thermal throttling** — lowering CPU and GPU speed to cool down, which slows the whole app and drains the battery faster while it struggles. A phone left in a Caribbean sun while running a heavy game or a long video call is a realistic illustration: even a flagship with plenty of specs will throttle, so "it has the power" is never a guarantee of a stable experience. Similarly, memory is a scarce resource on a phone: an app that **leaks memory** (allocates memory it never releases) grows steadily in the background until the OS kills it on a low-RAM device, crashing the app and losing the user's work. Good design keeps memory finite and predictable, especially on the budget Android phones many regional users carry.

Battery drain is a guts-level UX cost, and much of it is the app's own doing. Heavy CPU work, frequent network calls, GPS and **wakelocks** (mechanisms that keep the CPU awake even with the screen off) push the phone into its high-power states and pull the battery down fast. One subtle trap: each network request costs more energy than the data it transfers, because requesting wakes the modem from sleep. That means many small, chatty requests drain the battery far faster than a few larger ones — so batching and consolidating network calls is a design decision, not just an engineering optimisation.

The budget gets even finer-grained than a blanket "save battery" wish. Current scenario targets separate behaviour by what the user is doing: idle with the screen off should cost under about 0.5% battery per hour, active browsing under about 3% per minute, video playback under about 2% per minute, and a background sync under about 0.1% per event. Writing budgets this precisely forces a decision about *every* activity — is this background poll really worth the battery it consumes? — rather than treating power as a vague concern. And the stakes are easy to demonstrate: time two versions of the same local service flow — one heavy, one light — and count who gives up before finishing. Load time is not an abstraction; it maps directly to conversion and retention (cf. Lesson 119's churn argument). In a region where devices must last long stretches out of charge, respecting the battery budget is a core part of serving the user.

## Performance Has Consequences Beyond the App

Performance does not only affect the person holding the phone. The app stores are watching: Google Play Vitals tracks crash rates and ANR (Application Not Responding) rates, and crossing thresholds — an ANR rate above about 0.47% or a crash rate above about 1.09% — risks dropping an app's ranking and visibility. And on the web, performance is judged in the field by **Core Web Vitals**, Google's metrics for responsiveness, loading and stability. The current responsiveness metric, **INP (Interaction to Next Paint)**, targets under about 200ms, and **LCP (Largest Contentful Paint)** targets under about 2.5 seconds. Crashes, hangs and slow responses are not just annoyances; they are signals that lose real distribution.

## Design for the Lowest Device in the Room

Finally, performance must be planned against the region's real hardware — the **device floor**, established in Lesson 106. Many Caribbean users run budget Android phones with limited RAM and slower processors, not the latest flagship. GSMA's *Mobile Economy Caribbean 2026* notes that 5G is only about 10% of regional connections (forecast to ~23% by 2030) and that about 49% of the population lives within coverage but does not use mobile internet, with device, skills and cost as the barriers. Design and test for that low end, not for a flagship benchmark: if a feature runs smoothly on an older budget phone, it will feel effortless everywhere else. And be honest about how you test — emulators and simulators share the desktop's CPU and RAM and cannot reproduce real thermal throttling, battery drain or budget-device limits, so a real low-end device in the test matrix catches problems a simulator never will.

## Performance Is Better Felt Than Explained

The abstractions above are best verified against the phone in your own pocket. A simple **five-app battery race** makes the budget tangible: open the battery settings on your device, look at which apps drain the most, and hypothesise why — background polling, persistent GPS, or heavy video streaming requests. That screen is a living illustration of a battery budget in action. Similarly, the **low-end-device test** is invaluable: try a feature on an older or budget phone and then on a flagship, and watch the difference. The entire point of designing to a budget is that the flagship amounts to nothing if the cheapest device in the classroom cannot run the experience.

The efficiency question also shows up as a competitive virtue. Compare a data-light, low-drain messenger of the WhatsApp era against a heavy, media-drenched social feed: for cost- and battery-conscious users, the light app is not merely "less broken" — it is the one that stays on the home screen (cf. the fintech and feature-phone precedents of Lesson 111 and Lesson 119). On a slow or metered connection, data-lightness is a designed advantage, and users feel it every time the app opens fast and spends almost nothing.

## Common Misconceptions

### "Performance is a developer problem, not a design one"
Content choices, animation, network cadence and the budget itself are design decisions — what the app asks the phone to do is decided at the design table, central to the Caribbean mobile UX brief (cf. Lesson 119).

### "Newer phones are so fast that performance doesn't matter"
Many regional users run budget or lower-RAM devices, and even flagships throttle under heat. Design and test for the low end, not the benchmark table (GSMA device-affordability data).

### "Battery life is a hardware issue"
App behaviour — wakelocks, radio chattiness, heavy processing — strongly drives drain. Good design genuinely extends how long a device lasts out of charge.

### "If it runs in the emulator, it's fine"
Emulators use the desktop's CPU and RAM and cannot reproduce thermal throttling, battery drain or budget-device limits — real devices catch what simulators miss.

### "120Hz screens are faster, so apps can do more per frame"
A 120Hz screen gives *less* time per frame (~8.33ms), so heavy work must be offloaded to keep the UI smooth — "faster" screens are harder to satisfy, not easier.

## Key Terms

| Term | Definition |
|------|-----------|
| Performance budget | Written limits on time, memory, battery and data each part of an app may consume, enforced as measurable targets |
| Frame budget / jank | The time budget per frame (e.g. 16.6ms at 60Hz) and the visible stutter when a frame misses it |
| Thermal throttling | The OS lowering CPU/GPU speed when the device overheats, slowing the whole app and draining battery |
| Wakelock | A mechanism that keeps the CPU awake even with the screen off — a hidden source of battery drain |
| Memory leak | Memory allocated but never released, causing steady growth until the OS kills the app |
| Core Web Vitals | Google's field metrics for web responsiveness and visual stability (INP, LCP, CLS) |

## Summary

A phone's finite CPU, RAM and battery make performance a first-class design constraint: users experience it as speed and stability, and slow or janky apps are abandoned. A **performance budget** turns that requirement into explicit, enforced targets — for cold start, frame rate, battery drain and size growth. The **frame budget** (16.6ms at 60Hz, only 8.33ms at 120Hz) explains why heavy work must leave the main thread, and thermal throttling, memory leaks and chatty network calls are the silent ways a well-meaning app drains its device. Performance also has external consequences through app-store vitals and Core Web Vitals. And in the region's low-end, budget-device reality, the design must hold on the cheapest phone in the room — tested on real devices, not simulators. Performance is not a developer afterthought; it is a core part of the design brief.
