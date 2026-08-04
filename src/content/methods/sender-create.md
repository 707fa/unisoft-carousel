---
title: Sender create
order: 23
rpcMethod: sender.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 2,
        "method": "sender.create",
        "params": {
          "sender": {
            "phone": "99890***86708",
            "series": "AC0**288",
            "address": "5 th Avenue 1 34096 Fatih Istanbul",
            "last_name": "NARZULLAYEV",
            "first_name": "SHAsXBOZ",
            "birth_date": "2002-02-17",
            "birth_place": "Qarshi",
            "expire_date": "2028.02.03",
            "issuing_date": "2018.02.04"
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
        id: 2,
        method: 'sender.create',
        params: { sender: senderData },
      }),
    });
    const { result } = await response.json();
    // result.sender_id — keyingi so'rovlarda ishlatiladi
params:
  - name: phone
    type: string
    required: true
    desc: "Jo'natuvchining telefon raqami (xalqaro formatda, masalan +998901234567)."
  - name: series
    type: string
    required: true
    desc: "Jo'natuvchining pasport seriyasi va raqami (masalan, AB1234567)."
  - name: address
    type: string
    required: true
    desc: "Jo'natuvchining doimiy ro'yxatdan o'tgan manzili."
  - name: last_name
    type: string
    required: true
    desc: "Jo'natuvchining familiyasi (pasportdagidek)."
  - name: first_name
    type: string
    required: true
    desc: "Jo'natuvchining ismi (pasportdagidek)."
  - name: birth_date
    type: string
    required: true
    desc: "Tug'ilgan sana (YYYY-MM-DD formatida)."
  - name: birth_place
    type: string
    required: true
    desc: "Tug'ilgan joyi (pasportda ko'rsatilganidek)."
  - name: expire_date
    type: string
    required: true
    desc: "Pasport amal qilish muddati tugash sanasi (YYYY-MM-DD)."
  - name: issuing_date
    type: string
    required: true
    desc: "Pasport berilgan sana (YYYY-MM-DD)."
---

`sender.create` shaxsiy va pasport ma'lumotlarini (telefon, pasport
seriyasi, manzil, to'liq ism, tug'ilgan sana/joy, pasport berilgan
va tugash sanalari) yuborish orqali tizimda yangi jo'natuvchini
ro'yxatdan o'tkazadi.

Muvaffaqiyatli ro'yxatdan o'tkazilgandan so'ng, server noyob
**`sender_id`** qaytaradi — bu keyingi metodlarda (masalan,
`transfer.create`) jo'natuvchining shaxsiy ma'lumotlarini har safar
qayta yubormasdan, shu identifikator orqali murojaat qilish uchun
ishlatiladi.

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| `message` | string | Server qaytargan holat xabari (masalan, `"success"`) |
| `sender_id` | integer | Yangi yaratilgan jo'natuvchining noyob identifikatori |

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": {
    "message": "success",
    "sender_id": 54198
  },
  "id": 2,
  "status": true,
  "origin": "sender.create"
}
```
