Feature: Create Account and Login on the website

    Background:
        Given User is on the website

    Scenario: Simulate account creation
        When User simulates the account creation process
        Then User should have a new account created

    Scenario: Simulate login process
        When User simulates the login process
        Then User should be logged in to the website
