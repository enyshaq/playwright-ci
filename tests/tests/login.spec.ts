import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    console.log('Запускаю тест...');
    await page.goto('https://www.saucedemo.com');
});

test.afterEach(async ({ page }) => {
    console.log('Тест закончился');
});

test('Открывает страницу логина SauceDemo', async ({ page }) => {
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
});

test('Успешный логин валидным юзером', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    
    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
});
test('Заблокированный юзер видит ошибку', async ({ page }) => {
    
    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    
    
    await expect(
        page.getByText('Epic sadface: Sorry, this user has been locked out.')
    ).toBeVisible();
    
   
    await expect(page).not.toHaveURL(/inventory/);
});

test('Добавление товара в корзину', async ({ page }) => {
    
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    
    
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
   
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    
    
    await expect(
        page.locator('[data-test="remove-sauce-labs-backpack"]')
    ).toBeVisible();
});