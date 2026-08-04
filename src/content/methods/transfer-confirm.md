---
title: Transfer Confirm
order: 21
rpcMethod: transfer.confirm
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": "{{$randomUUID}}",
        "method": "transfer.confirm",
        "params": {
          "ext_id": "{{ext_id}}"
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
        method: 'transfer.confirm',
        params: { ext_id: extId },
      }),
    });
    const { result } = await response.json();
params:
  - name: ext_id
    type: string
    required: true
    desc: "transfer.create'da ishlatilgan tashqi operatsiya identifikatori."
---

`transfer.confirm` avval yaratilgan o'tkazmani yakunlaydi va
tasdiqlaydi. Bu metod mijoz tasdiqlash bosqichini (masalan, 3-D
Secure yoki tashqi to'lov sahifasi) muvaffaqiyatli tugatgandan
**keyin** chaqirilishi kerak.

Tasdiqlangandan so'ng, tizim o'tkazmani qayta ishlaydi va yakuniy
holatni yangilaydi.

## Qachon ishlatiladi

`transfer.confirm`ni faqat quyidagi holatda chaqiring:

- `transfer.create` `state = 0` (Created) qaytargan bo'lsa

Bu metod chekni tasdiqlaydi va mijoz kartasidan mablag'ni yechadi.

## Namuna javob

Javob tuzilishi `transfer.create` javobi bilan bir xil:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "kg_test_104",
    "state": 4,
    "description": "Success",
    "amount": 10000,
    "currency": "643",
    "commission": 0,
    "cr_amount": 1172,
    "cr_currency": "972",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "505827******0789"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-012026091545-3ba5df06-54eb-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.confirm"
}
```

`state: 4` — bu operatsiya muvaffaqiyatli yakunlanganini bildiradi
([holatlar jadvali](/docs/transfer-state)ga qarang).
