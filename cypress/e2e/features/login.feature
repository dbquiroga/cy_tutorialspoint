Feature: Login

    Background:
        Given User is on the website login

    Scenario: As a existing user, I want to log in sucessfully
        When the user enters the username "<username>" and password "<password>"
        When clicks on the login button
        Then the user should be logged in
        Examples:
            | username                               | password  |
            | emailexample233@sr3o35ao.mailosaur.net | Qwerty123 |

