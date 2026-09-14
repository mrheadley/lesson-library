---
title: "Software Tools for Photo Editing"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Digital Content Production Tools"
topicId: "digital-content-production-tools"
order: 2
---
# Software Tools for Photo Editing

## From Camera Roll to Web-Ready

Taking a photo is only half the process. The other half is editing — cropping to the right aspect ratio, adjusting brightness and colour, removing unwanted elements, and exporting in the right format at the right file size. This lesson covers the tools you'll use and the essential techniques for turning raw photos into web-ready images.

## The Tool Landscape

Photo editing software ranges from free and browser-based to professional and paid. For web content, you need tools that can **resize, crop, adjust colour/brightness, and export in web-appropriate formats**. Here's what's available:

### GIMP (GNU Image Manipulation Program)
- **Cost**: Free, open-source
- **Runs on**: Windows, macOS, Linux
- **Best for**: Serious photo editing with full layer support, masks, and filters
- **Learning curve**: Steeper than Canva, but far more capable

GIMP 3.0 (released 2025) introduced non-destructive editing — you can now apply filters and adjustments without permanently altering the original image data. This was a major leap that brought GIMP much closer to Photoshop's workflow.

### Photopea
- **Cost**: Free (browser-based, with ads)
- **Runs on**: Any modern browser
- **Best for**: Quick edits when you can't install software; opens PSD, AI, Sketch, and PDF files
- **Learning curve**: Very similar to Photoshop — familiar interface

Photopea runs entirely in your browser. It processes files locally (no upload to servers), so your images stay on your device. It's like having Photoshop without installing anything.

### Canva
- **Cost**: Free tier (generous); Canva for Education is free for schools
- **Runs on**: Any modern browser
- **Best for**: Social media graphics, presentations, posters, simple designs
- **Learning curve**: Very low — drag-and-drop interface

Canva excels at template-based design. It's not a photo editor in the traditional sense — it's a design tool that lets you add text, shapes, and effects to images. For serious photo editing (masks, adjustment layers, precise selections), use GIMP or Photopea.

### Inkscape
- **Cost**: Free, open-source
- **Runs on**: Windows, macOS, Linux
- **Best for**: Vector graphics (logos, icons, illustrations)
- **Not for**: Photo editing — Inkscape works with vectors (mathematical paths), not pixels

## Key Concepts for Photo Editing

### Layers
Layers are the fundamental organising concept in photo editing. Think of them as transparent sheets stacked on top of each other. Each sheet contains a different element — the photo on the bottom, text on top, shapes above that. You can edit, move, or hide any layer without affecting the others.

### Non-Destructive Editing
This is the practice of making adjustments without permanently altering the original image data. Instead of directly changing pixel values, you apply adjustments as "layers" or "filters" that can be turned on/off, modified, or removed later.

GIMP 3.0's non-destructive filters, link layers, and vector layers make this workflow possible. If you apply a brightness adjustment and later decide it's too much, you can simply reduce the adjustment — no quality loss from repeated edits.

### Export vs. Save
In tools like GIMP:
- **Save** preserves the working file (`.xcf` with all layers intact) — this is your editable source
- **Export** produces a deliverable image (JPEG, PNG, WebP) — this is what you publish

Always export for web, never save as `.xcf` for delivery. And keep your `.xcf` file — it's your insurance policy if you need to make changes later.

## Essential Editing Techniques

### Cropping
Cut the image to the aspect ratio you need. For a website hero: 16:9. For a profile picture: 1:1. For a blog post thumbnail: 16:9 or 3:2. Crop early — it reduces file size and removes distracting elements.

### Brightness and Contrast
Adjust if the photo is too dark or too flat. Most web photos benefit from a slight brightness boost and moderate contrast increase. Don't overdo it — if you can see halos around edges or blown-out highlights, you've pushed too far.

### Sharpening
Apply a mild sharpening pass as the last step before export. Over-sharpening creates harsh, unnatural edges. Under-sharpening leaves the image looking soft.

### Colour Correction
If the white balance is off (too orange, too blue), adjust it. Most editing tools have an "auto white balance" or eyedropper tool — click on something that should be white, and the tool adjusts the colour temperature.

## Export Settings for Web

### JPEG
- Quality: **80–85%** (sweet spot for photos)
- Colour space: **sRGB** (browsers assume sRGB)
- Strip Exif metadata (GPS coordinates, camera info — privacy)
- File size target: under 200KB for most web images

### PNG
- Compression level: **6** (balance of speed vs. file size)
- Best for: graphics with transparency, screenshots, images with sharp text
- Not ideal for photographs (file sizes are much larger than JPEG)

### WebP
- Quality: **80–85%** (similar to JPEG)
- 25–35% smaller than JPEG at the same visual quality
- Supports transparency and animation
- All modern browsers support it

## Practical Workflow

1. **Open** the original photo in GIMP (or Photopea)
2. **Crop** to the desired aspect ratio and dimensions
3. **Adjust** brightness, contrast, and white balance as needed
4. **Sharpen** mildly
5. **Export** as JPEG at 85% quality, or as PNG for transparency
6. **Keep** the working file (.xcf) for future edits

## Key Terms

| Term | Definition |
|------|-----------|
| Layer | A separate editable element stacked on top of other layers |
| Mask | A grayscale control for layer visibility (white = visible, black = hidden) |
| Non-destructive editing | Making adjustments without permanently altering original data |
| sRGB | The standard colour space for web display |
| Exif data | Metadata embedded in images (GPS, camera settings, date/time) |

## Summary

Photo editing for the web is about making images look their best while keeping file sizes small. GIMP and Photopea provide professional-level editing for free; Canva handles template-based design. The essential workflow is: crop, adjust, sharpen, export. Always work non-destructively (keep your source files) and export in sRGB at 80–85% quality for web photos.
