---
title: Create
order: 5
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Authorization: Bearer {{access_token}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
            "ext_id": "test_12345",
            "currency": "860",
            "service_code": "V2S0013",
            "service_id": 104,
            "sender_id": 1,
            "fields": {
                "clientid": "935989900",
                "amount": 1000
            }
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
        method: 'transfer.create',
        params: {
          ext_id: 'test_12345',
          currency: '860',
          service_code: 'V2S0013',
          service_id: 104,
          sender_id: 1,
          fields: {
            clientid: '935989900',
            amount: 1000, // Not tiyins
          },
        },
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
    desc: "transfer.create"
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
  - name: currency
    type: String
    required: true
    desc: "Currency code."
  - name: service_code
    type: String
    required: true
    desc: "Service Code."
  - name: service_id
    type: Integer
    required: true
    desc: "Service ID."
  - name: sender_id
    type: Integer
    required: true
    desc: "Sender identifier."
  - name: fields
    type: Objects
    required: true
    desc: "Fields."
---

Creates a Paynet payment for the selected service.

> ⚠️ `fields.amount` for Paynet payments is **not** given in tiyins — it is the
> plain amount (`"amount": 1000` in the sample below).

**Request**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "transfer.create",
    "params": {
        "ext_id": "test_12345",
        "currency": "860",
        "service_code": "V2S0013",
        "service_id": 104,
        "sender_id": 1,
        "fields": {
            "clientid": "935989900",
            "amount": 1000
        }
    }
}
```

## Response

```json
{
    "jsonrpc": "2.0",
    "result": {
        "ext_id": "test_12345",
        "state": 0,
        "description": "created",
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
    "origin": "transfer.create",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-05-12 16:13:50.689821"
    }
}
```
