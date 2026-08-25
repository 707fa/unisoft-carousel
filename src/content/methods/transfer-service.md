---
title: Transfer Service
order: 5
rpcMethod: transfer.service
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Authorization: Bearer {{access_token}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.service",
        "params": {
            "sender_codes": ["V2S0005"]
        }
    }'
  node: |
    const response = await fetch(`https://${host}/api/v1/jsonrpc`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'transfer.service',
        params: { sender_codes: ['V2S0005'] },
      }),
    });
    const { result } = await response.json();
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
    desc: "transfer.service"
  - name: params
    type: Object
    required: true
    desc: "Object."
  - name: sender_codes
    type: Array
    required: true
    desc: "Array of service codes obtained from countries.list."
---

`transfer.service` returns the detailed configuration of one or more services by
their `service_code`. Before making a transfer, you call this endpoint to find
out what fields are required, what the amount limits are, and which currency to
use.

Think of it as: "give me the `service_code` from `countries.list`, and I'll tell
you everything you need to fill in to execute the transfer."

## sender_codes

You pass an array of service codes you got from `countries.list`. The response
gives you the full configuration for each service — limits, currency, required
input fields, and more.

## fields

Each service defines a list of input fields the user must fill in before the
transfer can be executed. For example, `V2S0005` (Uzcard top-up) requires an
`account` field — the recipient's card number or phone number. You collect these
from the user and pass them to the transfer execution endpoint.

## is_3ds

Indicates whether the service requires 3D Secure authentication. If `true`, the
sender's card will go through an additional verification step.

## currency

The currency code in ISO 4217 numeric format. `860` = Uzbek Som (UZS).

## Sample responses

| Field | Type | Description |
|---|---|---|
| `id` | Integer | Internal service ID |
| `provider_id` | Integer | Internal provider ID |
| `provider` | String | Payment network or provider name (e.g. `"Uzcard"`) |
| `name_uz` | String | Service name in Uzbek |
| `name_ru` | String | Service name in Russian |
| `name_en` | Array | Service name in English |
| `type` | Array | `credit` — send money to a card; `debit` — withdraw money from a card |
| `description` | String | Short description of the service |
| `min_amount` | Integer | Minimum transfer amount in the smallest currency unit (tiyin) |
| `max_amount` | Integer | Maximum transfer amount in the smallest currency unit (tiyin) |
| `currency` | String | ISO 4217 numeric currency code. `"860"` = Uzbek Som (UZS) |
| `code` | String | Service code — matches the value passed in `sender_codes` |
| `is_3ds` | Boolean | `true` if the sender's card requires 3D Secure authentication |
| `fields` | Array | Input fields to collect from the user before executing the transfer |
| `response_fields` | Array | Additional fields returned after execution. Empty `[]` if none |

## Response — field object

| Field | Type | Description |
|---|---|---|
| `id` | String | Internal field ID |
| `name` | String | Field key used when submitting the transfer (e.g. `"account"`) |
| `label_uz` | String | Display label in Uzbek |
| `label_ru` | String | Display label in Russian |
| `label_en` | String | Display label in English |
| `type` | String | Input data type (e.g. `"string"`, `"number"`) |
| `is_required` | Boolean | `true` if this field must be filled before submitting |
| `order` | Integer | Display order in the UI. Lower number = shown first |
| `regex` | String | Validation pattern the field value must match before submission |

### Response

```json
{
    "jsonrpc": "2.0",
    "result": {
        "services": [
            {
                "id": 5,
                "provider_id": 5,
                "provider": "Uzcard",
                "name_uz": "Kartaga pul tushirish",
                "name_ru": "Пополнение номера карты",
                "name_en": "Uzcard Account to card",
                "type": "credit",
                "description": "Uzcard Account to card",
                "min_amount": 100000,
                "max_amount": 2000000000,
                "currency": "860",
                "code": "V2S0005",
                "is_3ds": false,
                "fields": [
                    {
                        "id": 30,
                        "name": "account",
                        "label_uz": "qabul qiluvchi kartasi yoki telefonraqami",
                        "label_ru": "номер карты получателя или номер телефона",
                        "label_en": "recipient card or phone number",
                        "type": "string",
                        "is_required": true,
                        "order": 0,
                        "regex": "^.+$"
                    }
                ],
                "response_fields": []
            }
        ]
    },
    "id": 1,
    "status": true,
    "origin": "transfer.service",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-03-27 10:58:50.708712"
    }
}
```
