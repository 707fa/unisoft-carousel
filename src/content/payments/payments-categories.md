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
params:
  - name: jsonrpc
    type: String
    required: true
    desc: "JSON-RPC protocol version."
  - name: method
    type: String
    required: true
    desc: "paynet.categories"
  - name: id
    type: "String | Integer"
    required: true
    desc: "Request id."
  - name: params
    type: Object
    required: true
    desc: "Payment parameters."
---

A logical grouping of providers (Mobile, Utilities, Internet, etc.).

## Response

```json
{
    "jsonrpc": "2.0",
    "result": [
        {
            "title_ru": "Сотовые операторы",
            "title_uz": "Uyali aloqa",
            "is_subcategory": false,
            "id": 1
        },
        {
            "title_ru": "Домашний телефон",
            "title_uz": "Uy telefoni",
            "is_subcategory": false,
            "id": 2
        },
        {
            "title_ru": "Интернет",
            "title_uz": "Internet",
            "is_subcategory": false,
            "id": 3
        },
        {
            "title_ru": "Услуги",
            "title_uz": "Xizmatlar",
            "is_subcategory": false,
            "id": 7
        },
        {
            "title_ru": "Такси",
            "title_uz": "Taxi",
            "is_subcategory": false,
            "id": 11
        },
        {
            "title_ru": "Телевидение",
            "title_uz": "Televidenie",
            "is_subcategory": false,
            "id": 9
        },
        {
            "title_ru": "Зарубежные сервисы",
            "title_uz": "Xorijiy xizmatlar",
            "is_subcategory": false,
            "id": 12
        },
        {
            "title_ru": "IP телефония",
            "title_uz": "IP telefoniya",
            "is_subcategory": false,
            "id": 4
        },
        {
            "title_ru": "Онлайн площадки",
            "title_uz": "Online platformalar",
            "is_subcategory": false,
            "id": 13
        },
        {
            "title_ru": "Государственные услуги",
            "title_uz": "Davlat xizmatlari",
            "is_subcategory": false,
            "id": 14
        }
    ],
    "id": 1,
    "status": true,
    "origin": "paynet.categories",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-05-12 14:34:50.604293"
    }
}
```

> The category list in the sample is truncated (`. . .` in the source
> specification) — the live response returns all categories.
