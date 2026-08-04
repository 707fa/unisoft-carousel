---
title: Transfer create — RF MTS
order: 12
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "kg_test_1000",
          "amount": 100000,
          "currency": "643",
          "service_code": "V2S0008",
          "sender_id": 1,
          "fields": {
            "receiver_description": "6117128"
          }
        }
      }'
params:
  - name: fields.receiver_description
    type: string
    required: true
    desc: "Qabul qiluvchining tavsifi (MTS bank tizimidagi identifikator)."
---

Rossiya **MTS Bank** orqali pul o'tkazish uchun ishlatiladi. Javobda
qo'shimcha `banks` maydoni qaytadi — bu foydalanuvchiga tegishli
bank ro'yxatini ko'rsatish uchun ishlatiladi.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Qo'shimcha javob maydoni

| Maydon | Turi | Tavsif |
|---|---|---|
| `banks` | array | RF MTS uchun mavjud banklar kodi va nomi ro'yxati |

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "kg_test_1000",
    "state": 0,
    "description": "Created",
    "amount": 100000,
    "currency": "643",
    "rate": null,
    "commission": 900,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": "https://qr.nspk.ru/AD10005D4LQJ1S5N8K88D9P2LQLN7L7V",
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426160330-41552c75-c708-4",
      "id": null
    },
    "banks": [
      { "code": "bank100000000266", "name": "банк Элита" },
      { "code": "bank100000000055", "name": "Банк Йошкар-Ола" }
    ]
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```

Bu xizmatda `form_url` qaytishi mumkin — foydalanuvchi to'lovni
yakunlash uchun shu URL orqali qo'shimcha sahifaga yo'naltiriladi
(masalan, QR-kod orqali to'lov).
