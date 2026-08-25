---
title: Project Overview
order: 3
---

**Unisoft Carousel** — documentation for the Unisoft Gate money transfer and
payment API for UZB, RF, TJ, KG and other countries.

Prepared by Muzaffar Makhkamov, Uktamov Ibrohim, Aziz Azimov and
Saidkomil Maxamadxo'jayev — OOO Unisoft, Tashkent, April 07, 2025.

## C.1 General Scenario

### Test Scenario

**Prerequisites**

- **NDA** — ensure a signed Non-Disclosure Agreement is in place.
- **IP Allowance** — submit an IP allowance request via email. Once approved,
  your IP will be whitelisted.

**Test Environment Setup**

Test credentials and a Postman collection will be provided.

1. **Credentials** — obtain the `.zip` folder containing credentials. Extract
   its content using the provided password.
2. **Digest Preparation** — use the secret key to prepare a request digest,
   following the procedure detailed in
   [C1.2 Generating Digest](/docs/auth).
3. **Token Retrieval** — authenticate by calling the [login](/docs/login)
   method to acquire a token.
4. **Service Test** — test the service by sending a `hello.world` request.
   Include the token and the digest in the request.

**Postman Collection Setup**

Open the Postman collection and update the following in **Variables**:

- `username`
- `password`
- `secret`

> ⚠️ Do not change other variables or scripts.

Send a request to the `login` method from your allowed IP.
✅ If successful, you're ready to proceed!

**Test Registry**

Test registry details will be sent to your email after test operations.

> ⚠️ All amounts in the test account will be lowered to 100 (1 UZS)
> automatically. In the production environment you will get the actual amount
> in both the API and the Registry.
