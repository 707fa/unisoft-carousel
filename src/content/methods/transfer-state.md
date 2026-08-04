---
title: Transfer State
order: 22
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
    desc: "External identifier of the operation whose status is being checked."
---

`transfer.state` retrieves the final status of a transfer. It allows a
partner system to check whether a transaction has completed successfully,
failed, been cancelled, or is still in progress.

This method is especially useful when a transfer is processed via `form_url`
and the final result is not immediately available.

## When to use

Use `transfer.state` in the following situations:

- A transfer was created via `transfer.create`
- The response included a `form_url`
- The final state has not arrived via callback
- The partner needs to poll for the transaction status

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
| `22` | Check expired |
| `29`, `30` | In progress |
| `33` | Transaction error |
