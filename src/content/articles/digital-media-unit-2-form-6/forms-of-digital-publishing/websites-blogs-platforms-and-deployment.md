---
title: "Websites & Blogs: Platforms and Deployment"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Forms of Digital Publishing"
topicId: "forms-of-digital-publishing"
order: 1
---
# Websites & Blogs: Platforms and Deployment

## From Files to a Live Website

You have designed wireframes, built layouts, tested usability, and refined your code. Now comes the final step: putting your site on the internet so anyone can access it. Deployment is the process of making your website publicly available — and the platform you choose determines how much control you have, how much you pay, and how much maintenance falls on you.

## The Core Decision: Self-Hosted vs Hosted

Every website lives on a server — a computer that stores its files and serves them to visitors. The fundamental choice is who manages that server.

### Self-Hosted

You rent server space and are responsible for installing, configuring, and maintaining everything: the CMS, security updates, backups, and uptime.

**WordPress.org** is the most common self-hosted platform. It requires renting server space (~$3–15/month) plus a domain name (~$12/year). WordPress powers approximately 43% of all websites globally.

**Pros**: Full control over every aspect of the site — custom code, any theme, any plugin, no platform branding
**Cons**: You handle security patches, backups, uptime monitoring, and troubleshooting

### Hosted

The platform provider manages the server, security, updates, and infrastructure. You create content and customise within their system.

Examples: WordPress.com, Wix, Squarespace, Blogger

**Pros**: No server management, easy setup, customer support included
**Cons**: Limited customisation, platform branding on free tiers, restricted features

### WordPress.com vs WordPress.org

Despite sharing the same core software, they are fundamentally different products:

| Feature | WordPress.org (Self-Hosted) | WordPress.com (Hosted) |
|---------|---------------------------|----------------------|
| Hosting | You rent and manage | Platform manages |
| Cost | Server + domain (~$15–60/yr) | Free tier or $4–45/month |
| Themes | Any theme, including custom | Limited to platform library on free/lower tiers |
| Plugins | Any plugin | Restricted on lower tiers |
| Branding | No platform branding | Platform branding on free tier |
| Custom Code | Full access | Restricted on most plans |

**Practical advice**: Start on WordPress.com free tier to learn, then migrate to WordPress.org when you need more control.

## Domain Names: Your Digital Identity

A domain name is your address on the internet — `yourname.com`, `schoolproject.org`, `trinidaddesigner.net`. Domains are registered through domain registrars.

### Choosing a Domain

- Keep it short and memorable
- Avoid hyphens and numbers (they are hard to communicate verbally)
- Choose `.com` if available (most recognised globally)
- Consider `.org` for organisations or `.edu` for educational institutions
- For Caribbean businesses, `.com` works well internationally; country-code TLDs like `.tt` (Trinidad and Tobago), `.jm` (Jamaica), or `.bb` (Barbados) signal local presence

### Domain Registrars

| Registrar | Approximate Cost | Notes |
|-----------|-----------------|-------|
| Cloudflare | ~$10–12/yr | No markup pricing, DNS included |
| Namecheap | ~$10–13/yr | User-friendly, frequent sales |
| GoDaddy | ~$12–20/yr | Widely known, higher renewal prices |
| Google Domains | ~$12/yr | Simple interface (now part of Squarespace) |

**Important**: Domain names and hosting are separate services. You can buy a domain from one registrar and host with a completely different provider by updating DNS settings.

## DNS: Connecting Domain to Server

The Domain Name System (DNS) translates your human-readable domain name into the IP address that computers use to identify each other. Think of it as the internet's phonebook.

When you point a domain to hosting, you typically update two DNS records:

- **A record** — Maps your domain to the server's IP address
- **CNAME record** — Maps your domain to another domain (common with platforms like Netlify or GitHub Pages)

DNS changes can take 24–48 hours to propagate globally, though they often生效 within minutes.

## Static Sites: Free and Fast

A static site consists of only HTML, CSS, and JavaScript files with no server-side processing or database. The server simply sends the files to the browser — no server-side code runs.

Static sites can be hosted for free on:

| Platform | Cost | Best For |
|----------|------|----------|
| GitHub Pages | Free | Developer portfolios, project documentation |
| Netlify | Free tier | Static sites with forms, redirects, serverless functions |
| Vercel | Free tier | Static sites and frameworks (Next.js, React) |

**Worked Example**: A CAPE Digital Media student builds a portfolio site using HTML, CSS, and vanilla JavaScript. They push the code to a GitHub repository, enable GitHub Pages, and the site is live at `username.github.io/portfolio` — completely free with automatic SSL (HTTPS).

Static sites offer:

- **Zero cost** — Hosting, SSL, and deployment included
- **Fast performance** — No server processing, just file delivery
- **Security** — No database or server-side code to exploit
- **Version control** — Git-based deployment means every change is tracked

**Limitation**: Static sites cannot handle dynamic content (user accounts, databases, form submissions without a third-party service). For a portfolio, blog, or project showcase, they are ideal.

## The Deployment Process

