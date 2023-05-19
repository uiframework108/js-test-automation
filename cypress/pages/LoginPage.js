class LoginPage {

    emailField = "#login-form-username";
    passwordField = "#login-form-password";
    visiblePasswordInput = 'input[type="text"][id="login-form-password"]';
    invisiblePasswordInput = 'input[type="password"][id="login-form-password"]';
    submitButton = "[data-testid=\"login-submit-button\"]";
    showPasswordButton = 'button[class*="MuiButtonBase-root"][class*="MuiIconButton-root"]';
    forgotPasswordLink = "span:contains(\"Forgot your password?\")";
    changeUsernameLink = "span:contains(\"Change username\")";
    rememberMeCheckbox = "input[type=\"checkbox\"]";
    rememberMeText = "span:contains(\"Remember me\")";
    invalidLoginMessage = "div#notistack-snackbar";

  enterEmail(email) {
    cy.get(this.emailField).type(email);
  }

  enterPassword(password) {
    cy.get(this.passwordField).type(password);
  }

  clickLoginButton() {
    cy.get(this.submitButton).click();
  }

  isLoginButtonEnabled() {
    return cy.get(this.submitButton).should('be.enabled');
  }

  isLoginButtonDisabled() {
    return cy.get(this.submitButton).should('be.disabled');
  }

  clickForgotPasswordLink() {
    cy.get(this.forgotPasswordLink).click();
  }

  clickChangeUsernameLink() {
    cy.get(this.changeUsernameLink).click();
  }

  isEmailFieldDisplayed() {
    return cy.get(this.emailField).should('be.visible');
  }

  getEmailFieldText() {
    return cy.get(this.emailField).invoke('val');
  }

  isRememberMeTextDisplayed() {
    return cy.get(this.rememberMeText).contains('Remember me').should('be.visible');
  }

  clickRememberMeCheckbox() {
    cy.get(this.rememberMeCheckbox).click();
  }

  isCheckboxSelected() {
    return cy.get(this.rememberMeCheckbox).should('be.checked');
  }

  isPasswordFieldDisplayed() {
    return cy.get(this.passwordField).should('be.visible');
  }

  isSubmitButtonDisplayed() {
    return cy.get(this.submitButton).should('be.visible');
  }

  isForgotPasswordLinkDisplayed() {
    return cy.get(this.forgotPasswordLink).should('be.visible');
  }

  isChangeUsernameButtonDisplayed() {
    return cy.get(this.changeUsernameLink).should('be.visible');
  }

  isShowPasswordButtonDisplayed() {
    return cy.get(this.showPasswordButton).should('be.visible');
  }

  clickShowPasswordButton() {
    cy.get(this.showPasswordButton).click();
  }

  isPasswordVisible() {
    return cy.get(this.visiblePasswordInput).should('be.visible');
  }

  isPasswordNotVisible() {
    return cy.get(this.invisiblePasswordInput).should('be.visible');
  }

  getInvalidLoginMessageText() {
    return cy.get(this.invalidLoginMessage);
  }
}

export const loginPage = new LoginPage();
