# Stripe-style Docs — React Project

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build:
```bash
npm run build       # compiled to dist/
npm run preview      # preview the build locally
```

## Project Structure

```
src/
  content/
    guide/           <- "Getting Started" section pages
      intro.md
      auth.md
    api/              <- "API Reference" section pages
      create-payment.md
      refund.md
  lib/
    content.js        <- reads .md files and parses frontmatter
  components/
    Navbar.jsx         <- top navigation bar (logo, search)
    Sidebar.jsx         <- left navigation (built automatically from content.js)
    DocPage.jsx          <- renders a single docs page
    CodeBlock.jsx         <- right-side code panel (with tabs)
    ParamsTable.jsx        <- parameters table
  App.jsx                   <- routing (react-router-dom)
  main.jsx                   <- entry point
```

## Adding a New Docs Page — Workflow

No code is required to add a new page. Simply create a new `.md` file:

1. Place a new `.md` file inside `src/content/api/` or `src/content/guide/`
2. Add frontmatter at the top of the file (between `---` markers):

```md
---
title: Create Customer
order: 3
method: POST
endpoint: /v1/customers
codeExamples:
  curl: |
    curl https://api.example.com/v1/customers \
      -u sk_test_123: \
      -d email=user@example.com
  node: |
    const customer = await client.customers.create({
      email: 'user@example.com',
    });
params:
  - name: email
    type: string
    required: true
    desc: "The customer's email address."
---

Write regular Markdown text here — headings, paragraphs, lists, etc.
This section becomes the main description of the page.
```

3. Save — Vite will hot-reload automatically, and the new item will appear
   in the sidebar, since `Sidebar.jsx` reads all `.md` files automatically
   via `getNavSections()`.

To add a new **section** (e.g., "Webhooks"):
- Create a `src/content/webhooks/` directory and place `.md` files inside it
- Add a `webhooks: "Webhooks"` entry to the `sectionLabels` object in
  `src/lib/content.js`

## Why This Format

| Solution | Best for |
|---|---|
| **Markdown + frontmatter** (this project) | Teams where content is frequently written by non-developers |
| Hardcoded in code (`const PARAMS = [...]`) | Very small, rarely-changed docs |
| Dynamic from backend/CMS | Large-scale docs, managed by a separate team, or when auto-generation from a real API is needed |

The Markdown approach is a middle ground — it allows adding content without
writing code, yet requires no backend or server (everything is compiled to
static files at build time).

## Technologies

- **Vite** — dev server and build
- **React Router** — navigation between `/docs/:slug` pages
- **react-markdown + remark-gfm** — renders Markdown to HTML
- **js-yaml** — parses the YAML frontmatter
- **Tailwind CSS** — styling
- **lucide-react** — icons

## Next Steps (recommended for production)

- Search: add [Algolia DocSearch](https://docsearch.algolia.com/) or a simple
  client-side fuzzy search (`fuse.js`) to make the search box in `Navbar` functional
- SEO: switch Vite to SSG mode with `vite-plugin-ssr`, or migrate to Next.js
  (if SEO matters)
- Dark mode: Tailwind's `dark:` class + `prefers-color-scheme`
- Versioning: via `content/v1/`, `content/v2/` directories
