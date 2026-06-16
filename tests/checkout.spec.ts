import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/inventory/);
});

test('Оформление заказа (полный флоу)', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click(); 
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.getByPlaceholder('First Name').fill('Olga');
    await page.getByPlaceholder('Last Name').fill('Borisova');
    await page.getByPlaceholder('Zip/Postal Code').fill('143825');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();

    await expect(page.locator('[data-test="complete-header"]')).toBeVisible();


}); 


