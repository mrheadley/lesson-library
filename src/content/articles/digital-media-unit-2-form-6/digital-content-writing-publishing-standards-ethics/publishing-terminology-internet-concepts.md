---
title: "Publishing Terminology & Internet Concepts"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Digital Content Writing, Publishing Standards & Ethics"
topicId: "digital-content-writing-publishing-standards-ethics"
order: 1
---
# Digital Content Writing — Publishing Terminology & Internet Concepts

## Introduction

You use the internet every day. You post to Instagram, stream music, send WhatsApp messages, and open websites on your phone. But have you ever thought about *what happens between* you tapping a link and seeing a page load?

Behind every tap, click, and scroll is an invisible infrastructure — servers, cables, protocols, and file formats that make the digital world function. This lesson lifts the hood on that infrastructure. You'll learn the terminology that professionals use, the concepts that govern how digital content travels across networks, and the standards that make it possible for billions of devices to communicate.

Understanding these concepts isn't just academic. If you're building a website, publishing an e-book, sending a client a file, or simply trying to understand why your photos look grainy after sharing them online — this knowledge is what separates someone who *uses* technology from someone who *understands* it.

---

## Part 1: File Formats — The Language of Digital Files

### Why File Formats Matter

Every digital file is a container. Inside that container is data — pixels, sound waves, text, video frames. The **file format** determines *how* that data is stored, *how much space* it takes, and *which programs* can open it.

Think of it like packaging. A letter goes in an envelope, a meal goes in a container, and a painting goes in a frame. You *could* mail a painting in an envelope, but it would get crushed. Similarly, sending a massive RAW image file where a JPEG would do wastes bandwidth and storage.

Choosing the right format is a core skill in digital media.

### Document Formats

| Format | What It Is | When to Use | Limitations |
|--------|-----------|-------------|-------------|
| **PDF** | Portable Document Format | Sharing final documents that look the same on every device; print-ready | Hard to edit without special software; large file sizes for image-heavy PDFs |
| **DOCX** | Microsoft Word format | Collaborative editing, drafts, documents needing revision | Formatting can shift between versions; not universal without Word installed |
| **ODT** | OpenDocument Text | Open-source alternative to DOCX; used by LibreOffice | Less common in professional settings; limited formatting compatibility |
| **TXT** | Plain text | Simple notes, code files, data | No formatting, no images, no styles |

**Worked Example:** You're submitting an assignment to your teacher. You've finished it in Google Docs. Exporting it as a PDF means your teacher sees *exactly* what you see — fonts, layout, images all preserved. Exporting it as DOCX means your teacher can edit it, but formatting might shift slightly if they use a different version of Word.

### Image Formats

Images are where format choice becomes most visible. The wrong format can mean a blurry photo, a logo with a white box around it, or a webpage that takes ten seconds to load.

| Format | Best For | Key Feature | Trade-off |
|--------|----------|-------------|-----------|
| **JPEG** | Photographs, complex images | Smaller file sizes through lossy compression | Quality degrades with repeated saving; no transparency |
| **PNG** | Web graphics, logos, screenshots | Lossless compression; supports transparency | Larger files than JPEG; not ideal for photographs |
| **SVG** | Logos, icons, illustrations | Vector format — scales infinitely without quality loss | Not suitable for photographs |
| **GIF** | Simple animations, small graphics | Supports animation; widely understood | Limited to 256 colors; large files for complex animations |
| **WEBP** | Modern web images | Smaller files than both JPEG and PNG with comparable quality | Not universally supported in older software |

**The Analogy:** JPEG is like a photocopy — fast and practical, but each copy loses a tiny bit of quality. PNG is like a carbon copy — perfect reproduction, but heavier to carry. SVG is like a recipe — it doesn't store the *picture* of the cake; it stores the *instructions* to draw it, so you can make it any size.

**Worked Example:** You're building a school website and need a logo. Using JPEG means the logo has a rectangular white background behind it (no transparency). Using PNG means the logo can sit cleanly on any colored background. Using SVG means the logo looks sharp whether it's 20 pixels wide on a phone or 2,000 pixels wide on a billboard — and the file is tiny.

### Audio Formats

