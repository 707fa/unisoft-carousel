---
title: Transfer create
order: 8
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": "{{$randomUUID}}",
        "method": "transfer.create",
        "params": {
          "ext_id": "{{ext_id}}",
          "amount": 1000000,
          "currency": "643",
          "service_code": "V2S0006",
          "sender_id": 1,
          "fields": {
            "to_card_number": "5058***0320789",
            "ref_id": "123345678"
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
        id: crypto.randomUUID(),
        method: 'transfer.create',
        params: {
          ext_id: extId,
          amount: 1000000,
          currency: '643',
          service_code: 'V2S0006',
          sender_id: 1,
          fields: {
            to_card_number: '5058***0320789',
            ref_id: '123345678',
          },
        },
      }),
    });
    const { result } = await response.json();
params:
  - name: ext_id
    type: string
    required: true
    desc: "A unique external identifier of the operation in your system."
  - name: amount
    type: integer
    required: true
    desc: "Transfer amount (in the minor currency unit — tiyin/kopeck)."
  - name: currency
    type: string
    required: true
    desc: "ISO 4217 currency code."
  - name: service_code
    type: string
    required: true
    desc: "Service code taken from the services or countries.list response."
  - name: sender_id
    type: integer
    required: true
    desc: "Sender identifier returned by the sender.create method."
  - name: fields
    type: object
    required: true
    desc: "Fields specific to the selected service (see below)."
---

`transfer.create` creates a money transfer or payment operation for the
selected service. Each service may require different input fields — the
required and optional fields must be taken dynamically from the `services`
method response.

> ⚠️ **Important rule:** the `fields` object must contain only the
> parameters defined by the selected service. Every field in the
> `services` response has a `name` attribute — those exact values must be
> used as keys inside `params.fields` in `transfer.create`.

## Two-step process

**Step 1: Get the service fields**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "services",
  "params": { "provider_id": 8 }
}
```

The `fields` array in the response indicates which fields are needed:

```json
{
  "fields": [
    { "name": "to_card_number", "is_required": true },
    { "name": "ref_id", "is_required": false }
  ]
}
```

**Step 2: Create the transfer with those fields** — send the request from
the code sample above.

## Response fields

| Field | Type | Description |
|---|---|---|
| `ext_id` | string | External identifier of the operation |
| `state` | integer | Operation state (see the [state table](/docs/transfer-state)) |
| `description` | string | State description |
| `amount` | integer | Amount (with tiyin precision) |
| `currency` | string | Credit currency |
| `commission` | float | Calculated commission |
| `cr_amount` / `cr_currency` | integer / string | Amount in the receiver's currency and its code |
| `form_url` | string \| null | URL for an additional payment form (for some services) |
| `account` | array | Receiver account details |
| `payment.ref_num` | string | The matching reference identifier in the processing center (Uzcard, Humo, Visa) |
| `id` | string | The operation's payment identifier — RRN |

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "kg_test_102",
    "state": 0,
    "description": "Created",
    "amount": 1000000,
    "currency": "643",
    "commission": 10000,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": "https://online.transcapital.com/cdr/payment/A0SkPAE",
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": ""
      },
      {
        "name": "owner",
        "title": { "en": "Receiver" },
        "value": null
      }
    ],
    "payment": {
      "ref_num": "UO-MT-C-011926111635-33536be2-fdc5-4",
      "id": null
    },
    "merchant": {
      "organization": "Universal",
      "epos": { "merchant": "-", "terminal": "P23318112725ID", "account": "-" },
      "type": { "en": "Top-up card" }
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```

## Service-specific variants

The contents of the `fields` object differ depending on the selected
service. Below are separate pages for the most commonly used service types
— each with its own `fields` and a sample request:

- [Visa Direct](/docs/transfer-create-visa-direct)
- [UnionPay](/docs/transfer-create-unionpay)
- [Uzcard / Humo A2C](/docs/transfer-create-uzcard-humo-a2c)
- [RF MTS](/docs/transfer-create-rf-mts)
- [Turkey](/docs/transfer-create-turkey)
- [RF TCB](/docs/transfer-create-rf-tcb)
- [Uzcard payment](/docs/transfer-create-uzcard-payment)
- [MTS to Card](/docs/transfer-create-mts-to-card)
- [Wallet to Card](/docs/transfer-create-wallet-to-card)
- [Wallet payment](/docs/transfer-create-wallet-payment)
- [Korea](/docs/transfer-create-korea)
- [Top-up RF banks card](/docs/transfer-create-topup-rf-banks)
