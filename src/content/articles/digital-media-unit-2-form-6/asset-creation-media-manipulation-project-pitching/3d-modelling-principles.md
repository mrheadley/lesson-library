---
title: "3D Modelling Principles"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Asset Creation, Media Manipulation & Project Pitching"
topicId: "asset-creation-media-manipulation-project-pitching"
order: 4
---
# 3D Modelling Principles: Keyframing, Character Walk Cycles, Spacing, and Tweening

## Introduction

Every video game you've played, every animated film you've watched, every product render you've seen online — all of it started with 3D modelling. Whether it's the character you play in Fortnite, the car you admire in a commercial, or the environment you explore in a game world, someone built that from simple shapes, moved it with keyframes, and rendered it into something real.

In this lesson, you'll learn the core principles that make 3D work possible: how models are built, how they're textured and rigged, how they move through keyframe animation, and how a character walk cycle — one of the most fundamental exercises in animation — brings a figure to life. These principles are the same whether you're making a game, a short film, an architectural visualization, or a product mockup.

**Important:** This lesson teaches *principles*, not software specifics. The concepts apply to Blender, Maya, Cinema 4D, Unity, and Unreal Engine alike. If you follow along in Blender (free and professional-grade), you'll see these principles in action — but the knowledge transfers everywhere.

---

## Part 1: 3D Modelling Fundamentals — Building Shapes from Nothing

### The Building Blocks: Vertices, Edges, and Faces

Every 3D model in the world — no matter how complex — is made of three simple elements:

| Element | What It Is | Analogy |
|---------|-----------|---------|
| **Vertex** (plural: vertices) | A single point in 3D space — defined by X, Y, Z coordinates | A pin stuck in a corkboard |
| **Edge** | A straight line connecting two vertices | A rubber band stretched between two pins |
| **Face** (polygon) | A flat surface enclosed by three or more edges | A tile on a mosaic floor |

Most faces are either **triangles** (three edges — "tris") or **quads** (four edges). Quads are preferred because they subdivide cleanly and deform predictably during animation. Triangles are common in game engines, where everything is ultimately converted to tris for rendering.

*Analogy:* Think of a Rubik's cube. Each small cube has faces, edges, and vertices. A 3D model is like an infinitely more flexible Rubik's cube — you can reshape, stretch, and sculpt every piece.

### Topology: The Flow of Geometry

**Topology** is the pattern and flow of polygons across a model's surface. Good topology matters because:

- It determines how smoothly a model **subdivides** (adds detail)
- It controls how well a model **deforms** when animated (bending at joints, facial expressions)
- It keeps file sizes manageable — unnecessary geometry wastes memory

**Bad topology** creates pinching, stretching, and artifacts when the model moves. **Good topology** follows the natural contours of the form — edge loops wrap around muscles, flow along jawlines, and circle eye sockets.

*Worked Example:* Imagine modelling a human face. Bad topology would have polygons running in random directions. Good topology has **edge loops** that circle the eyes and mouth — just as the muscles beneath the skin naturally wrap around those features. This allows the mouth to open and the eyes to squint without the mesh tearing or pinching.

### Primitive Shapes: Start Simple

No one starts a model from a single vertex. You start with **primitives** — basic geometric shapes provided by the software:

- **Cube** — the most versatile starting point (buildings, furniture, characters)
- **Sphere** — heads, balls, rounded objects
- **Cylinder** — pipes, legs, columns
- **Cone** — rooftops, spikes
- **Torus** — donuts, rings, wheels

The workflow is: **start with a primitive → modify it → refine it → repeat.** Complex models are combinations of modified primitives.

*Analogy:* It's like LEGO. You don't carve a LEGO figure from a block of plastic — you combine standardised bricks. 3D modelling starts the same way: combine and modify standard shapes until you get what you need.

### Boolean Operations: Combining Shapes Mathematically

**Booleans** let you combine or subtract shapes using set theory:

| Operation | What It Does | Example |
|-----------|-------------|---------|
| **Union** | Merges two shapes into one | Two cubes fused into an L-shape |
| **Difference** | Subtracts one shape from another | Cutting a door hole in a wall |
| **Intersection** | Keeps only the overlapping volume | The shared space where two spheres overlap |

Booleans are quick and intuitive, but they often create **messy topology** (too many triangles, irregular polygons). Professional modellers use booleans for blocking out shapes, then clean up the topology manually.

### Extrusion and Insetting: Adding Depth

**Extrusion** pulls a face outward (or inward) along its normal, creating new geometry:

- Select a face on a cube → extrude it → you've just made an L-shape
- Select the top face of a cylinder → extrude → you've extended the pipe

**Inset** creates a smaller face inside an existing face, adding a border:

- Inset the front face of a cube → extrude the inner face inward → you've made a recessed panel (like a window frame)

