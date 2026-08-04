import yaml from "js-yaml";

// Vite'ning import.meta.glob funksiyasi build vaqtida barcha .md
// fayllarni topib, ularning matnini (raw holda) import qiladi.
// eager:true — hammasi darhol yuklanadi (kod bo'lib splitlanmaydi).
const files = import.meta.glob("../content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Har bir .md fayl boshida frontmatter bo'ladi:
// ---
// title: ...
// ---
// Qolgan matn tanasi
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data = yaml.load(match[1]) || {};
  return { data, body: match[2] };
}

function slugFromPath(path) {
  // "../content/api/create-payment.md" -> "create-payment"
  const parts = path.split("/");
  return parts[parts.length - 1].replace(/\.md$/, "");
}

function categoryFromPath(path) {
  // "../content/api/create-payment.md" -> "api"
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
      ...data, // title, order, method, endpoint, codeExamples, params
    };
  })
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const CATEGORY_LABELS = {
  guide: "Boshlash",
  api: "API Reference",
  overview: "Umumiy ma'lumot",
  connection: "Ulanish",
  methods: "Metodlar",
  payments: "Paynet to'lovlari",
};

export function getDocBySlug(slug) {
  return allDocs.find((d) => d.slug === slug);
}

// Sidebar uchun kategoriya bo'yicha guruhlangan ro'yxat
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
