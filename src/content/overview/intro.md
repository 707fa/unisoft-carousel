---
title: About the project
order: 1
---

**Unisoft Carousel** — a money transfers and payments API for Uzbekistan,
Russia, Tajikistan, Kyrgyzstan and other countries.

## Before you start testing

- **NDA** — a non-disclosure agreement must be signed
- **IP access** — your IP address must be added to the whitelist via email

## Setting up the test environment

1. **Credentials** — test data is delivered in a password-protected `.zip`
   archive
2. **Prepare the digest** — a request digest is generated using your secret
   key (see the [Connection](/docs/auth) page for details)
3. **Get a token** — authenticate via the `login` method
4. **Try a service** — send a test request with the token and digest

## Important note

All amounts on a test account are automatically reduced to 100 (1 so'm).
In production, the real amount is shown in the API and the Registry.
