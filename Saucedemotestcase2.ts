import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
//Test Case 2: End-to-end happy path test to verify login, sorting from high to low, add 2 products to cart, remove item from cart, and checkout

  //Verify user can log into saucedemo.com
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  //Verify user can sort products by high to low
   await page.locator('[data-test="product_sort_container"]').selectOption('hilo');

  //Verify user can add multiple products to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  await page.locator('a').filter({ hasText: '2' }).click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  //Verify user can successfully checkout
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').press('CapsLock');
  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').press('CapsLock');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('88992');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  //Verify user sees "Thank you for your order" after checking out
   await page.getByRole('heading', { name: 'Thank you for your order!' }).click();

});