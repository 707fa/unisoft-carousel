---
title: Sender create
order: 23
rpcMethod: sender.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Authorization: Bearer {{access_token}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": 2,
        "method": "sender.create",
        "params": {
            "sender": {
                "phone": "99890***86708",
                "series": "AC0**288",
                "address": "5 th Avenue 1 34096 Fatih Istanbul",
                "last_name": "NARZULLAYEV",
                "birth_date": "2002-02-17",
                "first_name": "SHAsXBOZ",
                "birth_place": "Qarshi",
                "expire_date": "2028.02.03",
                "issuing_date": "2018.02.04"
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
        id: 2,
        method: 'sender.create',
        params: {
          sender: {
            phone: '99890***86708',
            series: 'AC0**288',
            address: '5 th Avenue 1 34096 Fatih Istanbul',
            last_name: 'NARZULLAYEV',
            birth_date: '2002-02-17',
            first_name: 'SHAsXBOZ',
            birth_place: 'Qarshi',
            expire_date: '2028.02.03',
            issuing_date: '2018.02.04',
          },
        },
      }),
    });
    const { result } = await response.json();
    // result.sender_id
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
    desc: "sender.create"
  - name: params
    type: Object
    required: true
    desc: "Object containing the parameters passed to the method."
  - name: sender
    type: Integer
    required: true
    desc: "Sender's identifier (ID) in the system — used to link to an existing sender, if applicable."
  - name: phone
    type: String
    required: true
    desc: "Sender's phone number (in international format, e.g. +998901234567)."
  - name: series
    type: String
    required: true
    desc: "Sender's passport series and number (e.g. AB1234567)."
  - name: address
    type: String
    required: true
    desc: "Sender's permanent residential address (registration address)."
  - name: last_name
    type: String
    required: true
    desc: "Sender's last name (as shown in the passport)."
  - name: first_name
    type: String
    required: true
    desc: "Sender's first name (as shown in the passport)."
  - name: birth_date
    type: String
    required: true
    desc: "Sender's date of birth (format: YYYY-MM-DD)."
  - name: birth_place
    type: String
    required: true
    desc: "Sender's place of birth (as indicated in the passport)."
  - name: expire_date
    type: String
    required: true
    desc: "Expiration date of the sender's passport (format: YYYY-MM-DD)."
  - name: issuing_date
    type: String
    required: true
    desc: "Date the sender's passport was issued (format: YYYY-MM-DD)."
---

The `sender.create` method registers a new sender in the system by submitting
their personal and passport identification details (phone number, passport
series, address, full name, birth date and place, and passport issue/expiry
dates). Upon successful registration, the server returns a unique `sender_id`,
which must be used to reference this sender in subsequent methods
(e.g. `transfer.create`) instead of resending the sender's personal details each
time.

## Sample responses

| Field | Type | Description |
|---|---|---|
| `message` | String | Status message returned by the server (e.g. `"success"`) |
| `sender_id` | Integer | Unique identifier assigned to the newly created sender in the system |

### Response

```json
{
    "jsonrpc": "2.0",
    "result": {
        "message": "success",
        "sender_id": 54198
    },
    "id": 2,
    "status": true,
    "origin": "sender.create",
    "host": {
        "host": "Unipos_v2",
        "timestamp": "2026-07-03 10:08:58.646353"
    }
}
```
