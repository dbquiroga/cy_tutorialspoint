import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const { signupUrl } = Cypress.env();
import { loginPage } from "../../support/pages/login.page";

Given("User is on the website sign up", () => {
  cy.visit(signupUrl);
});

When("User simulates the account creation process", () => {
  const email = "correo_ejemplo@example.com";

  loginPage.get.nameInput().type("random");
  loginPage.get.phoneInput().type("000000000");
  loginPage.get.emailInput().type(email);

  loginPage.get.passInput().type("Qwerty123");
  loginPage.setRandomCountry();
  loginPage.get.verifyEmailBtn().click();

  loginPage.getAndDecodeXSRFToken();

  loginPage.getEmailCode(email).then((verificationCode) => {
    if (verificationCode) {
      loginPage.get.verifyEmailInput().type(verificationCode);
      loginPage.get.verifyEmailBtn().click();
      // Continúa con el proceso de creación de cuenta y verifica que el registro se haya completado correctamente.
    } else {
      // Manejar el escenario de error, si no se pudo obtener el código de verificación.
    }
  });
});

import { removeLogs } from "../../support/helper/RemoveLogs";
removeLogs();
