---
parent: transfer-create
title: Transfer create — Wallet to Card
order: 19
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
          "ext_id": "wallet_test_71",
          "amount": 10000,
          "currency": "860",
          "service_code": "V2S0014",
          "sender_id": 1,
          "fields": {
            "wallet_id": "BC854CF305D441B6B3DF822F30******",
            "debit_ext_id": "5614681012344552"
          }
        }
      }'
params:
  - name: fields.wallet_id
    type: string
    required: true
    desc: "Recipient's wallet identifier."
  - name: fields.debit_ext_id
    type: string
    required: true
    desc: "External identifier of the debit operation."
---

Used to transfer funds from an electronic wallet (**Ucoin wallet**) to a card.

Common request parameters are described on the [Transfer create](/docs/transfer-create)
page.

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "wallet_test_71",
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
