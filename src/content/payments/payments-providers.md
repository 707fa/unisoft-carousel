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
  - name: category_id
    type: integer
    required: true
    desc: "paynet.categories javobidan olingan kategoriya identifikatori."
---

Tanlangan kategoriya ostidagi merchant (provayder)larni qaytaradi
— masalan, Beeline, Ucell, UzPaynet va h.k.

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| `id` | integer | Provayder identifikatori |
| `title` | string | To'liq nomi |
| `title_short` | string | Qisqartirilgan (ko'rsatiladigan) nomi |

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": [
    { "title": "OOO \"UNITEL\"", "title_short": "Beeline", "id": 2 },
    { "title": "OOO \"COSCOM\"", "title_short": "UCell", "id": 44 },
    { "title": "Paynet Услуги", "title_short": "Paynet Услуги", "id": 1775 },
    { "title": "OOO \"RWC\"", "title_short": "Perfectum", "id": 21 }
  ],
  "id": 1,
  "status": true,
  "origin": "paynet.providers"
}
```
