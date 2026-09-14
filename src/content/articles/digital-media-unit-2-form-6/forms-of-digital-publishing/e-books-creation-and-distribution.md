---
title: "E-Books: Creation and Distribution"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Forms of Digital Publishing"
topicId: "forms-of-digital-publishing"
order: 2
---
# E-Books: Creation and Distribution

## What Is an E-Book?

An e-book is any publication delivered in a digital format for reading on screens — phones, tablets, laptops, or dedicated e-readers like Kindle. Unlike a PDF you might email to a classmate, true e-books are built on standards that let them adapt to any device, any screen size, and any reader's preferences.

The two formats you need to know are **EPUB** and **PDF**. They solve different problems, and choosing the right one determines whether your readers have a good experience or spend their time pinching and zooming.

## EPUB: The Open Standard

EPUB (Electronic Publication) is the industry-standard e-book format. Internally, an EPUB file is a small website compressed into a single zip file — it contains HTML pages, CSS stylesheets, images, and XML metadata. This is why EPUB works so well: the web technologies behind it are designed to be flexible.

The critical feature of EPUB is **reflowable text**. When you hand someone a physical book, the page layout is fixed. When you send an EPUB file, the text automatically reflows to fit whatever screen the reader is using. A poem that fits neatly on a tablet will reflow into a readable column on a phone — no pinching, no zooming, no scrolling sideways.

EPUB 3 is the current standard. It supports accessibility features like alt text for images, logical reading order, and declared language settings — requirements that are becoming law in many countries.

## PDF: The Fixed Layout

PDF (Portable Document Format) preserves exact visual formatting. What you see is what everyone gets, regardless of device. This makes PDF excellent for print-ready documents, graphic-heavy publications, and forms — but poorly suited for e-book reading on small screens.

Think of it this way: a PDF is like a photograph of a page. An EPUB is like the actual text, repackaged for each device. If your content is mostly text with some images, EPUB is almost always the better choice for e-book distribution.

## Authoring Tools

You do not need expensive software to create a professional e-book. The tools range from free to professional-grade:

**Free and Open-Source:**
- **Calibre** — the Swiss Army knife of e-book management. Convert between formats, edit metadata, and manage your library. It runs on Windows, macOS, and Linux.
- **Sigil** — a dedicated EPUB editor that lets you work directly with HTML and CSS inside the EPUB file. Ideal if you want pixel-level control.

**Paid Professional Tools:**
- **Scrivener** ($49) — popular with writers for long-form projects. Exports directly to EPUB.
- **Atticus** ($147) — browser-based, designed specifically for book production.
- **Adobe InDesign** — the industry standard for professional publishing, but subscription-priced and steeper to learn.

**Online Converters:**
Tools like Lulu and ePubber let you upload a DOCX file and receive an EPUB in return — no software installation needed. This is a practical starting point if you're comfortable writing in Google Docs or Microsoft Word.

### Worked Example: From Google Docs to EPUB

1. Write your content in Google Docs. Use proper heading styles (Heading 1 for chapter titles, Heading 2 for sections) — EPUB readers use these to build navigation.
2. Export as DOCX (File > Download > Microsoft Word).
3. Open Calibre and add the DOCX file.
4. Click "Convert" and select EPUB as the output format.
5. Set the EPUB metadata: title, author, description, and cover image.
6. Validate the output using EPUBCheck (more on this below).
7. You now have a distributable e-book file.

## Metadata: The Invisible Essentials

Every e-book needs embedded metadata — information about the book that isn't visible on the page but is essential for distribution. This includes the title, author name, description, categories, cover image, and ISBN.

Metadata is how retailers categorise, search, and display your book. A beautifully written e-book with missing or inaccurate metadata will be invisible in search results.

## ISBNs and ASINs

Most formal distribution channels require an **ISBN** (International Standard Book Number) — a unique 13-digit identifier for each edition of a book. ISBNs are purchased from national ISBN agencies and cost approximately $125 for a single ISBN.

However, **Amazon KDP** provides a free **ASIN** (Amazon Standard Identification Number) for each title, which serves the same function within Amazon's ecosystem. Some aggregators like Draft2Digital also provide free ISBNs. If you're self-publishing, you may never need to purchase your own ISBN.

