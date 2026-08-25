---
title: Credit Create — Turkey Lira
order: 2
rpcMethod: transfer.credit.create_v2
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Header-Login: {{username}}' \
      --header 'Header-Sign: {{digest}}' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.credit.create_v2",
        "params": {
          "ext_id": "UN_PAY_82344",
          "amount": 10000,
          "currency": 949,
          "tr_type": "Transfer2IBAN",
          "reason": "HOME_RENT",
          "comment": "zur",
          "sender": {
            "currency": 643,
            "company": "False",
            "country_phone_code": 998,
            "first_name": "Pistonchi",
            "last_name": "Palonchayev",
            "birth_place": "Qarshi",
            "nationality": "UZ",
            "birth_date": "2002-02-17",
            "phone": 998904286708,
            "issuing_date": "2018.02.04",
            "expire_date": "2028.02.03",
            "address": "5 th Avenue 1 34096 Fatih Istanbul",
            "address_code": "TUR",
            "email": "perso_receivern@email.com",
            "series": "AC0****88"
          },
          "receiver": {
            "currency": 949,
            "receiver_account": "TR600**********1414",
            "first_name": "first_name",
            "last_name": "last_name",
            "phone": 905325671010
          }
        }
      }'
  node: |
    const response = await fetch(`https://${host}/api/v1/jsonrpc`, {
      method: 'POST',
      headers: {
        'Header-Login': username,
        'Header-Sign': digest,
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'transfer.credit.create_v2',
        params: {
          ext_id: 'UN_PAY_82344',
          amount: 10000,
          currency: 949,
          tr_type: 'Transfer2IBAN',
          reason: 'HOME_RENT',
          comment: 'zur',
          sender: {
            currency: 643,
            company: 'False',
            country_phone_code: 998,
            first_name: 'Pistonchi',
            last_name: 'Palonchayev',
            birth_place: 'Qarshi',
            nationality: 'UZ',
            birth_date: '2002-02-17',
            phone: 998904286708,
            issuing_date: '2018.02.04',
            expire_date: '2028.02.03',
            address: '5 th Avenue 1 34096 Fatih Istanbul',
            address_code: 'TUR',
            email: 'perso_receivern@email.com',
            series: 'AC0****88',
          },
          receiver: {
            currency: 949,
            receiver_account: 'TR600**********1414',
            first_name: 'first_name',
            last_name: 'last_name',
            phone: 905325671010,
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
    desc: "Amount in minor units (TRY in tiyins). Must be a positive integer."
  - name: currency
    type: integer
    required: true
    desc: "Currency code: 949 (TRY). The transfer is always created in Turkish Lira."
  - name: tr_type
    type: string
    required: true
    desc: "Transfer type. Accepts: Transfer2IBAN."
  - name: reason
    type: string
    required: true
    desc: "Transfer reason key from reason.all (e.g. HOME_RENT)."
  - name: comment
    type: string
    required: false
    desc: "Free-form comment for the transfer."
  - name: sender
    type: object
    required: true
    desc: "Sender KYC details (see below)."
  - name: sender.currency
    type: integer
    required: true
    desc: "Currency of the sender's account to debit: 643 (RUB), 860 (UZS) or 840 (USD)."
  - name: sender.company
    type: string
    required: true
    desc: "\"False\" for individuals (currently only individuals are supported)."
  - name: sender.country_phone_code
    type: integer
    required: true
    desc: "Sender's country phone code (e.g. 998)."
  - name: sender.first_name
    type: string
    required: true
    desc: "Sender's given name (as on ID)."
  - name: sender.last_name
    type: string
    required: true
    desc: "Sender's surname (as on ID)."
  - name: sender.birth_place
    type: string
    required: true
    desc: "Sender's place of birth."
  - name: sender.nationality
    type: string
    required: true
    desc: "ISO-3166-1 alpha-2, e.g. \"UZ\"."
  - name: sender.birth_date
    type: string
    required: true
    desc: "Date of birth in YYYY-MM-DD format."
  - name: sender.phone
    type: string
    required: true
    desc: "Sender's phone number in E.164 format."
  - name: sender.issuing_date
    type: string
    required: true
    desc: "ID issuing date, YYYY.MM.DD."
  - name: sender.expire_date
    type: string
    required: true
    desc: "ID expiry date, YYYY.MM.DD."
  - name: sender.address
    type: string
    required: true
    desc: "Sender's full address."
  - name: sender.address_code
    type: string
    required: true
    desc: "Country code of address (ISO-3166-1 alpha-3, e.g. TUR)."
  - name: sender.email
    type: string
    required: true
    desc: "Sender's email."
  - name: sender.series
    type: string
    required: true
    desc: "Passport / ID document number."
  - name: receiver
    type: object
    required: true
    desc: "Beneficiary account details (see below)."
  - name: receiver.currency
    type: integer
    required: true
    desc: "Beneficiary currency code: 949 (TRY)."
  - name: receiver.receiver_account
    type: string
    required: true
    desc: "Turkish IBAN of the beneficiary account."
  - name: receiver.first_name
    type: string
    required: true
    desc: "Beneficiary's given name."
  - name: receiver.last_name
    type: string
    required: true
    desc: "Beneficiary's surname."
  - name: receiver.phone
    type: integer
    required: true
    desc: "Beneficiary's phone number in E.164 format."
---

`transfer.credit.create_v2` creates a transfer to a Turkish IBAN in Turkish Lira
(TRY). It is functionally identical to `transfer.credit.create`, and the response
structure is the same — the only difference is currency handling inside the
`sender` object.

The transfer is **always created in Turkish Lira**, so `currency` in `params`
must be `949` (TRY). The `sender.currency` field then specifies the currency of
the account from which funds will actually be debited.

> ⚠️ **Debit currency** — the source amount is deducted according to
> `sender.currency`:
> - `643` → debited in **RUB**
> - `860` → debited in **UZS**
> - `840` → debited in **USD**

## Response Fields

| Field | Type | Description |
|---|---|---|
| `ext_id` | string | Partner's external ID (echoed back) |
| `state` | integer | Transfer state code. 0 = CREATED |
| `number` | string | Transfer type echo (e.g. "Transfer2IBAN") |
| `description` | string | Human-readable status/processor message |
| `amount` | number | Debited amount in the source currency (`sender.currency`) |
| `currency` | integer | Source (debit) currency code |
| `credit_amount` | number | Credited amount in destination currency after FX |
| `credit_currency` | integer | Destination currency code (949 = TRY) |
| `commission` | integer \| null | Commission charged for this transfer |
| `account` | array | Beneficiary account presentation (masked + labels) |
| `payment.rate` | number | FX rate applied to the transfer |

## Sample response (sender.currency = 643)

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "UN_PAY_82344",
    "state": 0,
    "number": "Transfer2IBAN",
    "description": "Created",
    "amount": 19100,
    "currency": 643,
    "credit_amount": 10000,
    "credit_currency": 949,
    "commission": null,
    "account": [
      {
        "name": "account",
        "title": {
          "ru": "Счёт получателя",
          "en": "Receiver account",
          "uz": "Qabul qiluvchi hisob"
        },
        "mask": "TR6000****************1414",
        "number": null
      }
    ],
    "payment": {
      "ref_num": null,
      "rate": 42.5963
    }
  },
  "id": 1,
  "status": true,
  "request_id": 1,
  "origin": "transfer.credit.create_v2",
  "host": {
    "host": "Turkia",
    "timestamp": "2025-12-22 10:48:21.783316"
  }
}
```
