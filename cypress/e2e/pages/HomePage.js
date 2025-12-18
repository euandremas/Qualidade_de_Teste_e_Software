class HomePage {
  visit() {
    cy.visit("/");
    cy.get("body").should("be.visible");
  }

  goToProducts() {
    cy.contains("Products").click();
  }
}

module.exports = new HomePage();
