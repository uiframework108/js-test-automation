import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { passwordResetPage } from '@pages/PasswordResetPage';

const PASSWORD_RESET_PAGE_URL = 'https://action.staging.focal.dev/reset-password';

Given('I am on the password reset page', () => {
    cy.url().should('eq', PASSWORD_RESET_PAGE_URL);

    passwordResetPage.isResetEmailFieldDisplayed();
    passwordResetPage.isSendLinkToEmailButtonDisplayed();
    passwordResetPage.isBackToLoginButtonDisplayed();
});

When('I enter my email for password reset {string}', (email) => {
    passwordResetPage.enterResetEmail(email);
});

When('I click the Send link to email button', () => {
    passwordResetPage.clickSendLinkToEmailButton();
});

When('I click the Back to login button', () => {
    passwordResetPage.clickBackToLoginButton();
});

When('I click the Close button', () => {
    passwordResetPage.clickCloseButton();
});

Then('I see the Email sent confirmation message', () => {
    passwordResetPage.getEmailConfirmationMessage().should('have.text', 'Check your email and open the link we sent to continue');
    passwordResetPage.isCloseButtonDisplayed();
});

Then('the error message on Password page should be {string}', (expectedErrorMessage) => {
    passwordResetPage.getIncorrectEmailMessageText().should('eq', expectedErrorMessage);
});
