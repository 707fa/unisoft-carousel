---
title: Sender info & Update
order: 9
codeExamples:
  curl: |
    # Sender info
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Authorization: Bearer {{access_token}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "jsonrpc": "2.0",
        "id": 2,
        "method": "sender.info",
        "params": { "sender_id": 54198 }
      }'
  node: |
    # Sender update
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
params:
  - name: sender_id
    type: integer
    required: true
    desc: "The system identifier of an existing sender."
  - name: data
    type: object
    required: false
    desc: "For sender.update only: an object of fields to update (must not be empty)."
---

## Sender info — `sender.info`

Retrieves the personal and passport details of a previously registered
sender by `sender_id`. This lets the caller verify or display the sender's
data (phone, passport details, name, date of birth, etc.) without
resending it.

## Sender update — `sender.update`

Modifies the stored data of an existing sender by `sender_id`. Only the
fields passed inside the `data` object are updated — fields not included
remain unchanged.

The `data` object accepts only the following fields:

- `phone`, `series`, `address`, `last_name`, `first_name`, `birth_date`,
  `birth_place`, `expire_date`, `issuing_date`

> ⚠️ Any (unknown) field name outside this list will cause the request to
> fail.

This method is used to correct or update existing data without creating a
new sender record.
