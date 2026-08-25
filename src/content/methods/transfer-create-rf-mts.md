---
parent: transfer-create
title: Transfer create — RF MTS
order: 12
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
  - name: fields.receiver_description
    type: String
    required: true
    desc: "Receiver's description."
---

## 8.4 Transfer Create RF MTS

### RF MTS Request

```json
{
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
}
```

## RF MTS responses

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
| `banks` | List | RF MTS banks code and name |
| `id` | Integer | Payment id of operation — RRN |

### Response

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
            {
                "name": "card",
                "title": {
                    "ru": "Карта получателя",
                    "en": "Card of a receiver",
                    "uz": "Qabul qiluvchi kartasi"
                },
                "number": ""
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
            "ref_num": "UO-MT-C-060426160330-41552c75-c708-4",
            "id": null
        },
        "merchant": {
            "organization": "Universal",
            "epos": {
                "merchant": "-",
                "terminal": "MB0002641946",
                "account": "-"
            },
            "type": {
                "ru": "Пополнения карта ",
                "en": "Top-up card",
                "uz": "Karta xisobini to'ldirish"
            }
        },
        "banks": [
            {
                "code": "bank100000000266",
                "name": "банк Элита"
            },
            {
                "code": "bank100000000055",
                "name": "Банк Йошкар-Ола"
            }
        ]
    },
    "id": 1,
    "status": true,
    "origin": "transfer.create",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-06-04 16:03:31.498302"
    }
}
```

> The `banks` list in the sample is truncated — the live response returns the
> full list of RF MTS banks.
