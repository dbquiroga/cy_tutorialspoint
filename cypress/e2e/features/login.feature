Feature: Login

    Background:
        Given User is on the website login

    Scenario: Simulate login process
        When the user enters the username "<username>"
        When the user enters the password "<password>"
        When clicks on the login button
        Then the user should be logged in
        Examples:
            | username          | password  |
            | guabel1@gmail.com | Qwerty123 |

