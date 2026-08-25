---
parent: transfer-create
title: Transfer create — Top-up RF banks card
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
            "ext_id": "rf_account_to_card_test_113",
            "amount": 10000,
            "currency": "643",
            "service_code": "V2S0025",
            "sender_id": 1,
            "fields": {
                "account": "6214860010049357",
                "sender_card": "1234567890098765",
                "type": "sbp or card",
                "member_id": "bank member id"
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
    desc: "Receiver's card number."
  - name: fields.sender_card
    type: String
    required: true
    desc: "Sender card number."
  - name: fields.member_id
    type: String
    required: true
    desc: "Bank member_id."
  - name: fields.type
    type: String
    required: true
    desc: "Transfer type — sbp or card."
---

## 8.13 Transfer Create Top-up RF banks card

### Top-up RF banks card Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "transfer.create",
    "params": {
        "ext_id": "rf_account_to_card_test_113",
        "amount": 10000,
        "currency": "643",
        "service_code": "V2S0025",
        "sender_id": 1,
        "fields": {
            "account": "6214860010049357",
            "sender_card": "1234567890098765",
            "type": "sbp or card",
            "member_id": "bank member id"
        }
    }
}
```

## Top-up RF banks card responses

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
        "ext_id": "union_test_113",
        "state": 0,
        "description": "Created",
        "amount": 133,
        "currency": "840",
        "rate": 74.98,
        "commission": 0,
        "cr_amount": 900,
        "cr_currency": "156",
        "form_url": null,
        "account": [
            {
                "name": "card",
                "title": {
                    "ru": "Карта получателя",
                    "en": "Card of a receiver",
                    "uz": "Qabul qiluvchi kartasi"
                },
                "number": "621486******9357"
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
            "ref_num": "UO-MT-C-060826090931-b532322f-75d2-4",
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
        "timestamp": "2026-06-08 09:09:33.996107"
    }
}
```

> The sample response in the source specification for this section repeats the
> Union Pay example (`ext_id: "union_test_113"`), reproduced here as-is.
