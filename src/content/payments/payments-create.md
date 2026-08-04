---
title: Create
order: 5
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
          "ext_id": "test_12345",
          "currency": "860",
          "service_code": "V2S0013",
          "service_id": 104,
          "sender_id": 1,
          "fields": {
            "clientid": "935989900",
            "amount": 1000
          }
        }
      }'
params:
  - name: ext_id
    type: string
    required: true
    desc: "A unique external operation identifier."
  - name: currency
    type: string
    required: true
    desc: "The currency code."
  - name: service_code
    type: string
    required: true
    desc: "The service code."
  - name: service_id
    type: integer
    required: true
    desc: "The service identifier taken from the paynet.services response."
  - name: sender_id
    type: integer
    required: true
    desc: "The sender identifier taken from sender.create."
  - name: fields
    type: object
    required: true
    desc: "Service-specific fields — the amount field is sent as a plain amount, not in tiyin."
---

In the Paynet group, `transfer.create` is also used to create a payment —
the difference is that an additional `service_id` parameter is required
here.

> ⚠️ `fields.amount` here is **not in tiyin** — it is sent as a plain
> amount (see the note: `// Not tiyins`).

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "test_12345",
    "state": 0,
    "description": "created",
    "amount": 1000,
    "currency": "860",
    "commission": 0,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-051226161349-0adff87b-f1b8-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```

Once `state: 0` is returned, call the
[Confirm](/docs/payments-confirm) method to finalize the payment.
