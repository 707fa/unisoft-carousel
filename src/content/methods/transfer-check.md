---
title: Transfer check
order: 6
rpcMethod: transfer.check
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.check",
        "params": {
          "number": "9105205279986",
          "service_code": "V2S0016"
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
        id: 1,
        method: 'transfer.check',
        params: {
          number: '9105205279986',
          service_code: 'V2S0016',
        },
      }),
    });
    const { result } = await response.json();
params:
  - name: number
    type: string
    required: true
    desc: "Karta raqami yoki qabul qiluvchining telefon raqami."
  - name: service_code
    type: string
    required: true
    desc: "Noyob xizmat kodi."
---

Transfer boshlashdan **oldin** karta yoki telefon raqami haqidagi
ma'lumotni oladi. Bu metod **hech qanday validatsiya qilmaydi** — u
faqat berilgan raqam haqida mavjud ma'lumotni qaytaradi.

## Bu metod nima uchun kerak

- Karta egasining ismini yoki telefon egasini olish
- Foydalanuvchiga maskalangan karta/telefon raqamini ko'rsatish
- Raqamga bog'liq hisob ma'lumotlarini ko'rsatish
- Olingan ma'lumot bilan transfer formasini oldindan to'ldirish

Ushbu metod hech qanday validatsiya yoki tranzaksiya qayta ishlashni
amalga oshirmaydi — u faqat berilgan xizmat kontekstida raqam haqida
ma'lumot beruvchi (informational) qiymat qaytaradi.

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| `number` | string | Karta yoki telefon raqami |
| `owner` | string \| null | To'liq ism (agar mavjud bo'lsa) |
| `is_corporate` | boolean | Karta turi — korporativmi yoki yo'q |
| `state` | integer | Karta holati |
| `bank` | string | Kartaga tegishli bank nomi |

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": {
    "number": "902333614",
    "owner": null,
    "is_corporate": false,
    "state": 0,
    "bank": "МАХМУДЧОН А. М."
  },
  "id": 1,
  "status": true,
  "origin": "transfer.check"
}
```
