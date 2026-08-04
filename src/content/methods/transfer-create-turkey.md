---
title: Transfer create — Turkey
order: 13
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
          "ext_id": "turkey_test_116",
          "amount": 1000000,
          "currency": "860",
          "service_code": "V2S0001",
          "sender_id": 1,
          "fields": {
            "nationality": "RUS",
            "receiver_phone": "+79011234567",
            "receiver_last_name": "GULSOY",
            "receiver_first_name": "BERAT",
            "email": "ayozo9900@gmail.com",
            "country_phone_code": "+7",
            "tr_type": "Transfer2IBAN",
            "reason": "HOME_RENT",
            "account": "TR600001200967400001041414"
          }
        }
      }'
params:
  - name: fields.nationality
    type: string
    required: true
    desc: "Qabul qiluvchining millati."
  - name: fields.receiver_phone
    type: string
    required: true
    desc: "Qabul qiluvchining telefon raqami."
  - name: fields.receiver_last_name
    type: string
    required: true
    desc: "Qabul qiluvchining familiyasi."
  - name: fields.receiver_first_name
    type: string
    required: true
    desc: "Qabul qiluvchining ismi."
  - name: fields.email
    type: string
    required: true
    desc: "Qabul qiluvchining email manzili."
  - name: fields.country_phone_code
    type: string
    required: true
    desc: "Qabul qiluvchi davlatining telefon kodi (masalan, +7)."
  - name: fields.tr_type
    type: string
    required: true
    desc: "O'tkazma turi (masalan, \"Transfer2IBAN\")."
  - name: fields.reason
    type: string
    required: true
    desc: "Tranzaksiya sababi (masalan, \"HOME_RENT\")."
  - name: fields.account
    type: string
    required: true
    desc: "Qabul qiluvchining IBAN raqami."
---

Turkiya bank hisoblariga **IBAN** orqali pul o'tkazish uchun
ishlatiladi. Bu eng ko'p maydon talab qiladigan xizmat turlaridan
biri, chunki xalqaro o'tkazma qoidalari qabul qiluvchi haqida
to'liq ma'lumotni talab qiladi.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "turkey_test_116",
    "state": 0,
    "description": "Created",
    "amount": 1000000,
    "currency": "860",
    "rate": null,
    "commission": 0,
    "cr_amount": 3797,
    "cr_currency": "949",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "TR6000******1414"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426165052-4c6da94d-bacc-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```

`cr_currency: "949"` — Turk lirasi (TRY) uchun ISO 4217 raqamli kodi.
