---
title: Authentication and Digest
order: 2
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
      --header 'Header-Login: {{username}}' \
      --header 'Header-Sign: {{digest}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{access_token}}' \
      --data '{
        "jsonrpc": "2.0",
        "id": 111,
        "method": "transfer.create",
        "params": {
          "ext_id": "12",
          "number": "8600xxxx",
          "amount": 100000,
          "currency": 643
        }
      }'
  node: |
    const crypto = require('crypto');

    const secret = process.env.UNISOFT_SECRET;
    const body = JSON.stringify(requestPayload);

    const digest = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('base64');

    // Added to request headers:
    // Header-Sign: {digest}
    // Authorization: Bearer {access_token}
---

## Headers

| Header | Value | Description |
|---|---|---|
| `Authorization` | `Bearer {access_token}` | Token returned by the `login` method |
| `Content-Type` | `application/json` | The gateway only accepts JSON requests |
| `Accept` | `application/json` | The response is also in JSON format |
| `Header-Sign` | HMAC digest | Computed for each request as described below |

## Digest Calculation Steps

1. **Secret Key** — Keep the `secret` used for HMAC computation secure and do not share it with anyone.
2. **HMAC Computation** — A digest is computed using SHA-256 with the `secret` and the request body (`request.body`).
3. **Base64 Encoding** — The computed digest is encoded in Base64 format.
4. **Adding to Header** — The result is placed in the `Header-Sign` header.

If the digest is computed incorrectly, the request will fail authentication — therefore the request body (`body`) must not be modified after the digest has been computed.
