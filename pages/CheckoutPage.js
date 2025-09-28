export class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async fillBillingAddress(user) {
    await this.page.locator('#BillingNewAddress_CountryId').selectOption({ label: 'Pakistan' });
    await this.page.locator('#BillingNewAddress_City').fill(user.city);
    await this.page.locator('#BillingNewAddress_Address1').fill(user.address);
    await this.page.locator('#BillingNewAddress_ZipPostalCode').fill(user.zip);
    await this.page.locator('#BillingNewAddress_PhoneNumber').fill(user.phone);
  }

  async completeCheckout() {
    await this.page.locator('//input[@onclick="Billing.save()"]').click();
    await this.page.locator('//input[@onclick="Shipping.save()"]').click();
    await this.page.locator('//input[@onclick="ShippingMethod.save()"]').click();
    await this.page.locator('//input[@onclick="PaymentMethod.save()"]').click();
    await this.page.locator('//input[@onclick="PaymentInfo.save()"]').click();
    await this.page.locator('input[value="Confirm"]').click();
  }
}
