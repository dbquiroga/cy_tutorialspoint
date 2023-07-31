class SignUp {
  get = {
    nameInput: () => cy.get("#textRegName"),
    phoneInput: () => cy.get("#phone"),
    countryphoneInput: () => cy.get("#country_code"),
    emailInput: () => cy.get("#textSRegEmail"),
    passInput: () => cy.get("#user_password"),
    verifyEmailBtn: () => cy.get("#validate_email_id"),
    verifyEmailInput: () => cy.get("#txtEmailValidateOTP"),
    verifyOTPEmailBtn: () => cy.get("#validateEmailOtp"),
    signupBtn: () => cy.get("#signUpNew"),
    otpCode: () =>
      cy.get('p[contains(@style, "background:#5bac3a; font-size:24px;")]'),
    otpBtnEmail: () => cy.get(":nth-child(5) > td > p"),
  };

  setRandomCountry() {
    this.get.countryphoneInput().select(Cypress._.random(0, 7));
  }
}

export const signupPage = new SignUp();
