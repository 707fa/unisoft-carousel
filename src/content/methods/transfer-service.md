---
title: Transfer Service
order: 5
rpcMethod: transfer.service
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.service",
        "params": {
          "sender_codes": ["V2S0005"]
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
        method: 'transfer.service',
        params: { sender_codes: ['V2S0005'] },
      }),
    });
    const { result } = await response.json();
params:
  - name: sender_codes
    type: array
    required: true
    desc: "countries.list javobidan olingan service_code qiymatlari massivi."
---

`transfer.service` bir yoki bir nechta `service_code` bo'yicha
xizmatning to'liq konfiguratsiyasini qaytaradi. Transfer yaratishdan
oldin shu metod chaqirilib, qaysi maydonlar talab qilinishi, summa
chegaralari va qaysi valyuta ishlatilishi aniqlanadi.

Buni shunday tushuning: *"countries.list'dan olingan service_code'ni
menga bering, men esa transferni bajarish uchun to'ldirilishi kerak
bo'lgan hamma narsani aytib beraman."*

## Asosiy tushunchalar

- **`sender_codes`** — `countries.list`dan olingan service kodlar
  massivi. Javobda har bir xizmat uchun to'liq konfiguratsiya
  qaytadi: chegaralar, valyuta, kerakli input maydonlar.
- **`fields`** — foydalanuvchi transferni bajarishdan oldin
  to'ldirishi kerak bo'lgan maydonlar ro'yxati. Masalan, `V2S0005`
  (Uzcard to'ldirish) uchun qabul qiluvchining karta raqami yoki
  telefon raqami (`account`) kerak bo'ladi.
- **`is_3ds`** — xizmat 3-D Secure autentifikatsiyasini talab
  qilishini bildiradi. `true` bo'lsa, jo'natuvchi kartasi qo'shimcha
  tekshiruvdan o'tadi.
- **`currency`** — ISO 4217 raqamli formatdagi valyuta kodi. `860` —
  O'zbek so'mi (UZS).

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| `id` | integer | Ichki xizmat identifikatori |
| `provider_id` / `provider` | integer / string | Provayder identifikatori va nomi (masalan, `"Uzcard"`) |
| `name_uz` / `name_ru` / `name_en` | string | Xizmat nomi tillar bo'yicha |
| `type` | string | `credit` — kartaga pul yuborish, `debit` — kartadan pul yechish |
| `min_amount` / `max_amount` | integer | Eng kichik valyuta birligidagi (tiyin) chegaralar |
| `currency` | string | ISO 4217 raqamli valyuta kodi |
| `code` | string | `sender_codes`da uzatilgan qiymatga mos service kodi |
| `is_3ds` | boolean | 3-D Secure talab qilinishini bildiradi |
| `fields` | array | Transferdan oldin foydalanuvchidan olinadigan maydonlar |
| `response_fields` | array | Bajarilgandan keyin qaytadigan qo'shimcha maydonlar |

### `fields` massividagi har bir obyekt

| Maydon | Turi | Tavsif |
|---|---|---|
| `name` | string | Transferni yuborishda ishlatiladigan kalit (masalan, `"account"`) |
| `label_uz` / `label_ru` / `label_en` | string | Ko'rsatiladigan nom (tillar bo'yicha) |
| `type` | string | Kiritish turi (`"string"`, `"number"` va h.k.) |
| `is_required` | boolean | Majburiy to'ldirilishi kerakligini bildiradi |
| `order` | integer | UI'da ko'rsatilish tartibi — kichik son avval chiqadi |
| `regex` | string | Yuborishdan oldin mos kelishi kerak bo'lgan validatsiya shabloni |

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": {
    "services": [
      {
        "id": 5,
        "provider_id": 5,
        "provider": "Uzcard",
        "name_en": "Uzcard Account to card",
        "type": "credit",
        "min_amount": 100000,
        "max_amount": 2000000000,
        "currency": "860",
        "code": "V2S0005",
        "is_3ds": false,
        "fields": [
          {
            "id": 30,
            "name": "account",
            "label_en": "recipient card or phone number",
            "type": "string",
            "is_required": true,
            "order": 0,
            "regex": "^.+$"
          }
        ],
        "response_fields": []
      }
    ]
  },
  "id": 1,
  "status": true,
  "origin": "transfer.service"
}
```
