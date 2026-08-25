---
title: Sender Info and Update
order: 24
codeExamples:
  curl: |
    # 11.1 Sender info
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Authorization: Bearer {{access_token}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": 2,
        "method": "sender.info",
        "params": {
            "sender_id": 54198
        }
    }'

    # 11.2 Sender update
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
  node: |
    // sender.info
    await call('sender.info', { sender_id: 54198 });

    // sender.update
    await call('sender.update', {
      sender_id: 848,
      data: {
        series: 'ab0000000',
        phone: '998901234567',
      },
    });
params:
  - name: jsonrpc
    type: String
    required: true
    desc: "JSON-RPC protocol version."
  - name: id
    type: "String | Integer"
    required: true
    desc: "Request identifier."
  - name: method
    type: String
    required: true
    desc: "sender.info or sender.update"
  - name: params
    type: Object
    required: true
    desc: "Object containing the parameters passed to the method."
  - name: sender_id
    type: Integer
    required: true
    desc: "Sender's identifier (ID) in the system — used to link to an existing sender, if applicable."
  - name: data
    type: Object
    required: false
    desc: "sender.update only. Object containing the sender fields to update. Must not be empty, and may only contain the following allowed fields: phone, series, address, last_name, first_name, birth_date, birth_place, expire_date, issuing_date. Any field outside this list will result in an error."
---

## 11.1 Sender info

The `sender.info` method retrieves the personal and passport identification
details of a previously registered sender using their `sender_id`. This allows
the caller to verify or display the sender's stored information (phone, passport
data, name, birth details, etc.) without requiring the sender to resubmit their
data.

**Request**

```json
{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "sender.info",
    "params": {
        "sender_id": 54198
    }
}
```

## 11.2 Sender update

The `sender.update` method modifies the stored details of an existing sender,
identified by `sender_id`. Only the fields provided inside the `data` object are
updated; fields not included remain unchanged. The `data` object accepts only
the following allowed fields: `phone`, `series`, `address`, `last_name`,
`first_name`, `birth_date`, `birth_place`, `expire_date`, `issuing_date` — any
other (unknown) field name in `data` will cause the request to fail. This method
is used to correct or refresh sender information without having to create a new
sender record.

**Request**

```json
{
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
}
```
