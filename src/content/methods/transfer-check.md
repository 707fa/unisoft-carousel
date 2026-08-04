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
  - name: number
    type: string
    required: true
    desc: "The receiver's card number or phone number."
  - name: service_code
    type: string
    required: true
    desc: "The unique service code."
---

Retrieves information about a card or phone number **before** starting a
transfer. This method performs **no validation** — it only returns the
available information about the given number.

## Why you need this method

- Get the cardholder's name or the phone owner
- Show the user a masked card/phone number
- Display account details tied to the number
- Pre-fill the transfer form with the retrieved information

This method does not perform any validation or transaction processing — it
returns an informational value about the number within the context of the
given service.

## Response fields

| Field | Type | Description |
|---|---|---|
| `number` | string | Card or phone number |
| `owner` | string \| null | Full name (if available) |
| `is_corporate` | boolean | Card type — corporate or not |
| `state` | integer | Card state |
| `bank` | string | Name of the bank the card belongs to |

## Sample response

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
  "origin": "transfer.check"
}
```
