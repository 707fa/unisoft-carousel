---
title: Transfer create — Uzcard payment
order: 15
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
          "ext_id": "uzcard_test_118",
          "amount": 100000,
          "currency": "860",
          "service_code": "V2S0009",
          "sender_id": 1,
          "fields": {
            "card_number": "56146810****4552",
            "expire": "1226",
            "receiver_id": "935989900"
          }
        }
      }'
params:
  - name: fields.card_number
    type: string
    required: true
    desc: "Kartaning raqami."
  - name: fields.expire
    type: string
    required: true
    desc: "Karta amal qilish muddati (MMYY formatida)."
  - name: fields.receiver_id
    type: string
    required: true
    desc: "Qabul qiluvchining identifikatori (masalan, telefon raqami)."
---

**Uzcard** kartasidan OTP tasdiqlash orqali pul yechish (debit)
operatsiyasi. Bu xizmat kartaning amal qilish muddatini (`expire`)
ham talab qiladi — bu 3-D Secure yoki OTP tekshiruvi uchun kerak.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "uzcard_test_118",
    "state": 33,
    "description": "insufficient funds!",
    "amount": 100000,
    "currency": "860",
    "rate": null,
    "commission": 1000,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426172527-2c6c307e-fa76-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```

> Bu namunada `state: 33` — xatolik holati (`transaction error`,
> masalan mablag' yetarli emasligi). Barcha holat kodlari
> [Transfer State](/docs/transfer-state) sahifasida keltirilgan.
