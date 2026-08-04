---
title: About the Project
order: 1
---

**Unisoft Carousel** — A money transfer and payments API for Uzbekistan, Russia, Tajikistan, Kyrgyzstan, and other countries.

## Before Testing

- **NDA** — A non-disclosure agreement must be signed
- **IP Allowlist** — Your IP address must be whitelisted via email

## Setting Up the Test Environment

1. **Credentials** — Test credentials are provided via a password-protected `.zip` archive
2. **Digest Preparation** — A digest is generated for each request using a secret key (see the [Connection](/docs/auth) page for details)
3. **Obtaining a Token** — Authentication is performed via the `login` method
4. **Testing a Service** — A test request is sent using the token and digest

## Important Note

All amounts in the test account are automatically reduced to 100 (1 UZS). In production, the actual amount is visible in the API and Registry.
