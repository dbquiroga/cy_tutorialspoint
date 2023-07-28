import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
const { aboutusUrl } = Cypress.env();

Given("User is on the website about us", () => {
  cy.visit(aboutusUrl);
});

When("User retrieves all URLs on the page and checks their existence", () => {
  const regex = /^https?:\/\/.+$/; // Expresión regular para URLs que comiencen con http o https
  cy.get("a").should(($a) => {
    expect(regex.test($a.prop("href"))).to.be.true;
  });
});

When("User lists all buttons on the page and checks their existence", () => {
  cy.get(".btn").should("be.visible").and("be.enabled");
});

When(
  "User identifies and lists all text input fields and checks their existence",
  () => {
    cy.get("input").should("be.visible").and("be.enabled");
  }
);

import { removeLogs } from "../../support/helper/RemoveLogs";
removeLogs();
