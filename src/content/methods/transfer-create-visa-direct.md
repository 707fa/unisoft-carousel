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
    desc: "The receiver's card or phone number."
  - name: fields.first_name
    type: string
    required: true
    desc: "The receiver's first name."
  - name: fields.last_name
    type: string
    required: true
    desc: "The receiver's last name."
---

To send money to Visa cards via the **Visa Direct** service,
`transfer.create` is called with this set of `fields`.

The common request parameters (`ext_id`, `amount`, `currency`,
`service_code`, `sender_id`) are described on the
[Transfer create](/docs/transfer-create) page — only the Visa
Direct-specific `fields` are shown here.

## Sample response

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

The remaining response fields (`rate`, `commission`, `payment`, `merchant`,
etc.) follow the same format as on the
[Transfer create](/docs/transfer-create) page.
