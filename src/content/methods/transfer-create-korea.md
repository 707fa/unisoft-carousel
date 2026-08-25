---
parent: transfer-create
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
  - name: jsonrpc
    type: String
    required: true
    desc: "JSON-RPC protocol version."
  - name: id
    type: "String | Integer"
    required: true
    desc: "Request identifier."
  - name: method
    type: String
    required: true
    desc: "transfer.create"
  - name: params
    type: Object
    required: true
    desc: "Transfer parameters."
  - name: ext_id
    type: String
    required: true
    desc: "External unique operation ID."
  - name: amount
    type: Integer
    required: true
    desc: "Transfer amount (in minor units)."
  - name: currency
    type: String
    required: true
    desc: "Currency code (ISO 4217)."
  - name: service_code
    type: String
    required: true
    desc: "Service code from services."
  - name: sender_id
    type: Integer
    required: true
    desc: "Sender identifier."
  - name: fields
    type: Object
    required: true
    desc: "Service-specific fields."
  - name: fields.account
    type: String
    required: true
    desc: "Receiver number."
  - name: fields.receiver_phone
    type: String
    required: true
    desc: "Receiver phone number."
  - name: fields.receiver_first_name
    type: String
    required: true
    desc: "Receiver first name."
  - name: fields.receiver_last_name
    type: String
    required: true
    desc: "Receiver last name."
  - name: fields.relation
    type: String
    required: true
    desc: "Relation code."
  - name: fields.source_of_fund
    type: String
    required: true
    desc: "Source of fund code."
  - name: fields.id_type
    type: String
    required: true
    desc: "Id type code."
  - name: fields.bank
    type: String
    required: true
    desc: "Bank code."
  - name: fields.transfer_reason
    type: String
    required: true
    desc: "Transfer reason code."
---

## 8.11 Transfer Create Korea

### Korea Request

```json
{
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
}
```

## Korea responses

| Field | Type | Description |
|---|---|---|
| `ext_id` | String | External id of operation |
| `state` | Integer | State of operation |
| `description` | String | Operation state description |
| `amount` | Integer | Amount in RUB with precision kopecks |
| `currency` | Integer | Credit currency |
| `rate` | Float \| Null | Credit Rate |
| `commission` | Integer \| Float | Calculated commission |
| `cr_amount` | Integer \| Null | Credited amount in destination currency |
| `cr_currency` | String \| Null | Credit currency |
| `form_url` | String \| Null | URL for additional payment form |
| `account` | List | Receiver account information |
| `payment` | Object | Payment information |
| `merchant` | Object | Merchant information |
| `id` | Integer | Payment id of operation — RRN |

### Response

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
                "title": {
                    "ru": "Карта получателя",
                    "en": "Card of a receiver",
                    "uz": "Qabul qiluvchi kartasi"
                },
                "number": "910520******9986"
            },
            {
                "name": "owner",
                "title": {
                    "ru": "Получатель",
                    "en": "Receiver",
                    "uz": "Qabul qiluvchi"
                },
                "value": null
            }
        ],
        "payment": {
            "ref_num": "UO-MT-C-060826090205-34addaf5-ed65-4",
            "id": null
        },
        "merchant": {
            "organization": "Universal",
            "epos": {
                "merchant": "-",
                "terminal": "-",
                "account": "-"
            },
            "type": {
                "ru": "Пополнения карта ",
                "en": "Top-up card",
                "uz": "Karta xisobini to'ldirish"
            }
        }
    },
    "id": 1,
    "status": true,
    "origin": "transfer.create",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-06-08 09:02:13.349213"
    }
}
```

> Section 8.11 appears twice in the source specification (before and after
> 8.12 Union Pay). Both occurrences are identical — request, field table and
> response — so they are documented once here.
