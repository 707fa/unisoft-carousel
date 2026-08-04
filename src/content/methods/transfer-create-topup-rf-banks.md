---
title: Transfer create — Top-up RF banks card
order: 20
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
          "ext_id": "rf_account_to_card_test_113",
          "amount": 10000,
          "currency": "643",
          "service_code": "V2S0025",
          "sender_id": 1,
          "fields": {
            "account": "6214860010049357",
            "sender_card": "1234567890098765",
            "type": "sbp",
            "member_id": "bank member id"
          }
        }
      }'
params:
  - name: fields.account
    type: string
    required: true
    desc: "Recipient's card number."
  - name: fields.sender_card
    type: string
    required: true
    desc: "Sender's card number."
  - name: fields.member_id
    type: string
    required: true
    desc: "Bank member ID identifier."
  - name: fields.type
    type: string
    required: true
    desc: "Transfer type — \"sbp\" (Faster Payments System) or \"card\"."
---

Used to top up Russian bank cards via **SBP** (Faster Payments System) or
direct card transfer.

Common request parameters are described on the [Transfer create](/docs/transfer-create)
page.

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "rf_account_to_card_test_113",
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
