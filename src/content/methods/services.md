---
title: Services
order: 3
rpcMethod: services
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "services",
        "params": {
          "provider_id": 8
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
        method: 'services',
        params: { provider_id: 8 },
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
    desc: "Metod nomi — bu holda \"services\"."
  - name: provider_id
    type: integer
    required: true
    desc: "Xizmatlari so'ralayotgan provayderning identifikatori."
---

`services` metodi tanlangan provayder uchun mavjud xizmatlar
ro'yxatini qaytaradi. Har bir xizmat — shu provayder uchun
bajarilishi mumkin bo'lgan aniq operatsiya: karta orqali pul yechish,
o'tkazma yoki to'lov.

## Bu metod nima uchun kerak

- Provayder tanlangandan keyin mavjud xizmatlarni ko'rsatish
- Xizmat nomi va tavsifini bir nechta tilda ko'rsatish
- Summa chegaralari va valyutani tekshirish
- Kerakli maydonlar asosida input formani dinamik qurish
- 3-D Secure talab qilinishini aniqlash

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| `id` | integer | Xizmatning noyob identifikatori |
| `name_uz` / `name_en` / `name_ru` | string | Xizmat nomi tillar bo'yicha |
| `type` | string | Xizmat turi (`debit`, `credit`, `payment`) |
| `description` | string | Xizmat tavsifi |
| `min_amount` / `max_amount` | integer | Ruxsat etilgan minimal/maksimal summa (tiyin/kopek birligida) |
| `currency` | string | ISO 4217 valyuta kodi |
| `code` | string | Ichki xizmat kodi |
| `is_3ds` | boolean | 3-D Secure talab qilinishini bildiradi |
| `fields` | array | So'rov uchun talab qilinadigan input maydonlar ro'yxati |
| `response_fields` | array | Xizmat javobida qaytadigan maydonlar |

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": {
    "id": 8,
    "provider": "TCB",
    "services": [
      {
        "id": 6,
        "name_uz": "RF kartalaridan AFT orqali pul yechish",
        "name_en": "AFT Withdrawal Service for RF Cards",
        "type": "debit",
        "min_amount": 100,
        "max_amount": 10000000,
        "currency": "643",
        "code": "V2S0006",
        "is_3ds": false,
        "fields": [
          {
            "id": 17,
            "name": "to_card_number",
            "label_en": "Receiver card",
            "type": "string",
            "is_required": true,
            "regex": "^[0-9]{16}$"
          }
        ],
        "response_fields": [
          { "field_name": "form_url", "label_en": "Form URL" }
        ]
      }
    ]
  },
  "id": 1,
  "status": true,
  "origin": "services"
}
```

`fields` massividagi har bir maydon `name`, `type`, `is_required` va
kerak bo'lsa `regex` orqali qanday input yaratish kerakligini
belgilaydi — bu orqali frontendda forma avtomatik quriladi.
