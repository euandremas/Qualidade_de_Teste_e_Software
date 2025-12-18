class LoginPage {
  visitHome() {
    cy.visit("/");
  }

  goToLoginDirect() {
    // Bypass estável (o site às vezes não navega pelo modal)
    cy.visit("/login");
    cy.location("pathname", { timeout: 10000 }).should("include", "/login");
  }

  fillEmail(email) {
    cy.get('input[data-qa="login-email"]', { timeout: 10000 })
      .should("be.visible")
      .clear()
      .type(email);
  }

  fillPassword(password) {
    cy.get('input[data-qa="login-password"]', { timeout: 10000 })
      .should("be.visible")
      .clear()
      .type(password);
  }

  submit() {
    cy.get('button[data-qa="login-button"]', { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  assertLoggedIn() {
    cy.contains("Logged in as", { timeout: 10000 }).should("be.visible");
  }
}

module.exports = new LoginPage();
