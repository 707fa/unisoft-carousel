---
title: Countries list
order: 4
rpcMethod: countries.list
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "countries.list",
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
        method: 'countries.list',
        params: {},
      }),
    });
    const { result } = await response.json();
params:
  - name: jsonrpc
    type: string
    required: true
    desc: "JSON-RPC protocol version."
  - name: id
    type: "string | integer"
    required: true
    desc: "Request identifier."
  - name: method
    type: string
    required: true
    desc: "Method name — in this case \"countries.list\"."
  - name: params
    type: object
    required: true
    desc: "Empty object."
---

`countries.list` returns all countries and payment systems supported by the platform. For each country it answers two questions:

- Is withdrawing funds (**debit**) from cards issued in this country supported?
- Is sending funds (**credit**) to cards in this country supported?

And for each operation — it indicates which `service_code` to use.

## Debit — Withdrawing Funds from a Card

If `debit_enabled: true`, funds can be withdrawn from cards issued in that country. Each debit entry includes a `service_code` — pass this code to the payment API to initiate the withdrawal.

## Credit — Sending Funds to a Card

If `credit_enabled: true`, funds can be deposited or transferred to cards in that country. Each credit entry also includes a `service_code` — use it to send funds.

## What Is a Service Code

`service_code` is a unique identifier representing a single specific operation. It encodes the card network, country, and direction (incoming or outgoing). Use the `service_code` obtained from this response as a parameter when calling the actual transfer endpoint.

## Response Fields

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique identifier of the country |
| `code` | string | Country or currency code (e.g., `"UZB"`, `"RUS"`) |
| `name` | string | Human-readable country/system name |
| `debit_enabled` | boolean | Whether withdrawal is available for this country |
| `credit_enabled` | boolean | Whether sending funds is available for this country |
| `debit` | array | List of available debit services (empty if `debit_enabled` is false) |
| `credit` | array | List of available credit services |
| `service_code` | string | Identifier used in subsequent requests (e.g., `"V2S0005"`) |
| `service_name` | string | Human-readable description of the service |

## Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "id": 4,
      "code": "RUS",
      "name": "Russia",
      "debit_enabled": true,
      "credit_enabled": true,
      "debit": [
        {
          "service_code": "V2S0006",
          "service_name": "AFT Withdrawal Service for RF Cards"
        }
      ],
      "credit": [
        {
          "service_code": "V2S0011",
          "service_name": "Account to RF cards"
        }
      ]
    },
    {
      "id": 1,
      "code": "UZB",
      "name": "UZBEKISTAN",
      "debit_enabled": true,
      "credit_enabled": true,
      "debit": [
        {
          "service_code": "V2S0009",
          "service_name": "Withdrawing money from Uzcard cards via OTP verification"
        }
      ],
      "credit": [
        {
          "service_code": "V2S0005",
          "service_name": "Uzcard Account to card"
        }
      ]
    }
  ],
  "id": 1,
  "status": true,
  "origin": "countries.list"
}
```
