// // @ts-check
import { test, expect } from '@playwright/test';
import testData from '../../testData/data.json';
import { HomePage } from '../../pages/HomePage';
import { RegisterPage } from '../../pages/RegisterPage';
import { LoginPage } from '../../pages/LoginPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('Register User', async ({ page }) => {
  const home = new HomePage(page);
  const register = new RegisterPage(page);

  await home.goto();
  await home.clickRegister();
  await register.register(testData[0]);
});

test('Login, add product to cart and checkout', async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);
  const checkout = new CheckoutPage(page);

  await home.goto();
  await home.clickLogin();
  await login.login(testData[0]);

  await home.navigateToNotebooks();
  await page.locator('.product-item input[value="Add to cart"]').first().click();

  await home.openCart();

  await page.locator('#CountryId').selectOption({ label: 'Pakistan' });
  await page.locator('#ZipPostalCode').fill('74000');
  await page.check('#termsofservice');
  await page.locator('#checkout').click();

  await checkout.fillBillingAddress(testData[0]);
  await checkout.completeCheckout();
});