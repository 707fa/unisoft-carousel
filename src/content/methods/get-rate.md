---
title: Get Rate
order: 7
rpcMethod: get.rate.v2
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "get.rate.v2",
        "params": {
          "service_code": "V2S0007"
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
        method: 'get.rate.v2',
        params: { service_code: 'V2S0007' },
      }),
    });
    const { result } = await response.json();
params:
  - name: service_code
    type: string
    required: true
    desc: "The unique code of the service whose rate is requested."
---

Returns the currency exchange rates for the selected service. `get.rate.v2`
provides all available conversion rates for that service.

## Why you need this method

- Get exchange rates by service code
- Determine primary and secondary conversion rates
- Calculate the transaction amount based on the currency conversion rules

## Response fields

| Field | Type | Description |
|---|---|---|
| `transaction_type` | string | Transaction type (`credit` / `debit`) |
| `is_primary` | boolean | Indicates the rate is considered primary |
| `currency` | string | Source currency (ISO 4217 numeric code) |
| `target_currency` | string | Target currency (ISO 4217 numeric code) |
| `operator` | string | Operator for calculating the rate (`multiply`, `divide`) |
| `value` | number | The value of the exchange rate |

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "transaction_type": "credit",
      "is_primary": true,
      "currency": "972",
      "target_currency": "860",
      "operator": "multiply",
      "value": 1343.35
    },
    {
      "transaction_type": "credit",
      "is_primary": true,
      "currency": "972",
      "target_currency": "643",
      "operator": "multiply",
      "value": 8.58
    }
  ],
  "id": 1,
  "status": true,
  "origin": "get.rate.v2"
}
```

To calculate the final amount, multiply (`multiply`) or divide (`divide`)
the source amount by `value` depending on the `operator`.
