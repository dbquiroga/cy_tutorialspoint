import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../support/pages/login.page";
const { loginUrl } = Cypress.env();

Given("User is on the website login", () => {
  cy.visit(loginUrl);
});

When(
  "the user enters the username {string} and password {string}",
  (username, password) => {
    loginPage.typeUsername(username);
    loginPage.typePassword(password);
  }
);
When("clicks on the login button", () => {
  cy.intercept("POST", "/market/login.php").as("loginRequest");

  loginPage.clickLoginBtn();
});
Then("the user should be logged in", () => {
  cy.wait("@loginRequest");
  cy.url().should("include", "/dashboard");
});
