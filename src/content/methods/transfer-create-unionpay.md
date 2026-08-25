---
parent: transfer-create
title: Transfer create — UnionPay
order: 10
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
            "ext_id": "union_test_113",
            "amount": 10000,
            "currency": "643",
            "service_code": "V2S0017",
            "sender_id": 1,
            "fields": {
                "account": "6214860010049357",
                "receiver_full_name": "LIAN JIE",
                "is_same_person": false,
                "nationality": "UZB",
                "permanent_address": "chortoq Muchum 9",
                "permanent_city": "Namangan"
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
  - name: fields.receiver_full_name
    type: String
    required: true
    desc: "Recipient's full name as it appears on official documents."
  - name: fields.is_same_person
    type: Boolean
    required: true
    desc: "Indicates whether the sender and recipient are the same person."
  - name: fields.nationality
    type: String
    required: true
    desc: "Recipient's nationality represented by a 3-letter ISO country code (e.g. UZB)."
  - name: fields.permanent_address
    type: String
    required: true
    desc: "Recipient's permanent residential address."
  - name: fields.permanent_city
    type: String
    required: true
    desc: "Recipient's city of permanent residence."
---

UnionPay transfers are documented twice in the source specification —
**8.2 Transfer Create UnionPay** and **8.12 Transfer Create Union Pay**. Both
describe the same service (`V2S0017`) with the same `fields`; only the sample
values and the returned state differ. Both variants are reproduced below.

> In §8.2 the field table spells the last three keys as `fields.full_name`,
> `fields.permanet_address` and `fields.permanet_city`, while the request body
> in the same section uses `receiver_full_name`, `permanent_address` and
> `permanent_city` — the latter (used in §8.12) are the correct keys.

## 8.2 Create UnionPay using service fields

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "transfer.create",
    "params": {
        "ext_id": "union_test_112",
        "amount": 10000,
        "currency": "643",
        "service_code": "V2S0017",
        "sender_id": 1,
        "fields": {
            "account": "6214********9357",
            "receiver_full_name": "LIAN JIE",
            "is_same_person": false,
            "nationality": "UZB",
            "permanent_address": "chortoq Muchum 9",
            "permanent_city": "Namangan"
        }
    }
}
```

## 8.12 Union Pay Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "transfer.create",
    "params": {
        "ext_id": "union_test_113",
        "amount": 10000,
        "currency": "643",
        "service_code": "V2S0017",
        "sender_id": 1,
        "fields": {
            "account": "6214860010049357",
            "receiver_full_name": "LIAN JIE",
            "is_same_person": false,
            "nationality": "UZB",
            "permanent_address": "chortoq Muchum 9",
            "permanent_city": "Namangan"
        }
    }
}
```

## UnionPay responses

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

### Response — 8.2 (state -98, Not created)

```json
{
    "jsonrpc": "2.0",
    "result": {
        "ext_id": "union_test_112",
        "state": -98,
        "description": "Not created",
        "amount": 134,
        "currency": "840",
        "rate": 74.83,
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
            "ref_num": "UO-MT-C-060426125218-938c3ad0-16b4-4",
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
        "timestamp": "2026-06-04 12:52:18.545355"
    }
}
```

### Response — 8.12 (state 0, Created)

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
