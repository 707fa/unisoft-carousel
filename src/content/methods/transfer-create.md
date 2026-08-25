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
    desc: "transfer.create"
  - name: params
    type: Object
    required: true
    desc: "Transfer parameters."
  - name: ext_id
    type: String
    required: true
    desc: "External unique operation ID."
  - name: amount
    type: Integer
    required: true
    desc: "Transfer amount (in minor units)."
  - name: currency
    type: String
    required: true
    desc: "Currency code (ISO 4217)."
  - name: service_code
    type: String
    required: true
    desc: "Service code from services."
  - name: sender_id
    type: Integer
    required: true
    desc: "The sender_id returned by sender.create, used to identify the sender in transfer.create."
  - name: fields
    type: Object
    required: true
    desc: "Service-specific fields."
---

The `transfer.create` method is used to create a money transfer or payment
operation for a selected service.

Each service may require a different set of input fields.
The required and optional fields must be obtained dynamically from the
[`services`](/docs/services) method response.

> ⚠️ The `fields` object must contain **only** the parameters defined in the
> selected service.

## Important Rule

The content of `params.fields` depends on the selected service. The list of
allowed and required fields is returned by the `services` method.

Each field in the `services` response contains a `name` attribute. These `name`
values must be used as keys inside `params.fields` in `transfer.create`.

## params.fields

`fields` is a dynamic object.

Its structure depends on the selected service and must be built using the
`fields[].name` values returned by the `services` method.

### Step 1: Get service fields

Request:

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "services",
    "params": {
        "provider_id": 8
    }
}
```

Response (fragment):

```json
{
    "fields": [
        {
            "name": "to_card_number",
            "is_required": true
        },
        {
            "name": "ref_id",
            "is_required": false
        }
    ]
}
```

### Step 2: Create transfer using service fields

```json
{
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
}
```

## Sample responses

| Field | Type | Description |
|---|---|---|
| `ext_id` | String | External id of operation |
| `state` | Integer | State of operation |
| `number` | String | Receiver card number |
| `description` | String | Operation state description |
| `amount` | Integer | Amount in UZS with precision tiyin |
| `currency` | Integer | Credit currency |
| `commission` | Float | Calculated commission |
| `account` | List | Receiver account information |
| `ref_num` | String | Reference id of payment in PC (Uzcard, Humo, Visa) |
| `id` | String | Payment id of operation — RRN |

### Response

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
                "title": {
                    "ru": "Карта получателя",
                    "en": "Card of a receiver",
                    "uz": "Qabul qiluvchi kartasi"
                },
                "number": ""
            },
            {
                "name": "owner",
                "title": {
                    "ru": "Получатель",
                    "en": "Receiver",
                    "uz": "Qabul qiluvchi"
                },
                "value": null
            }
        ],
        "payment": {
            "ref_num": "UO-MT-C-011926111635-33536be2-fdc5-4",
            "id": null
        },
        "merchant": {
            "organization": "Universal",
            "epos": {
                "merchant": "-",
                "terminal": "P23318112725ID",
                "account": "-"
            },
            "type": {
                "ru": "Пополнения карта ",
                "en": "Top-up card",
                "uz": "Karta xisobini to'ldirish"
            }
        }
    },
    "id": 1,
    "status": true,
    "origin": "transfer.create",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-01-19 11:16:35.946961"
    }
}
```

## Service-specific variants

The content of the `fields` object varies depending on the selected service.
Below are the separate pages for each documented service type — each one
includes its own `fields` table, request sample and response sample:

- [8.1 Transfer Create Visa Direct](/docs/transfer-create-visa-direct)
- [8.2 / 8.12 Transfer Create UnionPay](/docs/transfer-create-unionpay)
- [8.3 Transfer Create Uzcard Humo A2C](/docs/transfer-create-uzcard-humo-a2c)
- [8.4 Transfer Create RF MTS](/docs/transfer-create-rf-mts)
- [8.5 Transfer Create Turkey](/docs/transfer-create-turkey)
- [8.6 Transfer Create RF TCB](/docs/transfer-create-rf-tcb)
- [8.7 Transfer Create Uzcard payment](/docs/transfer-create-uzcard-payment)
- [8.8 Transfer Create MTS TO Card](/docs/transfer-create-mts-to-card)
- [8.9 Transfer Create Wallet to Card](/docs/transfer-create-wallet-to-card)
- [8.10 Transfer Create Wallet Payment](/docs/transfer-create-wallet-payment)
- [8.11 Transfer Create Korea](/docs/transfer-create-korea)
- [8.13 Transfer Create Top-up RF banks card](/docs/transfer-create-topup-rf-banks)
