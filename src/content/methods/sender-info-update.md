---
title: Sender info va Update
order: 24
codeExamples:
  curl: |
    # Sender info
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 2,
        "method": "sender.info",
        "params": { "sender_id": 54198 }
      }'
  node: |
    # Sender update
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "sender.update",
        "params": {
          "sender_id": 848,
          "data": {
            "series": "ab0000000",
            "phone": "998901234567"
          }
        }
      }'
params:
  - name: sender_id
    type: integer
    required: true
    desc: "Mavjud jo'natuvchining tizimdagi identifikatori."
  - name: data
    type: object
    required: false
    desc: "Faqat sender.update uchun: yangilanadigan maydonlar obyekti (bo'sh bo'lmasligi kerak)."
---

## Sender info — `sender.info`

Ilgari ro'yxatdan o'tgan jo'natuvchining shaxsiy va pasport
ma'lumotlarini `sender_id` orqali oladi. Bu chaqiruvchi tomonga
jo'natuvchi ma'lumotlarini (telefon, pasport ma'lumotlari, ism,
tug'ilgan sana va h.k.) qayta yubormasdan tekshirish yoki ko'rsatish
imkonini beradi.

## Sender update — `sender.update`

Mavjud jo'natuvchining saqlangan ma'lumotlarini `sender_id` orqali
o'zgartiradi. Faqat `data` obyekti ichida uzatilgan maydonlar
yangilanadi — kiritilmagan maydonlar o'zgarishsiz qoladi.

`data` obyekti faqat quyidagi maydonlarni qabul qiladi:

- `phone`, `series`, `address`, `last_name`, `first_name`,
  `birth_date`, `birth_place`, `expire_date`, `issuing_date`

> ⚠️ Ushbu ro'yxatdan tashqari har qanday (noma'lum) maydon nomi
> so'rovning muvaffaqiyatsiz bo'lishiga olib keladi.

Bu metod yangi jo'natuvchi yozuvi yaratmasdan, mavjud
ma'lumotlarni tuzatish yoki yangilash uchun ishlatiladi.
