import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { aboutusPage } from "../../support/pages/aboutus.page";
const { aboutusUrl } = Cypress.env();

Given("User is on the website about us", () => {
  cy.visit(aboutusUrl);
});

When("User retrieves all URLs on the page and checks their existence", () => {
  aboutusPage.getLinkElements("a");
  //.then(
  // should('exist')
  // elemento.atrr
  //)
});

When("User lists all buttons on the page and checks their existence", () => {
  aboutusPage.getBtnsElements(".btn");
  //.then(
  // should('exist')
  // elemento.text
  //)
});

When(
  "User identifies and lists all text input fields and checks their existence",
  () => {
    aboutusPage.getTextInputElements('[type="text"]');
    //.then(
    //should("exist");
    // elemento.value
    //)
  }
);

import { removeLogs } from "../../support/helper/RemoveLogs";
removeLogs();
