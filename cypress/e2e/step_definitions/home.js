import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { homePage } from '@pages/HomePage';

const HOME_PAGE_URL = 'https://action.staging.focal.dev/';

Given('I am on the homepage', () => {
    cy.visit(HOME_PAGE_URL);

    homePage.isEmailFieldDisplayed();
    homePage.isContinueButtonDisplayed();
    homePage.isRememberMeTextDisplayed();
});

When('I enter my Realm username or email {string}', (email) => {
    homePage.enterEmail(email);
});

Then('the Realm email field contains {string}', (expectedText) => {
    homePage.getEmailFieldText().should('eq', expectedText);
});

When('I click the continue button', () => {
    homePage.clickContinueButton();
});

Then('the continue button is enabled', () => {
    homePage.isContinueButtonEnabled();
});

Then('the continue button is disabled', () => {
    homePage.isContinueButtonDisabled();
});

When('I click on the Remember Me checkbox on the homepage', () => {
    homePage.clickRememberMeCheckbox();
});

Then('the checkbox on the homepage is selected', () => {
    homePage.isCheckboxSelected();
});

Then('the checkbox on the homepage is not selected', () => {
    homePage.isCheckboxNotSelected();
});
