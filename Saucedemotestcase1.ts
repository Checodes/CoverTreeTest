
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 //Test Case 1: End-to-end happy path test to verify login, sorting from low to high, add 2 products to cart, and checkout

  //Verify user can log into saucedemo.coM
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  //Verify user can sort products by low to high
  await page.locator('[data-test="product_sort_container"]').selectOption('lohi'); 

  //Verify user can add a product to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('a').filter({ hasText: '2' }).click();
  
  //Verify user cannot successfully check out after entering valid postal code
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').press('CapsLock');
  await page.locator('[data-test="firstName"]').fill('Jane');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').press('CapsLock');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('77010');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  //Verify user sees "Thank you for your order" after checking out
  await page.getByRole('heading', { name: 'Thank you for your order!' }).click();
});

