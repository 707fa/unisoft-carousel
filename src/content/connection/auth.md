---
title: Authorization and Digest
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
    // Postman Pre-request code snippet
    crypto = require('crypto-js')

    // Retrieve the secret from the environment
    var secret = 'secret_very_very!';

    var resolvedBody = pm.request.body.raw;

    // Generate the HMAC using SHA-256
    var encrypted = crypto.HmacSHA256(resolvedBody, secret);

    var digest = crypto.enc.Base64.stringify(encrypted);

    // Set the digest as an environment variable (or another collection
    // variable if needed)
    pm.collectionVariables.set('digest', digest);
---

## C.1.1 Authorization

Authorization client must send on header as:

| Header | Value | Description |
|---|---|---|
| `Authorization` | `Bearer {{access_token}}` | Access-Token will be returned by the `login` method |
| `Content-type` | `application/json` | Gate serves for only JSON request |
| `Accept` | `application/json` | If the client sends a valid request, Gate response will be in JSON format |

## C1.2 Generating Digest procedure explanation

**1. `secret`** — the `secret` variable represents the secret key used for HMAC
calculation. It should be kept confidential and securely managed to ensure the
security of the authentication process.

```python
secret = b"secret_must_be_saved_secretly_!!!"
```

**2. HMAC Digest Calculation** — the `hmac.new()` function computes the HMAC
digest using the provided secret key (`secret`), the request body
(`request.body`), and the SHA-256 hash function (`hashlib.sha256`). This process
generates a unique digest based on the combination of the secret key and the
message content.

```python
hmac_digest = hmac.new(secret, request.body, hashlib.sha256)
```

**3. Base64 Encoding** — the resulting digest is then encoded in base64 format
using `base64.b64encode()` to ensure compatibility with various data
transmission protocols and systems.

```python
digest_base64 = base64.b64encode(hmac_digest.digest()).decode()
```

**4. Set digest to Header of Request** — finally, the calculated digest
(`digest_base64`) must be added to the header as the key
`Header-Sign: {{digest_base64}}`. Ensure that the secret key is securely managed
and not exposed to unauthorized parties. Additionally, consider integrating this
HMAC digest calculation mechanism into your service for secure message
authentication and integrity verification.

## Additional

**1. Postman Pre-request code snippet**

```js
crypto = require('crypto-js')

// Retrieve the secret from the environment
var secret = 'secret_very_very!';

var resolvedBody = pm.request.body.raw;

// Generate the HMAC using SHA-256
var encrypted = crypto.HmacSHA256(resolvedBody, secret);

var digest = crypto.enc.Base64.stringify(encrypted);

// Set the digest as an environment variable (or another collection variable if
// needed)
pm.collectionVariables.set('digest', digest);
```

**2. The final request code snippet should be as below:**

```bash
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
```
