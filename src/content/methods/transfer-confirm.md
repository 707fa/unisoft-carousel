---
title: Transfer Confirm
order: 21
rpcMethod: transfer.confirm
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Authorization: Bearer {{access_token}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": "{{$randomUUID}}",
        "method": "transfer.confirm",
        "params": {
            "ext_id": "{{ext_id}}"
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
        id: crypto.randomUUID(),
        method: 'transfer.confirm',
        params: { ext_id: extId },
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
    desc: "transfer.confirm"
  - name: id
    type: "String | Integer"
    required: true
    desc: "Request id."
  - name: params
    type: Object
    required: true
    desc: "Transfer parameters."
  - name: ext_id
    type: String
    required: true
    desc: "External unique operation ID of the transfer being confirmed."
---

The `transfer.confirm` method is used to finalize and confirm a previously
created transfer. This method must be called after the client successfully
completes the confirmation step (for example 3-D Secure, or an external payment
page).

Once confirmed, the system processes the transfer and updates its final state.

## When to Use

Call `transfer.confirm` only if:

- `transfer.create` returned `state = 0` (Created)

Method confirms cheque and funds client card.

## Response

Response cheque model same as create response.

### Response

```json
{
    "jsonrpc": "2.0",
    "result": {
        "ext_id": "kg_test_104",
        "state": 4,
        "description": "Success",
        "amount": 10000,
        "currency": "643",
        "commission": 0,
        "cr_amount": 1172,
        "cr_currency": "972",
        "form_url": null,
        "account": [
            {
                "name": "card",
                "title": {
                    "ru": "Карта получателя",
                    "en": "Card of a receiver",
                    "uz": "Qabul qiluvchi kartasi"
                },
                "number": "505827******0789"
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
            "ref_num": "UO-MT-C-012026091545-3ba5df06-54eb-4",
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
        "timestamp": "2026-01-20 09:19:03.966651"
    }
}
```
