import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { loginPage } from "../../support/pages/login.page";
import tests from "../../fixtures/loginUsers.json";
const { loginUrl } = Cypress.env();

Given("User is on the website login", () => {
  cy.visit(loginUrl);
});

When("the user enters the username {string}", (username) => {
  loginPage.typeUsername(username);
});
When("the user enters the password {string}", (password) => {
  loginPage.typePassword(password);
});
When("clicks on the login button", () => {
  loginPage.clickLoginBtn();
});
Then("the user should be logged in", () => {
  cy.wait(2000);
  cy.url().should("include", "/dashboard");
});
