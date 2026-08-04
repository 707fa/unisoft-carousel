---
title: Transfer create — Korea
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
          "ext_id": "korea_test_11",
          "amount": 4100000,
          "currency": "860",
          "service_code": "V2S0016",
          "sender_id": 1,
          "fields": {
            "account": "91052****9986",
            "receiver_phone": "+821034010805",
            "receiver_first_name": "Shahzoda",
            "receiver_last_name": "Mamajonova",
            "relation": "11263",
            "source_of_fund": "11045",
            "id_type": "8008",
            "bank": "037",
            "transfer_reason": "11109"
          }
        }
      }'
params:
  - name: fields.account
    type: string
    required: true
    desc: "Recipient's account number."
  - name: fields.receiver_phone
    type: string
    required: true
    desc: "Recipient's phone number."
  - name: fields.receiver_first_name
    type: string
    required: true
    desc: "Recipient's first name."
  - name: fields.receiver_last_name
    type: string
    required: true
    desc: "Recipient's last name."
  - name: fields.relation
    type: string
    required: true
    desc: "Relationship code between sender and recipient."
  - name: fields.source_of_fund
    type: string
    required: true
    desc: "Source of funds code."
  - name: fields.id_type
    type: string
    required: true
    desc: "Document type code."
  - name: fields.bank
    type: string
    required: true
    desc: "Bank code."
  - name: fields.transfer_reason
    type: string
    required: true
    desc: "Transfer reason code."
---

Transfers to South Korean banks are one of the most compliance-heavy service
types, as they require additional codes such as source of funds, document type,
and transfer reason.

Common request parameters are described on the [Transfer create](/docs/transfer-create)
page. Request the full list of valid `relation`, `source_of_fund`, `id_type`,
and `transfer_reason` codes under your partnership agreement.

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "korea_test_111",
    "state": 0,
    "description": "Created",
    "amount": 4100000,
    "currency": "860",
    "rate": null,
    "commission": 0,
    "cr_amount": 521678,
    "cr_currency": "KRW",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "910520******9986"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060826090205-34addaf5-ed65-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```
