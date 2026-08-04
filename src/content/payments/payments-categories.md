---
title: Categories
order: 1
rpcMethod: paynet.categories
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "paynet.categories",
        "params": {}
      }'
  node: |
    const response = await fetch(`https://${host}/api/v1/jsonrpc`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'paynet.categories',
        params: {},
      }),
    });
    const { result } = await response.json();
---

**Paynet to'lovlari** — Unisoft Carousel'ning yana bir moduli:
mobil aloqa, kommunal xizmatlar, internet, taksi va boshqa
provayderlar orqali to'lov qabul qilish uchun ishlatiladi.

`paynet.categories` provayderlarning mantiqiy guruhlanishini
qaytaradi (Mobil aloqa, Kommunal xizmatlar, Internet va h.k.).

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| `id` | integer | Kategoriya identifikatori |
| `title_uz` / `title_ru` | string | Kategoriya nomi tillar bo'yicha |
| `is_subcategory` | boolean | Bu kichik kategoriya ekanligini bildiradi |

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": [
    { "title_uz": "Uyali aloqa", "is_subcategory": false, "id": 1 },
    { "title_uz": "Uy telefoni", "is_subcategory": false, "id": 2 },
    { "title_uz": "Internet", "is_subcategory": false, "id": 3 },
    { "title_uz": "Xizmatlar", "is_subcategory": false, "id": 7 },
    { "title_uz": "Taxi", "is_subcategory": false, "id": 11 },
    { "title_uz": "Davlat xizmatlari", "is_subcategory": false, "id": 14 }
  ],
  "id": 1,
  "status": true,
  "origin": "paynet.categories"
}
```
