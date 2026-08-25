---
title: Transfer check
order: 6
rpcMethod: transfer.check
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Authorization: Bearer {{access_token}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.check",
        "params": {
            "number": "9105205279986",
            "service_code": "V2S0016"
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
        method: 'transfer.check',
        params: {
          number: '9105205279986',
          service_code: 'V2S0016',
        },
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
    desc: "transfer.check"
  - name: params
    type: Object
    required: true
    desc: "Object."
  - name: number
    type: Integer
    required: true
    desc: "Card number or receiver phone number."
  - name: service_code
    type: String
    required: true
    desc: "Unique service code."
---

Retrieves and displays information about a card or phone number before
initiating a transfer. This method does not validate — it simply returns
available information about the provided number.

This method is used to retrieve information about a card or phone number
associated with a specific service before creating a transfer. The client
application can use this method to:

- Retrieve the card holder's name or phone owner
- Display masked card/phone number to the user
- Show account details linked to the number
- Pre-fill transfer form with retrieved data

> This method does **not** perform any validation or transaction processing — it
> only returns informational data about the provided number within the context
> of the given service.

## Sample responses

| Field | Type | Description |
|---|---|---|
| `number` | String | Card number or phone number |
| `owner` | Boolean | Full name |
| `is_corporate` | String | Card type |
| `state` | String | Card status |
| `bank` | String | Card bank |

### Response

```json
{
    "jsonrpc": "2.0",
    "result": {
        "number": "902333614",
        "owner": null,
        "is_corporate": false,
        "state": 0,
        "bank": "МАХМУДЧОН А. М."
    },
    "id": 1,
    "status": true,
    "origin": "transfer.check",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-04-07 10:16:12.624738"
    }
}
```
