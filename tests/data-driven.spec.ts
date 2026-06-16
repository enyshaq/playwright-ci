import { test, expect } from '@playwright/test';

const testUsers = [
    { username: 'standard_user',           shouldPass: true,  description: 'обычный' },
    { username: 'locked_out_user',         shouldPass: false, description: 'заблокированный' },
    { username: 'problem_user',            shouldPass: true,  description: 'с глюками UI' },
    { username: 'performance_glitch_user', shouldPass: true,  description: 'с тормозами' },
];

for (const user of testUsers) {
    test(`Логин: ${user.description} (${user.username})`, async ({ page }) => {
        await page.goto('https://www.saucedemo.com');
        await page.getByPlaceholder('Username').fill(user.username);
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        
        if (user.shouldPass) {
            await expect(page).toHaveURL(/inventory/);
        } else {
            await expect(page.getByText(/Epic sadface/)).toBeVisible();
        }
    });
}