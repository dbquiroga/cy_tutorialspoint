class SignUp {
  constructor() {
    this.serverId = "sr3o35ao";
  }
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

  getOTPCode(email) {
    return cy
      .mailosaurGetMessage(this.serverId, {
        sentTo: email,
      })
      .then((message) => {
        // Obtener el código OTP del correo electrónico usando expresión regular
        const otpCodeMatch =
          /<p.*?style=".*?background:#5bac3a;.*?font-size:24px;.*?letter-spacing:4px;">(.*?)<\/p>/.exec(
            message.html.body
          );
        if (otpCodeMatch && otpCodeMatch.length >= 2) {
          const otpCode = otpCodeMatch[1];
          return otpCode;
        } else {
          return null;
        }
      });
  }
}

export const signupPage = new SignUp();
