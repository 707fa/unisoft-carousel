---
title: Info
order: 4
rpcMethod: transfer.info
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.info",
        "params": {
          "service_code": "V2S0013",
          "service_id": 3533,
          "fields": {
            "clientid": "935989900"
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
        method: 'transfer.info',
        params: {
          service_code: 'V2S0013',
          service_id: 3533,
          fields: { clientid: '935989900' },
        },
      }),
    });
    const { result } = await response.json();
params:
  - name: service_code
    type: string
    required: true
    desc: "The service code."
  - name: service_id
    type: integer
    required: true
    desc: "The service identifier taken from the paynet.services response."
  - name: fields
    type: object
    required: true
    desc: "Service-specific fields (for example, the client identifier — clientid)."
---

Used to check information about the receiver (for example a phone number)
**before** creating a payment — this is the "Create service"
(receiver-check) in the Paynet group.

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "transaction_id": "32511484056",
    "status_text": "Проведен успешно",
    "status": "0",
    "time": 1778583693000,
    "response": [
      { "key": "provider_name", "label_uz": "Operator", "value": "UCell" },
      {
        "key": "service_name",
        "label_uz": "Xizmat turi",
        "value": "Проверка номера"
      },
      { "key": "clientid", "label_uz": "Telefon raqami", "value": "935989900" },
      { "key": "check_status", "label_uz": "Raqam statusi", "value": null }
    ]
  },
  "id": 1,
  "status": true,
  "origin": "transfer.info"
}
```

Each element in the `response` array represents a single row shown on the
receipt (`key`, a multilingual `label`, and a `value`).
