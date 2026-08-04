---
title: Transfer State
order: 22
rpcMethod: transfer.state
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": "{{$randomUUID}}",
        "method": "transfer.state",
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
        method: 'transfer.state',
        params: { ext_id: extId },
      }),
    });
    const { result } = await response.json();
params:
  - name: ext_id
    type: string
    required: true
    desc: "Holati tekshirilayotgan operatsiyaning tashqi identifikatori."
---

`transfer.state` o'tkazmaning yakuniy holatini oladi. Bu hamkor
tizimga tranzaksiya muvaffaqiyatli yakunlangan, muvaffaqiyatsiz
bo'lgan, bekor qilingan yoki hali jarayonda ekanini tekshirish
imkonini beradi.

Bu metod ayniqsa o'tkazma `form_url` orqali qayta ishlanganda va
yakuniy natija darhol mavjud bo'lmaganda foydalidir.

## Qachon ishlatiladi

`transfer.state`ni quyidagi holatlarda ishlating:

- O'tkazma `transfer.create` orqali yaratilgan bo'lsa
- Javobda `form_url` qaytgan bo'lsa
- Yakuniy holat callback orqali kelmagan bo'lsa
- Hamkor tranzaksiya holatini so'rov (poll) qilishi kerak bo'lsa

## Namuna javob

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
  "origin": "transfer.state"
}
```

## Operatsiya holatlari (`state`)

| Holat | Tavsif |
|---|---|
| `-98` | Yaratilmagan |
| `0` | Yaratilgan (Created) |
| `4` | Muvaffaqiyatli (Success) |
| `21` | Bekor qilingan (Cancel) |
| `22` | Chek muddati tugagan |
| `29`, `30` | Jarayonda (In progress) |
| `33` | Tranzaksiya xatoligi |
