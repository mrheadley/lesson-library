---
title: "SDKs & Development Kits Overview"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Mobile App Creation Tools"
topicId: "mobile-app-creation-tools"
order: 3
---
# SDKs: Inside the Official Toolbox for Building Apps

## An SDK Is a Bundle, Not a Single File

A **Software Development Kit (SDK)** is the official toolbox for building apps on a platform — and, decisively, it is a *bundle*, not one file. An Android or iOS SDK contains **API libraries** (camera, GPS, sensors, notifications), **build tools** that compile your code into installable packages, **platform tools** for talking to devices, an **emulator or simulator** for testing without hardware, versioned platform packages, and — often forgotten — the **sample code and documentation** that make everything usable. When you build for Android or iOS you are not downloading "an SDK"; you are unpacking a whole workshop bench.

A common confusion to retire now: an SDK is **not** the same as an **API**. An **API** is the documented interface you *call*; an SDK is the whole kit — libraries, tools, emulator, docs, templates — wrapped around that API so you can actually use it. You might compare it to a restaurant menu versus the kitchen: the menu (API) lists what you can order; the kitchen, staff, equipment and recipes (SDK) are what make the order real.

## Worked: What Is Actually Inside One SDK

Rather than staying abstract, open the box. In Android Studio's SDK Manager, under the `platforms` folder you find each installed Android version's API libraries; under `build-tools` live **aapt2** and **d8**, the programs that package and compile your code into installable files; under `platform-tools` sit **ADB** and **fastboot**, your command-line link to real devices; alongside all that is the **Android Emulator** and the versioned platform packages, plus docs and samples. On the iOS side, Xcode bundles the **iOS SDK** with the **Swift** compiler, the **SwiftUI** preview system, **Interface Builder**, the **iOS Simulator** and the debugger. Either way the shape is identical: libraries from the platform, tools to build and package, an emulator to test, and documentation to learn from. This decomposition is the direct follow-on to the Android and iOS architecture lessons (Lessons 95 and 96) — those lessons explained how the platform works; this is the official way you build for it.

## Android Versus iOS: Toolchains, Not Just SDKs

Each platform pairs its SDK with a development environment — the **toolchain**: the linked set of compiler, SDK and build tools. Android's modern default is **Kotlin + Jetpack Compose** inside **Android Studio**, with **Gradle** as the build engine (the versioned **Android Gradle Plugin, AGP**) and a **JDK** to run the build system — note that the JDK runs the build; you do not need to write Java to use it. iOS's modern default is **Swift + SwiftUI** inside **Xcode**. Both toolchains update yearly, and managing those versions is a core skill, not a chore — it determines what your app can compile against and what devices it can reach. This builds directly on the Android/iOS architecture lessons (L95/L96) and the app-creation tools lesson (Lesson 35), and it is where "designing an app" and "building an app" finally meet.

## compileSdk, targetSdk, minSdk: The Three Numbers That Matter

Android's version control comes down to three decisions, written in your Gradle file:

- **compileSdk** — the API level your code *compiles against*; the APIs you are allowed to call.
- **targetSdk** — the API level your app is *tested and optimised for*, and whose runtime behaviour it opts into.
- **minSdk** — the **oldest Android version your app will install on**.

Typical 2026 values for a modern app: **compileSdk = targetSdk = 36** (Android 16), with **minSdk around 24–26**. Publishing enforces currency: **from 31 August 2026 Google Play requires new apps and updates to target Android 16 (API 36) or higher**, and Apple requires builds with **Xcode 26 and the iOS 26 SDK from 28 April 2026**. These are hard, live deadlines — "current version" is a policy, not a suggestion, and you can read both requirements on the official store pages in class. On-device enforcement exists too: **Android 14 and later block installing an app that targets below API 24**, no matter where it came from — an old-target app literally refuses to install.

iOS frames the same idea differently: you **compile against the current SDK** (iOS 26) while keeping a **deployment target**, the minimum OS version your app supports (say iOS 16 or 17). Building with the new SDK does *not* mean users need the new OS — the compile toolchain and the minimum supported OS are separate decisions. That asymmetry lets you support old devices while still using modern APIs.

## Version Mismatches Teach the Rules

The classic classroom failure is a **version mismatch**: a `build.gradle` declares `compileSdk = 36`, but the SDK Manager only has the API 35 platform installed. The build fails with an error — teaching, in one concrete moment, why compileSdk must match an installed platform and why SDK Manager, AGP and the JDK must be mutually compatible (AGP 9.2, for example, requires **JDK 17**). iOS has the mirror lesson: Xcode's Swift compiler version and the SDK must align.

