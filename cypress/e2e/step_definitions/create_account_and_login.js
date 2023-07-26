import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const { signupUrl } = Cypress.env();
import { loginPage } from "../../support/pages/login.page";

Given("User is on the website sign up", () => {
  cy.visit(signupUrl);
});

When("User simulates the account creation process", () => {
  const numRandom = Cypress._.random(0, 1000);
  const email = `correoejemplo${numRandom}@gmail.com`;

  loginPage.get.nameInput().type("random");
  loginPage.get.phoneInput().type("000000000");
  loginPage.get.emailInput().type(email);

  loginPage.get.passInput().type("Qwerty123");
  loginPage.setRandomCountry();
  cy.wait(1000);
  loginPage.get.verifyEmailBtn().click();
  cy.wait(2000);

  loginPage.requestalone(email).then((verificationCode) => {
    if (verificationCode) {
      loginPage.get.verifyEmailInput().type(verificationCode);
      cy.wait(2000);
      loginPage.get.verifyOTPEmailBtn().click();
    }
    cy.wait(2000);
    loginPage.get.signupBtn().click();
    cy.url().should("contain", "/dashboard");
  });

  //   loginPage.getEmailCode(email).then((verificationCode) => {
  //     if (verificationCode) {
  //       loginPage.get.verifyEmailInput().type(verificationCode);
  //       loginPage.get.verifyEmailBtn().click();
  //       // Continúa con el proceso de creación de cuenta y verifica que el registro se haya completado correctamente.
  //     } else {
  //       // Manejar el escenario de error, si no se pudo obtener el código de verificación.
  //     }
  //   });
});

import { removeLogs } from "../../support/helper/RemoveLogs";
removeLogs();
