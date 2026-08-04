import yaml from "js-yaml";

// Vite's import.meta.glob function finds all .md files at build time
// and imports their content as raw text.
// eager:true — all files are loaded immediately (not code-split).
const files = import.meta.glob("../content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Each .md file begins with frontmatter:
// ---
// title: ...
// ---
// Followed by the body text
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data = yaml.load(match[1]) || {};
  return { data, body: match[2] };
}

function slugFromPath(path) {
  // "../content/api/create-payment.md" → "create-payment"
  const parts = path.split("/");
  return parts[parts.length - 1].replace(/\.md$/, "");
}

function categoryFromPath(path) {
  // "../content/api/create-payment.md" → "api"
  const parts = path.split("/");
  return parts[parts.length - 2];
}

export const allDocs = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      category: categoryFromPath(path),
      body,
      ...data, // title, order, method, endpoint, codeExamples, params (spread from frontmatter)
    };
  })
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const CATEGORY_LABELS = {
  guide: "Getting Started",
  api: "API Reference",
  overview: "Overview",
  connection: "Connection",
  methods: "Methods",
  payments: "Paynet Payments",
};

export function getDocBySlug(slug) {
  return allDocs.find((d) => d.slug === slug);
}

// Grouped list by category for the Sidebar
export function getNavSections() {
  const grouped = {};
  for (const doc of allDocs) {
    if (!grouped[doc.category]) grouped[doc.category] = [];
    grouped[doc.category].push(doc);
  }
  return Object.entries(grouped).map(([key, items]) => ({
    key,
    title: CATEGORY_LABELS[key] || key,
    items,
  }));
}