The professional tool for keeping this manageable is the **Gradle version catalog**, which centralises minSdk, targetSdk and dependency versions in one file so the whole project stays consistent — a first look at real-world version management.

## Emulators and Reach: Testing Without a Device Wall

Neither the Android Emulator nor the iOS Simulator requires owning hardware. Both let students develop and verify on a limited budget — especially important where entry-level devices dominate (Lesson 106) and a class cannot buy a fleet of phones. Boot the Android Emulator and iOS Simulator side by side and run the same student app concept on both: cross-platform testing without physical devices.

The reach question is a real design decision, not trivia. **minSdk is a reach slider**: set it too high and you exclude the older, entry-level devices that still dominate many Caribbean markets; set it low and you support them at the cost of not using the newest APIs. Meanwhile the stores push *targetSdk* upward. The lesson of the balance: a school project might keep minSdk lower to reach entry-level devices while Google Play keeps targetSdk high — reach versus modern features is a planning decision a digital-media team must own, not a developer-only detail.

## Worked: The Same App, Two minSdk Choices

A class is deciding minSdk for their street-food ordering concept. Option A: `minSdk = 26` — newer APIs, simpler code, but it excludes a meaningful slice of older entry-level Androids still in Caribbean use. Option B: `minSdk = 24` — a wider install base on modest devices, at the price of writing around the newest APIs and testing a broader matrix of OS versions in the emulator. Option B matches the project's goal of reaching prepaid entry-level users (Lesson 106), so they choose it, compile against API 36, target API 36 to satisfy Google Play's 31 August deadline, and test on emulators configured as API 24, 30 and 36 to simulate the real device spread. Three numbers, one documented rationale — that is version management as a genuine design decision.

## Common Misconceptions

### "SDK and API are the same thing"
An API is the interface you call; an SDK is the whole kit — libraries, tools, emulator, docs — wrapped around that API.

### "Android Studio is the Android SDK"
Android Studio bundles a copy of the SDK, but the SDK is the actual set of tools and libraries and can be used from the command line without the IDE.

### "The newest minSdk is always best"
minSdk is a reach decision. Setting it too high excludes the older entry-level devices that dominate many Caribbean markets, even while store policy pushes targetSdk high.

### "Building with the new SDK means users need the new OS"
You compile with the new SDK and keep a lower deployment target — users on old OS versions are unaffected.

### "SDK versioning is a developer-only detail"
Choosing compile/target/min SDK and matching toolchains shapes what users can install and which devices the app reaches — a planning decision for a digital-media team.

### "You need a real phone to test"
The Android Emulator and iOS Simulator let students develop and verify without owning every device — important on a limited budget.

## Key Terms

| Term | Definition |
|------|-----------|
| SDK (Software Development Kit) | The official bundle of libraries, tools, emulator, samples and docs for building on a platform |
| API (Application Programming Interface) | The documented interface an SDK (or another service) exposes for you to call |
| compileSdk | The API level your app's code compiles against — which APIs are available to call |
| targetSdk | The API level the app is tested and optimised for, and whose runtime behaviour it opts into |
| minSdk | The oldest Android version the app will install on |
| Emulator / Simulator | A program that mimics a device on your computer so you can test without hardware |
| Gradle | Android's build-automation and version-management tool, with the Android Gradle Plugin |
| Toolchain | The linked set of compiler, SDK and build tools — Xcode + Swift for iOS; AGP + Build Tools for Android |
| Deployment target | The minimum OS version an iOS app supports on users' devices |

## Summary

An SDK is the official toolbox for a platform — API libraries, build tools, platform tools, an emulator, samples and docs — distinct from the API it wraps. Android and iOS each pair their SDK with a toolchain (Kotlin/Compose + Gradle/AGP; Swift/SwiftUI + Xcode), and version management is the core skill: **compileSdk** decides what you compile against, **targetSdk** what behaviour you opt into, **minSdk** what devices you reach — with store deadlines (Google Play targeting Android 16 from 31 August 2026, Apple requiring Xcode 26 from 28 April 2026) making currency a hard production rule. Emulators and simulators replace a wall of physical phones, and minSdk is a genuine reach decision for markets where entry-level devices dominate. The SDK is not an abstract technicality; it is the concrete, versioned link between the app you designed and the phones that install it.
