---
title: Terms and Concepts
order: 2
---

| Term | Definition |
|---|---|
| Client | A partner authorized to use Unisoft Gate |
| User | A partner's customer (referred to as "User" within Unisoft) |
| Request | A request for data |
| Response | A reply to a request |
| Registry | A service that logs every confidential data entry |
| Uzcard | Uzcard Online (Svgate) |
| Humo | Processing center affiliated with the Central Bank of Uzbekistan |
| Visa | Visa processing center |
| Transfer | Peer-to-peer operation (money transfer) |
| Payment | Payment for services or a debit operation |
| Exchange Conversion | Currency conversion at the Universalbank JSC exchange rate |
| CBU | Central Bank of Uzbekistan |
| Sender | The sending party (debit) |
| Receiver | The receiving party (credit) |
| Cheque | A payment receipt awaiting the receiver |
| EPOS | Electronic POS terminal that stores `merchant_id`/`terminal_id` |

## Data Types

| Name | Type | Description |
|---|---|---|
| `number` | string | Card number, 16 digits |
| `amount` | integer | Amount — must be provided without decimals or a decimal point |
| `message` | object/string | Message text |
| `host` | object | Host information |
| `error` | object | Error object |
| `result` | object | Result object |
| `code` | integer | Error code |
