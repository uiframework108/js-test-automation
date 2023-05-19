import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'

const LOGIN_PAGE_URL = 'https://action.staging.focal.dev/';

Given('I am on the login page', () => {
  cy.url().should('eq', LOGIN_PAGE_URL);

  loginPage.isEmailFieldDisplayed();
  loginPage.isPasswordFieldDisplayed();
  loginPage.isSubmitButtonDisplayed();
  loginPage.isRememberMeTextDisplayed();
  loginPage.isForgotPasswordLinkDisplayed();
  loginPage.isChangeUsernameButtonDisplayed();
  loginPage.isShowPasswordButtonDisplayed();
});

When('I enter my email {string}', (email) => {
  loginPage.enterEmail(email);
});

When('I enter my password {string}', (password) => {
  loginPage.enterPassword(password);
});

When('I click the login button', () => {
  loginPage.clickLoginButton();
});

When('I click the show password button', () => {
  loginPage.clickShowPasswordButton();
});

Then('the password should be visible', () => {
  loginPage.isPasswordVisible();
});

Then('the email field contains {string}', (expectedText) => {
  loginPage.getEmailFieldText().should('eq', expectedText);
});

Then('the password is not visible', () => {
  loginPage.isPasswordNotVisible();
});

Then('the login button is enabled', () => {
  loginPage.isLoginButtonEnabled();
});

Then('the login button is disabled', () => {
  loginPage.isLoginButtonDisabled();
});

When('I click the forgot password link', () => {
  loginPage.clickForgotPasswordLink();
});

When('I click the change username link', () => {
  loginPage.clickChangeUsernameLink();
});

When('I click on the Remember Me checkbox on the login page', () => {
  loginPage.clickRememberMeCheckbox();
});

Then('the checkbox on the login page is selected', () => {
  loginPage.isCheckboxSelected();
});

Then('the checkbox on the login page is not selected', () => {
  loginPage.isCheckboxSelected().should('be.false');
});

Then('the error message on Login page should be {string}', (expectedErrorMessage) => {
  loginPage.getInvalidLoginMessageText().should('have.text', expectedErrorMessage);
});
