@action-tool @JIRA:AT-01
Feature: Login and Password reset functionality
  # When it comes to end2end, I kept this test which goes through some basic functionality on Home, Login
  # and PasswordReset pages. I've quickly tried to automate yahoo mailbox here, but
  # I started to run into Re-captcha during login, so that's the one I won't include here.
  # The other three tests here are the same as in Java framework.


  @done @end-to-end
  Scenario: User checks Remember me, Change username and confirm button functionality on the Home and Login pages
    Given I am on the homepage
      And the continue button is disabled
      And the checkbox on the homepage is not selected
      And I enter my Realm username or email "uiframework108108@yahoo.com"
    When I click the continue button
    Then I am on the login page
      And the login button is disabled
      And the checkbox on the homepage is not selected
      And the email field contains "uiframework108108@yahoo.com"
    When I click the change username link
    Then I am on the homepage
      And the continue button is disabled
      And the checkbox on the homepage is not selected
    When I click on the Remember Me checkbox on the homepage
    Then the checkbox on the homepage is selected
      And I enter my Realm username or email "uiframework108108@yahoo.com"
    When I click the continue button
    Then I am on the login page
      And the email field contains "uiframework108108@yahoo.com"
    When I enter my password "whatever"
    Then the password is not visible
    When I click the show password button
    Then the password should be visible


  @done @functional
  Scenario: Login is not possible with incorrect username or password
    Given I am on the homepage
      And I enter my Realm username or email "uiframework108108@yahoo.com"
      And I click the continue button
      And I am on the login page
    When I enter my password "incorrectPassword"
      And I click the login button
    Then the error message on Login page should be "Incorrect username/password. Please try again!"


  @done @functional @GITHUB:BUG#1
  Scenario: [KNOWN ISSUE] User is unable to use Send Link to Email with incorrect e-mail
    Given I am on the homepage
      And I enter my Realm username or email "uiframework108108@yahoo.com"
      And I click the continue button
      And I am on the login page
      And I click the forgot password link
      And I am on the password reset page
    When I enter my email for password reset "adminok?"
      And I click the Send link to email button
    Then the error message on Password page should be "Wrong argument (email) value."
