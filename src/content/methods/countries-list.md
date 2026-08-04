---
title: Countries list
order: 4
rpcMethod: countries.list
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "countries.list",
        "params": {}
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
        id: 1,
        method: 'countries.list',
        params: {},
      }),
    });
    const { result } = await response.json();
params:
  - name: jsonrpc
    type: string
    required: true
    desc: "JSON-RPC protokol versiyasi."
  - name: id
    type: "string | integer"
    required: true
    desc: "So'rov identifikatori."
  - name: method
    type: string
    required: true
    desc: "Metod nomi — bu holda \"countries.list\"."
  - name: params
    type: object
    required: true
    desc: "Bo'sh obyekt."
---

`countries.list` tizim qo'llab-quvvatlaydigan barcha mamlakatlar va
to'lov tizimlarini qaytaradi. Har bir mamlakat uchun ikkita savolga
javob beradi:

- Shu mamlakat kartalaridan pul yechish (**debit**) mumkinmi?
- Shu mamlakat kartalariga pul yuborish (**credit**) mumkinmi?

Va har bir operatsiya uchun — qaysi `service_code`dan foydalanish
kerakligini ko'rsatadi.

## Debit — kartadan pul yechish

`debit_enabled: true` bo'lsa, shu mamlakatda chiqarilgan kartalardan
mablag' yechib olish mumkin. Har bir debit yozuvida `service_code`
bor — shu kodni to'lov API'siga uzatib, yechib olish jarayonini
boshlaysiz.

## Credit — kartaga pul yuborish

`credit_enabled: true` bo'lsa, shu mamlakat kartalariga pul
to'ldirish yoki o'tkazish mumkin. Har bir credit yozuvida ham
`service_code` bor — uni pul yuborish uchun ishlatasiz.

## Service code nima

`service_code` — bitta aniq operatsiyani bildiruvchi noyob
identifikator. U karta tarmog'i, mamlakat va yo'nalishni (kiruvchi
yoki chiquvchi) belgilaydi. Shu javobdan olingan `service_code`ni
haqiqiy transfer endpoint'ini chaqirishda parametr sifatida
ishlatasiz.

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| `id` | string | Mamlakatning noyob identifikatori |
| `code` | string | Mamlakat yoki valyuta kodi (masalan, `"UZB"`, `"RUS"`) |
| `name` | string | O'qilishi oson mamlakat/tizim nomi |
| `debit_enabled` | boolean | Shu mamlakat uchun pul yechish mavjudmi |
| `credit_enabled` | boolean | Shu mamlakat uchun pul yuborish mavjudmi |
| `debit` | array | Mavjud debit xizmatlar ro'yxati (bo'sh, agar `debit_enabled` false bo'lsa) |
| `credit` | array | Mavjud credit xizmatlar ro'yxati |
| `service_code` | string | Keyingi so'rovlarda ishlatiladigan identifikator (masalan, `"V2S0005"`) |
| `service_name` | string | Xizmatning o'qilishi oson tavsifi |

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "id": 4,
      "code": "RUS",
      "name": "Russia",
      "debit_enabled": true,
      "credit_enabled": true,
      "debit": [
        {
          "service_code": "V2S0006",
          "service_name": "AFT Withdrawal Service for RF Cards"
        }
      ],
      "credit": [
        {
          "service_code": "V2S0011",
          "service_name": "Account to RF cards"
        }
      ]
    },
    {
      "id": 1,
      "code": "UZB",
      "name": "UZBEKISTAN",
      "debit_enabled": true,
      "credit_enabled": true,
      "debit": [
        {
          "service_code": "V2S0009",
          "service_name": "Withdrawing money from Uzcard cards via OTP verification"
        }
      ],
      "credit": [
        {
          "service_code": "V2S0005",
          "service_name": "Uzcard Account to card"
        }
      ]
    }
  ],
  "id": 1,
  "status": true,
  "origin": "countries.list"
}
```
