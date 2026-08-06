---
parent: transfer-create
title: Transfer create — Wallet payment
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
          "ext_id": "wallet_payment_test_11",
          "amount": 10000,
          "currency": "860",
          "service_code": "V2S0015",
          "sender_id": 1,
          "fields": {
            "wallet_id": "BC854CF305D441B6B3DF822F306*****"
          }
        }
      }'
params:
  - name: fields.wallet_id
    type: string
    required: true
    desc: "The wallet identifier being paid from."
---

A withdrawal/payment operation from an electronic wallet (**Ucoin
wallet**).

The common request parameters are described on the
[Transfer create](/docs/transfer-create) page.

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "wallet_payment_test_11",
    "state": 0,
    "description": "Created",
    "amount": 10000,
    "currency": "860",
    "rate": null,
    "commission": 0,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426181859-42aa824d-47d2-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```
