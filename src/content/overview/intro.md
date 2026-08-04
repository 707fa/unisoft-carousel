---
title: Loyiha haqida
order: 1
---

**Unisoft Carousel** — O'zbekiston, Rossiya, Tojikiston, Qirg'iziston va
boshqa mamlakatlar uchun pul o'tkazmalari va to'lovlar API'si.

## Test qilishdan oldin

- **NDA** — maxfiylik shartnomasi imzolangan bo'lishi kerak
- **IP ruxsati** — sizning IP manzilingiz email orqali whitelist'ga
  qo'shilishi kerak

## Test muhitini sozlash

1. **Credentials** — parol bilan himoyalangan `.zip` papkasi orqali test
   ma'lumotlari beriladi
2. **Digest tayyorlash** — maxfiy kalit yordamida so'rov uchun digest
   yaratiladi ([Ulanish](/docs/auth) sahifasida batafsil)
3. **Token olish** — `login` metodi orqali autentifikatsiya qilinadi
4. **Xizmatni sinash** — token va digest bilan test so'rovi yuboriladi

## Muhim eslatma

Test hisobidagi barcha summalar avtomatik ravishda 100 (1 so'm) gacha
kamaytiriladi. Productionda API va Registry'da haqiqiy summa ko'rinadi.
