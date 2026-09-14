---
title: "Emerging Technologies (5G, AR, AI)"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Trends in the Mobile Ecosystem"
topicId: "trends-in-the-mobile-ecosystem"
order: 3
---
# 5G, AR and On-Device AI: Separating Real Power from Launch Hype

## Three Technologies, One Honest Question

Three emerging technologies — **5G**, **augmented reality (AR)**, and **on-device AI/ML** — are converging on the phone (extending the trend and driver picture of Lessons 136 and 137). They are also the most over-claimed technologies of the moment, so this lesson's job is not to hype them up or write them off, but to separate *real capability* from *marketing*. The discipline is concrete: for each technology, ask what it genuinely does better, where it genuinely works, and whether it works on the device and network a real regional user actually has. The launch keynote believes in everything; your design decisions should believe in evidence.

The three technologies also interlock: on-device AI makes AR smarter (real-time object understanding), AR gives on-device AI a spatial canvas, and 5G provides a low-latency backhaul when the task outgrows the phone — so "what is real?" is also "what combination of these is genuinely shipping on the hardware people actually own?"

## 5G: Real Wins Are Niche, Not "Faster Scrolling"

5G has genuinely scaled — subscriptions passed **3 billion in Q1 2026** and carry roughly half of mobile data — but its genuine wins are specific. For most consumer apps, 5G feels like fast 4G; the marketing line "everything dramatically faster" is false. The real payoffs are in **low latency, high throughput and reliability** use-cases:

- **Cloud gaming** is the clearest consumer win: GeForce NOW and Xbox Cloud will stream up to 4K/120 frames per second over 5G — though competitive shooters still suffer without very low latency.
- **Fixed wireless access (FWA)** — 5G as home broadband — is a mass real-world option: some 71% of FWA providers now offer 5G, delivering ~160–223 Mbps median speeds.
- **Private/industrial networks**, network slicing (carving a guaranteed-performance slice of the network for gaming, payments or emergency services) and vehicle-to-everything (V2X) are where 5G's enterprise value lives.

The "**does it need 5G?**" filter is the practical tool: take a local app — a video call, a delivery app, a retail AR try-on — and ask whether it genuinely *needs* 5G or runs fine on 4G. Run each through the filter and the verdict is almost always the same: the feature needs the capability, not the marketing. Cloud gaming genuinely needs 5G's low latency; a restaurant app, a school portal or a wallet does not. A useful classroom test is trying a free cloud-gaming moment on ordinary school Wi-Fi or a 4G connection and measuring the lag against a commercial service — a lived, hands-on "5G vs hype" experiment (and for most Caribbean budgets, also a lesson in data cost). And the Caribbean reality is decisive: **5G is only ~10% of connections now, reaching ~23% by 2030** (GSMA's Caribbean picture), so a feature whose only justification is 5G is off the table for most regional users — design must still target 4G, the network that actually exists (the floor set by the Bandwidth & Connectivity lesson, Lesson 119).

## Mobile AR: Mature on Screens, Early in Glasses

Mobile AR is far more real than its reputation. As a *platform* it is entrenched: **ARKit** (iOS, with LiDAR and occlusion) and **ARCore** (Android, with geolocation and cloud anchors) dominate, while **WebAR** and cross-platform engines like Unity's AR Foundation lower the entry bar so that nearly any developer can build AR. The practical, proven value is on the *screen*, not on a headset: virtual try-on in retail (IKEA Place, Sephora, Nike) can raise conversion by roughly **40%**, and AR in education improves engagement (anatomy, expeditions, object models) — all of it running on ordinary phones. **AR glasses**, by contrast, remain the future hardware, not today's mainstream: Meta's Ray-Ban glasses sell in the *millions* but are camera/audio/AI devices that are cloud-dependent; Google's Android XR audio glasses ship in fall 2026; Apple ships Vision Pro but has announced no glasses; and privacy and bystander questions are unresolved. The designer's split is clean: design AR for the screen a user already has, and treat glasses as a watching brief.

## On-Device AI: The Defining 2026 Shift

The biggest genuine shift is **on-device AI/ML**: models small enough to run locally on the phone's **NPU** — Apple's Foundation Models (a ~3-billion-parameter dense model plus a sparsely-activated multimodal model) with **Private Cloud Compute** for heavy lifting, **Gemini Nano** (~2.7 billion parameters, running across 1 billion+ Android devices for translation, summaries and smart reply), and Galaxy AI. These are **small language models (SLMs)**, compact models optimised to run on phones rather than in the cloud. The benefits are physical, not rhetorical:

