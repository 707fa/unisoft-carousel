---
parent: transfer-create
title: Transfer create — Turkey
order: 15
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
          "ext_id": "turkey_test_116",
          "amount": 1000000,
          "currency": "860",
          "service_code": "V2S0001",
          "sender_id": 1,
          "fields": {
            "nationality": "RUS",
            "receiver_phone": "+79011234567",
            "receiver_last_name": "GULSOY",
            "receiver_first_name": "BERAT",
            "email": "ayozo9900@gmail.com",
            "country_phone_code": "+7",
            "tr_type": "Transfer2IBAN",
            "reason": "HOME_RENT",
            "account": "TR600001200967400001041414"
          }
        }
      }'
params:
  - name: fields.nationality
    type: string
    required: true
    desc: "The receiver's nationality."
  - name: fields.receiver_phone
    type: string
    required: true
    desc: "The receiver's phone number."
  - name: fields.receiver_last_name
    type: string
    required: true
    desc: "The receiver's last name."
  - name: fields.receiver_first_name
    type: string
    required: true
    desc: "The receiver's first name."
  - name: fields.email
    type: string
    required: true
    desc: "The receiver's email address."
  - name: fields.country_phone_code
    type: string
    required: true
    desc: "The receiver country's phone code (for example, +7)."
  - name: fields.tr_type
    type: string
    required: true
    desc: "Transfer type (for example, \"Transfer2IBAN\")."
  - name: fields.reason
    type: string
    required: true
    desc: "Transaction reason (for example, \"HOME_RENT\")."
  - name: fields.account
    type: string
    required: true
    desc: "The receiver's IBAN number."
---

Used to transfer money to Turkish bank accounts via **IBAN**. This is one
of the most field-heavy service types, because international transfer rules
require full information about the receiver.

The common request parameters are described on the
[Transfer create](/docs/transfer-create) page.

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "turkey_test_116",
    "state": 0,
    "description": "Created",
    "amount": 1000000,
    "currency": "860",
    "rate": null,
    "commission": 0,
    "cr_amount": 3797,
    "cr_currency": "949",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "TR6000******1414"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426165052-4c6da94d-bacc-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```

`cr_currency: "949"` — the ISO 4217 numeric code for the Turkish lira (TRY).
