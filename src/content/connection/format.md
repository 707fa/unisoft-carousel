---
title: Connection
order: 1
codeExamples:
  curl: |
    POST https://{{host}}/api/v1/jsonrpc
---

All requests are sent to a **single endpoint**. The operation to perform is determined by the `method` field in the request body — this follows the **JSON-RPC 2.0** protocol.

## Request Format

```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "method": "name",
  "params": {
    "key": "value"
  }
}
```

| Field | Type | Description |
|---|---|---|
| `jsonrpc` | string | Always `"2.0"` |
| `id` | string/integer | Request identifier (uuid or `company_timestamp` recommended) |
| `method` | string | Name of the method being called |
| `params` | object | Parameters specific to the method |

## Successful Response

```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "status": true,
  "origin": "login",
  "result": { "message": {} },
  "host": {
    "host": "visa.unired.uz",
    "time_stamp": "2020-01-20 11:59:59"
  }
}
```

## Error Response

```json
{
  "jsonrpc": "2.0",
  "status": false,
  "origin": "login",
  "error": {
    "code": 401,
    "message": {}
  },
  "id": null
}
```

When `status: false`, the response includes `error.code` and `error.message` fields — `message` is typically returned in `uz`, `ru`, and `en` languages.
