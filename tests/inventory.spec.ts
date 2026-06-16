import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/inventory/);
});

test('Каталог: отображается 6 товаров', async ({ page }) => {
    await expect(page.locator('.inventory_item')).toHaveCount(6);
});

test('Добавление товара в корзину + проверка бейджа', async ({page}) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

test('Сортировка по цене от меньшего к большему', async ({ page }) => {
    
    await page.locator('[data-test="product-sort-container"]').selectOption({ label: 'Price (low to high)' });
    await expect(page.locator('.inventory_item_price').first()).toHaveText('$7.99');
});