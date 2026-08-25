---
title: Connection
order: 1
codeExamples:
  curl: |
    POST https://{{host}}/api/v1/jsonrpc
---

## C. Connection

| | |
|---|---|
| **HOST** | `host/api/v1/jsonrpc` |

All requests are sent to this **single endpoint**. The operation to perform is
determined by the `method` field in the request body — the gate follows the
**JSON-RPC 2.0** protocol.

Next: [Authorization and Digest](/docs/auth) for the required headers and the
`Header-Sign` calculation, then [Format](/docs/format) for the request and
response envelope.
