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
    desc: "Card number or recipient's phone number."
  - name: service_code
    type: string
    required: true
    desc: "Unique service code."
---

Retrieves information about a card or phone number **before** initiating a transfer. This method **performs no validation** — it simply returns whatever information is available for the given number.

## Why This Method Is Needed

- Retrieving the cardholder's name or the phone number owner
- Displaying a masked card/phone number to the user
- Showing account details associated with the number
- Pre-filling the transfer form with the retrieved data

This method does not perform any validation or transaction processing — it returns purely informational data about the number in the context of the given service.

## Response Fields

| Field | Type | Description |
|---|---|---|
| `number` | string | Card or phone number |
| `owner` | string \| null | Full name (if available) |
| `is_corporate` | boolean | Indicates whether the card is corporate |
| `state` | integer | Card status |
| `bank` | string | Name of the bank associated with the card |

## Sample Response

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
