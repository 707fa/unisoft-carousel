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

// Extracts response JSON blocks from an endpoint page's body text —
// they are displayed separately in the right column, below the request sample.
// Request blocks (method+params) remain in the body.
function extractResponses(rawBody) {
  const fenceRe = /```([A-Za-z0-9]*)[ \t]*\r?\n([\s\S]*?)```/g;
  const responses = [];
  const cuts = []; // [start, end] ranges to remove from body text
  let m;
  while ((m = fenceRe.exec(rawBody)) !== null) {
    const lang = (m[1] || "").toLowerCase();
    const code = m[2];
    const isJson = lang === "json" || /^\s*[[{]/.test(code);
    const hasResultOrError = /"(result|error)"\s*:/.test(code);
    const isRequest = /"method"\s*:/.test(code) && /"params"\s*:/.test(code);
    if (!isJson || !hasResultOrError || isRequest) continue;

    let cutStart = m.index;
    const cutEnd = m.index + m[0].length;

    // Find the nearest heading before the block (used as the response label)
    const before = rawBody.slice(0, m.index);
    const headingRe = /^(#{1,6})[ \t]+(.+)$/gm;
    let heading = null;
    let hm;
    while ((hm = headingRe.exec(before)) !== null) {
      heading = { index: hm.index, end: hm.index + hm[0].length, text: hm[2].trim() };
    }

    let label = "Response";
    if (heading) {
      label = heading.text;
      // If only whitespace separates the heading from the block,
      // the heading belongs to this response — remove it from the body too.
      const between = rawBody.slice(heading.end, m.index);
      if (/^\s*$/.test(between)) cutStart = heading.index;
    }

    responses.push({ label, code: code.replace(/\s+$/, "") });
    cuts.push([cutStart, cutEnd]);
  }

  if (!cuts.length) return { body: rawBody, responses };

  // Remove extracted blocks from the body and collapse excess blank lines.
  cuts.sort((a, b) => a[0] - b[0]);
  let body = "";
  let cursor = 0;
  for (const [s, e] of cuts) {
    body += rawBody.slice(cursor, s);
    cursor = e;
  }
  body += rawBody.slice(cursor);
  body = body.replace(/\n{3,}/g, "\n\n").trim();

  return { body, responses };
}

export const allDocs = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    // Only extract responses for endpoint pages (those with rpcMethod);
    // explanation pages (format, auth, etc.) keep their JSON inline.
    const extracted = data.rpcMethod
      ? extractResponses(body)
      : { body, responses: [] };
    return {
      slug: slugFromPath(path),
      category: categoryFromPath(path),
      body: extracted.body,
      responses: extracted.responses,
      ...data, // title, order, method, endpoint, codeExamples, params
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

// Sidebar section order — "Overview" appears at the top.
const CATEGORY_ORDER = [
  "overview",
  "connection",
  "methods",
  "payments",
  "guide",
  "api",
];

function categoryRank(key) {
  const i = CATEGORY_ORDER.indexOf(key);
  return i === -1 ? CATEGORY_ORDER.length : i;
}

export function getDocBySlug(slug) {
  return allDocs.find((d) => d.slug === slug);
}

// Short label for nested sidebar items:
// "Transfer create — Turkey" -> "Turkey" (parent name isn't repeated).
function navTitle(doc, parent) {
  if (!parent) return doc.title;
  const short = doc.title.replace(/^\s*(.+?)\s*[—–-]\s*/, (full, prefix) =>
    prefix.toLowerCase() === parent.title.toLowerCase() ? "" : full,
  );
  return short || doc.title;
}

// Grouped list by category for the Sidebar. A `parent: <slug>` field in the
// frontmatter nests a page under that slug as a collapsible child item.
export function getNavSections() {
  const grouped = {};
  for (const doc of allDocs) {
    if (!grouped[doc.category]) grouped[doc.category] = [];
    grouped[doc.category].push(doc);
  }

  return Object.entries(grouped)
    .map(([key, docs]) => {
      const items = [];
      const bySlug = new Map();

      for (const doc of docs) {
        if (doc.parent) continue;
        const item = { ...doc, children: [] };
        bySlug.set(doc.slug, item);
        items.push(item);
      }

      for (const doc of docs) {
        if (!doc.parent) continue;
        const parent = bySlug.get(doc.parent);
        // Ota sahifa topilmasa — element oddiy (yassi) holda qoladi.
        if (!parent) {
          items.push({ ...doc, children: [] });
          continue;
        }
        parent.children.push({ ...doc, children: [], navTitle: navTitle(doc, parent) });
      }

      return {
        key,
        title: CATEGORY_LABELS[key] || key,
        items,
      };
    })
    .sort((a, b) => categoryRank(a.key) - categoryRank(b.key));
}

// Flat ordered list of all docs for prev/next navigation — nested items
// follow immediately after their parent.
export function getFlatDocs() {
  return getNavSections().flatMap((s) =>
    s.items.flatMap((item) => [item, ...(item.children ?? [])]),
  );
}

export function getAdjacentDocs(slug) {
  const flat = getFlatDocs();
  const idx = flat.findIndex((d) => d.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}