Whether self-hosted or static, deployment follows a sequential process:

### Step 1: Register Your Domain

Choose a registrar, search for your desired name, and purchase it. Domain registration is typically annual.

### Step 2: Set Up Hosting

- **For static sites**: Push your code to GitHub and enable GitHub Pages, or connect your repository to Netlify/Vercel
- **For WordPress**: Sign up with a hosting provider (SiteGround, DigitalOcean, Bluehost), install WordPress through their control panel

### Step 3: Connect Domain to Hosting

Update DNS records at your registrar to point to your hosting provider. For GitHub Pages, add a CNAME record pointing to `username.github.io`. For Netlify, add a CNAME pointing to `your-site.netlify.app`.

### Step 4: Install and Configure

- **Static site**: Upload your HTML, CSS, and JS files (or push to Git — deployment is automatic)
- **WordPress**: Choose and install a theme, add essential plugins (security, SEO, caching), configure settings

### Step 5: Test Before Announcing

Before sharing your URL, verify:

- All pages load correctly
- Links work on every page
- Images display properly
- Forms function (test submissions)
- Site works on mobile (responsive design check)
- SSL certificate is active (the lock icon appears in the browser)

### Step 6: Publish and Monitor

Share the URL. Monitor analytics to understand visitor behaviour. Check that the site remains up and performant.

## Maintaining a Live Site

A website is not "done" when it goes live. Ongoing maintenance includes:

- **Security updates** — CMS and plugin updates patch vulnerabilities
- **Backups** — Regular backups protect against data loss
- **Content updates** — Stale content signals an abandoned site
- **Performance monitoring** — Page speed directly affects user retention
- **Uptime monitoring** — Tools like UptimeRobot alert you if your site goes down

Self-hosted sites require all of this yourself. Hosted platforms handle most of it automatically, though you are still responsible for content.

## Hosting in the Caribbean

Caribbean local hosting providers exist, but international providers often offer better performance, uptime guarantees, and customer support at competitive prices. Key considerations:

- **Server location** — Closer servers mean faster load times. Some international providers have Caribbean edge locations
- **Support availability** — 24/7 support matters when your site goes down at midnight before an assignment deadline
- **Payment methods** — Some Caribbean users face challenges with international credit card payments; check if your provider accepts local payment methods

**Practical recommendation**: For school projects and portfolios, GitHub Pages or Netlify (free, global CDN, automatic SSL) is the best starting point. For business sites requiring dynamic features, WordPress on SiteGround or DigitalOcean provides good value.

## Migration: Moving Hosts

Moving a website between hosts is possible but involves:

1. Exporting content and database
2. Importing to the new host
3. Transferring the domain (updating DNS)
4. Setting up redirects from old URLs to new ones

Expect a temporary SEO ranking dip of 20–40% and possible brief downtime. Plan migrations during low-traffic periods.

## Common Misconceptions

### "You need to know coding to build a website"
Hosted platforms like Wix and WordPress.com offer visual editors. However, learning HTML/CSS gives you far more control and is essential for self-hosted sites.

### "Free hosted platforms are just as good as paid options"
Free tiers limit customisation, often display platform ads, restrict storage, and give you a subdomain (`yoursite.wordpress.com`) instead of a professional domain.

### "Once your site is live, the work is done"
Websites require ongoing maintenance — security updates, backups, content updates, and performance monitoring — especially on self-hosted platforms.

### "Domain names and hosting must be purchased from the same company"
They are separate services. You can buy a domain from one registrar and host with a completely different provider.

### "WordPress.com and WordPress.org are the same thing"
Despite sharing the same core name, they are entirely different products with different features, limitations, and pricing models.

### "Moving to a new host is seamless"
Migration can cause temporary downtime, broken links, and a 20–40% SEO ranking dip that may take weeks to recover from.

## Key Terms

| Term | Definition |
|------|-----------|
| Self-Hosted | You rent server space and manage the CMS, security, and infrastructure yourself |
| Hosted | The platform provider manages the server, security, and updates |
| CMS | Content Management System — software for creating and managing website content |
| DNS | Domain Name System — translates domain names to IP addresses |
| Domain Registrar | An accredited company authorised to sell domain name registrations |
| Static Site | A website of fixed HTML, CSS, and JS files with no server-side processing |
| Theme | A pre-designed template controlling a website's visual appearance and layout |
| Migration | Moving a website's files, database, and configuration between hosts |

## Summary

Deployment is the sequential process of registering a domain, setting up hosting, connecting the two via DNS, configuring the platform, testing, and publishing. Self-hosted platforms (WordPress.org) offer full control at the cost of maintenance responsibility. Hosted platforms (WordPress.com, Wix, Squarespace) handle infrastructure but limit customisation. Static sites hosted on GitHub Pages or Netlify are free, fast, and secure for portfolios and project sites. Domain names are portable — buy from one registrar, host with another. Every live site requires ongoing maintenance: updates, backups, content, and performance monitoring. The platform you choose is a trade-off between control and convenience — match it to your needs and your willingness to maintain.
