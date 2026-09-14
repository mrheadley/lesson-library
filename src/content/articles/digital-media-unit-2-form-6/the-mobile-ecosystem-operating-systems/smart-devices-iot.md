---
title: "Smart Devices & IoT"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "The Mobile Ecosystem & Operating Systems"
topicId: "the-mobile-ecosystem-operating-systems"
order: 8
---
# Smart Devices and the Internet of Things

## The Internet of Things: Everyday Objects, Connected

The **Internet of Things (IoT)** is the network of everyday objects — watches, sensors, speakers, lights, locks, cars — embedded with software and connected to networks, usually controlled through the smartphone in your pocket. Connected IoT devices hit an estimated **21.1 billion by end of 2025** (up 14% year over year) and are forecast to approach 39 billion by 2030. The mobile phone is the hub: your watch, your car, and your home all answer to companion apps. So IoT is not a side topic for a media-and-digital student — it is a description of what mobile apps increasingly are.

But nothing signals "IoT" over thin air. Devices talk using a family of radio and messaging technologies, and the differences between them explain almost every design decision in the space.

## The Protocol Zoo: Choosing the Right Radio

No single radio serves all IoT. Every option trades **power, range, bandwidth, and cost**:

| Technology | Range | Power use | Best at | Typical use |
|---|---|---|---|---|
| **Wi-Fi** | ~30 m | High | High bandwidth, mains plug-ins | Speakers, cameras, TVs |
| **Bluetooth / BLE** | ~10 m | Very low | Battery life | Wearables, beacons, sensors |
| **Zigbee** | ~10–100 m mesh | Low | Dense indoor meshes | Lights, switches, sensors |
| **Thread** | mesh | Low | Battery sensors on IP | Matter home devices |
| **Cellular / LP-WAN** | km-scale | Medium/low | Outdoor, mobile | Cars, smart meters, farms |

The mental model to remember: **Wi-Fi is powerful but power-hungry** — fine for a plugged-in smart TV, hopeless for a sensor meant to run two years on a watch battery. That battery realm belongs to **BLE**, the short-range, ultra-low-power Bluetooth variant used by about 24% of connected IoT devices today. For dense indoor networks — a whole house of bulbs, switches, and motion sensors — **Zigbee** builds a self-healing 2.4 GHz mesh (up to ~65,000 nodes per network) where battery end-devices sleep and wake on command. At the far extreme, **LP-WAN / LoRaWAN** spans 2–15 kilometres on tiny batteries — the technology for a Caribbean farm's soil sensors scattered across fields, or a city's water meters.

You can see the trade-offs daily: during a power cut but with a working router, a Zigbee or Thread bulb that talks locally to its mesh still switches on and off, while a Wi-Fi bulb that must reach the cloud to answer a button press may do nothing. Local control survives outages; cloud dependence does not.

### Thread and the Matter Standard

Two standards are reshaping the smart home. **Thread** is a low-power, IP-based mesh networking protocol — basically TCP/IP for battery sensors — and **Matter** (by the Connectivity Standards Alliance: Amazon, Apple, Google, Samsung) is the application-layer standard that lets certified devices work in all four ecosystems at once. Matter runs over **Wi-Fi, Ethernet, or Thread**, using **BLE for setup**, and needs a **Thread Border Router** (often built into a hub, speaker, or smart TV) to bridge the battery mesh to the home network. Note the grammar of Matter versions: 1.0 launched October 2022, and roughly twice-yearly releases have since added energy management (1.4), camera and video-doorbell streaming plus soil sensors (1.5), and NFC commissioning and cross-ecosystem sharing (1.6), covering 50+ device types.

Two cautions for buyers and builders:

- **"Matter compatible"≠ "Matter certified."** Marketing language is not the tested, logo-bearing certification.
- **Ecosystem support is uneven.** Samsung SmartThings is the fastest adopter; Apple Home and Google Home lag on newer Matter features. A certified camera may stream in one ecosystem's app but not yet another's.

## MQTT: The Quiet Workhorse

When a sensor sends telemetry to the cloud, the most common protocol is not a web request — it is **MQTT**. Designed by IBM in the late 1990s for slow satellite links, MQTT is a **publish/subscribe** system: devices publish messages to a *topic* on a broker, and subscribers receive everything published to that topic. Its genius is lightness — roughly **5 bytes of overhead** versus the 200–800+ bytes of HTTP headers — plus three reliability levels and tolerance for flaky connections. This is the protocol behind AWS IoT, ThingsBoard, and Node-RED, used everywhere from weather stations to EV telemetry. (Estimates have placed MQTT around 28% of the IoT protocol market, Zigbee ~18%, and Bluetooth ~4% — dated figures from a 2023 snapshot, so treat them as approximate.)

