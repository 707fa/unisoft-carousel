---
parent: transfer-create
title: Transfer create — MTS to Card
order: 16
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
          "ext_id": "mts_to_card_test_100",
          "amount": 10000,
          "currency": "643",
          "service_code": "V2S0011",
          "sender_id": 1,
          "fields": {
            "account": "22041201****1238",
            "sender_card": "56146810****4552"
          }
        }
      }'
params:
  - name: fields.account
    type: string
    required: true
    desc: "The receiver's card number."
  - name: fields.sender_card
    type: string
    required: true
    desc: "The sender's card number."
---

A transfer to a card via MTS. Unlike other services, the **sender's card**
(`sender_card`) is also specified inside `fields` here.

The common request parameters are described on the
[Transfer create](/docs/transfer-create) page.

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "mts_to_card_test_100",
    "state": 0,
    "description": "Created",
    "amount": 10000,
    "currency": "643",
    "rate": null,
    "commission": 0,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "220412******1238"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426180701-497d7c40-bafa-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```
