# EqualFaith Europe — Website

Plain HTML / CSS / JS static site. No build step, no framework, no dependencies to install.

## Structure

```
index.html          Home
about.html           About
publications.html    Publications (with filterable entries)
priorities.html      Priorities 2026–2027
transparency.html    Transparency (proceedings table + monthly disclosure)
support.html         Support Us / donation page
contact.html         Contact / press
privacy.html         Privacy policy (placeholder — needs legal review)
terms.html           Terms of use (placeholder — needs legal review)
style.css            All styles — design tokens at the top
main.js              Nav toggle, hero animation, publication filters
robots.txt
sitemap.xml
```

## Design system

- Colors: ink navy `#161B2E`, paper `#F3F4EF`, gold `#C9A15C`, brick `#8B3A3A`
- Type: Libre Caslon Text (headings), IBM Plex Sans (body), IBM Plex Mono (citations/tags/labels) — loaded via Google Fonts CDN in each page's `<head>`
- Layout: "margin citation" pattern — a narrow left column for article references and labels, echoing how the org's own legal work cites sources
- Signature: two thin gold lines converge on homepage load ("the gap closes") — respects `prefers-reduced-motion`

## Deploying via GitHub + Vercel

1. Create a new GitHub repo (e.g. `equalfaith-europe-site`) and push these files to it — no subfolder needed, they can sit at the repo root.
2. In Vercel: **Add New Project** → import the GitHub repo.
3. Framework preset: **Other** (this is a static site, no build command needed).
4. Root directory: leave as `/`.
5. Deploy. Vercel will serve `index.html` at the root automatically.
6. Once deployed, add your custom domain (`equalfaitheurope.org`) under the project's **Domains** settings, and point its DNS to Vercel per their instructions. Redirect `equalfaitheurope.online` to the primary domain the same way.

## Before going live — replace placeholders

- `privacy.html` and `terms.html` are placeholder text — have these reviewed once the stichting is formally registered.
- Publication links (`href="#"` on Read the submission / article links) need to point to actual hosted PDFs or article pages once available.
- The contact form currently has no backend (`action="#"`) — wire it to a form service (e.g. Formspree, Netlify Forms if you switch host) or a simple serverless function before relying on it.
- Once ANBI status is granted, add the RSIN/fiscal number and registered address to `transparency.html` where noted.
- Swap the WhyDonate link in `support.html` if the URL changes.

## Updating monthly transparency data

`transparency.html` has a plain HTML table (`.proceedings`) for Current Proceedings — edit rows directly for now. If this becomes frequent enough to be tedious, it's a good candidate for a small JSON-driven table later (similar pattern to how kolouch.pro drives articles from `articles-data.js`).
