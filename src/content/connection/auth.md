---
title: Autentifikatsiya va Digest
order: 2
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Header-Login: {{username}}' \
      --header 'Header-Sign: {{digest}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{access_token}}' \
      --data '{
        "jsonrpc": "2.0",
        "id": 111,
        "method": "transfer.create",
        "params": {
          "ext_id": "12",
          "number": "8600xxxx",
          "amount": 100000,
          "currency": 643
        }
      }'
  node: |
    const crypto = require('crypto');

    const secret = process.env.UNISOFT_SECRET;
    const body = JSON.stringify(requestPayload);

    const digest = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('base64');

    // So'rov headerlariga qo'shiladi:
    // Header-Sign: {digest}
    // Authorization: Bearer {access_token}
---

## Sarlavhalar (headers)

| Header | Qiymat | Izoh |
|---|---|---|
| `Authorization` | `Bearer {access_token}` | `login` metodidan qaytgan token |
| `Content-Type` | `application/json` | Gate faqat JSON so'rovlarga xizmat qiladi |
| `Accept` | `application/json` | Javob ham JSON formatida bo'ladi |
| `Header-Sign` | HMAC digest | Har bir so'rov uchun quyida tushuntirilgan tartibda hisoblanadi |

## Digest hisoblash tartibi

1. **Maxfiy kalit** — HMAC hisoblash uchun ishlatiladigan `secret`ni
   xavfsiz saqlang, hech kimga oshkor qilmang.
2. **HMAC hisoblash** — `secret` va so'rov tanasi (`request.body`)
   asosida SHA-256 orqali digest hisoblanadi.
3. **Base64 kodlash** — hisoblangan digest Base64 formatga o'tkaziladi.
4. **Header'ga qo'shish** — natija `Header-Sign` sarlavhasiga
   joylashtiriladi.

Digest noto'g'ri hisoblansa, so'rov autentifikatsiyadan o'tmaydi —
shuning uchun so'rov tanasi (`body`) digest hisoblangandan keyin
o'zgartirilmasligi kerak.
