---
title: Provider
order: 2
rpcMethod: providers
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Authorization: Bearer {{access_token}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "providers",
        "params": {}
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
        method: 'providers',
        params: {},
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
---

The `providers` method is used to retrieve the list of all available providers
displayed in the carousel.

Each provider represents a supported service, country, or payment system
(e.g. Visa, Humo, Uzcard, MTS, etc.).

This method allows the client application to:

- Display providers in UI (carousel)
- Show provider names in multiple languages
- Check whether a provider is active or inactive

Returns the full list of providers with multilingual names and activity status.

## Sample responses

| Field | Type | Description |
|---|---|---|
| `id` | Integer | Provider unique identifier |
| `name_uz` | String | Provider name in Uzbek |
| `name_en` | String | Provider name in English |
| `name_ru` | String | Provider name in Russian |
| `is_active` | Boolean | Indicates whether the provider is active |

### Response

```json
{
    "jsonrpc": "2.0",
    "result": [
        {
            "id": 1,
            "name_uz": "Turkiya",
            "name_ru": "Турция",
            "name_en": "Turkey",
            "is_active": true
        },
        {
            "id": 2,
            "name_uz": "Tojikiston",
            "name_ru": "Таджикистан",
            "name_en": "Tajikistan",
            "is_active": true
        },
        {
            "id": 3,
            "name_uz": "Visa",
            "name_ru": "Виза",
            "name_en": "Visa",
            "is_active": true
        },
        {
            "id": 4,
            "name_uz": "Humo",
            "name_ru": "Хумо",
            "name_en": "Humo",
            "is_active": true
        },
        {
            "id": 5,
            "name_uz": "Uzcard",
            "name_ru": "Узкард",
            "name_en": "Uzcard",
            "is_active": true
        },
        {
            "id": 6,
            "name_uz": "Qirg'iziston",
            "name_ru": "Кыргызстан",
            "name_en": "Kyrgyzstan",
            "is_active": true
        },
        {
            "id": 7,
            "name_uz": "T-Bank",
            "name_ru": "Т-Банк",
            "name_en": "T-Bank",
            "is_active": true
        },
        {
            "id": 8,
            "name_uz": "TKB",
            "name_ru": "ТКБ",
            "name_en": "TCB",
            "is_active": true
        },
        {
            "id": 9,
            "name_uz": "MTS",
            "name_ru": "МТС",
            "name_en": "MTS",
            "is_active": true
        }
    ],
    "id": 1,
    "status": true,
    "origin": "providers",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-01-19 15:17:06.152607"
    }
}
```
