# Stripe-style Docs — React project

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build:
```bash
npm run build       # bundled into the dist/ folder
npm run preview      # preview the build result locally
```

## Project structure

```
src/
  content/
    overview/         <- "Overview" section pages
      intro.md
      terms.md
    connection/       <- "Connection" section pages
      format.md
      auth.md
    methods/          <- "Methods" section pages (JSON-RPC methods)
    payments/         <- "Paynet payments" section pages
  lib/
    content.js        <- reads .md files and parses their frontmatter
  components/
    Navbar.jsx         <- top bar (logo, search)
    Sidebar.jsx         <- left navigation (built automatically from content.js)
    DocStream.jsx        <- renders docs as one continuous infinite scroll
    DocArticle.jsx        <- renders a single docs page
    CodeBlock.jsx          <- right-hand code panel (with tabs)
    ResponseBlock.jsx       <- sample response panel
    ParamsTable.jsx          <- parameters table
  App.jsx                     <- routing (react-router-dom)
  main.jsx                     <- entry point
```

## Adding a new docs page — workflow

You **don't need to write any code** to add a new page. Just create a new
`.md` file:

1. Put a new `.md` file inside `src/content/methods/` or another section folder
2. Add frontmatter at the top of the file (between `---`):

```md
---
title: Create customer
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

Write plain Markdown here — headings, paragraphs, lists, etc. This part
becomes the main description of the page.
```

3. Save it — Vite hot-reloads automatically, and a new item appears in the
   sidebar on its own, because `Sidebar.jsx` reads all `.md` files
   automatically via `getNavSections()`.

To add a new **section** (for example "Webhooks"):
- Create the `src/content/webhooks/` folder and put `.md` files in it
- Add a `webhooks: "Webhooks"` line to the `CATEGORY_LABELS` object in
  `src/lib/content.js`

## Why this format was chosen

| Approach | Best for |
|---|---|
| **Markdown + frontmatter** (this project) | Teams where content is written frequently by non-developers |
| Hardcoded in code (`const PARAMS = [...]`) | Very small docs that rarely change |
| Dynamic from a backend/CMS | Large docs managed by another team, or auto-generated from a real API |

The Markdown approach sits in between — it lets you add content without
writing code, but needs no backend/server (everything is compiled into
static files at build time).

## Technologies

- **Vite** — dev server and build
- **React Router** — navigation between `/docs/:slug` pages
- **react-markdown + remark-gfm** — render Markdown to HTML
- **js-yaml** — parse the YAML in the frontmatter
- **Tailwind CSS** — styling
- **lucide-react** — icons

## Next steps (recommended for production)

- Search: to make the search box in the `Navbar` functional, add
  [Algolia DocSearch](https://docsearch.algolia.com/) or a simple
  client-side fuzzy search (`fuse.js`)
- SEO: switch Vite to SSG mode with `vite-plugin-ssr`, or migrate to
  Next.js (if SEO matters)
- Dark mode: Tailwind's `dark:` class + `prefers-color-scheme`
- Versioning: via `content/v1/`, `content/v2/` folders
