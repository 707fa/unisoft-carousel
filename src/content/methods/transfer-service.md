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
  - name: sender_codes
    type: array
    required: true
    desc: "An array of service_code values taken from the countries.list response."
---

`transfer.service` returns the full configuration of a service for one or
more `service_code` values. Call this method before creating a transfer to
determine which fields are required, the amount limits, and which currency
is used.

Think of it like this: *"Give me a service_code from countries.list, and
I'll tell you everything you need to fill in to perform the transfer."*

## Key concepts

- **`sender_codes`** — an array of service codes taken from
  `countries.list`. The response returns the full configuration for each
  service: limits, currency, and the required input fields.
- **`fields`** — the list of fields the user must fill in before
  performing the transfer. For example, `V2S0005` (Uzcard top-up) requires
  the receiver's card number or phone number (`account`).
- **`is_3ds`** — indicates the service requires 3-D Secure
  authentication. If `true`, the sender's card goes through an additional
  verification step.
- **`currency`** — the currency code in ISO 4217 numeric format. `860` is
  the Uzbek so'm (UZS).

## Response fields

| Field | Type | Description |
|---|---|---|
| `id` | integer | Internal service identifier |
| `provider_id` / `provider` | integer / string | Provider identifier and name (for example `"Uzcard"`) |
| `name_uz` / `name_ru` / `name_en` | string | Service name by language |
| `type` | string | `credit` — sending to a card, `debit` — withdrawing from a card |
| `min_amount` / `max_amount` | integer | Limits in the minor currency unit (tiyin) |
| `currency` | string | ISO 4217 numeric currency code |
| `code` | string | Service code matching the value passed in `sender_codes` |
| `is_3ds` | boolean | Indicates whether 3-D Secure is required |
| `fields` | array | Fields collected from the user before the transfer |
| `response_fields` | array | Additional fields returned after completion |

### Each object in the `fields` array

| Field | Type | Description |
|---|---|---|
| `name` | string | The key used when sending the transfer (for example `"account"`) |
| `label_uz` / `label_ru` / `label_en` | string | The displayed name (by language) |
| `type` | string | Input type (`"string"`, `"number"`, etc.) |
| `is_required` | boolean | Indicates whether it is mandatory |
| `order` | integer | Display order in the UI — the lowest number comes first |
| `regex` | string | Validation pattern the value must match before sending |

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "services": [
      {
        "id": 5,
        "provider_id": 5,
        "provider": "Uzcard",
        "name_en": "Uzcard Account to card",
        "type": "credit",
        "min_amount": 100000,
        "max_amount": 2000000000,
        "currency": "860",
        "code": "V2S0005",
        "is_3ds": false,
        "fields": [
          {
            "id": 30,
            "name": "account",
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
  "origin": "transfer.service"
}
```
