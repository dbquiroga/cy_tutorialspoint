import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const { signupUrl } = Cypress.env();
import { signupPage } from "../../support/pages/signup.page";
import { faker } from "@faker-js/faker";

const numRandom = Cypress._.random(0, 1000);
const serverDomain = "sr3o35ao.mailosaur.net";
let email = `emailexample${numRandom}@${serverDomain}`;

Given("User is on the website sign up", () => {
  cy.visit(signupUrl);
});

When("User types a name", () => {
  signupPage.get.nameInput().type(faker.person.firstName());
});

When("User selects a country", () => {
  signupPage.setRandomCountry();
});

When("User types a phone number", () => {
  signupPage.get.phoneInput().type(faker.phone.number());
});

When("User types a email", () => {
  signupPage.get.emailInput().type(email);
});

When("User types a password", () => {
  signupPage.get.passInput().type(faker.internet.password({ length: 20 }));
});

When("User clicks on verify button", () => {
  cy.intercept("POST", "/market/sendEmailOTP.php").as("sendEmailOTP");

  signupPage.get.verifyEmailBtn().should("be.visible").click();
  cy.wait("@sendEmailOTP");
});

When("User types OTP code", () => {
  signupPage.getOTPCode(email).then((otpCode) => {
    cy.intercept("POST", "/market/validateEmailPhoneOTP.php").as(
      "validateEmailPhoneOTP"
    );
    signupPage.get.verifyEmailInput().type(otpCode);
    signupPage.get.verifyOTPEmailBtn().click();
    cy.wait("@validateEmailPhoneOTP");
  });
});

When("User clicks on sign up button", () => {
  cy.intercept("POST", "/market/register.php").as("register");
  signupPage.get.signupBtn().click();
  cy.wait("@register");
});

Then("User should have a new account created", () => {
  cy.url().should("contain", "/dashboard");
});

import { removeLogs } from "../../support/helper/RemoveLogs";
removeLogs();
