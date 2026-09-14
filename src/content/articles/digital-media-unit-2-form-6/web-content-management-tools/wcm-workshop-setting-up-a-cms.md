---
title: "WCM Workshop: Setting Up a CMS"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Web Content Management Tools"
topicId: "web-content-management-tools"
order: 6
---
# Setting Up a CMS

## The Workshop Promise

This is the lesson where the theory becomes yours. By the end of the period you should have a working website running on your own machine — installed, configured, filled with content, and dressed in your own colours. The loop is always the same: **install → configure → add content → customise the theme**. Keep that rhythm and every future website you build — school magazine, sports club, portfolio — follows the identical steps.

A realistic lab game plan is five minutes of introduction, twenty-five minutes of building (install, one post, one page, change the theme colours), and five minutes of share-out at the projector. Each student leaves owning a site.

## Two Ways to Install

There are two practical routes, and both are legitimate — they differ in where the site lives.

| | Local stack | One-click host installer |
|--|-------------|--------------------------|
| Where it runs | Your own machine (sandbox) | Live hosting, a real domain |
| Tools | XAMPP or LocalWP | Softaculous, Bluehost/SiteGround installers |
| Internet needed | No, after initial download | Yes |
| Risk / cost | Zero — nothing public, nothing billed | Site is live on the web |
| When to use | Class labs, experimenting, building | The moment you want to publish |

Installation is not magic: the CMS needs three things to run — a **web server** (Apache or nginx), a **database server** (MySQL/MariaDB), and **PHP**. XAMPP installs all three at once, which is why it is the classic classroom tool. LocalWP does the same thing and adds a one-click WordPress install on top.

## Route One: The Local Stack with XAMPP

XAMPP is a free, cross-platform bundle of Apache, MariaDB/MySQL, and PHP. The classic local route takes about ten to fifteen minutes:

1. **Download** XAMPP and the WordPress zip. In a shared lab, the teacher pre-downloads both onto a USB stick — thirty machines install offline, instead of thirty downloads on a thin internet connection.
2. **Start** Apache and MySQL from the XAMPP control panel.
3. **Copy** the WordPress files into the web root (`htdocs`), so the site opens at `localhost/wordpress`.
4. **Create an empty database** via phpMyAdmin (bundled with XAMPP). You only need the database name — the default credentials in a fresh XAMPP install are username `root` with a blank password, and they hold for phpMyAdmin too.
5. **Run the on-screen installer.** Enter the database name and credentials, then set the site title and create your admin account (pick a real username and a strong password — you will never see this screen again).

WordPress markets itself as a five-minute install, and it is telling the truth: download, configure, run the installer. If it takes longer, a setup step was skipped, not the tool being difficult.

## Route Two: The One-Click Installer

On shared hosting, Softaculous (bundled into most cPanel control panels) or a host's own installer (Bluehost's Marketplace, SiteGround's Site Tools) does everything from a single form — including creating the database for you. Fill in the site name, admin username and password, and click. That is the whole install. One-click does not mean nothing to configure, though — it still needs your deliberate choices, and you are not done until you have verified the settings below.

## Configure: Name, Users, Permalinks, Timezone

Installation and configuration are different acts. Immediately after installing, go to **Settings** and set:

- **Site title and tagline** — the name your visitors see
- **Timezone** — a small detail, but if you leave it on the default UTC, every post and scheduled post you publish for years will carry the wrong time of day
- **Permalinks** — switch from the default `?p=123` URLs to the "Day and name" or "Post name" structure, so article links read `example.com/news/carnival-winners` instead of `example.com/?p=42`. On local XAMPP this depends on Apache's `mod_rewrite` being enabled — the classic source of 404s.

## Adding Content: Posts, Pages, and Media

Logging in to the **admin dashboard** (`/wp-admin`) is where the editor's life begins. Content is written with the **block editor**: every part of a post or page — paragraph, heading, image, video embed, gallery — is a block you can move, style, and arrange without touching HTML.

Two content types matter early, and students mix them up constantly:

- **Posts** are entries that appear in reverse chronological order — news, fixtures, match reports. They belong to categories and tags.
- **Pages** are standalone — About, Contact, Fixtures. They sit outside the news feed.

Your first session should produce one post, one page, and at least one uploaded image in the **Media** library. Then set a **menu** so visitors can actually navigate, and decide what your **front page** shows: the latest posts (a news front page) or a fixed page. If you visit `localhost/wordpress/wp-json/wp/v2/posts` and watch your posts arrive as JSON, you have just reproduced the architecture lesson from last time — the site's content is also an application.

## Making It Yours: Themes and the Site Editor

