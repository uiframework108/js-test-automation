class HomePage {

    emailField = '#realm-form-username';
    continueButton = 'button[data-testid="realm-submit-button"]';
    rememberMeCheckbox = 'input[type=\"checkbox\"]';
    rememberMeText = 'span:contains(\"Remember me\")';

    enterEmail(email) {
        cy.get(this.emailField).type(email);
    }

    getEmailFieldText() {
        return cy.get(this.emailField).invoke('val');
    }

    clickContinueButton() {
        cy.get(this.continueButton).click();
    }

    isContinueButtonEnabled() {
        return cy.get(this.continueButton).should('be.enabled');
    }

    isContinueButtonDisabled() {
        return cy.get(this.continueButton).should('be.disabled');
    }

    isEmailFieldDisplayed() {
        return cy.get(this.emailField).should('be.visible');
    }

    isContinueButtonDisplayed() {
        return cy.get(this.continueButton).should('be.visible');
    }

    isRememberMeTextDisplayed() {
        return cy.get(this.rememberMeText).should('be.visible');
    }

    clickRememberMeCheckbox() {
        cy.get(this.rememberMeCheckbox).click();
    }

    isCheckboxSelected() {
        return cy.get(this.rememberMeCheckbox).should('be.checked');
    }

    isCheckboxNotSelected() {
        return cy.get(this.rememberMeCheckbox).should('not.be.checked');
    }
}

export const homePage = new HomePage();