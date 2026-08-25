---
title: Providers
order: 2
rpcMethod: paynet.providers
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Authorization: Bearer {{access_token}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "paynet.providers",
        "params": {
            "category_id": 1
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
        method: 'paynet.providers',
        params: { category_id: 1 },
      }),
    });
    const { result } = await response.json();
params:
  - name: jsonrpc
    type: String
    required: true
    desc: "JSON-RPC protocol version."
  - name: method
    type: String
    required: true
    desc: "paynet.providers"
  - name: id
    type: "String | Integer"
    required: true
    desc: "Request id."
  - name: params
    type: Object
    required: true
    desc: "Payment parameters."
  - name: category_id
    type: Integer
    required: true
    desc: "Category ID."
---

A merchant under a category (Beeline, Ucell, UzPaynet, etc.).

## Response

```json
{
    "jsonrpc": "2.0",
    "result": [
        {
            "title": "OOO “UNITEL”",
            "title_short": "Beeline",
            "id": 2
        },
        {
            "title": "OOO “COSCOM”",
            "title_short": "UCell",
            "id": 44
        },
        {
            "title": "Paynet Услуги",
            "title_short": "Paynet Услуги",
            "id": 1775
        },
        {
            "title": "ООО \"RWC\"",
            "title_short": "Perfectum",
            "id": 21
        },
        {
            "title": "ООО \"UNIVERSAL MOBILE SYSTEMS\"",
            "title_short": "UMS",
            "id": 2915
        }
    ],
    "id": 1,
    "status": true,
    "origin": "paynet.providers",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-05-12 15:34:30.148397"
    }
}
```

> The provider list in the sample is truncated (`. . .` in the source
> specification) — the live response returns all providers of the category.
