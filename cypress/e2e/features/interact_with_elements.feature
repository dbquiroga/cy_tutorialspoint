Feature: Interact with elements on the Website

    Background:
        Given User is on the website

    Scenario: Retrieve all URLs on the page
        When User retrieves all URLs on the page
        Then User should get a list of all URLs found on the page

    Scenario: List all buttons on the page
        When User lists all buttons on the page
        Then User should see a list of all buttons present on the page

    Scenario: Identify and list all text input fields
        When User identifies and lists all text input fields
        Then User should see a list of all text input fields available on the page
