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
    desc: "Unique code of the service whose exchange rate is being requested."
---

Returns the currency exchange rates for the selected service. `get.rate.v2` provides all available conversion rates associated with that service.

## Why This Method Is Needed

- Retrieving exchange rates by service code
- Determining primary and secondary conversion rates
- Calculating the transaction amount based on currency conversion rules

## Response Fields

| Field | Type | Description |
|---|---|---|
| `transaction_type` | string | Transaction type (`credit` / `debit`) |
| `is_primary` | boolean | Indicates whether this is the primary rate |
| `currency` | string | Source currency (ISO 4217 numeric code) |
| `target_currency` | string | Target currency (ISO 4217 numeric code) |
| `operator` | string | Operator used to calculate the rate (`multiply`, `divide`) |
| `value` | number | Exchange rate value |

## Sample Response

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

To calculate the final amount, multiply or divide the source amount by `value` according to the `operator` field (`multiply` or `divide`).
