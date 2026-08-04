---
title: Terms & concepts
order: 2
---

| Term | Definition |
|---|---|
| Client | A partner authorized to use Unisoft Gate |
| User | The partner's customer (referred to as "User" by Unisoft) |
| Request | A request for data |
| Response | A response to a request |
| Registry | A service that logs every sensitive piece of data |
| Uzcard | Uzcard Online (Svgate) |
| Humo | The processing center of the Central Bank of Uzbekistan |
| Visa | The Visa processing center |
| Transfer | A peer-to-peer operation (money transfer) |
| Payment | A payment or debit operation for services |
| Exchange Conversion | Currency conversion at the Universalbank JSC rate |
| CBU | Central Bank of Uzbekistan |
| Sender | The sender (debit) |
| Receiver | The receiver (credit) |
| Cheque | A payment cheque awaiting the receiver |
| EPOS | An electronic POS terminal holding `merchant_id`/`terminal_id` |

## Data types

| Name | Type | Description |
|---|---|---|
| `number` | string | Card number, 16 characters |
| `amount` | integer | Amount — must contain no fractions or decimal point |
| `message` | object/string | Message text |
| `host` | object | Information about the host |
| `error` | object | Error object |
| `result` | object | Result object |
| `code` | integer | Error code |