A **theme** controls how the site looks. Install a free theme from Appearance → Themes, activate it, and most of the work is done — but the modern tool is the **Site Editor** (Appearance → Editor), which works on **block themes**: headers, footers, colours, fonts, and even the global styles are blocks you can edit from the dashboard, no code required. A school magazine sets its colours to the school's, a carnival committee swaps in a countdown and a promo-video embed, a netball club sets a static front page, an About page, and fixtures as posts. A student portfolio can switch between style variations — complete looks — without new code.

One footnote on themes: guides published in 2026 disagree about which default theme new WordPress installs ship with — some claim a "Twenty Twenty-Six" default joined with WordPress 6.8, while the core roadmap reports the annual default was skipped and **Twenty Twenty-Five** (which shipped with 6.7 in November 2024) remains the default. After installing, just look at your Appearance → Themes screen and record what you actually got; keep the site updated regardless (the current 2026 line is WordPress 7.0 "Armstrong", released May 2026, with 7.0.4 arriving that August).

## If Something Goes Wrong: The Troubleshooting Table

The "if the site breaks, the CMS is bad" instinct is wrong. Nearly every lab failure points at one specific component:

| Symptom | Cause | Fix |
|---------|-------|-----|
| Apache won't start, "port 80 in use" | Another program (Skype, another server) owns port 80 | Stop the conflicting program, or switch Apache to another port in its config |
| "Error establishing a database connection" | Wrong database name/user, or MySQL stopped | Recheck the wp-config credentials; restart MySQL from the control panel |
| "Cannot write wp-config.php" | File permissions block write | Create wp-config.php manually with the installer's shown-to-you configuration |
| Forgotten admin password on localhost | The reset email is not delivered to localhost | Reset it directly in phpMyAdmin or with WP-CLI — don't wait for the link |
| Permalink 404s on XAMPP | Apache `mod_rewrite` / `.htaccess` disabled | Enable mod_rewrite so "pretty" URLs resolve |
| White screen (no page, no error) | Usually a plugin or theme conflict | Deactivate plugins one by one / switch theme via the database |
| Theme looks unfinished / default | The wrong theme active, or the "Twenty Twenty-Six vs Twenty Twenty-Five" confusion above | Check the theme list; the shipped default is whatever you actually see |

## Common Misconceptions

### "Installing WordPress is hard"
With a one-click installer it is a form, and even the manual XAMPP route is five steps. Difficulty in class usually means a setup step was skipped.

### "It works on localhost, so I've published my site"
A local site lives on one machine. Going live needs hosting, a domain, and an upload or migration step — a natural follow-up using an installer like Softaculous on a real host.

### "WordPress costs money"
WordPress itself is free, open-source software. Hosting, domains, themes, and plugins are what cost. A school club can stay free for years.

### "Themes are just skins"
Modern block themes define layout, templates, headers and footers, and global styles. Changing themes can change menus and structure — Appearance choices are design decisions.

### "More plugins make the site better"
Every plugin adds load and attack surface. Fewer, vetted, updated plugins beat a carnival of them — plugin flaws drive most CMS hacks.

### "If the site breaks, the CMS is bad"
Most student failures are layer problems — port conflicts, wrong database credentials, permalinks unconfigured, a plugin conflict. Each has a fix, and each is a lesson in the stack.

### "One-click install means nothing is configured"
The installer needs your deliberately chosen site title, admin credentials, timezone, and permalinks. Installation and configuration are separate, and both are yours.

## Key Terms

| Term | Definition |
|------|-----------|
| XAMPP | One package giving a local web server (Apache), database (MySQL/MariaDB), and PHP |
| phpMyAdmin | The web tool for managing MySQL — where you create the empty database |
| LocalWP | A one-click local WordPress tool that auto-configures the server stack |
| One-Click Installer | Control-panel feature (e.g. Softaculous) that installs and creates the database from a form |
| wp-config.php | The configuration file holding the database name, user, password, and site URLs |
| Block Editor | The content editor where every part of a post or page is a block |
| Theme | Templates, styles, and settings controlling how the site looks |
| Site Editor | The Appearance → Editor screen for editing headers, footers, colours, and templates |
| Administrative Dashboard | The `/wp-admin` area holding posts, pages, media, plugins, themes, and settings |
| mod_rewrite / .htaccess | Apache features that make pretty permalinks work locally |

## Summary

Setting up a CMS is a four-beat loop — install, configure, add content, customise — and it is closer to a chain of deliberately made choices than to a technical mountain. Install locally with XAMPP (or LocalWP) for a zero-cost sandbox, or live via a one-click installer when you mean to publish; make sure a web server, a database, and PHP are present either way. Configure the title, timezone, permalinks, and admin account; add a post, a page, and some media; then make the site yours through the Site Editor rather than code. When something breaks, read it as a layer problem — database credentials, port conflicts, permalinks, or plugin conflicts each have a known fix. Finish the loop and you have not only installed a CMS; you have rendered yesterday's architecture lesson in something you built, and you own the result.
