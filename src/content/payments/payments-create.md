---
title: Create
order: 5
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
          "ext_id": "test_12345",
          "currency": "860",
          "service_code": "V2S0013",
          "service_id": 104,
          "sender_id": 1,
          "fields": {
            "clientid": "935989900",
            "amount": 1000
          }
        }
      }'
params:
  - name: ext_id
    type: string
    required: true
    desc: "Noyob tashqi operatsiya identifikatori."
  - name: currency
    type: string
    required: true
    desc: "Valyuta kodi."
  - name: service_code
    type: string
    required: true
    desc: "Xizmat kodi."
  - name: service_id
    type: integer
    required: true
    desc: "paynet.services javobidan olingan xizmat identifikatori."
  - name: sender_id
    type: integer
    required: true
    desc: "sender.create'dan olingan jo'natuvchi identifikatori."
  - name: fields
    type: object
    required: true
    desc: "Xizmatga xos maydonlar — amount maydoni tiyin emas, oddiy summa sifatida yuboriladi."
---

Paynet guruhida to'lovni yaratish uchun ham `transfer.create` metodi
ishlatiladi — farqi shundaki, bu yerda qo'shimcha `service_id`
parametri talab qilinadi.

> ⚠️ `fields.amount` bu yerda **tiyin emas** — oddiy summa sifatida
> yuboriladi (izohga qarang: `// Not tiyins`).

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "test_12345",
    "state": 0,
    "description": "created",
    "amount": 1000,
    "currency": "860",
    "commission": 0,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-051226161349-0adff87b-f1b8-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```

`state: 0` qaytgach, to'lovni yakunlash uchun
[Confirm](/docs/payments-confirm) metodini chaqiring.
