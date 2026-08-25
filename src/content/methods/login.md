---
title: Login
order: 1
rpcMethod: login.v2
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \
    --header 'Content-Type: application/json' \
    --data '{
        "jsonrpc": "2.0",
        "id": "{{$randomInt}}",
        "method": "login.v2",
        "params": {
            "username": "{{username}}",
            "password": "{{password}}"
        }
    }'
  node: |
    const response = await fetch(`https://${host}/api/v1/jsonrpc`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: Date.now(),
        method: 'login.v2',
        params: { username, password },
      }),
    });
    const { result } = await response.json();
    // result.access_token
params:
  - name: login
    type: String
    required: true
    desc: "Client login — sent as `username` inside `params`."
  - name: password
    type: String
    required: true
    desc: "Client password."
---

Login method used to get access token.

## Response

| Field | Type | Description |
|---|---|---|
| `access_token` | String | `access_token` — will be used to authorise other requests. Default validity of Access-Token is 1 year (365 days) |

## Sample response

```json
{
    "jsonrpc": "2.0",
    "result": {
        "access_token": "5b746c54-0bf5-4f0e-***************************"
    },
    "id": "976",
    "status": true,
    "origin": "login",
    "host": {
        "host": "unipos.online",
        "timestamp": "2023-04-18 09:24:05.834127"
    }
}
```

## Error response

```json
{
    "jsonrpc": "2.0",
    "error": {
        "code": -32101,
        "message": {
            "uz": "Foydalanuvchi nomi yoki parol noto'g'ri",
            "ru": "Имя пользователя или пароль неверен",
            "en": "Username or password incorrect"
        },
        "data": null
    },
    "id": "489",
    "status": false,
    "origin": "login",
    "host": {
        "host": "unipos.online",
        "timestamp": "2023-04-18 09:46:29.363561"
    }
}
```
