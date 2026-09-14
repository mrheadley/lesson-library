---
title: "CSS Basics: Selectors, Properties & the Box Model"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Fundamentals of Website Building"
topicId: "fundamentals-of-website-building"
order: 4
---
# Adding Images and Multimedia

## Bringing Pages to Life

Text alone makes for a dull web page. Images, video, and audio make content engaging, explain complex ideas visually, and create emotional connections. HTML provides specific elements for embedding each type of media — and each comes with important accessibility and performance considerations.

## Images: The `<img>` Element

The `<img>` element embeds an image. It's a **void element** — no closing tag needed:

```html
<img src="photo.jpg" alt="Students working in the computer lab" width="800" height="600">
```

### Essential Attributes

| Attribute | Purpose | Required? |
|-----------|---------|-----------|
| `src` | Path to the image file | Yes |
| `alt` | Alternative text description | Yes |
| `width` | Image width in pixels | Recommended |
| `height` | Image height in pixels | Recommended |
| `loading` | `lazy` or `eager` | Optional |
| `decoding` | `async` for performance | Optional |

### Alt Text Is Not Optional

The `alt` attribute describes the image for:
- **Screen readers**: Blind or visually impaired users hear the description
- **Broken images**: If the image fails to load, the alt text appears instead
- **Search engines**: Google uses alt text to understand image content

**Every `<img>` must have an `alt` attribute.** For decorative images (icons, borders, visual flourishes that add no informational value), use an empty alt: `alt=""`. This tells screen readers to skip the image. Omitting the `alt` attribute entirely causes screen readers to read the file path — a terrible experience.

### Writing Good Alt Text

**Be specific and descriptive**:
- Bad: `alt="photo"` (too vague)
- Bad: `alt="image of students in a room with computers and desks and chairs"` (too verbose)
- Good: `alt="Students working in the computer lab"` (describes the content and context)

**Don't start with "Image of..."** — screen readers already announce it as an image.

### Width and Height

Setting `width` and `height` on `<img>` allows the browser to **reserve space** before the image loads. This prevents **Cumulative Layout Shift (CLS)** — the jarring experience of content jumping around as images load. CLS is a Core Web Vital that Google uses to measure page quality.

## Responsive Images

Different devices need different image sizes. A phone doesn't need a 1920px-wide hero image. HTML's `srcset` attribute lets you provide multiple image files and tells the browser to choose the right one:

```html
<img 
    srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
    sizes="(max-width: 600px) 480px, 800px"
    src="medium.jpg"
    alt="School courtyard"
    width="800"
    height="600"
    loading="lazy"
>
```

- `srcset` — lists available images with their widths
- `sizes` — tells the browser how wide the image will display at different viewport sizes
- `src` — fallback for browsers that don't support `srcset`

The browser picks the smallest image that's large enough — mobile users download less data, desktop users get sharp images.

### The `<picture>` Element for Art Direction

Sometimes you don't just want a different size — you want a different **crop**. A wide landscape for desktop, a tight portrait for mobile. The `<picture>` element handles this:

```html
<picture>
    <source media="(min-width: 800px)" srcset="wide-crop.jpg">
    <source media="(min-width: 400px)" srcset="medium-crop.jpg">
    <img src="narrow-crop.jpg" alt="School courtyard" width="800" height="600">
</picture>
```

The `<img>` inside `<picture>` is required — it's the fallback and the element that actually renders.

## Video: The `<video>` Element

```html
<video controls width="640" height="360">
    <source src="tutorial.mp4" type="video/mp4">
    <source src="tutorial.webm" type="video/webm">
    Your browser does not support the video element.
</video>
```

- `controls` — shows play/pause/volume controls (omit for autoplay, which is generally bad practice)
- Multiple `<source>` elements — the browser uses the first format it supports
- Fallback text inside the tags — displayed if the browser can't play video at all

### Hosting Video

Self-hosting video consumes enormous bandwidth. For most projects, upload to YouTube or Vimeo and embed via `<iframe>`:

```html
<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Tutorial Video"
    loading="lazy"
    allowfullscreen>
</iframe>
```

Always include the `title` attribute for accessibility and `loading="lazy"` for performance.

## Audio: The `<audio>` Element

```html
<audio controls>
    <source src="podcast.mp3" type="audio/mpeg">
    <source src="podcast.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```

Same pattern as `<video>` — multiple sources with a fallback message.

## Figures and Captions

The `<figure>` and `<figcaption>` elements semantically group media with its caption:

```html
<figure>
    <img src="chart.png" alt="Bar chart showing exam results by subject" width="600" height="400">
    <figcaption>Figure 1: 2025 exam results by subject</figcaption>
</figure>
```

This is semantic HTML — it tells browsers and screen readers that the image and caption belong together.

## SVG: Scalable Vector Graphics

SVG is a vector format — it uses mathematical paths rather than pixels. This means it scales to any size without losing quality, and file sizes are tiny for simple graphics.

**Best for**: logos, icons, illustrations, charts, diagrams

```html
<!-- Inline SVG -->
<svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="#0066cc"/>
</svg>

<!-- SVG as an image -->
<img src="logo.svg" alt="Company logo" width="200" height="60">
```

## Common Misconceptions

### "Alt text is optional"
Alt text is legally and ethically required for accessibility. It's also good for SEO. Every `<img>` needs `alt`.

### "Decorative images don't need alt"
Decorative images should have **empty alt** (`alt=""`), not no alt. Empty alt tells screen readers to skip it. No alt at all causes screen readers to read the file path.

### "Large images look better"
Oversized images waste bandwidth and slow page loads. Serve images at the size they'll be displayed. A 1920px image displayed in a 500px area wastes 97% of its pixels.

## Key Terms

| Term | Definition |
|------|-----------|
| Void element | An HTML element with no closing tag (`<img>`, `<br>`, `<hr>`) |
| `alt` text | Alternative text describing an image for accessibility |
| `srcset` | HTML attribute providing multiple image files for responsive delivery |
| Art direction | Serving different image crops for different viewport sizes |
| CLS | Cumulative Layout Shift — a performance metric for layout stability |
| SVG | Scalable Vector Graphics — vector format for icons and illustrations |

## Summary

HTML provides elements for every type of media: `<img>` for images, `<video>` for video, `<audio>` for audio, and `<iframe>` for external content. The most important attribute on `<img>` is `alt` — it's required for accessibility and provides fallback text. Responsive images (`srcset`, `<picture>`) ensure users download the right image for their device. Always set `width` and `height` to prevent layout shift.
