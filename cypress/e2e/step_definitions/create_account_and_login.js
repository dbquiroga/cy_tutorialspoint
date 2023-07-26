import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const { signupUrl } = Cypress.env();
import { loginPage } from "../../support/pages/login.page";

Given("User is on the website sign up", () => {
  cy.visit(signupUrl);
});

When("User simulates the account creation process", () => {
  loginPage.get.nameInput().type("random");
  loginPage.get.phoneInput().type("000000000");
  loginPage.get.emailInput().type("hi@hi.com");
  loginPage.get.passInput().type("Qwerty123");
  loginPage.setRandomCountry();

  // colocar numero
  //colocar email
  // colocar pass
  // click boton verificar
});

import { removeLogs } from "../../support/helper/RemoveLogs";
removeLogs();
