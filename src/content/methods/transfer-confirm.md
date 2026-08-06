---
title: Transfer Confirm
order: 23
rpcMethod: transfer.confirm
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": "{{$randomUUID}}",
        "method": "transfer.confirm",
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
        method: 'transfer.confirm',
        params: { ext_id: extId },
      }),
    });
    const { result } = await response.json();
params:
  - name: ext_id
    type: string
    required: true
    desc: "The external operation identifier used in transfer.create."
---

`transfer.confirm` finalizes and confirms a previously created transfer.
This method must be called **after** the customer has successfully
completed the confirmation step (for example, 3-D Secure or an external
payment page).

Once confirmed, the system processes the transfer and updates the final
state.

## When it is used

Only call `transfer.confirm` in the following case:

- `transfer.create` returned `state = 0` (Created)

This method confirms the cheque and withdraws the funds from the
customer's card.

## Sample response

The response structure is identical to the `transfer.create` response:

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
  "origin": "transfer.confirm"
}
```

`state: 4` means the operation completed successfully (see the
[state table](/docs/transfer-state)).