These two operations alone can produce architectural models, furniture, mechanical parts, and countless other forms.

### Sculpting: Digital Clay

Sculpting works like traditional clay modelling:

1. Start with a high-resolution mesh (millions of polygons)
2. Use brushes to **push, pull, smooth, carve, and pinch** the surface
3. Add detail progressively — from large forms to fine wrinkles

Sculpting is ideal for organic shapes: characters, creatures, landscapes, clothing folds. It's less suited for hard-surface objects (cars, buildings) where precision matters more than organic flow.

*Analogy:* Traditional sculptors start with a large block of marble and progressively refine. Digital sculpting is the same — but with undo buttons and infinite clay.

**Blender** includes a full sculpting toolkit. **ZBrush** (Pixologic) is the industry standard for character and creature sculpting in film and game studios.

---

## Part 2: Texturing and Materials — Giving Models Colour and Surface

A model without texture is like a house without paint — structurally complete, visually lifeless. Texturing and materials define how a model *looks* under light.

### UV Mapping: Peeling the Orange

**UV mapping** is the process of flattening a 3D surface into 2D space so you can paint textures onto it.

*Analogy:* UV mapping is like peeling an orange and flattening the skin so you can paint on it. The orange is 3D; the flattened skin is 2D. You paint your design on the flat skin, then wrap it back around the orange, and your design fits perfectly.

The letters "U" and "V" represent the axes of the 2D texture space (since X, Y, and Z are already taken by the 3D model). Each vertex on your 3D model gets a corresponding 2D coordinate — telling the software exactly where on the texture image that point should pull its colour from.

### Material Properties: What Surfaces Are Made Of

Modern materials (called **PBR — Physically Based Rendering** materials) define several properties:

| Property | What It Controls | Example Values |
|----------|-----------------|----------------|
| **Diffuse / Albedo** | Base colour without lighting influence | Red paint, blue fabric, grey concrete |
| **Roughness** | How sharp or blurry reflections are | 0 = mirror-smooth; 1 = completely matte |
| **Metallic** | Metal vs. non-metal appearance | 0 = plastic/wood; 1 = chrome/gold |
| **Normal Map** | Faked surface detail (bumps, grooves) without extra geometry | Brick texture, skin pores, fabric weave |
| **Ambient Occlusion** | Soft shadows in crevices and where surfaces meet | Darker corners, contact shadows under objects |

*Analogy:* Imagine touching different surfaces — a polished marble countertop (low roughness, low metallic), a rough brick wall (high roughness, normal map detail), a steel knife (high metallic, low roughness). PBR materials let you define these properties digitally.

### Texture Resolution: Detail vs. Performance

Textures come in standard resolutions:

| Resolution | Detail Level | Use Case |
|-----------|-------------|----------|
| **1K** (1024×1024) | Low | Mobile games, background objects |
| **2K** (2048×2048) | Medium | Standard game assets, most use cases |
| **4K** (4096×4096) | High | Film-quality characters, hero assets |
| **8K+** | Ultra | Close-up film shots, digital humans |

Higher resolution = more detail, but also more memory and GPU demand. A game running at 60fps can't afford to load 8K textures for every object. **Texture resolution is a trade-off between visual quality and performance.**

---

## Part 3: Rigging — Building a Puppet's Skeleton

**Rigging** is the process of creating an internal control structure that allows a 3D model to be animated.

*Rigging is like building a puppet's skeleton — the mesh is the skin, the bones make it move.*

### The Components of a Rig

| Component | Function | Analogy |
|-----------|----------|---------|
| **Armature (skeleton)** | The hierarchy of bones that defines how the model moves | A stick figure inside the mesh |
| **Joints / Bones** | Pivot points with parent-child relationships (moving the upper arm moves the hand) | Elbow, knee, wrist, neck |
| **Skinning / Weight Painting** | Assigning each vertex to one or more joints; controls how the mesh deforms | Deciding which parts of the rubber skin follow which bone |

### How Joints Work

Joints form a **hierarchy** — a parent-child chain:

- **Hip** (root) → moves everything below it
  - **Spine** → moves the torso, head, and arms
    - **Head** → moves only the head
    - **Shoulder** → moves the arm
      - **Elbow** → moves the forearm and hand
        - **Wrist** → moves the hand and fingers

When you rotate the hip, the entire body follows. When you rotate the elbow, only the forearm and hand move. This parent-child relationship is what makes animation intuitive — you don't have to move every vertex individually.

### Weight Painting

Not every vertex belongs to exactly one joint. The skin around your elbow stretches across both the upper arm bone and the forearm bone. **Weight painting** assigns a *weight* (0.0 to 1.0) to each vertex for each joint:

- Weight 1.0 on the forearm bone → the vertex follows the forearm completely
- Weight 0.5 on forearm, 0.5 on upper arm → the vertex stretches evenly between both

