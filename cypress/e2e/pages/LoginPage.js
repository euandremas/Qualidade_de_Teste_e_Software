class LoginPage {
  visitHome() {
    cy.visit("/");
    return this;
  }

  goToLoginDirect() {
    cy.visit("/login");
    cy.location("pathname", { timeout: 10000 }).should("include", "/login");
    return this;
  }

  fillEmail(email) {
    cy.get('input[data-qa="login-email"]', { timeout: 10000 })
      .should("be.visible")
      .clear()
      .type(email);
    return this;
  }

  fillPassword(password) {
    cy.get('input[data-qa="login-password"]', { timeout: 10000 })
      .should("be.visible")
      .clear()
      .type(password);
    return this;
  }

  submit() {
    cy.get('button[data-qa="login-button"]', { timeout: 10000 })
      .should("be.visible")
      .click();
    return this;
  }

  assertLoggedIn() {
    cy.contains("Logged in as", { timeout: 10000 }).should("be.visible");
    return this;
  }
}

module.exports = new LoginPage();
