---
parent: transfer-create
title: Transfer create — RF MTS
order: 14
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
          "ext_id": "kg_test_1000",
          "amount": 100000,
          "currency": "643",
          "service_code": "V2S0008",
          "sender_id": 1,
          "fields": {
            "receiver_description": "6117128"
          }
        }
      }'
params:
  - name: fields.receiver_description
    type: string
    required: true
    desc: "The receiver's description (an identifier in the MTS bank system)."
---

Used to transfer money via Russia's **MTS Bank**. The response returns an
extra `banks` field — used to show the user the list of relevant banks.

The common request parameters are described on the
[Transfer create](/docs/transfer-create) page.

## Additional response field

| Field | Type | Description |
|---|---|---|
| `banks` | array | List of available bank codes and names for RF MTS |

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "kg_test_1000",
    "state": 0,
    "description": "Created",
    "amount": 100000,
    "currency": "643",
    "rate": null,
    "commission": 900,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": "https://qr.nspk.ru/AD10005D4LQJ1S5N8K88D9P2LQLN7L7V",
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426160330-41552c75-c708-4",
      "id": null
    },
    "banks": [
      { "code": "bank100000000266", "name": "банк Элита" },
      { "code": "bank100000000055", "name": "Банк Йошкар-Ола" }
    ]
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```

This service may return a `form_url` — the user is redirected to an
additional page via that URL to complete the payment (for example, paying
via a QR code).
