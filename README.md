# 🎭 Playwright E2E Tests — SauceDemo

![Playwright Tests](https://github.com/enyshaq/playwright-ci/actions/workflows/playwright.yml/badge.svg)

Учебный проект по автоматизации тестирования: end-to-end тесты для веб-приложения
[SauceDemo](https://www.saucedemo.com) на **Playwright + TypeScript** с автоматическим
запуском в **CI (GitHub Actions)** при каждом push.

## 🛠 Стек
- **Playwright + TypeScript** — автотесты
- **GitHub Actions** — CI/CD (автозапуск тестов)
- **Node.js**

## ✅ Что покрыто тестами
- Авторизация: успешный вход, вход с неверным паролем, заблокированный пользователь
- Корзина: товар в корзине, удаление товаров
- Католог: товары отображаются, сортировка (по цене/имени), добавить в корзину 
- Оформления заказа: полный флоу: товар → checkout → данные → Finish → «Thank you» ✓; пустые поля формы ✗
- Logout: выход → возврат на логин
- Разные юзеры (data-driven): поведение под problem_user / error_user

## 🚀 Как запустить локально
```bash
npm ci
npx playwright install --with-deps
npx playwright test
```

## 📊 CI
Тесты автоматически прогоняются в GitHub Actions при каждом push в `main`
(статус — в значке выше).

## 👤 Автор
Ольга Борисова — QA Engineer.