## Distribution Channels

Distribution is where e-books reach readers. The major channels are:

**Direct Retailers:**
- **Amazon KDP** (Kindle Direct Publishing) — the dominant platform. 70% royalty on books priced $2.99–$9.99; 35% outside that range. Provides a free ASIN.
- **Apple Books** — requires EPUB format and a passing EPUBCheck score.
- **Kobo** — strong international presence, especially in Canada and Europe.
- **Google Play Books** — global reach through the Google ecosystem.

**Aggregators:**
- **Draft2Digital** and **Smashwords** — submit your e-book once, and they distribute to multiple retailers. They take a small percentage of royalties but save you the effort of managing separate accounts.

### Caribbean Context

A Caribbean author can publish globally at near-zero cost. Free tools (Calibre, Sigil) and free distribution through KDP mean the primary investment is time and creative effort. A student in Port of Spain or Kingston can have an e-book available on Amazon worldwide within days.

## Validation: EPUBCheck

Before submitting to retailers, your EPUB file must pass **EPUBCheck** — the official W3C validation tool. Retailers like Apple Books and Kobo require a passing score. EPUBCheck catches structural errors, missing metadata, and compatibility issues that would cause problems on e-readers.

You can run EPUBCheck locally through Calibre's plugin system or use the online validator at validator.w3.org.

## Accessibility Requirements

The EU Accessibility Act (effective 2025) mandates that digital publications including e-books must be accessible. This means proper alt text for images, semantic HTML markup, logical reading order, and declared language settings. Even if your primary audience is in the Caribbean, accessibility is good practice — and the trend is toward global adoption.

## Common Misconceptions

### "PDFs are the best format for e-books"
PDFs use fixed layouts that don't reflow, making them difficult to read on phones and small e-reader screens. EPUB is the proper standard for reflowable e-books. Use PDF for print-ready documents, not for screen reading.

### "You need a publisher to create and distribute an e-book"
Self-publishing through Amazon KDP, Apple Books, or aggregators is accessible to anyone. Tools are free or low-cost and distribution is global. The barrier to entry has never been lower.

### "E-book ISBNs are expensive and difficult to obtain"
Amazon KDP provides a free ASIN for each title. Some aggregators like Draft2Digital also provide free ISBNs. Purchasing your own ISBN is optional for most self-publishers.

### "Once you upload an e-book, it displays the same on all devices"
EPUB files reflow, so layout depends on the reader's device, screen size, and font settings. Thorough testing across devices is essential — what looks perfect on your laptop may look different on a Kindle.

### "You need expensive software to create professional e-books"
Free tools like Calibre and Sigil produce publication-quality EPUB files. Professional results come from good writing, clean formatting, and proper metadata — not expensive tools.

## Key Terms

| Term | Definition |
|------|-----------|
| EPUB | Open-standard e-book format using HTML, CSS, and XML that produces reflowable content |
| PDF | Fixed-layout document format that preserves exact visual formatting across devices |
| Reflowable text | Text that automatically adjusts its layout based on the reader's screen size and settings |
| ISBN | Unique 13-digit identifier for each edition of a published book |
| ASIN | Amazon's proprietary product identifier, provided free for KDP titles |
| EPUBCheck | Official W3C validation tool for checking EPUB file compliance |
| Aggregator | Distribution service that submits your e-book to multiple retailers on your behalf |
| Metadata | Information about the e-book (title, author, description) embedded in the file |
| DRM | Copy-protection technology applied to e-books to prevent unauthorised distribution |
| Print on Demand | Printing model where books are printed only when an order is placed |

## Summary

E-book creation and distribution have never been more accessible. EPUB is the standard format for reflowable content, and free tools like Calibre and Sigil make professional production achievable without a budget. Distribution through platforms like Amazon KDP and aggregators like Draft2Digital puts Caribbean authors on global shelves at near-zero cost. The key is understanding your format, validating your files, and choosing the distribution channel that matches your goals — the technology is no longer the barrier; the writing is where your effort belongs.
