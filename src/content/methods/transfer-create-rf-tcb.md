---
parent: transfer-create
title: Transfer create — RF TCB
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
          "ext_id": "kg_test_200",
          "amount": 10000,
          "currency": "643",
          "service_code": "V2S0006",
          "sender_id": 1,
          "fields": {
            "card_number": "5058********0789"
          }
        }
      }'
params:
  - name: fields.card_number
    type: string
    required: true
    desc: "The recipient's card number."
---

Used to transfer money to Russian **TCB Bank** cards. The response may
include a link to an additional payment page via `form_url`.

Common request parameters are described on the
[Transfer create](/docs/transfer-create) page.

## Example Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "kg_test_200",
    "state": 0,
    "description": "Created",
    "amount": 10000,
    "currency": "643",
    "rate": null,
    "commission": 100,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": "https://pay.tkbbank.ru/frm/XTQCQQE",
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426170513-98e5e174-cbda-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```
