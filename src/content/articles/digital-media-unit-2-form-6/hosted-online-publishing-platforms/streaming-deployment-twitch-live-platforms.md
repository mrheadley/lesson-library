---
title: "Streaming Deployment (Twitch, Live Platforms)"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Hosted & Online Publishing Platforms"
topicId: "hosted-online-publishing-platforms"
order: 4
---
# Streaming Deployment: Twitch and Live Platforms

## Live Is Different: The Rules Change in Real Time

Pre-recorded video lets you edit, re-shoot, and polish. **Live streaming** removes that safety net. What you broadcast is what your audience sees — mistakes, technical glitches, and all. This makes live streaming both more demanding and more rewarding than uploaded content. Twitch is the dominant platform, but understanding the broader landscape of live platforms is essential for any digital media creator.

## Twitch: Purpose-Built for Live Interaction

Twitch has over **35 million daily active users** and is owned by Amazon. Unlike YouTube, which is an on-demand library with live capabilities, Twitch is **category-based and community-driven**. Viewers browse categories (gaming, music, art, cooking, talk shows) rather than following an algorithmic feed. This gives smaller creators more discoverability — you are competing within a category, not against every video on the platform.

### Setting Up a Stream

Going live on Twitch requires preparation. The core tool is **OBS Studio** (Open Broadcaster Software) — a free, open-source application that is the industry standard for streaming across all platforms.

**OBS basics:**

1. **Scenes**: Each scene is a layout combining sources — game capture, webcam, overlays, alerts, and audio inputs. You typically create multiple scenes: a "Starting Soon" screen, a main stream scene, a "Be Right Back" scene, and an ending scene.
2. **Sources**: Individual elements within a scene — your webcam feed, screen capture, image overlays, text labels, and audio inputs.
3. **Audio Mixer**: OBS lets you independently control microphone, desktop audio, and application-specific audio. Poor audio kills retention faster than poor video.
4. **Settings**: Configure output resolution, bitrate, encoder, and stream key.

**Optimal Twitch settings:**

- Resolution: 1080p60 (or 720p30 on weaker hardware)
- Bitrate: 6,000 kbps CBR (Constant Bitrate)
- Keyframe interval: 2 seconds
- Encoder: NVENC if you have an NVIDIA GPU; x264 otherwise

The minimum upload speed for 1080p60 streaming is **6 Mbps, using ethernet — not Wi-Fi**. Wi-Fi is unstable for live broadcast; drops and stuttering destroy viewer experience.

### Audio Matters More Than Video

Viewers will tolerate lower video quality far longer than poor audio. A scratchy microphone, background noise, or inconsistent volume drives people away immediately. Invest in a decent USB microphone before upgrading your webcam. Even a budget condenser mic at $30–$50 dramatically improves quality over a laptop's built-in microphone.

### The Starting Soon Screen

A **Starting Soon scene** with a countdown timer builds anticipation and gives latecomers time to join. This is standard practice on Twitch — it signals professionalism and respects your audience's time. Use a simple overlay with your stream title, social handles, and a countdown.

## Audience Engagement: Chat Is the Product

Twitch is not a broadcast — it is a **conversation**. The chat window is not a side feature; it is the core of the experience. Five active chat participants are more valuable for channel growth than 50 passive lurkers.

**Engagement strategies:**

- **Read and respond to chat messages by name**. This is the single most effective retention tool.
- **Ask questions** to provoke responses: "What game should I try next?" or "Anyone from Trinidad watching?"
- **Use channel points and polls** to give viewers low-stakes ways to interact.
- **Acknowledge lurkers** without pressuring them to chat — not everyone engages verbally, and that is fine.

A consistent streaming schedule matters more than any individual stream. Viewers need to know when you will be live. **Three scheduled streams per week** at the same times builds a reliable audience faster than sporadic marathon sessions.

## Niche Selection and Growth

