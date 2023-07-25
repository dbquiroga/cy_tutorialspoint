Feature: Load and Navigate the Website

    Background:
        Given User is on the website

    Scenario: Load the website and navigate to the content section
        When User navigates to the content below "Document content goes here..."

    Scenario: Interact with the "About us" link
        When User clicks on the "About us" link
        Then User should see the URL of the new page

