---
title: Services
order: 3
rpcMethod: services
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "services",
        "params": {
          "provider_id": 8
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
        method: 'services',
        params: { provider_id: 8 },
      }),
    });
    const { result } = await response.json();
params:
  - name: jsonrpc
    type: string
    required: true
    desc: "JSON-RPC protocol version."
  - name: id
    type: "string | integer"
    required: true
    desc: "Request identifier."
  - name: method
    type: string
    required: true
    desc: "Method name — in this case \"services\"."
  - name: provider_id
    type: integer
    required: true
    desc: "Identifier of the provider whose services are being requested."
---

The `services` method returns a list of available services for the selected provider. Each service represents a specific operation supported by that provider: card withdrawal, transfer, or payment.

## Why This Method Is Needed

- Displaying available services after a provider is selected
- Showing service names and descriptions in multiple languages
- Checking amount limits and currency
- Dynamically building the input form based on required fields
- Determining whether 3-D Secure is required

## Response Fields

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique identifier of the service |
| `name_uz` / `name_en` / `name_ru` | string | Service name by language |
| `type` | string | Service type (`debit`, `credit`, `payment`) |
| `description` | string | Service description |
| `min_amount` / `max_amount` | integer | Allowed minimum/maximum amount (in tiyin/kopek) |
| `currency` | string | ISO 4217 currency code |
| `code` | string | Internal service code |
| `is_3ds` | boolean | Indicates whether 3-D Secure is required |
| `fields` | array | List of input fields required for the request |
| `response_fields` | array | Fields returned in the service response |

## Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "id": 8,
    "provider": "TCB",
    "services": [
      {
        "id": 6,
        "name_uz": "RF kartalaridan AFT orqali pul yechish",
        "name_en": "AFT Withdrawal Service for RF Cards",
        "type": "debit",
        "min_amount": 100,
        "max_amount": 10000000,
        "currency": "643",
        "code": "V2S0006",
        "is_3ds": false,
        "fields": [
          {
            "id": 17,
            "name": "to_card_number",
            "label_en": "Receiver card",
            "type": "string",
            "is_required": true,
            "regex": "^[0-9]{16}$"
          }
        ],
        "response_fields": [
          { "field_name": "form_url", "label_en": "Form URL" }
        ]
      }
    ]
  },
  "id": 1,
  "status": true,
  "origin": "services"
}
```

Each field in the `fields` array defines how to build an input using `name`, `type`, `is_required`, and optionally `regex` — allowing the frontend to construct the form dynamically.
