class LoginPage {
  get = {
    usernameInput: () => cy.get("#user_email"),
    passwordInput: () => cy.get("#user_password"),
    loginBtn: () => cy.get("#user_login"),
    loader: () => cy.get(".wrap_loader"),
    imgLoader: () => cy.get(".imgLoader"),
    imgLoaderGif: () => cy.get(".imgLoader img", { timeout: 5000 }),
    runner: () => cy.get("#unified-runner"),
    modalVerifyNumber: () => cy.get("#mobile_block"),
  };

  typeUsername(username) {
    this.get.usernameInput().type(username);
  }

  typePassword(password) {
    this.get.passwordInput().type(password);
  }

  clickLoginBtn() {
    this.get.loginBtn().click();
  }
}

export const loginPage = new LoginPage();
