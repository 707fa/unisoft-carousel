---
parent: transfer-create
title: Transfer create — UnionPay
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
    desc: "The receiver's card number."
  - name: fields.receiver_full_name
    type: string
    required: true
    desc: "The receiver's full name as on official documents."
  - name: fields.is_same_person
    type: boolean
    required: true
    desc: "Whether the sender and receiver are the same person."
  - name: fields.nationality
    type: string
    required: true
    desc: "The receiver's nationality as a 3-letter ISO country code (for example UZB)."
  - name: fields.permanent_address
    type: string
    required: true
    desc: "The receiver's permanent residential address."
  - name: fields.permanent_city
    type: string
    required: true
    desc: "The receiver's permanent city of residence."
---

To transfer money to **UnionPay** cards, `transfer.create` is called with
this set of `fields`.

The common request parameters are described on the
[Transfer create](/docs/transfer-create) page.

## Sample response

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
