---
title: "Summative Assessment 2: Asset Creation — Review Article"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Asset Creation, Media Manipulation & Project Pitching"
topicId: "asset-creation-media-manipulation-project-pitching"
order: 5
isReview: true
---
# Summative Assessment 2: Asset Creation — Review Article

## What This Summative Covers

Summative 2 asks you to pitch an audio-visual project — a practical demonstration that you can create and combine digital media assets. It draws on four lessons that build a production pipeline: image manipulation and compositing, video capture through exporting, 2D animation principles, and 3D modelling principles. The pitch format means you'll need to show *and* explain your creative and technical decisions, not just produce a finished file.

This review organises the key concepts by topic rather than by lesson, because that's how they connect in practice.

---

## Key Concepts Review

### Image Manipulation and Compositing

**Selection and masking** are where everything starts. Every edit targets a specific region, and the quality of your selection determines the quality of your result. Four main tools cover most situations: the lasso (freehand, quick), magic wand/quick selection (colour-based, good for uniform backgrounds), the pen tool (precise Bézier curves, best for hard-edged objects), and colour range (selects all matching pixels across the image). After selecting, you refine edges with feather, smooth, contrast, and shift edge to avoid a cut-out look.

**Layer masks** let you hide parts of a layer without deleting pixels — white reveals, black hides, grey partially reveals. This is the foundation of non-destructive editing. Clipping masks use one layer's transparency to control another (for example, placing a photo inside text). Alpha channels save selections for reuse.

**Non-destructive editing** means working with adjustment layers, smart objects, and layer styles so that original pixels are always preserved. Adjustment layers (levels, curves, hue/saturation, colour balance) apply effects without baking them in. Smart objects allow repeated transformations without quality loss. The key professional habit: never edit pixels directly when you can use a reversible method.

**Compositing** combines multiple images into one believable scene. Six principles make composites convincing: lighting consistency (all elements share the same light source direction, intensity, and colour temperature), perspective matching (shared vanishing points and horizon line), scale and proportion (objects sized correctly relative to each other), shadow and reflection accuracy (cast shadows, contact shadows, correct direction and softness), edge integration (feathering, colour matching, noise matching), and colour harmony (unified colour grade across all elements).

### Video Production: Capture, Lighting, Audio, Editing, and Exporting

**Camera settings** control the look of your footage. ISO controls sensor sensitivity — keep it low (100–400) for clean images; higher values introduce grain. Aperture (f-stop) controls depth of field — lower numbers mean wider openings, more light, and shallower focus. Shutter speed should be roughly double your frame rate (the 180-degree rule): 1/50s for 24fps, 1/60s for 30fps. Frame rate shapes the feel: 24fps is cinematic, 30fps is standard video, 60fps is smooth action or slow motion. Resolution matters less than most people think — lighting, audio, and composition contribute more to perceived quality than pixel count.

**Three-point lighting** is the foundation. The key light (main source, positioned 30–45° to one side) defines the subject. The fill light (opposite side, 50–75% less bright) softens harsh shadows. The back light (behind the subject) creates separation from the background. The contrast ratio between key and fill determines mood: 2:1 for natural interviews, 4:1 for cinematic drama. Hard light comes from small direct sources (sharp shadows); soft light from large diffused sources (gradual shadows). All lights should share the same colour temperature — mixing warm tungsten and cool daylight in one scene creates colour problems that are hard to fix later.

**Audio for video** is the quality factor most people underestimate. Viewers tolerate bad video far longer than bad audio. Microphone choice matters: lavalier mics clip to clothing for interviews, shotgun mics capture focused sound at a distance, and built-in camera mics are almost always inadequate. Get the mic close (6–8 inches for lavs), monitor with headphones while recording, use wind protection outdoors, and always record a backup track. Leave headroom — peaks around -6dB to -12dB — because clipping (distortion from recording too loud) is permanent. Record room tone (ambient silence) to fill gaps between edits smoothly.

**Video editing** shapes the story. The 180-degree rule keeps spatial orientation consistent — keep the camera on one side of the axis of action. Match cuts (match on action, eye-line match) and shot-reverse-shot patterns maintain narrative flow. J-cuts (audio leads video) and L-cuts (audio continues after the cut) create natural transitions. Pacing controls energy: fast cuts for action, slow takes for contemplation. Use transitions sparingly — cuts should make up the vast majority of your edits. Colour correction fixes technical problems (exposure, white balance); colour grading creates stylistic looks (warm for nostalgia, cool for clinical). LUTs are starting points, not endpoints.

