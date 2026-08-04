---
title: Authentication & Digest
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

    // Added to the request headers:
    // Header-Sign: {digest}
    // Authorization: Bearer {access_token}
---

## Headers

| Header | Value | Notes |
|---|---|---|
| `Authorization` | `Bearer {access_token}` | Token returned by the `login` method |
| `Content-Type` | `application/json` | Gate only serves JSON requests |
| `Accept` | `application/json` | The response is also in JSON format |
| `Header-Sign` | HMAC digest | Computed for every request as described below |

## How to compute the digest

1. **Secret key** — keep the `secret` used for the HMAC secure and never
   disclose it to anyone.
2. **Compute the HMAC** — a digest is computed with SHA-256 from the
   `secret` and the request body (`request.body`).
3. **Base64 encode** — the computed digest is converted to Base64.
4. **Add to the header** — the result is placed in the `Header-Sign`
   header.

If the digest is computed incorrectly, the request fails authentication —
so the request body (`body`) must not be modified after the digest has
been computed.
