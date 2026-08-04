---
title: Atamalar va tushunchalar
order: 2
---

| Atama | Ta'rif |
|---|---|
| Client | Unisoft Gate'dan foydalanishga ruxsat berilgan hamkor |
| User | Hamkorning mijozi (Unisoft uchun "User" deb ataladi) |
| Request | Ma'lumot uchun so'rov |
| Response | So'rovga javob |
| Registry | Har bir maxfiy ma'lumotni ro'yxatga oluvchi xizmat |
| Uzcard | Uzcard Online (Svgate) |
| Humo | O'zbekiston Markaziy banki tegishli protsessing markazi |
| Visa | Visa protsessing markazi |
| Transfer | Peer-to-peer operatsiya (pul o'tkazmasi) |
| Payment | Xizmatlar uchun to'lov yoki debit operatsiyasi |
| Exchange Conversion | Valyutani Universalbank JSC kursi bo'yicha konvertatsiya qilish |
| CBU | O'zbekiston Markaziy banki |
| Sender | Jo'natuvchi (debit) |
| Receiver | Qabul qiluvchi (kredit) |
| Cheque | Qabul qiluvchini kutayotgan to'lov cheki |
| EPOS | `merchant_id`/`terminal_id` saqlovchi elektron POS terminal |

## Ma'lumot turlari

| Nomi | Turi | Tavsif |
|---|---|---|
| `number` | string | Karta raqami, 16 ta belgi |
| `amount` | integer | Summa — kasr yoki o'nlik nuqtasiz bo'lishi kerak |
| `message` | object/string | Xabar matni |
| `host` | object | Host haqida ma'lumot |
| `error` | object | Xatolik obyekti |
| `result` | object | Natija obyekti |
| `code` | integer | Xatolik kodi |
