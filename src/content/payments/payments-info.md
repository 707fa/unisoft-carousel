---
title: Info
order: 4
rpcMethod: transfer.info
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Authorization: Bearer {{access_token}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.info",
        "params": {
            "service_code": "V2S0013",
            "service_id": 3533,
            "fields": {
                "clientid": "935989900"
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
        id: 1,
        method: 'transfer.info',
        params: {
          service_code: 'V2S0013',
          service_id: 3533,
          fields: { clientid: '935989900' },
        },
      }),
    });
    const { result } = await response.json();
params:
  - name: jsonrpc
    type: String
    required: true
    desc: "JSON-RPC protocol version."
  - name: method
    type: String
    required: true
    desc: "transfer.info"
  - name: id
    type: "String | Integer"
    required: true
    desc: "Request id."
  - name: params
    type: Object
    required: true
    desc: "Payment parameters."
  - name: service_code
    type: String
    required: true
    desc: "Service Code."
  - name: service_id
    type: Integer
    required: true
    desc: "Service ID."
  - name: fields
    type: Objects
    required: true
    desc: "Fields."
---

`transfer.info` runs the **create service** (info / receiver-check) of a Paynet
provider — it validates the receiver and returns the cheque preview before the
payment itself is created.

## Response

```json
{
    "jsonrpc": "2.0",
    "result": {
        "transaction_id": "32511484056",
        "status_text": "Проведен успешно",
        "status": "0",
        "time": 1778583693000,
        "response": [
            {
                "key": "agent_name",
                "label_ru": "Агент",
                "label_uz": "Agent",
                "value": "АТБ \"Универсал банк\" E-POS (АТБ \"Универсал банк\" Тошкент филиали) Universal"
            },
            {
                "key": "agent_inn",
                "label_ru": "ИНН",
                "label_uz": "STIR",
                "value": "203556638"
            },
            {
                "key": "provider_name",
                "label_ru": "Оператор",
                "label_uz": "Operator",
                "value": "UCell"
            },
            {
                "key": "service_name",
                "label_ru": "Услуга",
                "label_uz": "Xizmat turi",
                "value": "Проверка номера"
            },
            {
                "key": "time",
                "label_ru": "Время",
                "label_uz": "To'lov vaqti",
                "value": "12.05.2026 16:01:33"
            },
            {
                "key": "terminal_id",
                "label_ru": "Номер терминала",
                "label_uz": "Terminal raqami",
                "value": "4152394"
            },
            {
                "key": "transaction_id",
                "label_ru": "Номер чека",
                "label_uz": "Chek raqami",
                "value": "32511484056"
            },
            {
                "key": "clientid",
                "label_ru": "Номер телефона",
                "label_uz": "Telefon raqami",
                "value": "935989900"
            },
            {
                "key": "check_status",
                "label_ru": "Статус номера",
                "label_uz": "Raqam statusi",
                "value": null
            },
            {
                "key": "agent_commission",
                "label_ru": "Комиссия агента",
                "label_uz": "Agent komissiyasi",
                "value": "0"
            }
        ]
    },
    "id": 1,
    "status": true,
    "origin": "transfer.info",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-05-12 16:01:33.951271"
    }
}
```
