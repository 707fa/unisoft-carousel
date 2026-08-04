# Stripe-style Docs — React loyiha

## Ishga tushirish

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build:
```bash
npm run build       # dist/ papkasiga yig'iladi
npm run preview      # build natijasini localda ko'rish
```

## Loyiha strukturasi

```
src/
  content/
    guide/           <- "Boshlash" bo'limi sahifalari
      intro.md
      auth.md
    api/              <- "API Reference" bo'limi sahifalari
      create-payment.md
      refund.md
  lib/
    content.js        <- .md fayllarni o'qib, frontmatter'ni parse qiladi
  components/
    Navbar.jsx         <- yuqori panel (logo, qidiruv)
    Sidebar.jsx         <- chap navigatsiya (content.js'dan avtomatik quriladi)
    DocPage.jsx          <- bitta docs sahifasini render qiladi
    CodeBlock.jsx         <- o'ng tomondagi kod paneli (tab bilan)
    ParamsTable.jsx        <- parametrlar jadvali
  App.jsx                   <- routing (react-router-dom)
  main.jsx                   <- entry point
```

## Yangi docs sahifasi qo'shish — ish jarayoni

Yangi sahifa qo'shish uchun **kod yozish shart emas**. Faqat yangi
`.md` fayl yaratiladi:

1. `src/content/api/` yoki `src/content/guide/` ichiga yangi `.md` fayl qo'ying
2. Fayl boshiga frontmatter yozing (`---` orasida):

```md
---
title: Mijoz yaratish
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
    desc: "Mijozning email manzili."
---

Bu yerga oddiy Markdown matn yoziladi — sarlavhalar, paragraflar,
ro'yxatlar va h.k. Bu qism sahifaning asosiy tavsif qismi bo'ladi.
```

3. Saqlang — Vite avtomatik qayta yuklaydi (hot reload), sidebar'da
   yangi element o'zi paydo bo'ladi, chunki `Sidebar.jsx`
   `getNavSections()` orqali barcha `.md` fayllarni avtomatik o'qiydi.

Yangi **bo'lim** (masalan "Webhooks") qo'shish uchun:
- `src/content/webhooks/` papkasini yarating, ichiga `.md` fayllar qo'ying
- `src/lib/content.js` ichidagi `sectionLabels` obyektiga
  `webhooks: "Webhooklar"` qatorini qo'shing

## Nega bu format tanlandi

| Yechim | Kimga mos |
|---|---|
| **Markdown + frontmatter** (shu loyihada) | Kontentni tez-tez yozuvchi/dasturchi bo'lmagan odam yozadigan jamoalar uchun |
| Kod ichida hardcode (`const PARAMS = [...]`) | Juda kichik, kam o'zgaruvchi docs uchun |
| Backend/CMS'dan dinamik | Docs soni katta, boshqa jamoa boshqarsa yoki real API'dan avtogeneratsiya kerak bo'lsa |

Markdown yondashuvi ikkalasining o'rtasida — kod yozmasdan kontent
qo'shish imkonini beradi, lekin hech qanday backend/server kerak emas
(hammasi build vaqtida statik faylga aylanadi).

## Texnologiyalar

- **Vite** — dev server va build
- **React Router** — `/docs/:slug` sahifalari orasida navigatsiya
- **react-markdown + remark-gfm** — Markdown'ni HTML'ga render qilish
- **js-yaml** — frontmatter'dagi YAML'ni parse qilish
- **Tailwind CSS** — stilizatsiya
- **lucide-react** — ikonkalar

## Keyingi qadamlar (production uchun tavsiya)

- Qidiruv: `Navbar`dagi qidiruv qutisini ishlaydigan qilish uchun
  [Algolia DocSearch](https://docsearch.algolia.com/) yoki oddiy
  client-side fuzzy search (`fuse.js`) qo'shish mumkin
- SEO: Vite'ni SSG rejimiga o'tkazish uchun `vite-plugin-ssr` yoki
  Next.js'ga migratsiya (agar SEO muhim bo'lsa)
- Dark mode: Tailwind'ning `dark:` klassi + `prefers-color-scheme`
- Versiyalash: `content/v1/`, `content/v2/` papkalari orqali
