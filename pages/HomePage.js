export class HomePage {
  constructor(page) {
    this.page = page;
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.computersMenu = page.locator('ul.top-menu >> text=Computers');
    this.notebooksMenu = page.locator('ul.top-menu >> text=Notebooks');
    this.cartIcon = page.locator('#topcartlink a.ico-cart');
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState();
  }

  async clickRegister() {
    await this.registerLink.click();
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async navigateToNotebooks() {
    await this.computersMenu.hover();
    await this.notebooksMenu.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}
