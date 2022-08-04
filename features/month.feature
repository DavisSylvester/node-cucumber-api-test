Feature: Greeting

  Scenario: TEST API CALL
    When the greeter says hello
    Then I should have heard "12"

  Scenario: TEST FAILED API CALL
    When the user makes a call to Api to get a list of months
    Then I should get an Array with a length of "12"

  Scenario: TEST API WITH PAYLOAD
    When the user makes a call to Api to get a list of months
    Then I should get an Array with a length of "12"