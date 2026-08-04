---
title: Ulanish
order: 1
codeExamples:
  curl: |
    POST https://{{host}}/api/v1/jsonrpc
---

Barcha so'rovlar **bitta endpoint**ga yuboriladi. Qaysi amal
bajarilishi so'rov tanasidagi `method` maydoni orqali belgilanadi —
bu **JSON-RPC 2.0** protokoli.

## So'rov formati

```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "method": "name",
  "params": {
    "key": "value"
  }
}
```

| Maydon | Turi | Tavsif |
|---|---|---|
| `jsonrpc` | string | Har doim `"2.0"` |
| `id` | string/integer | So'rov identifikatori (uuid yoki `kompaniya_vaqt` tavsiya etiladi) |
| `method` | string | Chaqirilayotgan metod nomi |
| `params` | object | Metodga tegishli parametrlar |

## Muvaffaqiyatli javob

```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "status": true,
  "origin": "login",
  "result": { "message": {} },
  "host": {
    "host": "visa.unired.uz",
    "time_stamp": "2020-01-20 11:59:59"
  }
}
```

## Xatolik javobi

```json
{
  "jsonrpc": "2.0",
  "status": false,
  "origin": "login",
  "error": {
    "code": 401,
    "message": {}
  },
  "id": null
}
```

`status: false` bo'lganda javobda `error.code` va `error.message`
maydonlari bo'ladi — `message` odatda `uz`, `ru`, `en` tillarida
qaytadi.