**Exporting** is where poor settings undo good work. H.264 is the most compatible codec for web delivery. Match your export resolution and frame rate to your source. Bitrate controls quality-to-size ratio: 10–20 Mbps for 1080p, 35–50 Mbps for 4K. Each platform has its own aspect ratio: 16:9 for YouTube, 9:16 for TikTok and Reels, 1:1 for Instagram feed. Plan aspect ratios during shooting, not just in editing. Captions are essential for accessibility — burned-in for social media, sidecar files (SRT) for professional delivery.

### 2D Animation Principles

The **12 principles of animation** (Disney, 1930s onward) are a universal framework that applies to hand-drawn animation, motion graphics, UI design, and game animation alike:

1. **Squash and stretch** — Objects deform to show weight and flexibility while maintaining volume.
2. **Anticipation** — Preparation before an action helps the audience predict what's coming.
3. **Staging** — Present the main action clearly; reduce visual clutter.
4. **Straight ahead vs. pose to pose** — Sequential drawing (spontaneous, organic) versus planned key poses with filled-in frames (controlled, consistent).
5. **Follow through and overlapping action** — Loose parts continue after the main action stops; different body parts move at different rates.
6. **Slow in and slow out** — Movement accelerates from rest and decelerates to a stop; constant speed looks robotic.
7. **Arc** — Natural motion follows curved paths, not straight lines.
8. **Secondary action** — Supporting actions that enhance the main action without competing.
9. **Timing** — The number of frames per action determines speed, weight, and emotion. This is the soul of animation.
10. **Exaggeration** — Push actions beyond reality for clarity and impact.
11. **Solid drawing** — Even in 2D, forms should feel three-dimensional.
12. **Appeal** — Characters and designs should be engaging and charismatic.

**Keyframes** define start and end points of transitions. **Tweening** (interpolation) generates the frames between. Linear interpolation produces constant, mechanical speed. Ease in starts slow and accelerates. Ease out starts fast and decelerates. Ease in-out combines both for natural, fluid motion — the most commonly used type. The choice of easing dramatically changes how a movement feels.

**Frame rate** shapes perception: 12fps is the minimum for smooth animation (classic Disney on twos), 24fps is the film standard, 30fps is video and web, 60fps is games and modern displays. Working "on twos" (one drawing held for two frames) is a practical and artistic choice, not a compromise. **Timing and spacing** together are the most important concept: timing is how many frames an action takes (speed), spacing is where the object sits at each frame (quality of movement). Same timing with different spacing produces completely different feelings.

### 3D Modelling Principles

**3D models** are built from vertices (points), edges (lines), and faces (polygons, usually triangles or quads). Complex models start with primitive shapes (cubes, spheres, cylinders) and are refined through extrusion, insetting, Boolean operations, and sculpting. **Topology** — the flow and organisation of polygons — matters more than polygon count. Clean topology determines how well a model subdivides, deforms during animation, and performs in game engines.

**UV mapping** flattens 3D surfaces into 2D space for painting textures, like peeling an orange and painting the skin flat. **PBR (Physically Based Rendering) materials** define properties: diffuse/albedo (base colour), roughness (matte vs. glossy reflections), metallic (metal vs. non-metal), normal maps (faked surface detail without extra geometry), and ambient occlusion (soft shadows in crevices).

**Rigging** creates an internal skeleton of joints and bones with parent-child relationships. Moving a parent joint moves all children — rotating the hip moves the entire body. **Weight painting** assigns how much each vertex is influenced by each joint, controlling how the mesh deforms. Poor weight painting causes collapsing and unnatural stretching.

**Keyframe animation in 3D** works the same way as 2D: you set keyframes for position, rotation, and scale at specific times, and the software interpolates. The **Graph Editor** visualises animation curves — steep curves mean fast movement, flat curves mean slow, and S-curves represent ease-in-out.

**Walk cycles** are the fundamental animation exercise: contact (feet on ground, widest stride, lowest body point), passing (one leg passes the other, highest body point), contact (opposite foot), passing. Hip and shoulder opposition, arm swing (opposite arm to leg), and subtle head bob create natural motion. Cycle length varies: 8–12 frames for fast walks, 16–24 for normal, 24–36 for slow or sneaking.

**Rendering** converts 3D data to images. Rasterization is fast and approximate. Ray tracing simulates real light for photorealism but is slow. Real-time engines (Unity, Unreal) optimise for interactive use. Output formats include PNG/JPEG sequences for compositing, MP4/MOV for delivery, and FBX/OBJ/glTF for transferring models between software.

---

## Likely Trouble Spots

### Confusing Colour Correction with Colour Grading
Colour correction fixes technical problems — it makes footage look accurate and natural. Colour grading is a creative choice — it establishes mood and tone. You correct first, then grade. LUTs look like one-click solutions, but they're starting points that still require correction underneath.

### Thinking Resolution Equals Quality
A well-lit 1080p video with clean audio will always look and sound better than a badly lit 4K video with muffled audio. Lighting, audio, and composition matter more than resolution. This misconception is especially persistent because camera marketing emphasises megapixels and resolution numbers.