Getting weights right is one of the most time-consuming parts of rigging. Poor weight painting causes mesh collapsing, unnatural stretching, and joints that bend like wet noodles.

---

## Part 4: Keyframe Animation in 3D — Making Things Move

### What Is a Keyframe?

A **keyframe** marks a specific value (position, rotation, or scale) at a specific point in time. The software calculates everything between two keyframes — this in-betweening is called **interpolation** or **tweening**.

| What You Set | What the Software Calculates |
|-------------|------------------------------|
| Frame 1: Character's foot on the ground | The smooth arc between foot positions |
| Frame 12: Character's foot in the air | The speed and spacing of the movement |
| Frame 24: Character's foot on the ground again | The easing in and out of the motion |

### The Three Transform Properties

Every object in 3D space has three fundamental properties you can animate:

1. **Position** — where it is (X, Y, Z coordinates)
2. **Rotation** — which direction it faces (pitch, yaw, roll)
3. **Scale** — how large it is

You set keyframes for these properties at different times, and the software interpolates between them.

### Interpolation: How the Software Fills the Gaps

**Linear interpolation** moves at constant speed — mechanical, robotic, unnatural.

**Bezier (curve) interpolation** eases in and out — starts slow, speeds up, slows down. This matches how real objects move (acceleration, momentum, deceleration).

*Analogy:* Throw a ball. It doesn't move at constant speed — it accelerates as you release, slows as it rises, stops momentarily at the peak, then accelerates downward. Bezier curves replicate this natural motion.

### The Graph Editor: Control Over Motion

The **Graph Editor** shows animation curves — time on the horizontal axis, value on the vertical axis. Each curve represents one property (position X, rotation Y, etc.).

- **Steep curve** = fast movement
- **Flat curve** = slow movement
- **S-curve** = ease-in and ease-out (natural acceleration/deceleration)
- **Linear slope** = constant speed (robotic)

Adjusting these curves gives you precise control over timing, spacing, and feel. This is where good animation becomes great animation — not in the keyframes themselves, but in the curves between them.

---

## Part 5: Character Walk Cycles — The Fundamental Animation Exercise

The walk cycle is the **"Hello World" of character animation**. If you can animate a convincing walk, you can animate almost anything. It teaches timing, spacing, weight, and the principles of overlapping action.

*A walk cycle is a loop — contact, passing, contact, passing — like a musical rhythm.*

### The Key Poses

A standard walk cycle consists of four major poses that repeat:

```
CONTACT → PASSING → CONTACT → PASSING
   ↑                         ↑
 Right foot               Left foot
 touches ground           touches ground
```

#### 1. Contact Pose

Both feet touch the ground — one forward, one back. The stride is at its widest. The body is at its **lowest point** (gravity pulling down between supports).

#### 2. Passing Pose

One leg passes the other. The supporting leg is straight, and the passing leg swings through. The body is at its **highest point** (pushed up by the supporting leg).

#### 3. The Cycle Repeats

Contact → Passing → Contact (opposite foot) → Passing → back to start. A complete walk cycle is usually **12–24 frames** (0.5–1 second at 24fps), and it loops seamlessly.

### Adding Realism: Hip and Shoulder Opposition

In a natural walk, **hips and shoulders rotate in opposite directions:**

- When the **right leg** steps forward, the **right hip** rotates forward
- To counterbalance, the **left shoulder** swings forward (opposite arm)
- This opposition is what gives a walk its natural rhythm and balance

*Analogy:* Watch someone walk away from you. Their hips and shoulders twist in opposite directions like a wringing towel. This opposition is what prevents them from falling over.

### Arm Swing

Arms swing opposite to their corresponding legs:
- **Right leg forward → left arm forward**
- This is automatic — you do it without thinking — but in animation, you must build it in deliberately

Arm swing also has **drag and follow-through**: the hand lags slightly behind the forearm, which lags behind the upper arm. This creates natural, fluid motion rather than stiff, robotic movement.

### Head Bob

The head bobs slightly up and down — higher during the passing pose (when the body is highest), lower during the contact pose (when the body is lowest). The bob is subtle — too much makes the character look like they're nodding to music.

### Timing and Spacing

| Variable | Fast Walk | Slow Walk | Sneaking |
|----------|----------|----------|----------|
| **Cycle length** | 8–12 frames | 16–24 frames | 24–36 frames |
| **Stride length** | Long | Short | Very short |
| **Body lean** | Slight forward | Upright | Crouched |
| **Arm swing amplitude** | Large | Moderate | Minimal |

**Spacing** refers to how far the character moves between each frame. Even spacing = constant speed. Uneven spacing = acceleration/deceleration. In a natural walk, the foot moves fastest at mid-swing and slows at contact and passing.

