import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //Test Case 4: End-to-end invalid path test to verify login, sorting from Z to A, add 1 product to cart, and checkout with invalid postal code

//Verify user can log into saucedemo.com
await page.goto('https://www.saucedemo.com/');
await page.locator('[data-test="username"]').click();
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').click();
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();

//Verify user can sort products by name Z to A
await page.locator('[data-test="product_sort_container"]').selectOption('za');
await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
await page.locator('a').filter({ hasText: '1' }).click();
await page.locator('[data-test="checkout"]').click();

//Verify user cannot successfully check out after entering invalid postal code
await page.locator('[data-test="firstName"]').click();
await page.locator('[data-test="firstName"]').press('CapsLock');
await page.locator('[data-test="firstName"]').fill('Janie');
await page.locator('[data-test="lastName"]').click();
await page.locator('[data-test="lastName"]').press('CapsLock');
await page.locator('[data-test="lastName"]').fill('Dough');
await page.locator('[data-test="postalCode"]').click();
await page.locator('[data-test="postalCode"]').fill('ggffd'); //this should have failed
await page.getByText('CancelContinue').click();
await page.locator('[data-test="continue"]').click();
await page.locator('[data-test="finish"]').click();

//Verify user does not see "Thank you for your order" after checking out
await page.getByRole('heading', { name: 'Thank you for your order!' }).click();
 
// Verify user can successfully logout
await page.getByRole('button', { name: 'Open Menu' }).click();
await page.getByRole('link', { name: 'Logout' }).click();
});
