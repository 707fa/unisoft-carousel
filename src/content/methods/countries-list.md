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
    desc: "countries.list"
  - name: params
    type: Object
    required: true
    desc: "Object."
---

`countries.list` returns all countries and payment schemes the system supports.
For each country it tells you two things:

- Can you withdraw money from cards of this country?
- Can you send money to cards of this country?

And for each operation — which service code to use.

## Debit — withdrawing money from a card

When a country has `"debit_enabled": true`, it means you can pull funds out of
cards issued in that country. Each debit entry has a `service_code` — you pass
that code to the payment API to start the withdrawal.

## Credit — sending money to a card

When a country has `"credit_enabled": true`, it means you can top up or transfer
money into cards of that country. Each credit entry has a `service_code` — you
pass it to the payment API to send money.

## Service code

A `service_code` is a unique identifier for one specific operation. It defines
the card network, the country, and the direction (in or out). You take the
`service_code` from this response and use it as a parameter when calling the
actual transfer endpoint.

## Sample responses

| Field | Type | Description |
|---|---|---|
| `id` | String | Unique country identifier |
| `code` | String | Country or currency code (e.g. `"UZB"`, `"RUS"`) |
| `name` | String | Human-readable country or scheme name |
| `debit_enabled` | Boolean | Whether fund withdrawal (debit) is available for this country |
| `credit_enabled` | Boolean | Whether fund deposit (credit) is available for this country |
| `debit` | Array | List of available debit services. Empty array if `debit_enabled` is false |
| `credit` | Array | List of available credit services. Empty array if `credit_enabled` is false |
| `service_code` | String | Unique service identifier used in subsequent API calls (e.g. `"V2S0005"`) |
| `service_name` | String | Human-readable description of the service |

### Response

```json
{
    "jsonrpc": "2.0",
    "result": [
        {
            "id": 2,
            "code": "KGZ",
            "name": "Kyrgyzstan",
            "debit_enabled": false,
            "credit_enabled": true,
            "debit": [],
            "credit": [
                {
                    "service_code": "V2S0002",
                    "service_name": "Qirg'iziston kartalarini toldirish"
                }
            ]
        },
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
                },
                {
                    "service_code": "V2S0008",
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
            "id": 3,
            "code": "TJK",
            "name": "Tajikistan",
            "debit_enabled": false,
            "credit_enabled": true,
            "debit": [],
            "credit": [
                {
                    "service_code": "V2S0007",
                    "service_name": "Card top-up for Tajikistan cards"
                }
            ]
        },
        {
            "id": 5,
            "code": "TRY",
            "name": "TURKEY",
            "debit_enabled": false,
            "credit_enabled": true,
            "debit": [],
            "credit": [
                {
                    "service_code": "V2S0001",
                    "service_name": "Turkiya IBAN xisob raqamlarini toldirish"
                }
            ]
        },
        {
            "id": 6,
            "code": "USD",
            "name": "VISA",
            "debit_enabled": false,
            "credit_enabled": true,
            "debit": [],
            "credit": [
                {
                    "service_code": "V2S0010",
                    "service_name": "Card top-up for VISA cards"
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
                },
                {
                    "service_code": "V2S0015",
                    "service_name": "Withdrawing money from Wallet"
                }
            ],
            "credit": [
                {
                    "service_code": "V2S0003",
                    "service_name": "HUMO Account to card"
                },
                {
                    "service_code": "V2S0005",
                    "service_name": "Uzcard Account to card"
                },
                {
                    "service_code": "V2S0014",
                    "service_name": "Ucoin Account to wallet"
                }
            ]
        }
    ],
    "id": 1,
    "status": true,
    "origin": "countries.list",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-03-25 14:56:05.189666"
    }
}
```
