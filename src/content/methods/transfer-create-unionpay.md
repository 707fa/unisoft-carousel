---
title: Transfer create — UnionPay
order: 10
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
          "ext_id": "union_test_113",
          "amount": 10000,
          "currency": "643",
          "service_code": "V2S0017",
          "sender_id": 1,
          "fields": {
            "account": "6214860010049357",
            "receiver_full_name": "LIAN JIE",
            "is_same_person": false,
            "nationality": "UZB",
            "permanent_address": "chortoq Muchum 9",
            "permanent_city": "Namangan"
          }
        }
      }'
params:
  - name: fields.account
    type: string
    required: true
    desc: "Qabul qiluvchining karta raqami."
  - name: fields.receiver_full_name
    type: string
    required: true
    desc: "Qabul qiluvchining rasmiy hujjatlardagi to'liq ismi."
  - name: fields.is_same_person
    type: boolean
    required: true
    desc: "Jo'natuvchi va qabul qiluvchi bir xil shaxsmi."
  - name: fields.nationality
    type: string
    required: true
    desc: "Qabul qiluvchining 3 harfli ISO davlat kodidagi millati (masalan, UZB)."
  - name: fields.permanent_address
    type: string
    required: true
    desc: "Qabul qiluvchining doimiy yashash manzili."
  - name: fields.permanent_city
    type: string
    required: true
    desc: "Qabul qiluvchining doimiy yashash shahri."
---

**UnionPay** kartalariga pul o'tkazish uchun `transfer.create` shu
`fields` to'plami bilan chaqiriladi.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "union_test_113",
    "state": 0,
    "description": "Created",
    "amount": 133,
    "currency": "840",
    "rate": 74.98,
    "commission": 0,
    "cr_amount": 900,
    "cr_currency": "156",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "621486******9357"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060826090931-b532322f-75d2-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```
