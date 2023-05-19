class PasswordResetPage {

    resetEmailField = '#password-reset-form-password';
    sendLinkToEmailButton = 'button[data-testid="password-reset-submit-button"]';
    backToLoginButton = 'span:contains("Back to login")';
    closeButton = 'button span:contains("Close")';
    emailConfirmationMessage = '.MuiTypography-caption-206';
    incorrectEmailMessage = '#notistack-snackbar';

    enterResetEmail(email) {
        cy.get(this.resetEmailField).type(email);
    }

    clickSendLinkToEmailButton() {
        cy.get(this.sendLinkToEmailButton).click();
    }

    clickBackToLoginButton() {
        cy.get(this.backToLoginButton).click();
    }

    clickCloseButton() {
        cy.get(this.closeButton).click();
    }

    isResetEmailFieldDisplayed() {
        return cy.get(this.resetEmailField).should('be.visible');
    }

    isSendLinkToEmailButtonDisplayed() {
        return cy.get(this.sendLinkToEmailButton).should('be.visible');
    }

    isBackToLoginButtonDisplayed() {
        return cy.get(this.backToLoginButton).should('be.visible');
    }

    isCloseButtonDisplayed() {
        return cy.get(this.closeButton).should('be.visible');
    }

    getEmailConfirmationMessage() {
        return cy.get(this.emailConfirmationMessage);
    }

    getIncorrectEmailMessageText() {
        return cy.get(this.incorrectEmailMessage).invoke('text');
    }
}

export const passwordResetPage = new PasswordResetPage();