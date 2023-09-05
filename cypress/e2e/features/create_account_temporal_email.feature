Feature: Create Account

    Background:
        Given User is on the website sign up

    Scenario: Simulate account creation
        When User types a name
        When User selects a country
        When User types a phone number
        When User types a email
        When User types a password
        When User clicks on verify button
        When User types OTP code
        When User clicks on sign up button
        Then User should have a new account created
