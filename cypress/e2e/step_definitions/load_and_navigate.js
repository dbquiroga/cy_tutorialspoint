import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { iframesPage } from "../../support/pages/iframes.page";
const { baseUrl } = Cypress.env();

Given("User is on the website", () => {
  cy.visit(baseUrl);
});

When("User navigates to the content below {string}", (content) => {
  iframesPage.get.exampleFrame().contains(content);
});

When("User clicks on the link about us", () => {
  iframesPage.get.navBtnAbout().click();
});

Then("User should see the URL of the new page", () => {
  cy.url().should("contain", "/about");
});

import { removeLogs } from "../../support/helper/RemoveLogs";
removeLogs();
