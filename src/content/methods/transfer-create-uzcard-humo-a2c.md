---
parent: transfer-create
title: Transfer create — Uzcard / Humo A2C
order: 11
rpcMethod: transfer.create
codeExamples:
  curl: |
    # Humo Request
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Authorization: Bearer {{access_token}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
            "ext_id": "humo_to_card_test_113",
            "amount": 100,
            "currency": "860",
            "service_code": "V2S0003",
            "sender_id": 1,
            "fields": {
                "account": "9860********6810"
            }
        }
    }'

    # Uzcard Request
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Authorization: Bearer {{access_token}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
            "ext_id": "uzcard_to_card_test_126789",
            "amount": 100,
            "currency": "643",
            "service_code": "V2S0005",
            "sender_id": 1,
            "fields": {
                "account": "5614681079954552"
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
    desc: "Service code from services (V2S0003 for Humo, V2S0005 for Uzcard)."
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
---

## 8.3 Transfer Create Uzcard Humo A2C

Both the Humo and the Uzcard account-to-card services take the same single
service field — `fields.account`, the receiver's card number. Only the
`service_code` and the `currency` differ.

### Humo Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "transfer.create",
    "params": {
        "ext_id": "humo_to_card_test_113",
        "amount": 100,
        "currency": "860",
        "service_code": "V2S0003",
        "sender_id": 1,
        "fields": {
            "account": "9860********6810"
        }
    }
}
```

### Uzcard Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "transfer.create",
    "params": {
        "ext_id": "uzcard_to_card_test_126789",
        "amount": 100,
        "currency": "643",
        "service_code": "V2S0005",
        "sender_id": 1,
        "fields": {
            "account": "5614681079954552"
        }
    }
}
```

## Uzcard Humo A2C responses

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
        "ext_id": "humo_to_card_test_113",
        "state": 0,
        "description": "Created",
        "amount": 100,
        "currency": "860",
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
                "number": "986017******6810"
            },
            {
                "name": "owner",
                "title": {
                    "ru": "Получатель",
                    "en": "Receiver",
                    "uz": "Qabul qiluvchi"
                },
                "value": "IBROKHIM U."
            }
        ],
        "payment": {
            "ref_num": "UO-MT-C-060426144425-fb7817f7-af4a-4",
            "id": null
        },
        "merchant": {
            "organization": "Universal",
            "epos": {
                "merchant": "01186000011860G",
                "terminal": "23622FDV",
                "account": null
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
        "timestamp": "2026-06-04 14:44:25.779311"
    }
}
```
