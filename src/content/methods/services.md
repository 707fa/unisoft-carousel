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
    desc: "Identifier of the provider whose services are requested."
---

The `services` method returns the list of services available for the
selected provider. Each service is a specific operation that can be
performed for that provider: withdrawing money from a card, a transfer,
or a payment.

## Why you need this method

- Show the available services after a provider is selected
- Display service names and descriptions in multiple languages
- Check amount limits and currency
- Dynamically build the input form based on the required fields
- Determine whether 3-D Secure is required

## Response fields

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique identifier of the service |
| `name_uz` / `name_en` / `name_ru` | string | Service name by language |
| `type` | string | Service type (`debit`, `credit`, `payment`) |
| `description` | string | Service description |
| `min_amount` / `max_amount` | integer | Allowed minimum/maximum amount (in the minor unit — tiyin/kopeck) |
| `currency` | string | ISO 4217 currency code |
| `code` | string | Internal service code |
| `is_3ds` | boolean | Indicates whether 3-D Secure is required |
| `fields` | array | List of input fields required for the request |
| `response_fields` | array | Fields returned in the service response |

## Sample response

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

Each field in the `fields` array defines how to build an input via its
`name`, `type`, `is_required` and, if needed, `regex` — which lets the
frontend construct the form automatically.
