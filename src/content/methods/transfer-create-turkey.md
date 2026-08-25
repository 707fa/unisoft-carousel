---
parent: transfer-create
title: Transfer create — Turkey
order: 13
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
  - name: fields.nationality
    type: String
    required: true
    desc: "Receiver's nationality."
  - name: fields.receiver_phone
    type: String
    required: true
    desc: "Receiver's phone number."
  - name: fields.receiver_last_name
    type: String
    required: true
    desc: "Receiver's last name."
  - name: fields.receiver_first_name
    type: String
    required: true
    desc: "Receiver's first name."
  - name: fields.email
    type: String
    required: true
    desc: "Receiver's email."
  - name: fields.country_phone_code
    type: String
    required: true
    desc: "Receiver's country phone code."
  - name: fields.tr_type
    type: String
    required: true
    desc: "Transfer type."
  - name: fields.reason
    type: String
    required: true
    desc: "Transaction Reason."
  - name: fields.account
    type: String
    required: true
    desc: "Iban number."
---

## 8.5 Transfer Create Turkey

### Turkey Request

```json
{
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
}
```

## Turkey responses

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
| `account` | List | Payment id of operation — RRN |
| `payment` | Object | Payment information |
| `merchant` | Object | Merchant information |
| `id` | Integer | Payment id of operation — RRN |

### Response

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
                "title": {
                    "ru": "Карта получателя",
                    "en": "Card of a receiver",
                    "uz": "Qabul qiluvchi kartasi"
                },
                "number": "TR6000******1414"
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
            "ref_num": "UO-MT-C-060426165052-4c6da94d-bacc-4",
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
        "timestamp": "2026-06-04 16:50:55.677450"
    }
}
```
