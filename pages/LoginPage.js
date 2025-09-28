export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('#Email');
    this.password = page.locator('#Password');
    this.rememberMe = page.locator('#RememberMe');
    this.loginBtn = page.locator('input[value="Log in"]');
    this.myAccountLink = page.getByRole('link', { name: 'My account' });
  }

  async login(user) {
    await this.email.fill(user.email);
    await this.password.fill(user.password);
    await this.rememberMe.check();
    await this.loginBtn.click();
  }
}
