---
title: Format
order: 3
codeExamples:
  curl: |
    POST https://{{host}}/api/v1/jsonrpc

    {
        "jsonrpc": "2.0",
        "id": "1",
        "method": "name",
        "params": {
            "key": "value"
        }
    }
---

## C.2 Format

Jsonrpc **2.0**

### Request sample

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
| `jsonrpc` | String | `2.0` |
| `id` | String or numeric | Request id (preferred uuid or client name + time: `company_12345`) |
| `method` | String | Method name |
| `params` | Array | Required named params as method structure |

### Success — Sample Response

```json
{
    "jsonrpc": "2.0",
    "id": "1",
    "status": true,
    "origin": "login",
    "result": {
        "message": { }
    },
    "host": {
        "host": "visa.unired.uz",
        "time_stamp": "2020-01-20 11:59:59"
    }
}
```

| Field | Type | Description |
|---|---|---|
| `id` | String | Request id emitted |
| `status` | boolean | `true` in success response |
| `origin` | String | Origin of response in Gate |
| `result` | Object | Required params as method structure |
| `message` | Object | Result message |
| `host` | Object | Info about host |

### Error — Sample Response

```json
{
    "jsonrpc": "2.0",
    "status": false,
    "origin": "login",
    "error": {
        "code": 401,
        "message": { }
    },
    "id": null,
    "host": {
        "host": "unipos",
        "time_stamp": "2020-01-20 11:59:59"
    }
}
```

| Field | Type | Description |
|---|---|---|
| `id` | String | `null` |
| `status` | boolean | `false` in error response |
| `origin` | String | Origin of response in Gate |
| `error` | Object | Required params as method structure |
| `code` | Integer | Error code |
| `message` | Object | Error message |
| `host` | Object | Info about host |

## D. Data types

| Name | Type | Description |
|---|---|---|
| `number` | String | Plain card number 16 characters. |
| `amount` | Integer | Amount must not contain any float or decimal points |
| `message` | Object/String | — |
| `host` | Object | — |
| `error` | Object | — |
| `result` | Object | — |
| `code` | Integer | — |

## E. Test Accounts

| PC | Card Number | Expire | CVC | Owner |
|---|---|---|---|---|
| UZCARD | 8600 4829 5296 4119 | 0426 | — | KHUSANBOY ABDULKODIR |
| HUMO | 9860 2301 0122 3272 | 0426 | — | KHUSANBOY ABDULKODIR |
| VISA | 4934537770282014 | 0825 | — | Shukrullo Fatulloyev |

| Phone Number | Owner |
|---|---|
| +998999760430 | Muzaffar Makhkamov |
