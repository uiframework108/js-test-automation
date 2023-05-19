import '@shelex/cypress-allure-plugin';

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore the uncaught exception and prevent it from failing the test
    return false;
});