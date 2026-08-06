---
title: Sender create
order: 8
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
            "first_name": "SHAsXBOZ",
            "birth_date": "2002-02-17",
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
        params: { sender: senderData },
      }),
    });
    const { result } = await response.json();
    // result.sender_id — used in subsequent requests
params:
  - name: phone
    type: string
    required: true
    desc: "Sender's phone number (in international format, e.g. +998901234567)."
  - name: series
    type: string
    required: true
    desc: "Sender's passport series and number (e.g. AB1234567)."
  - name: address
    type: string
    required: true
    desc: "Sender's registered residential address."
  - name: last_name
    type: string
    required: true
    desc: "Sender's last name (as shown in passport)."
  - name: first_name
    type: string
    required: true
    desc: "Sender's first name (as shown in passport)."
  - name: birth_date
    type: string
    required: true
    desc: "Date of birth (in YYYY-MM-DD format)."
  - name: birth_place
    type: string
    required: true
    desc: "Place of birth (as stated in passport)."
  - name: expire_date
    type: string
    required: true
    desc: "Passport expiry date (YYYY-MM-DD)."
  - name: issuing_date
    type: string
    required: true
    desc: "Passport issue date (YYYY-MM-DD)."
---

`sender.create` registers a new sender in the system by submitting personal
and passport details (phone number, passport series, address, full name,
date and place of birth, passport issue and expiry dates).

Upon successful registration, the server returns a unique **`sender_id`** —
this identifier is used in subsequent methods (e.g., `transfer.create`) to
reference the sender without re-submitting their personal data each time.

## Response fields

| Field | Type | Description |
|---|---|---|
| `message` | string | Status message returned by the server (e.g., `"success"`) |
| `sender_id` | integer | Unique identifier of the newly created sender |

## Sample response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "message": "success",
    "sender_id": 54198
  },
  "id": 2,
  "status": true,
  "origin": "sender.create"
}
```
