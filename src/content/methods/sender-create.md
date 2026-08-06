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
    desc: "The sender's phone number (in international format, for example +998901234567)."
  - name: series
    type: string
    required: true
    desc: "The sender's passport series and number (for example, AB1234567)."
  - name: address
    type: string
    required: true
    desc: "The sender's permanent registered address."
  - name: last_name
    type: string
    required: true
    desc: "The sender's last name (as on the passport)."
  - name: first_name
    type: string
    required: true
    desc: "The sender's first name (as on the passport)."
  - name: birth_date
    type: string
    required: true
    desc: "Date of birth (in YYYY-MM-DD format)."
  - name: birth_place
    type: string
    required: true
    desc: "Place of birth (as shown on the passport)."
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
and passport details (phone, passport series, address, full name, date/place
of birth, passport issue and expiry dates).

After a successful registration, the server returns a unique
**`sender_id`** — used in subsequent methods (for example,
`transfer.create`) to reference the sender via this identifier instead of
resending their personal data every time.

## Response fields

| Field | Type | Description |
|---|---|---|
| `message` | string | Status message returned by the server (for example, `"success"`) |
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
