---
parent: transfer-create
title: Transfer create — MTS to Card
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
            "ext_id": "mts_to_card_test_100",
            "amount": 10000,
            "currency": "643",
            "service_code": "V2S0011",
            "sender_id": 1,
            "fields": {
                "account": "22041201****1238",
                "sender_card": "56146810****4552"
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
---

## 8.8 Transfer Create MTS TO Card

### MTS TO Card Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "transfer.create",
    "params": {
        "ext_id": "mts_to_card_test_100",
        "amount": 10000,
        "currency": "643",
        "service_code": "V2S0011",
        "sender_id": 1,
        "fields": {
            "account": "22041201****1238",
            "sender_card": "56146810****4552"
        }
    }
}
```

## MTS TO Card responses

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
        "ext_id": "mts_to_card_test_100",
        "state": 0,
        "description": "Created",
        "amount": 10000,
        "currency": "643",
        "rate": null,
        "commission": 0,
        "cr_amount": null,
        "cr_currency": null,
        "form_url": null,
        "account": [
            {
                "name": "card",
                "title": {
                    "ru": "Карта получателя",
                    "en": "Card of a receiver",
                    "uz": "Qabul qiluvchi kartasi"
                },
                "number": "220412******1238"
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
            "ref_num": "UO-MT-C-060426180701-497d7c40-bafa-4",
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
        "timestamp": "2026-06-04 18:07:02.830201"
    }
}
```
