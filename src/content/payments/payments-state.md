---
title: State
order: 7
rpcMethod: transfer.state
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Authorization: Bearer {{access_token}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.state",
        "params": {
            "ext_id": "test_12345"
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
        method: 'transfer.state',
        params: { ext_id: 'test_12345' },
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
    desc: "transfer.state"
  - name: id
    type: "String | Integer"
    required: true
    desc: "Request id."
  - name: params
    type: Object
    required: true
    desc: "Payment parameters."
  - name: ext_id
    type: String
    required: true
    desc: "Unique External ID."
---

Returns the current status of a Paynet payment by its external id.
State codes are the same as for transfers — see the
[Transfer states table](/docs/transfer-state).

## Response

```json
{
    "jsonrpc": "2.0",
    "result": {
        "ext_id": "test_12345",
        "state": 4,
        "description": "Проведен успешно",
        "amount": 1000,
        "currency": "860",
        "commission": 0,
        "cr_amount": null,
        "cr_currency": null,
        "form_url": null,
        "account": [
            {
                "name": "card",
                "title": {
                    "ru": "Карта получателя",
                    "en": "Card of a receiver",
                    "uz": "Qabul qiluvchi kartasi"
                },
                "number": ""
            },
            {
                "name": "owner",
                "title": {
                    "ru": "Получатель",
                    "en": "Receiver",
                    "uz": "Qabul qiluvchi"
                },
                "value": null
            }
        ],
        "payment": {
            "ref_num": "UO-MT-C-051226161349-0adff87b-f1b8-4",
            "id": null
        },
        "merchant": {
            "organization": "Universal",
            "epos": {
                "merchant": "-",
                "terminal": "-",
                "account": "-"
            },
            "type": {
                "ru": "Пополнения карта ",
                "en": "Top-up card",
                "uz": "Karta xisobini to'ldirish"
            }
        }
    },
    "id": 1,
    "status": true,
    "origin": "transfer.state",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-05-12 16:13:50.689821"
    }
}
```