Twitch is category-based, which means your choice of category directly affects discoverability. Targeting a niche category with **500 to 5,000 concurrent viewers (CCU)** is optimal for new streamers. If you stream in a category with 100,000 concurrent viewers, your stream appears buried at the bottom. A smaller category means you are visible.

After streaming, **clip highlights and post them to TikTok and YouTube Shorts**. Twitch is poor for discovery — most new viewers come from external platforms. Cross-platform clipping is not optional; it is essential for growth.

## Monetisation on Twitch

Twitch Affiliate requirements (2026) are accessible to new creators:

- 25 followers
- 4 hours broadcast
- 4 broadcast days
- 3 average concurrent viewers

At Affiliate level, you earn through **Bits** (virtual cheers viewers purchase) and **subscriptions** ($5.99/month with a default 50/50 split with Twitch). The Plus Program allows top performers to negotiate 60/40 or 70/30 splits.

Monetisation is not the goal of early streaming — community building is. Revenue follows audience, not the other way around.

## Beyond Twitch: The Live Platform Landscape

- **YouTube Live**: Broadest reach, integrates with existing YouTube channel and audience, but less community-focused than Twitch.
- **Kick**: Newer platform with more creator-friendly revenue splits (95/5), but smaller audience.
- **Facebook Live**: Leverages existing social networks, strong for Caribbean communities where Facebook penetration is high.
- **Twitch Mobile**: The Twitch app allows streaming directly from a phone — useful when a powerful computer is unavailable. Quality is lower, but presence matters more than production value for casual streams.

## Caribbean Considerations

Caribbean creators face bandwidth constraints that affect streaming quality. **Start at 720p30** if your upload speed cannot sustain 1080p60. It is better to stream reliably at lower quality than to broadcast at high quality with constant buffering. Test your connection speed before going live using tools like speedtest.net — your upload speed is what matters, not download.

A mobile stream from a phone at a school event using the Twitch app can work when a computer is unavailable. The audience values being there over being polished.

## Common Misconceptions

### "You need expensive equipment to start streaming"
A basic laptop, built-in webcam, and OBS (free) are sufficient to begin. Equipment upgrades should follow audience growth, not precede it.

### "More viewers means more money"
Small engaged communities with active chatters generate more revenue than large passive audiences. Ten subscribers who watch every stream are worth more than a hundred one-time visitors.

### "Streaming is just pressing 'Go Live'"
Scene setup, audio configuration, overlay design, and audience engagement all require preparation and practice. The visible simplicity of a good stream masks significant behind-the-scenes work.

### "Wi-Fi is fine for streaming"
Wi-Fi is unstable for live broadcast. Ethernet provides the consistent, low-latency connection that Twitch requires. If ethernet is unavailable, move closer to your router and reduce resolution.

## Key Terms

| Term | Definition |
|------|-----------|
| OBS Studio | Free, open-source application for video recording and live streaming |
| NVENC | NVIDIA's hardware video encoder that reduces CPU load during streams |
| CBR | Constant Bitrate — a streaming encoding method maintaining a fixed data rate |
| Keyframe Interval | Time between full image frames; Twitch requires 2 seconds for optimal transcoding |
| CCU | Concurrent Viewers — the number of people watching a stream simultaneously |
| Transcoding | Converting a stream into multiple quality levels so viewers can watch at their best resolution |
| Scene | An OBS layout combining multiple sources such as game capture, webcam, and overlays |
| Affiliate | Twitch's partnership tier with access to bits, subscriptions, and emotes |

## Summary

Live streaming on Twitch demands preparation that goes beyond pressing "Go Live." OBS Studio provides the technical foundation, but audio quality, scene setup, and a consistent schedule are what retain viewers. Chat engagement — not viewer count — drives growth. Caribbean creators should start at achievable quality settings, test connections before broadcast, and use cross-platform clipping to build discovery outside Twitch. Monetisation follows community; the community follows consistency.
