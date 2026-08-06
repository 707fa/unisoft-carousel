---
title: Transfer State
order: 24
rpcMethod: transfer.state
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": "{{$randomUUID}}",
        "method": "transfer.state",
        "params": {
          "ext_id": "{{ext_id}}"
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
        id: crypto.randomUUID(),
        method: 'transfer.state',
        params: { ext_id: extId },
      }),
    });
    const { result } = await response.json();
params:
  - name: ext_id
    type: string
    required: true
    desc: "The external identifier of the operation whose state is being checked."
---

`transfer.state` retrieves the final state of a transfer. It lets the
partner system check whether a transaction completed successfully, failed,
was cancelled, or is still in progress.

This method is especially useful when a transfer was processed via a
`form_url` and the final result is not immediately available.

## When it is used

Use `transfer.state` in the following cases:

- The transfer was created via `transfer.create`
- A `form_url` was returned in the response
- The final state did not arrive via a callback
- The partner needs to poll the transaction state

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "kg_test_104",
    "state": 4,
    "description": "Success",
    "amount": 10000,
    "currency": "643",
    "commission": 0,
    "cr_amount": 1172,
    "cr_currency": "972",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "505827******0789"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-012026091545-3ba5df06-54eb-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.state"
}
```

## Operation states (`state`)

| State | Description |
|---|---|
| `-98` | Not created |
| `0` | Created |
| `4` | Success |
| `21` | Cancelled |
| `22` | Cheque expired |
| `29`, `30` | In progress |
| `33` | Transaction error |
