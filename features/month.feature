Feature: API TESTING

  Scenario: TEST API CALL
    When the user makes a call to Api to get a list of months for half a year
    Then I should get back 6 elements

  Scenario: TEST FAILED API CALL
    When the user makes a call to Api to get a list of months
    Then Total list of months should be 12

  # Scenario: CREATING A USER ACCOUNT
  #   When  I create a new user account with the email address {string}
  #   Then I should get back a new Id of 3


 