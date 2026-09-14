# 0014: Public Search — Pagefind, Build-Time Static Index

**Context**: The public Astro site (ADR 0009) needs search across Articles in addition to taxonomy browsing, without introducing any server-side infrastructure that would compromise its fully static nature.

**Decision**: Use **Pagefind** as the search solution. Pagefind indexes the site's built HTML output as a step immediately following the Astro build (`astro build` → `pagefind --site dist` → deploy). The resulting index is a set of static files served alongside the rest of the site; the search UI is a small client-side widget that queries this pre-built index directly in the browser.

**Why**: Pagefind requires no server, no database, and no additional hosting — it fits the "zero server code" constraint of the public site exactly, and slots into the existing full-regenerate export/build pipeline (ADR 0012) as one more build step rather than new infrastructure.