### Common Walk Cycle Mistakes

1. **Floating** — the character doesn't shift weight; they slide like they're on ice
2. **No hip rotation** — looks stiff and mechanical
3. **Arms swinging same side as legs** — instant uncanny valley; looks wrong even if you can't explain why
4. **Identical left and right sides** — real walks have subtle asymmetry
5. **No overlap/drag** — hair, clothing, and accessories should trail behind the main motion

### Connecting to What You Know

Every character you've controlled in a game — from Mario to Master Chief — uses a walk cycle (or run cycle, or idle animation). The animator built these key poses, adjusted the curves, and looped the result. Now you understand what's happening under the hood.

---

## Part 6: Rendering — Turning 3D Data Into Images

### Three Rendering Approaches

| Method | How It Works | Speed | Quality | Used In |
|--------|-------------|-------|---------|---------|
| **Rasterization** | Projects 3D geometry to 2D pixels using math shortcuts | Fast | Good (approximate) | Most 3D software defaults, many games |
| **Ray Tracing** | Traces individual light rays through the scene | Slow | Photorealistic | Film VFX, high-end product renders |
| **Real-time (Game Engines)** | Optimized rasterization + tricks for 60fps+ | Very fast | Good (improving rapidly) | Games, interactive apps, VR |

**Rasterization** is the default for most work. It's fast enough for interactive use and produces results good enough for most purposes.

**Ray tracing** simulates how light actually behaves — reflections, refractions, soft shadows, global illumination. It produces stunning results but takes minutes to hours per frame. Film studios use render farms (hundreds of computers working together) to render feature films.

**Real-time engines** (Unity, Unreal) are optimised for speed. Modern real-time ray tracing (NVIDIA RTX, DirectX Raytracing) is blurring the line between rasterization and ray tracing.

### Output Formats

| Format | Type | Use Case |
|--------|------|----------|
| **PNG / JPEG** | Image sequence | Individual frames for compositing |
| **EXR** | High-dynamic-range image | Professional compositing, VFX pipelines |
| **MP4 / MOV** | Video | Final delivery, presentations |
| **FBX** | 3D file | Transferring models between software |
| **OBJ** | 3D file | Simple geometry exchange (no animation) |
| **glTF** | 3D file | Web, AR/VR, modern interchange format |
| **WebGL** | Interactive | Browser-based 3D experiences |

---

## Common Misconceptions

### "3D is harder than 2D"

**It's different, not harder.** Both require foundational skills in form, light, colour, and motion. 3D software handles perspective and lighting automatically, which some find easier. 2D gives you direct control over every pixel, which some find more intuitive. Neither is inherently more difficult — they're different toolsets for different problems.

### "You need expensive software"

**Blender is free and professional-grade.** It includes modelling, sculpting, texturing, rigging, animation, simulation, compositing, and video editing — everything in one application. Studios like Ubisoft, NVIDIA, and Amazon use Blender professionally. There is no cost barrier to learning 3D.

### "Photorealism is the goal"

Photorealism is *one* goal. Style, clarity, and communication often matter more. A stylized low-poly character can communicate more personality than a photorealistic one. The best 3D artists know when to be realistic and when to be expressive.

### "Complex models are better"

**Good topology and clean forms beat high polygon counts.** A simple model with clean edge flow will animate better, render faster, and look more professional than a messy high-poly disaster. Complexity is not quality.

### "Rendering = the work"

Modelling and animation are the creative work. Rendering is output — like printing a photograph. The artistry is in the model, the texture, the motion. Rendering just captures it.

---

## Key Takeaways

1. **3D models are built from vertices, edges, and faces** — start with primitives, modify with extrusion and booleans, refine with sculpting. Topology (polygon flow) matters more than polygon count.

2. **UV mapping flattens 3D surfaces for painting** — like peeling an orange and painting the skin flat. PBR materials define colour, roughness, metallic properties, surface detail, and shadow behaviour.

3. **Rigging builds a puppet's skeleton inside the mesh** — joints form parent-child hierarchies, weight painting controls how the skin deforms. Good rigging makes animation intuitive.

4. **Keyframes mark poses at specific times** — the software interpolates between them. The Graph Editor gives you precise control over motion curves, spacing, and timing.

5. **Walk cycles are loops of four key poses** — contact, passing, contact, passing. Hip/shoulder opposition, arm swing, and subtle head bob create natural motion.

6. **Rendering converts 3D data to images** — rasterization is fast, ray tracing is photorealistic, real-time is interactive. Choose the output format based on your delivery medium.

---

## What's Next

In Lesson 16, you'll apply these 3D modelling principles in a practical workshop — building, texturing, and animating your own models. You'll work through the pipeline from primitive shapes to a rendered output, applying the concepts from this lesson in hands-on exercises.
