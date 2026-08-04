---
title: Transfer create — Korea
order: 19
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "korea_test_11",
          "amount": 4100000,
          "currency": "860",
          "service_code": "V2S0016",
          "sender_id": 1,
          "fields": {
            "account": "91052****9986",
            "receiver_phone": "+821034010805",
            "receiver_first_name": "Shahzoda",
            "receiver_last_name": "Mamajonova",
            "relation": "11263",
            "source_of_fund": "11045",
            "id_type": "8008",
            "bank": "037",
            "transfer_reason": "11109"
          }
        }
      }'
params:
  - name: fields.account
    type: string
    required: true
    desc: "Qabul qiluvchining hisob raqami."
  - name: fields.receiver_phone
    type: string
    required: true
    desc: "Qabul qiluvchining telefon raqami."
  - name: fields.receiver_first_name
    type: string
    required: true
    desc: "Qabul qiluvchining ismi."
  - name: fields.receiver_last_name
    type: string
    required: true
    desc: "Qabul qiluvchining familiyasi."
  - name: fields.relation
    type: string
    required: true
    desc: "Jo'natuvchi va qabul qiluvchi orasidagi munosabat kodi."
  - name: fields.source_of_fund
    type: string
    required: true
    desc: "Mablag' manbai kodi."
  - name: fields.id_type
    type: string
    required: true
    desc: "Hujjat turi kodi."
  - name: fields.bank
    type: string
    required: true
    desc: "Bank kodi."
  - name: fields.transfer_reason
    type: string
    required: true
    desc: "O'tkazma sababi kodi."
---

Janubiy Koreya banklariga pul o'tkazish — eng ko'p tartibga solingan
(compliance) xizmat turlaridan biri, chunki mablag' manbai, hujjat
turi va o'tkazma sababi kabi qo'shimcha kodlar talab qilinadi.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan. `relation`, `source_of_fund`, `id_type` va
`transfer_reason` kodlarining to'liq ro'yxatini hamkorlik shartnomasi
doirasida so'rang.

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "korea_test_111",
    "state": 0,
    "description": "Created",
    "amount": 4100000,
    "currency": "860",
    "rate": null,
    "commission": 0,
    "cr_amount": 521678,
    "cr_currency": "KRW",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "910520******9986"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060826090205-34addaf5-ed65-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
```