### Tweening as a Crutch
Setting keyframes and letting the computer interpolate everything produces mechanical, lifeless animation. The spacing between frames — controlled by easing curves in the graph editor — is what makes movement feel natural. Linear interpolation should be reserved for things that actually move at constant speed (conveyor belts, clocks).

### Ignoring Audio in Video Projects
Audio is consistently the most under-prioritised element. Built-in microphones pick up handling noise, ambient room sound, and are too far from the speaker's mouth. Even a basic clip-on lav mic dramatically improves quality. Record room tone. Monitor with headphones. Leave headroom to avoid clipping.

### Misunderstanding the 180-Degree Rule
Crossing the axis of action accidentally makes subjects appear to switch positions on screen, which is disorienting. The rule exists to maintain spatial consistency. You can break it intentionally to create unease, but only deliberately.

### Compositing Without Consistent Lighting
The most common compositing mistake is combining elements lit from different directions or with different colour temperatures. The human eye detects this subconsciously even when you can't articulate what's wrong. Every element must appear to share the same light source — same direction, same intensity, same warmth or coolness.

### Walk Cycle Stiffness
Robotic-looking walks usually come from missing hip and shoulder opposition, identical left and right sides, or no drag and follow-through on hair and clothing. The walk cycle is deceptive — it looks simple but requires attention to overlapping action and timing to feel alive.

---

## How the Topics Connect

The strongest thread running through all four lessons is **non-destructive, intentional workflow**. In image editing, this means adjustment layers and masks instead of deleting pixels. In video, it means capturing well (lighting, audio, settings) so editing doesn't become damage control. In animation, it means understanding principles so keyframe decisions are deliberate, not default. In 3D, it means clean topology and proper rigging so animation deforms predictably.

**Lighting connects image compositing to video production.** The compositing principle of lighting consistency — all elements sharing the same light direction, intensity, and colour temperature — is the same principle that makes three-point lighting work on set. Understanding hard and soft light helps you both shoot better footage and composite more believably.

**Audio editing connects directly to video production.** Lesson 12's audio fundamentals (waveforms, EQ, compression, multi-track mixing) are the tools you use to fix and polish the audio you record during video capture. The concepts of noise reduction, normalisation, and dynamic range management apply whether you're editing a standalone podcast or the audio track of a video.

**Animation principles bridge 2D and 3D.** The 12 principles — squash and stretch, timing, spacing, ease in-out, follow through — apply identically whether you're drawing frames by hand or setting keyframes in Blender. The graph editor in 3D software visualises the same easing curves that 2D animators draw by hand. Walk cycles use the same timing and spacing concepts as a 2D bouncing ball, just applied to a rigged character.

**File formats and export connect all disciplines.** Understanding lossless versus lossy compression matters for audio (WAV vs. MP3), images (PNG vs. JPEG), and video (ProRes vs. H.264). Sample rate and bit depth for audio parallel resolution and bitrate for video. Every format choice is a trade-off between quality and file size.

**The "garbage in, garbage out" principle applies everywhere.** A poorly selected image region leads to a bad composite. Poorly lit or recorded footage limits what editing can fix. Bad topology creates broken animations. Inadequate rigging produces unnatural deformation. The quality of your output is capped by the quality of your input at every stage.

---

## Final Preparation Tips

1. **Review the 12 animation principles from memory.** Write down as many as you can recall, then check against the list. The ones you forget are the ones to study.

2. **Practise explaining *why*, not just *what*.** The pitch format means you'll need to justify your creative decisions. "I used a three-point lighting setup because it creates depth and separates the subject from the background" is stronger than "I used three lights."

3. **Know the difference between similar concepts.** Colour correction vs. grading. Lossless vs. lossy. Ease in vs. ease out. Linear vs. bezier interpolation. Hard light vs. soft light. These distinctions come up repeatedly.

4. **Understand the pipeline order.** Capture → Lighting → Audio → Editing → Exporting. Each stage depends on the ones before it. Poor capture limits what editing can fix. Bad audio is nearly impossible to repair after the fact.

5. **Connect principles to practical examples you've seen.** Think about a TikTok transition that uses anticipation. Think about a game character's walk cycle. Think about a product photo on a beach background. Making concepts concrete helps you recall them under pressure.

6. **Review common misconceptions.** If you can explain why "more frames = better animation" is wrong, or why "video quality = resolution" is a myth, you demonstrate genuine understanding rather than surface-level recall.

7. **Free software is not a limitation.** GIMP, Krita, Audacity, DaVinci Resolve, Pencil2D, OpenToonz, and Blender are all professional-capable tools. The principles transfer across software — the interface changes, the logic doesn't.
