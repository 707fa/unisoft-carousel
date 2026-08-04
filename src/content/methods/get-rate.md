---
title: Get Rate
order: 7
rpcMethod: get.rate.v2
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "get.rate.v2",
        "params": {
          "service_code": "V2S0007"
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
        method: 'get.rate.v2',
        params: { service_code: 'V2S0007' },
      }),
    });
    const { result } = await response.json();
params:
  - name: service_code
    type: string
    required: true
    desc: "Kurs so'ralayotgan xizmatning noyob kodi."
---

Tanlangan xizmat uchun valyuta ayirboshlash kurslarini qaytaradi.
`get.rate.v2` shu xizmatga tegishli barcha mavjud konversiya
kurslarini beradi.

## Bu metod nima uchun kerak

- Xizmat kodi bo'yicha ayirboshlash kurslarini olish
- Asosiy va ikkinchi darajali konversiya kurslarini aniqlash
- Valyuta konversiya qoidalari asosida tranzaksiya summasini hisoblash

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| `transaction_type` | string | Tranzaksiya turi (`credit` / `debit`) |
| `is_primary` | boolean | Kurs asosiy hisoblanishini bildiradi |
| `currency` | string | Manba valyuta (ISO 4217 raqamli kod) |
| `target_currency` | string | Maqsad valyuta (ISO 4217 raqamli kod) |
| `operator` | string | Kursni hisoblash operatori (`multiply`, `divide`) |
| `value` | number | Ayirboshlash kursining qiymati |

## Namuna javob

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "transaction_type": "credit",
      "is_primary": true,
      "currency": "972",
      "target_currency": "860",
      "operator": "multiply",
      "value": 1343.35
    },
    {
      "transaction_type": "credit",
      "is_primary": true,
      "currency": "972",
      "target_currency": "643",
      "operator": "multiply",
      "value": 8.58
    }
  ],
  "id": 1,
  "status": true,
  "origin": "get.rate.v2"
}
```

Yakuniy summani hisoblash uchun `value`ni `operator`ga qarab manba
summasiga ko'paytiring (`multiply`) yoki bo'ling (`divide`).
