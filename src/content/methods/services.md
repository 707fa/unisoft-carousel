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
    desc: "Method name."
  - name: params
    type: Object
    required: true
    desc: "Empty object (reserved for future use)."
  - name: provider_id
    type: Integer
    required: true
    desc: "Unique identifier of the provider."
---

The `services` method is used to retrieve the list of services available for a
specific provider.

Each service represents a concrete operation that can be performed for the
selected provider, such as:

- Card debit (withdrawal)
- Transfer
- Payment

This method allows the client application to:

- Display available services after selecting a provider
- Show service names and descriptions in multiple languages
- Validate amount limits and currency
- Dynamically build input forms based on required fields
- Understand whether 3-D Secure is required

Returns the full list of services for the selected provider, including
multilingual names and activity status.

## Sample responses Services

| Field | Type | Description |
|---|---|---|
| `id` | Integer | Provider unique identifier |
| `name_uz` | String | Service name in Uzbek |
| `name_en` | String | Service name in English |
| `name_ru` | String | Service name in Russian |
| `type` | String | Service type (`debit`, `credit`, `payment`) |
| `description` | String | Service description |
| `min_amount` | Integer | Minimum allowed amount (in minor units) |
| `max_amount` | Integer | Maximum allowed amount (in minor units) |
| `currency` | String | Currency code (ISO 4217) |
| `code` | String | Internal service code |
| `is_3ds` | Boolean | Indicates whether 3-D Secure is required |
| `fields` | Array | List of required input fields |
| `response_fields` | Array | Fields returned in service response |

### Response

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
                "name_ru": "Сервис списания средств по AFT с карт РФ",
                "name_en": "AFT Withdrawal Service for RF Cards",
                "type": "debit",
                "description": "AFT Withdrawal Service for RF Cards",
                "min_amount": 100,
                "max_amount": 10000000,
                "currency": "643",
                "code": "V2S0006",
                "is_3ds": false,
                "fields": [
                    {
                        "id": 17,
                        "name": "to_card_number",
                        "label_uz": "qabul qluvchi kartasi",
                        "label_ru": "Карта получателя",
                        "label_en": "Receiver card",
                        "type": "string",
                        "is_required": true,
                        "order": 0,
                        "regex": "^[0-9]{16}$"
                    },
                    {
                        "id": 16,
                        "name": "ref_id",
                        "label_uz": "Karta tokeni",
                        "label_ru": "Токен карты",
                        "label_en": "Card token",
                        "type": "string",
                        "is_required": false,
                        "order": 0,
                        "regex": "^[0-9]+$"
                    }
                ],
                "response_fields": [
                    {
                        "field_name": "form_url",
                        "order": 0,
                        "label_ru": "URL-адрес формы",
                        "label_uz": "Formaning URL manzili",
                        "label_en": "Formaning URL manzili"
                    }
                ]
            }
        ]
    },
    "id": 1,
    "status": true,
    "origin": "services",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-01-19 16:17:59.880489"
    }
}
```
