---
parent: transfer-create
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
    desc: "Receiver's card number or phone number."
  - name: fields.first_name
    type: String
    required: true
    desc: "Receiver's first name."
  - name: fields.last_name
    type: String
    required: true
    desc: "Receiver's last name."
---

## 8.1 Transfer Create Visa Direct

### Create Visa Direct using service fields

```json
{
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
}
```

## Visa Direct responses

| Field | Type | Description |
|---|---|---|
| `ext_id` | String | External id of operation |
| `state` | Integer | State of operation |
| `description` | String | Operation state description |
| `amount` | Integer | Amount in RUB with precision kopecks |
| `currency` | Integer | Credit currency |
| `rate` | Float \| Null | Credit Rate |
| `commission` | Float | Calculated commission |
| `cr_amount` | Integer | Credited amount in destination currency |
| `cr_currency` | String | Credit currency |
| `form_url` | String \| Null | URL for additional payment form |
| `account` | List | Receiver account information |
| `payment` | Object | Payment information |
| `merchant` | Object | Merchant information |
| `id` | String | Payment id of operation — RRN |

### Response

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
                "title": {
                    "ru": "Карта получателя",
                    "en": "Card of a receiver",
                    "uz": "Qabul qiluvchi kartasi"
                },
                "number": "493453******3509"
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
            "ref_num": "UO-MT-C-060426124514-d83b4c2e-ccd5-4",
            "id": null
        },
        "merchant": {
            "organization": "Universal",
            "epos": {
                "merchant": "-",
                "terminal": "-",
                "account": "29896840200001186064"
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
        "timestamp": "2026-06-04 12:45:15.244300"
    }
}
```