A class can reproduce the architecture cheaply: an ESP32 or Raspberry Pi weather sensor publishes readings over MQTT to a broker, and students subscribe on their phones — the exact pipeline real IoT apps run.

## The Device Segments

**Wearables.** Wearable shipments hit about 145.7 million units in Q1 2026 (+4.3%), dominated by **hearables** (earbuds), with smart rings and smart glasses the fastest-growing categories. A smartwatch pairs to its phone over **BLE**, and the companion app is its brain — notifications, workouts, and health data all live in the phone's ecosystem. Firm forecasts genuinely disagree about 2026 (IDC projects a slight smartwatch decline, Counterpoint saw Q1 growth, CCS Insight expects the whole wearables market down ~3% while smart rings grow ~53%), but the trend line is the same: the watch goes where the phone's ecosystem goes.

**Smart home.** Shipments are forecast to grow from 1.06 billion units in 2025 toward 1.5 billion by 2030 — pulled along by interoperability standards like Matter and Z-Wave Long Range. The practical consequence for students: a school or family can now mix brands freely, provided devices are certified and the ecosystem they use supports the relevant Matter feature — a "Works with Alexa" label alone no longer guarantees much.

**Connected vehicles.** More than three-quarters of new vehicles now ship with embedded cellular connectivity, and connected-car sales grew 9% in 2025. The connected-vehicle base is forecast near 830 million by 2030, with per-vehicle data traffic quadrupling; EVs (over 40% of new sales by 2030) consume several times more data than combustion cars. This is where **software-defined vehicles (SDVs)** arrive: cars whose features — range optimisation, driver assistance, even comfort packages — are delivered and improved over the air rather than sold as hardware. Apple CarPlay and its Android equivalent make your phone the car's actual interface: maps, media, and messages you already own flow into the dashboard.

## What This Means for Mobile Developers

Every strand above leads back to the phone. For a media or app student, IoT shapes mobile work in three concrete ways:

- **Companion apps are the product surface.** Watches, cars, and homes are controlled through phone apps, so reading BLE sensors, pairing devices, and translating tiny device states into a clean UI is a core mobile skill.
- **Connectivity is the hard part.** Devices live on flaky, low-bandwidth links; the app must buffer, reconnect, and degrade gracefully — the same discipline a Caribbean bus-schedule app needs on patchy mobile data.
- **Small screens and glances.** Smartwatch UIs demand single-glance design: one notification, one action, big touch targets, dark mode for battery life. Building for a 38 mm screen is a different design discipline than a 6-inch phone screen.

## Common Misconceptions

**"Matter means every smart device works with everything immediately."** Certification guarantees baseline compatibility, but platforms adopt Matter versions at different speeds — a camera may work in SmartThings but not yet in Google Home.

**"The Internet of Things needs the internet."** Zigbee, Thread, and BLE devices talk locally in a mesh; the internet is for remote control and automation, and local control often survives outages.

**"IoT = Wi-Fi."** Wi-Fi is too power-hungry for battery sensors; BLE, Zigbee, Thread, and LP-WAN exist precisely because of that.

**"A Matter hub and a Thread Border Router are the same thing."** Every Border Router can be a Matter hub, but not every Matter hub contains a Thread radio — you need both for Matter-over-Thread devices.

**"5G is required for IoT."** Most consumer IoT runs on BLE, Wi-Fi, Zigbee, Thread, or LoRaWAN; cellular is one slice, mostly automotive and smart cities.

**"Smart-home and wearable data is trivially safe."** Cheap generic devices with weak security are a real attack surface; the EU's Cyber Resilience Act now pushes vendors to report exploited vulnerabilities, because protocol choice and certification genuinely affect risk.

## Summary

The Internet of Things connects everyday objects through smartphones, and it is a story of trade-offs: Wi-Fi and BLE serve different jobs, Zigbee and Thread mesh indoor sensors, LP-WAN spans farms and cities, MQTT carries the telemetry in lightweight publish/subscribe fashion, and Matter is slowly making it all interoperable across Apple, Google, Amazon, and Samsung. Wearables, smart homes, and connected vehicles are all reshaped by this — the watch on your wrist and the car in the driveway are increasingly software defined and phone controlled. For mobile developers the message is practical: IoT means building companion apps that manage connectivity patiently and design for glances, because the phone is the centre of the smart world.
