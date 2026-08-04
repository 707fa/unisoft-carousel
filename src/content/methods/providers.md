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
    desc: "Method name — in this case \"providers\"."
  - name: params
    type: object
    required: true
    desc: "Empty object — reserved for future use."
---

The `providers` method returns a list of all available providers displayed in the carousel. Each provider represents a supported service, country, or payment system (e.g., Visa, Humo, Uzcard, MTS, etc.).

## Why This Method Is Needed

- Displaying providers in the UI (carousel)
- Showing provider names in multiple languages
- Checking whether a provider is active or inactive

## Response Fields

| Field | Type | Description |
|---|---|---|
| `id` | integer | Unique identifier of the provider |
| `name_uz` | string | Provider name in Uzbek |
| `name_en` | string | Provider name in English |
| `name_ru` | string | Provider name in Russian |
| `is_active` | boolean | Indicates whether the provider is active |

## Sample Response

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
    }
  ]
}
```
