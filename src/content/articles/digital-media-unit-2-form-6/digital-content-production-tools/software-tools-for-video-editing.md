---
title: "Software Tools for Video Editing"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Digital Content Production Tools"
topicId: "digital-content-production-tools"
order: 4
---
# Software Tools for Video Editing

## Industry-Grade, Zero Cost

Video editing used to require expensive software and powerful hardware. Today, DaVinci Resolve — the same tool used to colour-grade Hollywood films — is available as a free download. This lesson covers the fundamentals of video editing and how to produce professional-quality video for web platforms.

## DaVinci Resolve: The Free Professional Editor

**DaVinci Resolve** (by Blackmagic Design) is a free, professional-grade Non-Linear Editor (NLE) that combines editing, colour correction, visual effects, motion graphics, and audio post-production in a single application. The free version is fully featured up to Ultra HD (3840 × 2160) at 60fps.

### The Seven Pages

DaVinci Resolve is organised into "pages" — each one a dedicated workspace:

| Page | Purpose |
|------|---------|
| **Media** | Import and organise your footage |
| **Cut** | Fast, simplified editing for rough cuts |
| **Edit** | The main timeline — full editing capabilities |
| **Fusion** | Visual effects and motion graphics |
| **Color** | Professional colour grading |
| **Fairlight** | Audio editing and mixing |
| **Deliver** | Export and rendering |

Most editing happens on the **Edit** page. Start there, learn the basics, and explore other pages as needed.

## The Timeline: Where Editing Happens

Video editing centres on the **timeline** — a visual representation of your video's sequence. The timeline has:

- **Video tracks** (V1, V2, V3...): Stacked vertically. V1 is the bottom layer; higher tracks overlay lower ones.
- **Audio tracks** (A1, A2, A3...): Also stacked. A1 is typically the primary audio (dialogue); A2 might be music; A3 might be sound effects.
- **Playhead**: The vertical line showing your current position in the timeline.
- **Ruler**: Shows timecodes along the top.

You drag clips from the media pool onto the timeline, then trim, rearrange, and layer them.

## Essential Editing Operations

### Import
Bring your footage into DaVinci Resolve: File > Import Media, or drag files into the Media page.

### Trim
Adjust the start or end point of a clip without moving it. Hover over the edge of a clip until the trim cursor appears, then drag.

### Cut (Split)
Split a clip at the playhead position. Select the clip, press Ctrl+B (or Command+B on Mac). This creates two independent clips you can rearrange or delete.

### Rearrange
Click and drag clips on the timeline to change their order. Other clips shift automatically (ripple editing) or stay in place (overwrite editing), depending on your mode.

### Transitions
Cross-dissolves, fades, and other transitions go between clips. Drag a transition from the Effects Library onto the edit point between two clips. Keep transitions subtle — flashy transitions often look amateur.

### Titles
Text and titles are added from the Effects Library > Titles. Drag a title template onto a track above your video (V2 or V3).

### Colour Correction
The Color page provides professional colour grading tools — primary colour wheels, curves, qualifiers, and power windows. For basic correction, use the primary wheels to adjust lift (shadows), gamma (midtones), and gain (highlights).

### Audio Adjustment
On the Edit page, you can adjust clip volume by dragging the volume line on audio clips. For more precise control, use the Fairlight page.

## Exporting for Web

The Deliver page is where you render your final video. For web platforms:

### Recommended Settings
- **Format**: MP4
- **Codec**: H.264 (most compatible) or H.265 (better compression, less compatible)
- **Resolution**: Match your source or target platform
  - YouTube: 1920 × 1080 (1080p) minimum
  - Instagram: 1080 × 1080 (square) or 1080 × 1920 (vertical)
  - TikTok: 1080 × 1920 (vertical)
- **Frame rate**: Match your source footage (usually 30fps)
- **Audio**: AAC-LC, stereo

### Quick Export
For the fastest route: File > Quick Export, choose a preset (YouTube, H.264), and click Render.

## Worked Example: 30-Second Social Media Promo

**Goal**: Create a 30-second promo for a school event, optimised for Instagram (1080 × 1080, 30fps).

**Steps**:
1. **Import** all clips into DaVinci Resolve
2. **Drag** clips to the timeline on V1, arranging in order
3. **Trim** each clip to show only the best moments
4. **Add titles** on V2 — event name, date, location
5. **Add background music** on A2 — keep it subtle under any dialogue
6. **Colour correct** on the Color page — match the look across all clips
7. **Export**: Quick Export > H.264, 1080 × 1080, 30fps

## Worked Example: Short Documentary

**Goal**: A 3-minute documentary for a class project, exported for YouTube (1920 × 1080).

**Timeline structure**:
- V1: Interview footage (main shot)
- V2: B-roll (supplementary footage intercut with the interview)
- V3: Titles and lower thirds (name cards for interviewees)
- A1: Interview audio (primary dialogue)
- A2: Ambient sound / background music
- A3: Sound effects (if needed)

**Workflow**:
1. Lay down the interview on V1/A1 — this is the backbone
2. Cut to B-roll on V2 wherever the interview describes something visual
3. Add titles on V3
4. Mix audio: dialogue at 0 dB, music at -12 to -18 dB, ambient at -20 dB
5. Colour correct for consistency
6. Export: H.264, 1920 × 1080, 30fps, AAC audio

## Free Alternatives

| Tool | Platform | Notes |
|------|----------|-------|
| **Shotcut** | Windows, macOS, Linux | Open-source, lightweight, good for beginners |
| **OpenShot** | Windows, macOS, Linux | Open-source, very beginner-friendly |
| **Clipchamp** | Browser (Microsoft) | Free, AI features, exports at 1080p |
| **iMovie** | macOS, iOS | Free on Apple devices, simple and polished |

## Key Terms

| Term | Definition |
|------|-----------|
| NLE | Non-Linear Editor — software for editing video non-destructively |
| Timeline | The main editing interface where clips are arranged in sequence |
| Codec | Algorithm for compressing/decompressing video (H.264, H.265) |
| Container | File format wrapping the codec (MP4, MOV, MKV) |
| Frame rate | Images displayed per second (24fps cinema, 30fps standard, 60fps smooth) |
| Ripple edit | Adjusting a clip's duration and automatically closing the gap |
| B-roll | Supplementary footage intercut with the main shot |

## Summary

DaVinci Resolve provides professional video editing for free. The workflow is: import, trim, cut, rearrange, add titles and transitions, colour correct, mix audio, and export. For web delivery, use MP4 with H.264 codec at the appropriate resolution for your platform. Start on the Edit page — that's where 90% of the work happens.
