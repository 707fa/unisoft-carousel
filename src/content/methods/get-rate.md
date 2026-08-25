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
    desc: "get.rate.v2"
  - name: params
    type: Object
    required: true
    desc: "Object."
  - name: service_code
    type: Integer
    required: true
    desc: "Unique service code."
---

This method is used to retrieve exchange rates for a specific service.
The `get.rate.v2` method returns all available currency conversion rates
applicable to the selected service.

This method allows the client application to:

- Retrieve exchange rates for a service by its code
- Determine primary and secondary conversion rates
- Calculate transaction amounts based on currency conversion rules

Returns a list of rates including source currency, target currency, operator,
and rate value.

## Sample responses

| Field | Type | Description |
|---|---|---|
| `transaction_type` | String | Transaction type (`credit` / `debit`) |
| `is_primary` | Boolean | Indicates whether the rate is primary |
| `currency` | String | Source currency (ISO 4217 numeric code) |
| `target_currency` | String | Target currency (ISO 4217 numeric code) |
| `operator` | String | Rate calculation operator (`multiply`, `divide`) |
| `value` | Number | Exchange rate value |

### Response

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
    "origin": "get.rate.v2",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-01-19 09:34:18.740931"
    }
}
```
