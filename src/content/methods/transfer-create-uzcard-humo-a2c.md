---
title: Transfer create — Uzcard / Humo A2C
order: 11
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
          "ext_id": "humo_to_card_test_113",
          "amount": 100,
          "currency": "860",
          "service_code": "V2S0003",
          "sender_id": 1,
          "fields": {
            "account": "9860********6810"
          }
        }
      }'
  node: |
    // For Uzcard: service_code is V2S0005, account field is the same
    {
      "ext_id": "uzcard_to_card_test_126789",
      "amount": 100,
      "currency": "643",
      "service_code": "V2S0005",
      "sender_id": 1,
      "fields": { "account": "5614681079954552" }
    }
params:
  - name: fields.account
    type: string
    required: true
    desc: "The recipient's Uzcard or Humo card number."
---

Used to transfer money directly from an account to an **Uzcard** or **Humo**
card. Both share the same structure — only the `service_code` and currency
differ:

| Card System | `service_code` | `currency` |
|---|---|---|
| Humo | `V2S0003` | `860` (UZS) |
| Uzcard | `V2S0005` | `643` |

Common request parameters are described on the
[Transfer create](/docs/transfer-create) page.

## Example Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "humo_to_card_test_113",
    "state": 0,
    "description": "Created",
    "amount": 100,
    "currency": "860",
    "rate": null,
    "commission": 0,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "986017******6810"
      },
      {
        "name": "owner",
        "title": { "en": "Receiver" },
        "value": "IBROKHIM U."
      }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426144425-fb7817f7-af4a-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```

For successful operations, the `owner` field may return the recipient's name
(e.g., `"IBROKHIM U."`).
