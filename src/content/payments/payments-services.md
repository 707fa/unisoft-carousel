---
title: Services
order: 3
rpcMethod: paynet.services
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "paynet.services",
        "params": {
          "provider_id": 44
        }
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
        method: 'paynet.services',
        params: { provider_id: 44 },
      }),
    });
    const { result } = await response.json();
params:
  - name: provider_id
    type: integer
    required: true
    desc: "paynet.providers javobidan olingan provayder identifikatori."
---

Tanlangan provayder ostidagi operatsiyalarni qaytaradi. Odatda har
bir provayderda ikkita xizmat bo'ladi:

- **Create xizmati** (ma'lumot / qabul qiluvchini tekshirish) —
  `min_amount = max_amount = service_price = 0` va `type_id != 1`.
  To'lovdan oldin qabul qiluvchini tekshirish uchun ishlatiladi.
- **Confirm xizmati** (to'lovni bajarish) — `min_amount`,
  `max_amount`, `service_price`dan kamida bittasi musbat, yoki
  `type_id = 1`.

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| `id` | integer | Xizmat identifikatori |
| `title_uz` / `title_ru` | string | Xizmat nomi |
| `type_id` | integer | Xizmat turi |
| `min_amount` / `max_amount` | integer | Summa chegaralari |
| `service_price` | number | Xizmat narxi (agar belgilangan bo'lsa) |
| `fields` | array | To'lov uchun kerakli input maydonlar |
| `response_fields` | array | Chek/kvitansiyada ko'rsatiladigan maydonlar |

## Namuna javob (qisqartirilgan)

```json
{
  "jsonrpc": "2.0",
  "result": {
    "id": 44,
    "title_short": "UCell",
    "services": [
      {
        "id": 104,
        "title_uz": "To'lov",
        "type_id": 1,
        "min_amount": 500,
        "max_amount": 500000,
        "service_price": 0,
        "fields": [
          {
            "name": "clientid",
            "title_uz": "Telefon raqami",
            "required": true,
            "field_control": "PHONE"
          },
          {
            "name": "amount",
            "title_uz": "Summa",
            "required": true,
            "field_control": "MONEY"
          }
        ],
        "response_fields": [
          { "labelUz": "Operator", "fieldName": "provider_name" },
          { "labelUz": "Chek raqami", "fieldName": "transaction_id" },
          { "labelUz": "To'landi", "fieldName": "amount" }
        ]
      }
    ]
  },
  "id": 1,
  "status": true,
  "origin": "paynet.services"
}
```

`fields` massividagi `field_control` qiymati (`PHONE`, `MONEY` va
h.k.) UI'da qaysi turdagi input yaratish kerakligini bildiradi.
