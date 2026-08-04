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

// Endpoint sahifalaridagi "javob" (response) JSON bloklarini matn tanasidan
// ajratib olamiz — ular so'rov (request) namunasining ostida, o'ng ustunda
// alohida ko'rsatiladi. So'rov (method+params) bloklari matnda qoladi.
function extractResponses(rawBody) {
  const fenceRe = /```([A-Za-z0-9]*)[ \t]*\r?\n([\s\S]*?)```/g;
  const responses = [];
  const cuts = []; // matndan olib tashlanadigan [start, end] oraliqlar
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

    // Blokdan oldingi eng yaqin sarlavhani topamiz (label uchun)
    const before = rawBody.slice(0, m.index);
    const headingRe = /^(#{1,6})[ \t]+(.+)$/gm;
    let heading = null;
    let hm;
    while ((hm = headingRe.exec(before)) !== null) {
      heading = { index: hm.index, end: hm.index + hm[0].length, text: hm[2].trim() };
    }

    let label = "Javob";
    if (heading) {
      label = heading.text;
      // Agar sarlavha bilan blok orasida faqat bo'sh joy bo'lsa —
      // sarlavha shu javobga tegishli, uni ham matndan olib tashlaymiz.
      const between = rawBody.slice(heading.end, m.index);
      if (/^\s*$/.test(between)) cutStart = heading.index;
    }

    responses.push({ label, code: code.replace(/\s+$/, "") });
    cuts.push([cutStart, cutEnd]);
  }

  if (!cuts.length) return { body: rawBody, responses };

  // Ajratilgan bloklarni matndan olib tashlaymiz va ortiqcha bo'sh
  // qatorlarni tozalaymiz.
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
    // Faqat endpoint sahifalarida (rpcMethod bor) javobni ajratamiz;
    // format/auth kabi tushuntirish sahifalarida JSON matn ichida qoladi.
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
  guide: "Boshlash",
  api: "API Reference",
  overview: "Umumiy ma'lumot",
  connection: "Ulanish",
  methods: "Metodlar",
  payments: "Paynet to'lovlari",
};

// Sidebar'dagi bo'limlar tartibi — "Umumiy ma'lumot" eng tepada.
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

// Sidebar uchun kategoriya bo'yicha guruhlangan ro'yxat
export function getNavSections() {
  const grouped = {};
  for (const doc of allDocs) {
    if (!grouped[doc.category]) grouped[doc.category] = [];
    grouped[doc.category].push(doc);
  }
  return Object.entries(grouped)
    .map(([key, items]) => ({
      key,
      title: CATEGORY_LABELS[key] || key,
      items,
    }))
    .sort((a, b) => categoryRank(a.key) - categoryRank(b.key));
}

// Sahifadan-sahifaga o'tish (Oldingi / Keyingi) uchun sidebar tartibidagi
// yassi ro'yxat.
export function getFlatDocs() {
  return getNavSections().flatMap((s) => s.items);
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
