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
    desc: "Sizning tizimingizdagi operatsiyaning noyob tashqi identifikatori."
  - name: amount
    type: integer
    required: true
    desc: "O'tkazma summasi (eng kichik valyuta birligida — tiyin/kopekda)."
  - name: currency
    type: string
    required: true
    desc: "ISO 4217 valyuta kodi."
  - name: service_code
    type: string
    required: true
    desc: "services yoki countries.list javobidan olingan xizmat kodi."
  - name: sender_id
    type: integer
    required: true
    desc: "sender.create metodidan qaytgan jo'natuvchi identifikatori."
  - name: fields
    type: object
    required: true
    desc: "Tanlangan xizmatga xos maydonlar (pastga qarang)."
---

`transfer.create` tanlangan xizmat uchun pul o'tkazmasi yoki to'lov
operatsiyasini yaratadi. Har bir xizmat turlicha input maydonlarini
talab qilishi mumkin — majburiy va ixtiyoriy maydonlar `services`
metodi javobidan dinamik ravishda olinishi kerak.

> ⚠️ **Muhim qoida:** `fields` obyekti faqat tanlangan xizmatda
> aniqlangan parametrlarni o'z ichiga olishi kerak. `services`
> javobidagi har bir maydon `name` atributiga ega — aynan shu
> qiymatlar `transfer.create`dagi `params.fields` ichida kalit
> sifatida ishlatilishi kerak.

## Ikki bosqichli jarayon

**1-qadam: Xizmat maydonlarini olish**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "services",
  "params": { "provider_id": 8 }
}
```

Javobdagi `fields` massivi qanday maydonlar kerakligini ko'rsatadi:

```json
{
  "fields": [
    { "name": "to_card_number", "is_required": true },
    { "name": "ref_id", "is_required": false }
  ]
}
```

**2-qadam: Shu maydonlar bilan transfer yaratish** — yuqoridagi kod
namunasidagi so'rovni yuboring.

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| `ext_id` | string | Operatsiyaning tashqi identifikatori |
| `state` | integer | Operatsiya holati ([holatlar jadvali](/docs/transfer-state)ga qarang) |
| `description` | string | Holat tavsifi |
| `amount` | integer | Summa (tiyin aniqligida) |
| `currency` | string | Kredit valyutasi |
| `commission` | float | Hisoblangan komissiya |
| `cr_amount` / `cr_currency` | integer / string | Qabul qiluvchi valyutasidagi summa va kodi |
| `form_url` | string \| null | Qo'shimcha to'lov formasi uchun URL (ba'zi xizmatlarda) |
| `account` | array | Qabul qiluvchi hisob ma'lumotlari |
| `payment.ref_num` | string | Protsessing markazidagi (Uzcard, Humo, Visa) mos yozuv identifikatori |
| `id` | string | Operatsiyaning to'lov identifikatori — RRN |

## Namuna javob

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

## Xizmat turiga xos variantlar

`fields` obyektining tarkibi tanlangan xizmatga qarab farq qiladi.
Quyida eng ko'p ishlatiladigan xizmat turlari uchun alohida
sahifalar — har birida o'ziga xos `fields` va namuna so'rov keltirilgan:

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
