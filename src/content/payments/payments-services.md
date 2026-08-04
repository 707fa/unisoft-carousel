---
title: Services
order: 3
rpcMethod: paynet.services
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "paynet.services",
        "params": {
          "provider_id": 44
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
        method: 'paynet.services',
        params: { provider_id: 44 },
      }),
    });
    const { result } = await response.json();
params:
  - name: provider_id
    type: integer
    required: true
    desc: "Provider identifier from the paynet.providers response."
---

Returns the operations available under the selected provider. Typically,
each provider has two services:

- **Create service** (info / recipient check) —
  `min_amount = max_amount = service_price = 0` and `type_id != 1`.
  Used to verify the recipient before making a payment.
- **Confirm service** (execute payment) — at least one of `min_amount`,
  `max_amount`, or `service_price` is positive, or `type_id = 1`.

## Response Fields

| Field | Type | Description |
|---|---|---|
| `id` | integer | Service identifier |
| `title_uz` / `title_ru` | string | Service name |
| `type_id` | integer | Service type |
| `min_amount` / `max_amount` | integer | Amount limits |
| `service_price` | number | Service fee (if applicable) |
| `fields` | array | Input fields required for the payment |
| `response_fields` | array | Fields displayed on the receipt |

## Sample Response (abbreviated)

```json
{
  "jsonrpc": "2.0",
  "result": {
    "id": 44,
    "title_short": "UCell",
    "services": [
      {
        "id": 104,
        "title_uz": "To'lov",
        "type_id": 1,
        "min_amount": 500,
        "max_amount": 500000,
        "service_price": 0,
        "fields": [
          {
            "name": "clientid",
            "title_uz": "Telefon raqami",
            "required": true,
            "field_control": "PHONE"
          },
          {
            "name": "amount",
            "title_uz": "Summa",
            "required": true,
            "field_control": "MONEY"
          }
        ],
        "response_fields": [
          { "labelUz": "Operator", "fieldName": "provider_name" },
          { "labelUz": "Chek raqami", "fieldName": "transaction_id" },
          { "labelUz": "To'landi", "fieldName": "amount" }
        ]
      }
    ]
  },
  "id": 1,
  "status": true,
  "origin": "paynet.services"
}
```

The `field_control` value in the `fields` array (`PHONE`, `MONEY`,
etc.) indicates what type of input to render in the UI.
