---
title: "Best Practices for Web-Optimised Content"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Digital Content Production Tools"
topicId: "digital-content-production-tools"
order: 6
---
# Best Practices for Web-Optimised Content

## Speed Is a Feature

A slow website isn't just annoying — it's a usability failure. Research consistently shows that users abandon pages that take more than 3 seconds to load, and search engines penalise slow sites in their rankings. The biggest culprits are almost always images, video, and audio that haven't been optimised for web delivery.

Web optimisation means reducing file sizes without unacceptable quality loss, so pages load fast on any device and any connection.

## The Core Principles

### 1. Serve Images at the Correct Size

The most common performance mistake is uploading images that are far larger than they'll be displayed. A 4000 × 3000 pixel photo displayed in a 500 × 500 pixel area wastes 97% of its pixels — and the bandwidth to download them.

**Rule**: Resize images to the maximum pixel width they'll actually be displayed at. For most web images:
- Hero/banner images: 1920px wide
- Content images: 800px wide
- Thumbnails: 400px wide

### 2. Use Modern Formats

Image formats have improved dramatically. Modern formats achieve the same visual quality at much smaller file sizes:

| Format | Quality | File Size vs. JPEG | Browser Support |
|--------|---------|-------------------|-----------------|
| **JPEG** | Good | Baseline | Universal |
| **WebP** | Excellent | 25–35% smaller | All modern browsers |
| **AVIF** | Excellent | 50%+ smaller | Most modern browsers |

**Practical approach**: Export as WebP with JPEG fallback using the `<picture>` element. This gives you the best compression for modern browsers while supporting older ones.

### 3. Compress Efficiently

Even within a format, compression settings matter:

- **JPEG quality 80–85%**: Nearly indistinguishable from 100% quality at a fraction of the file size
- **PNG compression level 6**: Good balance of speed and file size
- **WebP quality 80%**: Excellent visual quality with significant savings

**Tools for compression**: TinyPNG/TinyJPG (online, free), Squoosh (Google's browser-based tool), GIMP's export settings.

### 4. Lazy Load Offscreen Content

The `loading="lazy"` attribute on `<img>` tells the browser to defer downloading until the image is near the viewport. This saves bandwidth and speeds up initial page load — the user's browser only downloads what they can actually see.

```html
<img src="photo.webp" alt="..." loading="lazy" width="800" height="600">
```

**Exception**: The main hero image (the largest visible element) should load eagerly — it's the "Largest Contentful Paint" (LCP) candidate, and lazy loading it would hurt performance.

### 5. Use Responsive Images

HTML's `srcset` attribute lets the browser choose the right image based on screen size and pixel density:

```html
<img 
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, 800px"
  src="medium.jpg"
  alt="..."
  loading="lazy"
  width="800"
  height="600"
>
```

This means mobile users download a 480px image while desktop users get 800px — each gets the right size for their device.

## File Size Targets

| Content Type | Target Size | Notes |
|-------------|-------------|-------|
| Hero image (1920px) | Under 200KB | WebP at 85% quality |
| Content image (800px) | Under 100KB | WebP at 85% quality |
| Thumbnail (400px) | Under 30KB | WebP at 80% quality |
| Icon/logo | Under 10KB | SVG (vector) |
| Audio (1 min) | Under 1MB | MP3 at 128 kbps |
| Video (1 min 1080p) | Under 50MB | H.264, appropriate bitrate |

## Practical Workflow

### Before Uploading
1. **Resize** images to their display dimensions (use GIMP, Photopea, or TinyPNG)
2. **Convert** to WebP (use Squoosh, GIMP's export, or an online converter)
3. **Compress** to 80–85% quality
4. **Strip metadata** (Exif data — GPS coordinates, camera info) for privacy

### In HTML
1. Set `width` and `height` on `<img>` to prevent layout shift
2. Use `srcset` for responsive images
3. Use `loading="lazy"` for below-the-fold images
4. Use `<picture>` for WebP/AVIF with fallback

### For Video
1. Export at the appropriate resolution for the platform
2. Use H.264 codec for maximum compatibility
3. Compress with appropriate bitrate (lower bitrate = smaller file)
4. Consider hosting on YouTube/Vimeo and embedding, rather than self-hosting

## Worked Example: Optimising a School Website Gallery

**Before**: 20 photos, each 4000 × 3000 pixels, JPEG at 100% quality. Total: ~80MB. Page load time: 12 seconds on a 3G connection.

**After**: 
1. Resize each photo to 1200px wide ( sufficient for full-width display)
2. Convert to WebP at 85% quality
3. Add `loading="lazy"` to all images except the first two
4. Set `width` and `height` attributes

**Result**: Same 20 photos, total ~4MB. Page load time: 2 seconds. The images look virtually identical — the quality difference between JPEG 100% and WebP 85% is imperceptible to most viewers.

## Common Misconceptions

### "Higher quality always means bigger files"
Modern formats like WebP and AVIF achieve excellent visual quality at much smaller file sizes. You can often reduce file size by 50%+ with no visible quality loss.

### "You need to serve every size variant manually"
Most CMS platforms (WordPress, Squarespace) generate responsive images automatically. Understanding the concept helps when building from scratch or troubleshooting.

### "Lazy loading always improves performance"
Lazy loading only helps for images below the fold. The main hero image (LCP candidate) should load eagerly with `loading="eager"` or by default.

## Key Terms

| Term | Definition |
|------|-----------|
| Lazy loading | Deferring download of offscreen resources until they're needed |
| Responsive images | Images that adapt their source based on device screen size |
| srcset | HTML attribute providing multiple image files for the browser to choose |
| LCP | Largest Contentful Paint — a Core Web Vital measuring load performance |
| WebP | Modern image format with 25–35% better compression than JPEG |
| sRGB | Standard colour space for web display |

## Summary

Web optimisation is about making pages load fast without sacrificing visual quality. The five core strategies — correct sizing, modern formats, efficient compression, lazy loading, and responsive images — work together to dramatically reduce page weight. A well-optimised page loads in under 3 seconds on any device, which directly improves user experience, accessibility, and search ranking.
