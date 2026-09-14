---
title: "Camera Fundamentals for Web Content"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Digital Content Production Tools"
topicId: "digital-content-production-tools"
order: 1
---
# Camera Fundamentals for Web Content

## You Already Have a Camera

The most important camera for web content is the one you already have — your smartphone. Modern smartphone cameras produce images more than good enough for websites, social media, and digital projects. What matters isn't the price of your gear; it's understanding a few fundamental concepts about how digital images work.

## Resolution: Pixels, Not Megapixels

The quality of a web image is determined by its **pixel dimensions** — the total number of pixels wide and tall. A 12-megapixel camera captures images of approximately 4000 × 3000 pixels. That's plenty for any web use.

### What Matters for the Web

On a web page, the relevant dimension is **pixel width**, not PPI (pixels per inch). PPI is a print instruction — it tells a printer how tightly to pack dots. On screen, only the total pixel count matters. The "72 PPI standard" for web is a myth from the 1990s.

For most web images:
- **1920px wide** is sufficient for full-width desktop display
- **800px wide** is sufficient for most mobile layouts
- **500px wide** works for thumbnails and small inline images

You don't need 4000px-wide images on a web page — they waste bandwidth and slow down loading. Resize images to the display size they'll actually be shown at.

## Aspect Ratio

Aspect ratio is the proportional relationship between width and height. It's expressed as two numbers separated by a colon:

| Aspect Ratio | Common Use |
|-------------|------------|
| 16:9 | Widescreen video, hero banners, YouTube thumbnails |
| 4:3 | Traditional camera sensors, older monitors |
| 3:2 | DSLR/mirrorless camera sensors, print photos |
| 1:1 | Social media profile pictures, Instagram posts, thumbnails |
| 9:16 | Vertical video (Stories, Reels, TikTok) |

When you crop an image, you're changing its aspect ratio. A 3:2 photo cropped to 16:9 becomes a wider image — useful for a website banner. The same photo cropped to 1:1 becomes a square — useful for a profile picture.

## Device Pixel Ratio (DPR)

Here's something that trips up many beginners: not all screens are created equal. A "Retina" or "HiDPI" screen packs **two or three times** as many physical pixels into the same screen area.

- A 500px CSS image on a 1x screen = 500 physical pixels (looks sharp)
- A 500px CSS image on a 2x screen = 500 physical pixels in 1000 physical pixels (looks blurry)

To look sharp on a 2x screen, you need a 1000px image displayed at 500px CSS width. HTML's `srcset` attribute handles this automatically — you provide multiple image sizes and the browser picks the right one.

## File Formats for Web Images

| Format | Best For | Notes |
|--------|----------|-------|
| **JPEG** | Photographs | Lossy compression (quality loss). Small files. No transparency. |
| **PNG** | Graphics with transparency, screenshots | Lossless (no quality loss). Larger files. Good for sharp text. |
| **WebP** | Everything | Modern format. 25–35% smaller than JPEG at the same quality. Supports transparency and animation. All modern browsers. |
| **SVG** | Logos, icons, illustrations | Vector format — scales to any size without pixelation. Tiny file sizes. |
| **AVIF** | Everything (cutting-edge) | Even better compression than WebP. Not yet universal — use with fallback. |

### JPEG Settings for Web
- Quality: **80–85%** is the sweet spot
- Below 70% shows visible compression artifacts (blocky, fuzzy areas)
- Never re-save a JPEG that was already a JPEG — each save degrades quality further (generation loss)

## Lighting Over Megapixels

A well-lit photo from a smartphone often beats a poorly-lit photo from an expensive DSLR. The three factors that matter most:

1. **Light source**: Natural light (near a window, outdoors on an overcast day) is almost always better than harsh overhead fluorescents.
2. **White balance**: Different light sources have different colour temperatures. Your camera's auto white balance usually handles this, but if photos look too orange or too blue, adjust it manually.
3. **Exposure**: If the photo is too dark or too bright, you can adjust it in editing software — but a properly exposed photo gives you more to work with.

## Practical Tips for Web Photography

- **Shoot at the highest resolution** your phone offers, then resize for web — you can always make an image smaller, but you can't add detail to a small image.
- **Use landscape orientation** for banners and hero images (16:9 aspect ratio).
- **Use portrait orientation** for profile pictures, vertical content, and social stories.
- **Avoid digital zoom** — it degrades quality. Move closer to the subject instead.
- **Keep the camera steady** — blur from camera shake is the most common cause of bad photos.
- **Shoot in good light** — if you can't see details clearly, neither can the camera.

## Key Terms

| Term | Definition |
|------|-----------|
| Megapixel (MP) | One million pixels — a measure of camera sensor resolution |
| Resolution | The pixel dimensions of an image (width × height) |
| Aspect ratio | The proportional relationship between width and height |
| DPR (Device Pixel Ratio) | The ratio of physical pixels to CSS pixels on a display |
| Lossy compression | Reduces file size by discarding some image data (JPEG) |
| Lossless compression | Reduces file size without discarding data (PNG) |

## Summary

You don't need expensive equipment to capture great web content. Understanding resolution, aspect ratio, file formats, and lighting lets you make the most of any camera — including the one in your pocket. The key rule: capture at full resolution, then resize and optimise for the web.
