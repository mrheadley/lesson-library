# 0009: Public Site Architecture — Separate Static Astro Site, No Shared Runtime

**Context**: Lesson-forge/lesson-materials produce content (lesson maps, research notes, reference articles, delivery-ready plans) that should partly reach the public (students/parents/colleagues browsing Reference Articles and Course Outlines) and partly stay admin-only (Notes, Lesson Plans). This needs to coexist with the existing teacher-assistant app (ADR 0001) without threatening its stability, data privacy, or free-tier hosting constraints (Oracle Free Tier and Bluehost shared/WordPress hosting were both evaluated and ruled out — see 0015).

**Decision**:
- **Two fully independent systems, no shared runtime, no shared deploy:**
  - **teacher-assistant**: the existing live app (Hono + Postgres + Prisma + Better-auth, per ADR 0001). Owns all data — including the new public-facing content — and all editing/review/publish actions. Never directly exposed to the public.
  - **public site**: a new, separate Astro project, statically generated, containing zero server code, zero database connection, and zero authentication. Deployed to any free static host (Vercel/Netlify/Cloudflare Pages/GitHub Pages).
- **No live API bridges the two.** The only connection between them is a one-way **export step** (see ADR 0012) that runs inside teacher-assistant, reads Postgres, and writes flat content files into the Astro site's repo.
- **Domains**: subdomains on the same root domain — `app.yourdomain.com` for teacher-assistant (private), `yourdomain.com` (or `www.`) for the public Astro site. Chosen over path-based splitting for clean cookie isolation and independent Nginx/host routing.

**Why**: A public library for students should not share fate with a private gradebook — no outage, bug, or security issue in one system can affect the other, since they don't share a process, database connection, or deploy pipeline. Static hosting for the public side is free, fast, and trivially scalable to a whole school reading content at once. This supersedes only the *hosting/topology* assumptions in ADR 0001 for the public-facing piece — teacher-assistant's own stack (Hono/Prisma/Postgres/Better-auth/Docker) is unchanged.