| Format | Quality | File Size | Best For |
|--------|---------|-----------|----------|
| **MP3** | Good (lossy) | Small | Music streaming, podcasts, general sharing |
| **WAV** | Excellent (lossless) | Very large | Studio recording, sound effects needing full quality |
| **AAC** | Good (lossy) | Small (slightly better than MP3) | Apple ecosystem, streaming services |
| **OGG** | Good (lossy) | Small | Open-source projects, web audio |

**Key Concept — Lossy vs. Lossless Compression:**
- **Lossy** compression removes data that human ears can't easily perceive. The file is smaller, but the original quality can never be fully restored. (Think: summarizing a book — you lose the author's exact wording but keep the story.)
- **Lossless** compression reduces file size without removing any data. The original file can be perfectly reconstructed. (Think: zipping a folder — everything's still there, just packed tighter.)

### Video Formats

| Format | Use Case | Note |
|--------|----------|------|
| **MP4** | Universal web and mobile standard | Best compatibility; uses H.264 or H.265 codecs |
| **MOV** | Apple ecosystem, professional editing | High quality, larger files |
| **WEBM** | Open-source web video | Growing support; used by YouTube for some content |
| **AVI** | Legacy format | Rarely used for web; large files |

**Important:** MP4 is not actually the video itself — it's a *container*. Inside the container, the video uses a **codec** (like H.264) that compresses and decompresses the video data. The container is the box; the codec is the packing method.

### Archive Formats

| Format | Description |
|--------|-------------|
| **ZIP** | Most common; universal support across operating systems |
| **RAR** | Slightly better compression; requires specific software |
| **7Z** | Open-source; highest compression ratios |

Archives bundle multiple files into one for easier transfer. They don't change file quality — they just pack things together.

---

## Part 2: Document Standards — The Backbone of Digital Publishing

### E-Book Formats

When publishing digital text, format determines the reading experience:

**EPUB (Electronic Publication)** is the open standard for e-books. Think of it as the "PDF of e-books" — but better for reading on different devices because the text *reflows* to fit the screen. On a phone, the text reflows to fit the narrow screen. On a tablet, it reflows to use the full width. EPUB also supports accessibility features like screen reader compatibility.

**AZW/AZW3** are Amazon's proprietary Kindle formats. They're essentially modified versions of EPUB, locked to Amazon's ecosystem. If you publish on Kindle Direct Publishing, your content is converted to AZW3.

### The Languages of the Web: HTML, CSS, XML, JSON

These four technologies form the structural backbone of digital content:

**HTML (HyperText Markup Language)** is the skeleton of every web page. It defines structure: headings, paragraphs, links, images, lists. When you view source on any website, you're looking at HTML.

**Analogy:** HTML is the skeleton of a person. It determines what goes where — the head is on top, arms extend from the shoulders, feet are at the bottom. Without it, there's nothing to build on.

**CSS (Cascading Style Sheets)** is the skin and clothing. It controls colors, fonts, spacing, layout, and how the skeleton *looks* on different devices. The same HTML skeleton can look completely different with different CSS.

**Analogy:** Same skeleton, different outfit. CSS is why a website can look clean and corporate on Monday, then festive and colorful for a holiday — same structure, different styling.

**JavaScript** is the muscles. It makes things *move, respond, and act*. Clicking a button, submitting a form, loading new content without refreshing — that's JavaScript. (HTML is not programming; JavaScript is.)

**Worked Example:**
```html
<!-- HTML: Structure -->
<h1>My School Website</h1>
<p>Welcome to the CAPE Digital Media page.</p>

<!-- CSS: Presentation -->
h1 { color: #0066cc; font-size: 2.5em; }
p { font-family: Arial, sans-serif; line-height: 1.6; }

<!-- JavaScript: Behavior -->
document.querySelector('h1').addEventListener('click', function() {
  alert('You clicked the heading!');
});
```

**XML (eXtensible Markup Language)** stores and transports data. Unlike HTML, which uses predefined tags (`<h1>`, `<p>`), XML lets you define your own tags. It's used for RSS feeds, configuration files, and data exchange between systems.

**Analogy:** HTML is a form with fixed fields (Name, Date, Address). XML is a blank form where you write your own field labels.

**JSON (JavaScript Object Notation)** is the lightweight cousin of XML. It's become the standard format for sending data between servers and applications. When your phone app loads new content, it's probably receiving JSON from a server.

```json
{
  "student": "Keisha",
  "form": 6,
  "subjects": ["Digital Media", "Communication Studies", "Pure Mathematics"]
}
```

---

## Part 3: Web Technologies — The Invisible Infrastructure

### HTTP and HTTPS: How the Web Talks

**HTTP (Hypertext Transfer Protocol)** is the set of rules for how browsers and servers communicate. Every time you visit a website, your browser sends an HTTP request to a server, and the server sends back an HTTP response.

**Analogy — The Postal System:** HTTP is like sending a letter. The **client** (your browser) writes a request ("Please send me the homepage of school.edu.tt"). The **server** receives the request, processes it, and sends back a package (the HTML, CSS, images, and JavaScript that make up the page).

**HTTPS (HTTP Secure)** adds encryption to this exchange. The "S" means the data traveling between your browser and the server is encrypted — scrambled so that anyone intercepting it (on public WiFi, for example) can't read it. You see HTTPS when a website shows a padlock icon in the address bar.

**Critical Misconception:** HTTPS means the *connection* is encrypted, not that the *site* is safe. A phishing site can have HTTPS. A padlock means "your data is encrypted in transit" — not "this site won't steal your information."

### URLs: The Address System

A **URL (Uniform Resource Locator)** is the address of a resource on the web. Every URL has structure:

```
https://www.school.edu.tt/cape/digital-media/lesson-17
```

| Part | What It Means |
|------|--------------|
| `https` | Protocol (how to communicate) |
| `www.school.edu.tt` | Domain (which server to contact) |
| `/cape/digital-media/lesson-17` | Path (which specific resource on that server) |
| Port (usually hidden) | Which "door" on the server (80 for HTTP, 443 for HTTPS) |

A **URI (Uniform Resource Identifier)** is the broader term — URLs are a type of URI. Any string that identifies a resource is a URI; a URL additionally tells you *how to access* it.

### DNS: The Internet's Phone Book

**DNS (Domain Name System)** translates human-readable domain names into the numerical IP addresses that computers actually use.

**Analogy — The Phone Book:** You know your friend as "Kwame," but his phone is stored under "+1-868-555-0123." DNS is the phone book that lets you type `google.com` instead of remembering `142.250.80.46`. Without DNS, you'd need to memorize strings of numbers for every website you visit.

**How DNS Lookup Works:**

1. You type `www.school.edu.tt` in your browser
2. Your browser asks your **ISP's DNS server**: "What's the IP address for school.edu.tt?"
3. The DNS server checks its records (or asks higher-level servers) and returns the IP address
4. Your browser connects to that IP address and requests the webpage
5. The page loads

This entire process happens in milliseconds. Every time you visit a website, a DNS lookup happens behind the scenes.

**Worked Example:** You type `instagram.com` into your phone. Your phone doesn't know where that is. It asks a DNS server, which responds with an IP address like `157.240.1.35`. Your phone connects to that address, sends a request for Instagram's homepage, and Instagram's server responds with the content. All in about 200 milliseconds.

### APIs: Software Talking to Software

An **API (Application Programming Interface)** is a set of rules that lets different software systems communicate. APIs are the reason your weather app can show you today's forecast — it's not generating the weather data; it's *requesting* it from a weather service's API.

**Analogy — The Restaurant Menu:** An API is like a restaurant menu. You (the client) can order specific items (data or actions), but you can't walk into the kitchen (the server) and start cooking. The menu defines what's available, what you need to ask for, and how the order gets to you. The kitchen can change its internal processes without affecting the menu — as long as the menu stays the same, you can still order.

**Why APIs Matter for Digital Media:**
- Social media platforms provide APIs so third-party apps can post, read, and interact with content
- Payment processors provide APIs so your online store can process transactions
- Weather services, news outlets, and translation tools all offer APIs

### CMS: Publishing Without Coding

A **CMS (Content Management System)** is software that lets you create, manage, and publish digital content without writing code.

**Common CMS Platforms:**
- **WordPress** — Powers ~43% of all websites; highly customizable
- **Drupal** — Enterprise-grade; complex but powerful
- **Joomla** — Middle ground between WordPress and Drupal
- **Wix/Squarespace** — Drag-and-drop builders; less customizable but easier

**Key Insight:** Many professional websites run on WordPress, which is itself written in PHP (a programming language). The content creators don't need to know PHP — the CMS provides an interface. But understanding HTML/CSS gives you *more control* over what the CMS produces.

---

## Part 4: How the Web Works — From Click to Screen

### The Client-Server Model

The internet operates on a **client-server model** — a relationship where one party requests and another provides.

- The **client** is the requester (your browser, your app, your device)
- The **server** is the provider (a computer somewhere in the world storing website files and data)

**Analogy — The Library:** You (the client) go to the librarian (the server) and request a specific book. The librarian looks it up, retrieves it, and hands it to you. You don't go into the back room and find it yourself. The librarian controls access, manages inventory, and can serve hundreds of people at once.

### The Request-Response Cycle

Here's what happens between you typing a URL and seeing a page:

```
Step 1: DNS Lookup
  Browser → DNS Server: "What's the IP for school.edu.tt?"
  DNS Server → Browser: "It's 203.0.113.42"

Step 2: TCP Connection
  Browser → Server: Establishes a connection (the "handshake")
  Server → Browser: "Connection accepted"

Step 3: HTTP Request
  Browser → Server: "GET /cape/digital-media/lesson-17 HTTP/1.1"
  (Also sends: which browser you're using, what format you accept, cookies)

Step 4: Server Processing
  Server reads the request, finds the right files (HTML, CSS, images),
  generates any dynamic content (from a database, for example)

Step 5: HTTP Response
  Server → Browser: "200 OK" + HTML content + CSS + images + JavaScript
  (Or "404 Not Found" if the page doesn't exist)

Step 6: Rendering
  Browser reads the HTML, requests CSS/JS/images separately,
  and renders the page on your screen
```

**Worked Example:** When you load Instagram, your phone requests the page, Instagram's servers send back the HTML structure, your phone's browser requests the CSS to style it, then the JavaScript to make buttons work, and then each image you scroll past is loaded one at a time (Instagram loads images lazily — only as you scroll to them — to save data).

### TCP/IP: The Foundation Protocols

**TCP/IP** are the two foundational protocols of the internet:

- **IP (Internet Protocol)** handles *addressing* — giving every device on the internet a unique address (like a mailing address)
- **TCP (Transmission Control Protocol)** handles *reliability* — breaking data into small packets, sending them, and reassembling them at the destination, requesting retransmission of any lost packets

**Analogy — Shipping a Puzzle:** IP is the postal service that takes each puzzle piece and routes it to the right address. TCP is the person at the destination who checks "I got pieces 1, 3, 5, but piece 2 is missing" and asks for the missing piece to be resent. Without TCP, you'd get a jumbled mess of pieces with no way to know what's missing.

---

## Part 5: Web Hosting — Where Websites Live

### What Is Web Hosting?

A website is a collection of files (HTML, CSS, JavaScript, images, videos). These files need to be stored somewhere that's always connected to the internet. **Web hosting** is the service of providing server space — a computer that's always on, always connected, and serving your files to anyone who visits.

### Types of Hosting

| Type | How It Works | Cost | Performance | Best For |
|------|-------------|------|-------------|----------|
| **Shared** | Your site shares a server with hundreds of other sites | Low | Can slow down when other sites on the server get busy | Small personal sites, blogs |
| **VPS (Virtual Private Server)** | One physical server divided into virtual servers; your partition is guaranteed resources | Medium | Consistent; you get dedicated resources | Growing sites, small businesses |
| **Dedicated** | An entire server just for your site | High | Maximum performance and control | Large businesses, high-traffic sites |
| **Cloud** | Your site uses resources from a network of servers (AWS, Google Cloud, Azure) | Variable (pay for what you use) | Scales up/down automatically with demand | Apps with unpredictable traffic, startups |

**Analogy — Housing:**
- **Shared hosting** is like an apartment — you share the building, the water pressure might drop when your neighbors shower
- **VPS** is like a townhouse — your own space with guaranteed resources, but still in a shared complex
- **Dedicated** is like a house — everything is yours, but you maintain it yourself
- **Cloud hosting** is like hotel rooms — you rent what you need, and the hotel has infinite rooms

### Domains and Subdomains

A **domain name** is the human-readable address of your website (e.g., `school.edu.tt`). You register it through a **domain registrar** (like GoDaddy, Namecheap, or local registrars). Registration typically costs $10-$15/year for a `.com`, more for specialized extensions.

A **subdomain** is a subdivision of a domain:
- `blog.school.edu.tt` — the blog section
- `shop.school.edu.tt` — the e-commerce section
- `students.school.edu.tt` — a student portal

**Key Concept:** Hosting and domains are separate services. You can have a domain from one provider and hosting from another, then connect them through DNS settings.

---

## Part 6: Web Security — Protecting Digital Content

### SSL/TLS: Encrypted Connections

**SSL (Secure Sockets Layer)** and its successor **TLS (Transport Layer Security)** create encrypted connections between browsers and servers. When you see the **padlock icon** in your address bar, TLS is active.

**How it works (simplified):**
1. Your browser connects to a server and says "Let's talk securely"
2. The server sends its **SSL certificate** (a digital ID card proving who it is)
3. Your browser verifies the certificate with a trusted authority
4. They agree on an encryption method and exchange keys
5. All data sent between them is encrypted

**Critical Misconception:** The padlock means your *connection* is encrypted — not that the website itself is trustworthy. A phishing scam with a padlock encrypts the connection to the scammer's server. Your data is safe *in transit* but might still be going to a malicious destination.

### Common Security Vulnerabilities

| Vulnerability | What It Is | Analogy |
|--------------|-----------|---------|
| **SQL Injection** | Attacker inserts malicious database commands through user input fields | Someone slipping a fake note to the librarian that says "give me all the books and also the master key" |
| **XSS (Cross-Site Scripting)** | Attacker injects malicious scripts into web pages viewed by others | Someone taping a fake sign over a real sign in a building |
| **CSRF (Cross-Site Request Forgery)** | Attacker tricks a user into performing actions they didn't intend | Someone forging your signature on a document |

### Passwords and Two-Factor Authentication

**Strong Passwords:**
- At least 12 characters
- Mix of uppercase, lowercase, numbers, and symbols
- Unique for every account (don't reuse passwords)
- Use a **password manager** (like Bitwarden, 1Password) to store them

**Two-Factor Authentication (2FA):** Adds a second layer of verification beyond your password. Even if someone steals your password, they can't access your account without the second factor — a code from your phone, a fingerprint, or a security key.

**Analogy — The Double Lock:** Your password is the lock on your front door. 2FA is the deadbolt *plus* a fingerprint scanner. Stealing your password is like copying your key — but without your fingerprint, the intruder still can't get in.

### Keeping Software Updated

Most security breaches exploit *known* vulnerabilities that have already been patched. Running outdated software is like leaving a known broken lock on your door — you know it's vulnerable, but you haven't fixed it yet.

**Best practice:** Enable automatic updates for your operating system, browser, and applications.

---

## Part 7: Digital Content Considerations

### Responsive Design

**Responsive design** means your content adapts to different screen sizes. A website should work on a phone, a tablet, a laptop, and a desktop monitor — without the user needing to pinch, zoom, or scroll horizontally.

**How it works:** CSS media queries detect the screen size and adjust the layout accordingly:
- On a phone (small screen): single column, larger text, hamburger menu
- On a tablet (medium screen): two columns, moderate text
- On a desktop (large screen): full layout with sidebar, smaller text

**Analogy — The Rubik's Cube:** The content is the same on every device — it's just *arranged differently*. Like a Rubik's Cube: all the same colors, but the configuration changes depending on which face you're looking at.

### Accessibility (WCAG)

The **Web Content Accessibility Guidelines (WCAG)** ensure digital content is usable by everyone, including people with disabilities. WCAG is organized around four principles:

**1. Perceivable** — Can everyone perceive the content?
- Text alternatives (alt text) for images
- Captions for video and audio content
- Sufficient color contrast

**2. Operable** — Can everyone navigate and interact?
- Keyboard accessibility (not everyone can use a mouse)
- Enough time to read and interact
- No content that causes seizures (flashing, strobing)

**3. Understandable** — Can everyone comprehend the content?
- Readable text and clear language
- Predictable navigation
- Error messages that tell you what went wrong and how to fix it

**4. Robust** — Does it work with current and future tools?
- Compatible with screen readers and assistive technologies
- Valid, clean code

**Worked Example:** You post a photo on Instagram. Adding alt text ("A sunset over the Queen's Park Savannah with palm trees in the foreground") means a visually impaired person using a screen reader can understand the image. Without alt text, the screen reader just says "image" — the content is there, but the meaning is lost.

### SEO: Being Found Online

**SEO (Search Engine Optimization)** is the practice of making your content discoverable by search engines like Google. It's not about tricking algorithms — it's about clearly communicating what your content is about.

**Core SEO Principles:**

1. **Descriptive Titles** — Your page title should accurately describe its content. "CAPE Digital Media — Lesson 17: Internet Concepts" is better than "Lesson 17" or "My Website."

2. **Header Hierarchy (H1, H2, H3)** — Use headers to structure your content. Search engines read headers to understand what each section is about.

3. **Alt Text for Images** — Describe images in alt text. This helps both search engines and visually impaired users understand your content.

4. **Quality, Original Content** — Search engines reward original, useful content. Copying content from other sites hurts your ranking.

5. **Fast Loading Times** — Large images and slow servers cause pages to load slowly. Search engines penalize slow sites. (This is why image optimization matters — a 5MB JPEG that could be 200KB as an optimized WEBP directly affects your SEO.)

6. **Internal and External Links** — Links to other pages on your site (internal) and to reputable external sources help search engines understand your site's relevance and authority.

---

## Common Misconceptions

Let's confront five beliefs that many people hold but that are technically wrong:

**1. "The internet is in the cloud, it's just magic"**
The internet is a physical network of cables (including undersea cables spanning oceans), routers, data centers, and satellites. "The cloud" is just someone else's computer. When you store a photo "in the cloud," it's saved on a physical server in a building somewhere, maintained by a company like Google or Amazon. The magic is in the engineering — not in some ethereal digital realm.

**2. "HTML is programming"**
HTML is a **markup language**, not a programming language. It describes structure — "this is a heading," "this is a paragraph," "this is a link." It cannot perform logic, make decisions, or loop through data. CSS is a **style sheet language** — it describes presentation. JavaScript is the programming language of the web. Calling HTML "programming" is like calling a table of contents "writing."

**3. "More megapixels = better images"**
For web images, this is almost always wrong. A 48MP phone photo is enormous and slow to load. Web images need to be optimized — resized, compressed, and saved in the right format. A 2MP image loaded quickly beats a 48MP image that takes 10 seconds to load. Quality for the web is about *appropriate* resolution, not maximum resolution.

**4. "HTTPS means a site is 100% safe"**
HTTPS encrypts the connection between you and the server. It does *not* mean the server is trustworthy. A phishing site, a scam shop, or a malware distribution site can all have valid HTTPS certificates. The padlock tells you about the *channel*, not the *content*.

**5. "You need to code to publish online"**
Platforms like WordPress, Wix, Squarespace, and even Instagram and TikTok let you publish content without writing a single line of code. However, understanding HTML, CSS, and JavaScript gives you *control* — the ability to customize, troubleshoot, and go beyond what templates offer.

---

## Key Takeaways

1. **File formats are containers** — Each format has trade-offs in quality, size, compatibility, and use case. Choosing the right format is a core professional skill.

2. **HTML is structure, CSS is presentation, JavaScript is behavior** — Understanding these three layers explains how every website on the internet is built.

3. **DNS is the internet's phone book** — It translates human-readable names into numerical addresses, making the internet navigable.

4. **HTTP is the request-response protocol** — Every page load is a conversation: your browser asks, the server responds. HTTPS adds encryption to that conversation.

5. **Web hosting is renting server space** — Shared, VPS, dedicated, and cloud hosting offer different balances of cost, control, and scalability.

6. **Security is layered** — Encryption (HTTPS/TLS), authentication (2FA), strong passwords, and software updates each protect a different part of the chain.

7. **Digital content must be responsive, accessible, and optimized** — Build for all devices, all users, and fast loading. This isn't optional — it's professional standard practice.

---

## What's Next

In Lesson 18, we'll continue exploring digital content writing by examining **content strategy and copywriting principles** — how to write for the web with clarity, purpose, and audience awareness. You'll learn how the technical concepts from this lesson connect to the *content decisions* you make as a digital media creator.

Understanding the infrastructure is the foundation. Learning how to write effectively *within* that infrastructure is where craft begins.
