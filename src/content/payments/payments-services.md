---
title: Services
order: 3
rpcMethod: paynet.services
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Authorization: Bearer {{access_token}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "paynet.services",
        "params": {
            "provider_id": 44
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
        method: 'paynet.services',
        params: { provider_id: 44 },
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
    desc: "paynet.services"
  - name: id
    type: "String | Integer"
    required: true
    desc: "Request id."
  - name: params
    type: Object
    required: true
    desc: "Payment parameters."
  - name: provider_id
    type: Integer
    required: true
    desc: "Provider ID."
---

An operation under a provider. A provider usually has two services:

- **Create service** (info / receiver-check) — `min_amount = max_amount =
  service_price = 0` and `type_id != 1`. Used to validate the receiver before
  payment.
- **Confirm service** (perform payment) — at least one of `min_amount`,
  `max_amount`, `service_price` is positive, or `type_id = 1`.

## Response

```json
{
    "jsonrpc": "2.0",
    "result": {
        "id": 44,
        "title": "OOO “COSCOM”",
        "title_short": "UCell",
        "services": [
            {
                "id": 104,
                "title_ru": "Оплата",
                "title_uz": "To'lov",
                "type_id": 1,
                "min_amount": 500,
                "max_amount": 500000,
                "service_price": 0,
                "service_commission": 0.0,
                "service_commission_sum": 0.0,
                "paynet_commission_sum": 0.0,
                "fields": [
                    {
                        "name": "clientid",
                        "title_uz": "Telefon raqami",
                        "title_ru": "Номер телефона",
                        "required": true,
                        "read_only": false,
                        "field_type": "N",
                        "field_control": "PHONE",
                        "field_control_type_info": null,
                        "field_values": [],
                        "id": 522
                    },
                    {
                        "name": "amount",
                        "title_uz": "Summa",
                        "title_ru": "Сумма",
                        "required": true,
                        "read_only": false,
                        "field_type": "N",
                        "field_control": "MONEY",
                        "field_control_type_info": null,
                        "field_values": [],
                        "id": 523
                    }
                ],
                "response_fields": [
                    { "order": -1, "labelRu": "Агент", "labelUz": "Agent", "fieldName": "agent_name" },
                    { "order": 0, "labelRu": "ИНН", "labelUz": "STIR", "fieldName": "agent_inn" },
                    { "order": 1, "labelRu": "Оператор", "labelUz": "Operator", "fieldName": "provider_name" },
                    { "order": 2, "labelRu": "Услуга", "labelUz": "Xizmat turi", "fieldName": "service_name" },
                    { "order": 3, "labelRu": "Время", "labelUz": "To'lov vaqti", "fieldName": "time" },
                    { "order": 4, "labelRu": "Номер терминала", "labelUz": "Terminal raqami", "fieldName": "terminal_id" },
                    { "order": 5, "labelRu": "Номер чека", "labelUz": "Chek raqami", "fieldName": "transaction_id" },
                    { "order": 7, "labelRu": "Номер телефона", "labelUz": "Telefon raqami", "fieldName": "clientid" },
                    { "order": 8, "labelRu": "Оплачено", "labelUz": "To'landi", "fieldName": "amount" },
                    { "order": 13, "labelRu": null, "labelUz": "Instruksiya", "fieldName": "instruction1" },
                    { "order": 14, "labelRu": "Paynet ID", "labelUz": "Paynet ID", "fieldName": "loyalty_id" },
                    { "order": 15, "labelRu": null, "labelUz": null, "fieldName": "agent_cheque_message" },
                    { "order": 16, "labelRu": " ", "labelUz": " ", "fieldName": "bonus_msg" },
                    { "order": 100, "labelRu": "Наличные", "labelUz": "Наличные", "fieldName": "ofd_receivedCash" },
                    { "order": 101, "labelRu": "Банковские карты", "labelUz": "Bank kartalari", "fieldName": "ofd_receivedCard" },
                    { "order": 102, "labelRu": "Время", "labelUz": "Vaqt", "fieldName": "ofd_time" },
                    { "order": 104, "labelRu": "Информация об отозванном чеке", "labelUz": "Qaytarilgan chek ma`lumoti", "fieldName": "ofd_isRefund" },
                    { "order": 105, "labelRu": "Тип транзакци", "labelUz": "Tranzaksia turi", "fieldName": "ofd_receiptType" },
                    { "order": 106, "labelRu": "Название", "labelUz": "Nomi", "fieldName": "ofd_name0" },
                    { "order": 108, "labelRu": "Цена", "labelUz": "Miqdori", "fieldName": "ofd_price0" },
                    { "order": 109, "labelRu": "Сумма НДС", "labelUz": "QQS summasi", "fieldName": "ofd_vat_amount0" },
                    { "order": 110, "labelRu": "НДС в процентах", "labelUz": "QQS foizda", "fieldName": "ofd_vatPercent0" },
                    { "order": 111, "labelRu": "Название", "labelUz": "Nomi", "fieldName": "ofd_name1" },
                    { "order": 112, "labelRu": "ИКПУ название", "labelUz": "MXIK nomi", "fieldName": "ofd_productName0" },
                    { "order": 112, "labelRu": "КПУ код", "labelUz": "MXIK kodi", "fieldName": "ofd_productCode0" },
                    { "order": 112, "labelRu": "ИКПУ код", "labelUz": "MXIK kodi", "fieldName": "ofd_productCode1" },
                    { "order": 112, "labelRu": "ИКПУ название", "labelUz": "MXIK nomi", "fieldName": "ofd_productName1" },
                    { "order": 113, "labelRu": "Цена", "labelUz": "Narx", "fieldName": "ofd_price1" },
                    { "order": 114, "labelRu": "Количество", "labelUz": "Miqdori", "fieldName": "ofd_amount1" },
                    { "order": 115, "labelRu": "Сумма НДС", "labelUz": "QQS summasi", "fieldName": "ofd_vat_amount1" },
                    { "order": 116, "labelRu": "Протцент НДС", "labelUz": "QQS foizi", "fieldName": "ofd_vatPercent1" },
                    { "order": 117, "labelRu": "ИНН комитента", "labelUz": "Komitent STIRi", "fieldName": "ofd_commisionInfo_tin0" },
                    { "order": 118, "labelRu": "ИНН комитента", "labelUz": "Komitent STIRi", "fieldName": "ofd_commisionInfo_tin1" },
                    { "order": 119, "labelRu": "ФМ номер", "labelUz": "FM nomer", "fieldName": "ofd_terminal_id" },
                    { "order": 120, "labelRu": "Номер чека ОФД", "labelUz": "Chek raqami OFD", "fieldName": "ofd_cheque_id" },
                    { "order": 121, "labelRu": "Фискальный признак", "labelUz": "Fiskal belgi", "fieldName": "ofd_fiscal_sign" },
                    { "order": 124, "labelRu": "Время транзакции ОФД", "labelUz": "FMO tranzaksiya vaqti", "fieldName": "ofd_date_time" },
                    { "order": 125, "labelRu": "QR код", "labelUz": "QR kod", "fieldName": "ofdqrcode" }
                ],
                "services": []
            },
            {
                "id": 2465,
                "title_ru": "Отмена по СМС",
                "title_uz": "SMS orqali bekor qilish",
                "type_id": 0,
                "min_amount": 0,
                "max_amount": 0,
                "service_price": 0,
                "service_commission": 0.0,
                "service_commission_sum": 0.0,
                "paynet_commission_sum": 0.0,
                "fields": [
                    {
                        "name": "cancel_tran_id",
                        "title_uz": "Chek raqami",
                        "title_ru": "Номер чека",
                        "required": true,
                        "read_only": true,
                        "field_type": "N",
                        "field_control": "NUMBER",
                        "field_control_type_info": null,
                        "field_values": [],
                        "id": 2471
                    },
                    {
                        "name": "cancel_tran_date",
                        "title_uz": "Tranzaksiya sanasi",
                        "title_ru": "Дата транзакции",
                        "required": true,
                        "read_only": true,
                        "field_type": "N",
                        "field_control": "DATEPOPUP",
                        "field_control_type_info": "dd.MM.yyyy",
                        "field_values": [],
                        "id": 2472
                    },
                    {
                        "name": "sms_code",
                        "title_uz": "SMS-Kod",
                        "title_ru": "СМС-Код",
                        "required": true,
                        "read_only": false,
                        "field_type": "N",
                        "field_control": "REGEXBOX",
                        "field_control_type_info": "\\d{6}",
                        "field_values": [],
                        "id": 2473
                    },
                    {
                        "name": "clientid",
                        "title_uz": "Telefon raqami",
                        "title_ru": "Номер телефона",
                        "required": true,
                        "read_only": true,
                        "field_type": "N",
                        "field_control": null,
                        "field_control_type_info": null,
                        "field_values": [],
                        "id": 2474
                    }
                ],
                "response_fields": [
                    { "order": 0, "labelRu": "ИНН", "labelUz": "STIR", "fieldName": "agent_inn" },
                    { "order": 1, "labelRu": "Оператор", "labelUz": "Operator", "fieldName": "provider_name" },
                    { "order": 2, "labelRu": "Услуга", "labelUz": "Xizmat turi", "fieldName": "service_name" },
                    { "order": 3, "labelRu": "Время", "labelUz": "To'lov vaqti", "fieldName": "time" },
                    { "order": 4, "labelRu": "Номер терминала", "labelUz": "Terminal raqami", "fieldName": "terminal_id" },
                    { "order": 5, "labelRu": "Номер чека", "labelUz": "Chek raqami", "fieldName": "transaction_id" },
                    { "order": 6, "labelRu": "Номер чека отмены", "labelUz": "Bekor chek raqami", "fieldName": "cancel_tran_id" },
                    { "order": 9, "labelRu": "Код смс", "labelUz": "SMS kodi", "fieldName": "sms_code" }
                ],
                "services": [
                    {
                        "id": 2464,
                        "title_ru": "Отправка СМС",
                        "title_uz": "SMS Yuborish",
                        "type_id": 0,
                        "min_amount": 0,
                        "max_amount": 0,
                        "service_price": 0,
                        "service_commission": 0.0,
                        "service_commission_sum": 0.0,
                        "paynet_commission_sum": 0.0,
                        "fields": [
                            {
                                "name": "transaction_id",
                                "title_uz": "Chek raqami",
                                "title_ru": "Номер чека ",
                                "required": true,
                                "read_only": false,
                                "field_type": "N",
                                "field_control": "NUMBER",
                                "field_control_type_info": null,
                                "field_values": [],
                                "id": 2470
                            }
                        ],
                        "response_fields": [
                            { "order": 3, "labelRu": "Время", "labelUz": "To'lov vaqti", "fieldName": "time" },
                            { "order": 5, "labelRu": "Номер чека", "labelUz": "Chek raqami", "fieldName": "cancel_tran_id" },
                            { "order": 6, "labelRu": "Дата чека", "labelUz": "Chek sana", "fieldName": "cancel_tran_date" },
                            { "order": 7, "labelRu": "Номер телефона", "labelUz": "Telefon raqami", "fieldName": "clientid" }
                        ]
                    }
                ]
            },
            {
                "id": 2464,
                "title_ru": "Отправка СМС",
                "title_uz": "SMS Yuborish",
                "type_id": 0,
                "min_amount": 0,
                "max_amount": 0,
                "service_price": 0,
                "service_commission": 0.0,
                "service_commission_sum": 0.0,
                "paynet_commission_sum": 0.0,
                "fields": [
                    {
                        "name": "transaction_id",
                        "title_uz": "Chek raqami",
                        "title_ru": "Номер чека ",
                        "required": true,
                        "read_only": false,
                        "field_type": "N",
                        "field_control": "NUMBER",
                        "field_control_type_info": null,
                        "field_values": [],
                        "id": 2470
                    }
                ],
                "response_fields": [
                    { "order": 3, "labelRu": "Время", "labelUz": "To'lov vaqti", "fieldName": "time" },
                    { "order": 5, "labelRu": "Номер чека", "labelUz": "Chek raqami", "fieldName": "cancel_tran_id" },
                    { "order": 6, "labelRu": "Дата чека", "labelUz": "Chek sana", "fieldName": "cancel_tran_date" },
                    { "order": 7, "labelRu": "Номер телефона", "labelUz": "Telefon raqami", "fieldName": "clientid" }
                ],
                "services": []
            },
            {
                "id": 3533,
                "title_ru": "Проверка номера",
                "title_uz": "Raqam tekshirish",
                "type_id": 2,
                "min_amount": 0,
                "max_amount": 0,
                "service_price": 0,
                "service_commission": 0.0,
                "service_commission_sum": 0.0,
                "paynet_commission_sum": 0.0,
                "fields": [
                    {
                        "name": "clientid",
                        "title_uz": "Telefon raqami",
                        "title_ru": "Номер телефона",
                        "required": true,
                        "read_only": false,
                        "field_type": "N",
                        "field_control": "PHONE",
                        "field_control_type_info": null,
                        "field_values": [],
                        "id": 1682
                    },
                    {
                        "name": "getInfoType",
                        "title_uz": "InfoType",
                        "title_ru": "InfoType",
                        "required": false,
                        "read_only": false,
                        "field_type": "N",
                        "field_control": null,
                        "field_control_type_info": null,
                        "field_values": [],
                        "id": 1683
                    }
                ],
                "response_fields": [
                    { "order": -1, "labelRu": "Агент", "labelUz": "Agent", "fieldName": "agent_name" },
                    { "order": 0, "labelRu": "ИНН", "labelUz": "STIR", "fieldName": "agent_inn" },
                    { "order": 1, "labelRu": "Оператор", "labelUz": "Operator", "fieldName": "provider_name" },
                    { "order": 2, "labelRu": "Услуга", "labelUz": "Xizmat turi", "fieldName": "service_name" },
                    { "order": 3, "labelRu": "Время", "labelUz": "To'lov vaqti", "fieldName": "time" },
                    { "order": 4, "labelRu": "Номер терминала", "labelUz": "Terminal raqami", "fieldName": "terminal_id" },
                    { "order": 5, "labelRu": "Номер чека", "labelUz": "Chek raqami", "fieldName": "transaction_id" },
                    { "order": 7, "labelRu": "Номер телефона", "labelUz": "Telefon raqami", "fieldName": "clientid" },
                    { "order": 10, "labelRu": "Статус номера", "labelUz": "Raqam statusi", "fieldName": "check_status" }
                ],
                "services": []
            }
        ]
    },
    "id": 1,
    "status": true,
    "origin": "paynet.services",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-05-12 15:42:10.679004"
    }
}
```

The `field_control` value inside `fields` (`PHONE`, `MONEY`, `NUMBER`,
`DATEPOPUP`, `REGEXBOX`, …) tells the client which input control to render, and
`field_control_type_info` carries its format or validation pattern.
