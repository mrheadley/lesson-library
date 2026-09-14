---
title: "Software Tools for Audio Editing"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Digital Content Production Tools"
topicId: "digital-content-production-tools"
order: 3
---
# Software Tools for Audio Editing

## Clean Sound, Free Tools

Whether you're recording a podcast, adding a voiceover to a video project, or creating sound effects for a website, you need to edit audio — and you don't need to spend money to do it well. This lesson covers the fundamentals of audio editing using free tools, focusing on the techniques most relevant to web content.

## The Tool: Audacity

**Audacity** is the most widely used free audio editor in the world. It's open-source, cross-platform (Windows, macOS, Linux), and handles everything from simple trimming to multi-track mixing.

### What Audacity Can Do
- Record audio from microphones, line-in, or system audio
- Edit recordings: trim, cut, copy, paste, split clips
- Apply effects: noise reduction, compression, equalisation, reverb
- Mix multiple tracks (music + voice + sound effects)
- Export to all common web formats: MP3, WAV, FLAC, OGG, M4A

### What Audacity Can't Do
- It's not a full DAW (Digital Audio Workstation) like Logic Pro or Pro Tools — it lacks advanced MIDI support and virtual instruments
- Real-time effect preview is limited compared to paid DAWs
- The interface looks dated compared to modern tools

For web content (podcasts, voiceovers, simple audio), Audacity is more than sufficient. Professional DAWs add features for music production and complex mixing that most web creators don't need.

## Audio File Formats

| Format | Type | File Size | Best For |
|--------|------|-----------|----------|
| **WAV** | Uncompressed | ~5 MB/min | Archival, editing, not web delivery |
| **MP3** | Lossy | ~1 MB/min | Web, podcasts, most common format |
| **FLAC** | Lossless | ~2.5 MB/min | Archival with compression |
| **OGG Vorbis** | Lossy | ~0.8 MB/min | Open-source alternative to MP3 |
| **M4A (AAC)** | Lossy | ~0.9 MB/min | Apple ecosystem, slightly better than MP3 |

**For web delivery**: MP3 at 128–192 kbps is the standard. At 192 kbps or higher, MP3 is virtually indistinguishable from lossless for speech and most music.

**For editing**: Work in WAV or use Audacity's native format — don't edit MP3 files, as each re-save degrades quality (it's a lossy format). Export to MP3 only as the final step.

## Key Audio Concepts

### Sample Rate
How many audio samples (snapshots of the sound wave) are captured per second. Higher = more detail, larger files.

- **44,100 Hz** = CD quality (the standard for music)
- **48,000 Hz** = video standard (use this for audio that accompanies video)
- For web audio (podcasts, simple voiceovers), 44,100 Hz is fine

### Bit Depth
How many bits are used to represent each sample. Higher = more dynamic range (difference between quietest and loudest sounds).

- **16-bit** = CD standard (sufficient for most web audio)
- **24-bit** = professional recording standard
- **32-bit float** = editing headroom (Audacity's working format)

### Clipping
When audio levels exceed the maximum (0 dB in digital audio), the peaks get cut off — this creates harsh, distorted sound. Always keep your levels below 0 dB. Aim for peaks around -3 to -6 dB.

## Essential Editing Techniques

### Noise Reduction
Recordings in classrooms or homes almost always have background noise — air conditioning, computer fans, traffic. Audacity's noise reduction effect can remove this:

1. Select a section of "silence" (where only background noise is present)
2. Go to Effect > Noise Reduction > "Get Noise Profile"
3. Select the entire recording
4. Apply Noise Reduction with moderate settings (start with 12 dB reduction, 6 sensitivity)

Don't over-apply — aggressive noise reduction creates a "watery" or "robotic" sound.

### Dynamic Range Compression
Compression reduces the difference between the loudest and quietest parts of your recording, making speech more consistent and easier to hear.

**Starting settings for speech**:
- Ratio: 4:1
- Threshold: around -12 dB
- Attack: 10 ms
- Release: 100 ms
- Make-up gain: adjust to bring peaks to around -3 dB

The goal is consistency, not maximum volume. Professional podcasts sound clear because of careful compression, not brute-force volume.

### Normalisation
Adjusts the overall volume of a recording to a target level (usually -1 dB or -3 dB peak). This is different from compression — normalisation scales the entire recording uniformly, while compression adjusts dynamics.

A typical workflow: noise reduction → compression → normalisation → export.

### Trimming Silence
Remove dead air at the beginning and end of recordings. Select the silent section, press Delete. This tightens pacing and reduces file size.

## Practical Workflow

1. **Record** in Audacity (or import an existing recording)
2. **Trim** silence at start and end
3. **Noise reduction** — get profile from silent section, apply to entire recording
4. **Compression** — even out dynamics for consistent volume
5. **Normalise** — set peak level to -1 or -3 dB
6. **Export** as MP3 at 128–192 kbps for web

## Worked Example: Podcast Episode

You've recorded a 15-minute podcast interview using a USB microphone in a classroom. The recording has some background hum from the air conditioning and the interviewee speaks much quieter than the host.

**Steps**:
1. Trim dead air at start and end (save ~10 seconds)
2. Select a quiet section, get noise profile, apply noise reduction (12 dB, 6 sensitivity)
3. Apply compression (4:1 ratio, -12 dB threshold) — this brings the quiet interviewee up and the loud host down
4. Normalise to -1 dB peak
5. Export as MP3 at 192 kbps

**Result**: A clean, consistent-sounding episode ready for upload.

## Key Terms

| Term | Definition |
|------|-----------|
| DAW | Digital Audio Workstation — software for recording, editing, and mixing audio |
| Sample rate | Number of audio samples captured per second (Hz) |
| Bit depth | Bits per sample — affects dynamic range |
| Dynamic range compression | Reducing the difference between loud and quiet parts |
| Clipping | Distortion from exceeding maximum audio levels (0 dB) |
| Noise reduction | Removing unwanted background sound from a recording |

## Summary

Audacity provides professional-quality audio editing for free. The essential workflow — trim, noise reduce, compress, normalise, export — produces clean, consistent audio suitable for podcasts, voiceovers, and web content. The key insight: good audio is about consistency and clarity, not volume. Professional-sounding audio comes from careful processing, not expensive equipment.
