---
title: Transfer create — Visa Direct
order: 9
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
          "ext_id": "visa_test_8",
          "amount": 100,
          "currency": "840",
          "service_code": "V2S0010",
          "sender_id": 1,
          "fields": {
            "account": "4934********3509",
            "first_name": "Sanjar",
            "last_name": "Mahmudjanov"
          }
        }
      }'
params:
  - name: fields.account
    type: string
    required: true
    desc: "Qabul qiluvchining karta yoki telefon raqami."
  - name: fields.first_name
    type: string
    required: true
    desc: "Qabul qiluvchining ismi."
  - name: fields.last_name
    type: string
    required: true
    desc: "Qabul qiluvchining familiyasi."
---

**Visa Direct** xizmati orqali Visa kartalariga pul yuborish uchun
`transfer.create` shu `fields` to'plami bilan chaqiriladi.

Umumiy so'rov parametrlari (`ext_id`, `amount`, `currency`,
`service_code`, `sender_id`) [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan — bu yerda faqat Visa Direct'ga xos
`fields` ko'rsatilgan.

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "visa_test_111",
    "state": 0,
    "description": "Новый",
    "amount": 100,
    "currency": "840",
    "rate": null,
    "commission": 0,
    "cr_amount": 100,
    "cr_currency": "840",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "493453******3509"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426124514-d83b4c2e-ccd5-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```

Qolgan javob maydonlari (`rate`, `commission`, `payment`, `merchant`
va h.k.) [Transfer create](/docs/transfer-create) sahifasidagi bilan
bir xil formatda.
