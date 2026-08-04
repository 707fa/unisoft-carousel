---
title: State
order: 7
rpcMethod: transfer.state
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.state",
        "params": {
          "ext_id": "test_12345"
        }
      }'
params:
  - name: ext_id
    type: string
    required: true
    desc: "External identifier of the payment whose status is being checked."
---

Used to check the final status of a Paynet payment — behavior is
identical to [Transfer State](/docs/transfer-state).

## Sample Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "test_12345",
    "state": 4,
    "description": "Проведен успешно",
    "amount": 1000,
    "currency": "860",
    "commission": 0,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-051226161349-0adff87b-f1b8-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.state"
}
```

The complete list of status codes is provided on the
[Transfer State](/docs/transfer-state) page.
