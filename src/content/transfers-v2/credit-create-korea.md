---
title: Credit Create — Korea
order: 1
rpcMethod: transfer.credit.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --header 'Accept: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": "{{$randomInt}}",
        "method": "transfer.credit.create",
        "params": {
          "ext_id": "test_{{$randomUUID}}",
          "amount": 1000,
          "currency": 840,
          "sender": {
            "transfer_reason": "3109",
            "fund_source": "11111",
            "first_name": "Shaxboz",
            "last_name": "Narzullayev",
            "native_country": "UZ",
            "city": "TASHKENT",
            "address": "CHILANZAR",
            "id_type": "34544",
            "id_number": "1124444233",
            "mobile": "+998904286708"
          },
          "receiver": {
            "bank": "222",
            "account_no": "23435236346",
            "relation": "2122",
            "first_name": "Siroj",
            "last_name": "Sirojov",
            "mobile": "+823784873587",
            "native_country": "KR"
          }
        }
      }'
  node: |
    const response = await fetch(`https://${host}/api/v1/jsonrpc`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: randomInt(),
        method: 'transfer.credit.create',
        params: {
          ext_id: `test_${crypto.randomUUID()}`,
          amount: 1000,
          currency: 840,
          sender: {
            transfer_reason: '3109',
            fund_source: '11111',
            first_name: 'Shaxboz',
            last_name: 'Narzullayev',
            native_country: 'UZ',
            city: 'TASHKENT',
            address: 'CHILANZAR',
            id_type: '34544',
            id_number: '1124444233',
            mobile: '+998904286708',
          },
          receiver: {
            bank: '222',
            account_no: '23435236346',
            relation: '2122',
            first_name: 'Siroj',
            last_name: 'Sirojov',
            mobile: '+823784873587',
            native_country: 'KR',
          },
        },
      }),
    });
    const { result } = await response.json();
params:
  - name: ext_id
    type: string
    required: true
    desc: "Partner's unique external ID for this operation. Must be unique per partner."
  - name: amount
    type: integer
    required: true
    desc: "Amount in minor units (UZS in tiyins, USD in cents). Must be a positive integer."
  - name: currency
    type: integer
    required: true
    desc: "Currency code: 860 (UZS) or 840 (USD)."
  - name: sender
    type: object
    required: true
    desc: "Sender KYC details (see below)."
  - name: receiver
    type: object
    required: true
    desc: "Beneficiary (South Korea) account details (see below)."
  - name: sender.transfer_reason
    type: string
    required: true
    desc: "Key from enum.list.transferReason."
  - name: sender.fund_source
    type: string
    required: true
    desc: "Key from enum.list.sourceOfFund."
  - name: sender.first_name
    type: string
    required: true
    desc: "Sender's given name (as on ID)."
  - name: sender.last_name
    type: string
    required: true
    desc: "Sender's surname (as on ID)."
  - name: sender.native_country
    type: string
    required: true
    desc: "ISO-3166-1 alpha-2, e.g. \"UZ\"."
  - name: sender.city
    type: string
    required: true
    desc: "Sender's city of residence."
  - name: sender.address
    type: string
    required: true
    desc: "Sender's full address."
  - name: sender.id_type
    type: string
    required: true
    desc: "Key from enum.list.idType."
  - name: sender.id_number
    type: string
    required: true
    desc: "Document number matching id_type."
  - name: sender.mobile
    type: string
    required: true
    desc: "Sender's phone in E.164 format (e.g. +998…)."
  - name: receiver.bank
    type: string
    required: true
    desc: "Korean bank key from enum.list.bank (e.g. \"002\" for KDB)."
  - name: receiver.account_no
    type: string
    required: true
    desc: "Beneficiary local KR account number. Digits only, no separators if possible."
  - name: receiver.relation
    type: string
    required: true
    desc: "Relationship key from enum.list.relation."
  - name: receiver.first_name
    type: string
    required: true
    desc: "Beneficiary given name."
  - name: receiver.last_name
    type: string
    required: true
    desc: "Beneficiary surname."
  - name: receiver.mobile
    type: string
    required: true
    desc: "Beneficiary phone in E.164 format (e.g. +82…)."
  - name: receiver.native_country
    type: string
    required: true
    desc: "Beneficiary country (ISO-3166-1 alpha-2, e.g. \"KR\")."
---

`transfer.credit.create` creates a GME credit cheque to remit from Uzbekistan
cards (Uzcard / Humo) to South Korea KRW bank accounts. The beneficiary is
identified by a Korean bank code (`bank`) plus an account number (`account_no`).

State `0` (**CREATED**) means the cheque is created — funds are not moved yet.
Call [Credit Confirm](#) to credit KRW to the recipient, then poll the credit
state until the transfer reaches a final state.

> ⚠️ **Notes**
> - `bank`, `relation`, `transfer_reason`, `id_type` values come from `enum.list`.
> - `currency` = 860 (UZS) or 840 (USD), in minor units (tiyins / cents).
> - FX uses USD→KRW / UZS→KRW rates from `service.info`.
> - Funds can be credited only to **official** Korean bank accounts. Virtual
>   accounts (15 digits) cannot receive funds directly.
> - If the credited amount exceeds **1,000,000 KRW**, the recipient must first be
>   registered in the GME mobile application in Korea.

## Response Fields

| Field | Type | Description |
|---|---|---|
| `ext_id` | string | Partner's external ID (echoed back) |
| `state` | integer | Transfer state code. 0 = CREATED |
| `number` | string | Beneficiary account number (convenience echo) |
| `description` | object \| string | Human-readable status/processor message (may be null) |
| `amount` | number | Debited amount in the source currency (as processed) |
| `currency` | integer | Source currency code (840 = USD, 860 = UZS) |
| `credit_amount` | number | Credited amount in destination currency after FX |
| `credit_currency` | string | Destination currency code (e.g. KRW) |
| `commission` | integer | Commission charged for this transfer (source currency) |
| `account` | array | Beneficiary account presentation (masked + labels) |
| `payment.ref_num` | string | Processor / reference number for the payment |
| `payment.id` | string \| null | Internal payment ID (may be null if not issued yet) |

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "test_3f9eaa2**********0ae500272b42",
    "state": 0,
    "number": "1003453t4t2934677",
    "description": "IB1055:send transaction success",
    "amount": 10.0,
    "currency": 840,
    "credit_amount": 13766.6,
    "credit_currency": "KRW",
    "commission": 0.0,
    "account": [
      {
        "name": "account",
        "title": {
          "ru": "Счёт получателя",
          "en": "Receiver account",
          "uz": "Qabul qiluvchi hisob"
        },
        "mask": "100226***4677",
        "number": "1002262934677"
      }
    ],
    "payment": {
      "ref_num": "70444444562410",
      "id": null
    }
  },
  "id": 95
}
```
