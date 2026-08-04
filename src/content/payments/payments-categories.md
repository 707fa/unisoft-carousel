---
title: Categories
order: 1
rpcMethod: paynet.categories
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "paynet.categories",
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
        method: 'paynet.categories',
        params: {},
      }),
    });
    const { result } = await response.json();
---

**Paynet payments** — another module of Unisoft Carousel:
used to accept payments via mobile operators, utilities,
internet services, taxis, and other providers.

`paynet.categories` returns the logical grouping of providers
(Mobile, Utilities, Internet, etc.).

## Response Fields

| Field | Type | Description |
|---|---|---|
| `id` | integer | Category identifier |
| `title_uz` / `title_ru` | string | Category name by language |
| `is_subcategory` | boolean | Indicates whether this is a subcategory |

## Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": [
    { "title_uz": "Uyali aloqa", "is_subcategory": false, "id": 1 },
    { "title_uz": "Uy telefoni", "is_subcategory": false, "id": 2 },
    { "title_uz": "Internet", "is_subcategory": false, "id": 3 },
    { "title_uz": "Xizmatlar", "is_subcategory": false, "id": 7 },
    { "title_uz": "Taxi", "is_subcategory": false, "id": 11 },
    { "title_uz": "Davlat xizmatlari", "is_subcategory": false, "id": 14 }
  ],
  "id": 1,
  "status": true,
  "origin": "paynet.categories"
}
```