- **Latency** — on-device AR translation loops run at ~115 ms, no round-trip to a server.
- **Battery and data** — the counterintuitive fact is that local NPU inference can be *more* power-efficient than constant cloud uploads, since the radio is the most expensive part of a phone.
- **Privacy and offline capability** — models run fully offline, so sensitive data can stay on the device.

This is actually *better* for low-bandwidth Caribbean users — the constraint is hardware, not connection. The prevailing architecture is a **hybrid split**: a "routing orchestrator" keeps simple, frequent, private tasks on-device and hands only complex requests to edge or cloud (a pattern that matches the region's data floor). Hand-in-hand with this, **edge computing** — running compute near the device or network edge instead of a distant cloud — cuts latency and data transfer, and pairs naturally with on-device AI as the same design principle applied up the network.

## Designing Down to the Regional Floor

The design implications ripple outward. Apps must increasingly be *AI-native* (tapping NPUs and SLMs), *AR-native* (built on ARKit/ARCore, shared anchors and WebAR), and *network-aware* — always balancing claimed capability against the regional device and data floor (the constraints of Lessons 106 and 119). The honest test is on the user's hardware: on-device AI needs a modern NPU (often flagship or latest-gen), AR can need sensors or LiDAR, and 5G needs coverage — so a "brief the classroom" rule applies: verify the demo on the devices that will actually run the app, not on the phone from the keynote. Cloud gaming on school Wi-Fi or a 4G connection, an offline translation on airplane mode, an AR try-on on an older phone — each is the evidence that separates a real regional feature from a launch-slide promise.

## Common Misconceptions

### "5G means everything you do is dramatically faster and better"
For most consumer apps 5G ≈ fast 4G; its genuine wins are niche (cloud gaming, FWA, industrial low-latency) — and Caribbean rollout is early.

### "The folded/AR/AI claims will work on my phone"
On-device AI needs a modern NPU, AR needs sensors/LiDAR, and 5G needs coverage — most regional phones and plans cannot run the demo.

### "On-device AI needs a big connection to work"
Models run fully offline on the NPU — better for low-bandwidth users — but require the right hardware.

### "On-device AI is just a privacy gimmick / tiny models are useless"
Compact SLMs handle translation, summaries and smart reply well, and the on-device-plus-private-cloud hybrid handles heavy reasoning while keeping data local.

### "AR = headsets/glasses, which isn't ready"
Mobile/on-screen AR is mature and widely deployed (try-on, retail, education); glasses are the future hardware, not today's mainstream.

### "Edge/on-device processing is always better than cloud"
It is a trade-off: local is private and offline but limited; cloud is powerful but latency- and data-heavy; good design routes between them.

## Key Terms

| Term | Definition |
|---|---|
| Edge computing | Running compute (and AI) near the device/network edge instead of a distant cloud, cutting latency and data transfer |
| On-device AI | AI/ML models that run locally on the phone via its NPU — offline, low-latency, privacy-preserving |
| Small Language Model (SLM) | A compact AI model optimised to run on phones rather than in the cloud |
| NPU | The dedicated AI-processing core in a chip (Apple Neural Engine, Qualcomm Hexagon) that makes on-device AI fast and efficient |
| Cloud/edge offload | Handing only complex requests to servers while simple ones stay on-device — a hybrid "routing orchestrator" pattern |
| AR framework | A toolkit (ARKit, ARCore) providing tracking, plane detection, depth and rendering to build AR apps |
| Network slicing | Carving a guaranteed-performance slice of the 5G network for a specific use (gaming, payments, emergency) — a 5G-SA feature |
| FWA | Fixed wireless access — using 5G radio as fixed home broadband, a leading real-world 5G monetisation use-case |

## Summary

5G, AR and on-device AI are genuinely transformative, but each is oversold, and the discipline is to separate real capability from launch hype. 5G's real wins are niche — cloud gaming, FWA, industrial low latency — not faster scrolling, and Caribbean rollout (~10% of connections) means design stays on 4G. Mobile AR is a mature screen-based platform (ARKit/ARCore, WebAR, try-on and education), with glasses still future hardware. On-device AI is the defining 2026 shift: SLMs and NPUs run offline, privately and efficiently — a genuine fit for low-bandwidth users given the right hardware. Across all three, the regional design rule is the same: verify every claimed capability on the devices and networks your users actually have, and let the keynote's promise be the hypothesis, not the conclusion.
