import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
//Test Case 3: Invalid test to Verify user receives an error when using incorrect login credentials

  //Verify user cannot successfully log into saucedemo.com with incorrect credentials
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secretsauce');
  await page.locator('[data-test="login-button"]').click();

  //Verify user receives an error message after clicking log in
  await page.locator('[data-test="error"]').click();
});