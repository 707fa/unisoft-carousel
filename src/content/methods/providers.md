---
title: Provider
order: 2
rpcMethod: providers
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "providers",
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
        method: 'providers',
        params: {},
      }),
    });
    const { result } = await response.json();
params:
  - name: jsonrpc
    type: string
    required: true
    desc: "JSON-RPC protokol versiyasi."
  - name: id
    type: "string | integer"
    required: true
    desc: "So'rov identifikatori."
  - name: method
    type: string
    required: true
    desc: "Metod nomi — bu holda \"providers\"."
  - name: params
    type: object
    required: true
    desc: "Bo'sh obyekt — kelajakda ishlatish uchun zaxiralangan."
---

`providers` metodi karuselda ko'rsatiladigan barcha mavjud
provayderlar ro'yxatini qaytaradi. Har bir provayder — bu qo'llab-
quvvatlanadigan xizmat, mamlakat yoki to'lov tizimi (masalan, Visa,
Humo, Uzcard, MTS va h.k.).

## Bu metod nima uchun kerak

- Provayderlarni UI'da (karuselda) ko'rsatish
- Provayder nomlarini bir nechta tilda ko'rsatish
- Provayder faol yoki nofaolligini tekshirish

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| `id` | integer | Provayderning noyob identifikatori |
| `name_uz` | string | Provayder nomi o'zbek tilida |
| `name_en` | string | Provayder nomi ingliz tilida |
| `name_ru` | string | Provayder nomi rus tilida |
| `is_active` | boolean | Provayder faolligini bildiradi |

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "id": 1,
      "name_uz": "Turkiya",
      "name_ru": "Турция",
      "name_en": "Turkey",
      "is_active": true
    },
    {
      "id": 4,
      "name_uz": "Humo",
      "name_ru": "Хумо",
      "name_en": "Humo",
      "is_active": true
    },
    {
      "id": 5,
      "name_uz": "Uzcard",
      "name_ru": "Узкард",
      "name_en": "Uzcard",
      "is_active": true
    }
  ]
}
```
