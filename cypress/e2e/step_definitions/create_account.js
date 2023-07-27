import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const { signupUrl } = Cypress.env();
import { signupPage } from "../../support/pages/signup.page";

const numRandom = Cypress._.random(0, 1000);
const serverDomain = "sr3o35ao.mailosaur.net";
const serverId = "sr3o35ao";
let email = `emailexample${numRandom}@${serverDomain}`;

const phoneRandom =
  "1" +
  Math.floor(Math.random() * 100000000)
    .toString()
    .padStart(8, "0");

Given("User is on the website sign up", () => {
  cy.visit(signupUrl);
});

When("User types a name", () => {
  signupPage.get.nameInput().type("random");
});

When("User selects a country", () => {
  signupPage.setRandomCountry();
});

When("User types a phone number", () => {
  signupPage.get.phoneInput().type(phoneRandom);
});

When("User types a email", () => {
  signupPage.get.emailInput().type(email);
});

When("User types a password", () => {
  signupPage.get.passInput().type("Qwerty123");
});

When("User clicks on verify button", () => {
  cy.wait(2000);
  signupPage.get.verifyEmailBtn().click();
  cy.wait(4000);
});

When("User types OTP code", () => {
  cy.mailosaurGetMessage(serverId, {
    sentTo: email,
  }).then((message) => {
    // Obtener el código OTP del correo electrónico usando expresión regular
    const otpCodeMatch =
      /<p.*?style=".*?background:#5bac3a;.*?font-size:24px;.*?letter-spacing:4px;">(.*?)<\/p>/.exec(
        message.html.body
      );
    if (otpCodeMatch && otpCodeMatch.length >= 2) {
      const otpCode = otpCodeMatch[1];
      cy.log("OTP Code:", otpCode);
      signupPage.get.verifyEmailInput().type(otpCode);
      cy.wait(2000);
      signupPage.get.verifyOTPEmailBtn().click();
    } else {
      cy.log("No se pudo encontrar el código OTP en el correo electrónico.");
    }
  });
});

When("User clicks on sign up button", () => {
  cy.wait(2000);
  signupPage.get.signupBtn().click();
});

Then("User should have a new account created", () => {
  cy.wait(5000);
  cy.url().should("contain", "/dashboard");
});

import { removeLogs } from "../../support/helper/RemoveLogs";
removeLogs();
