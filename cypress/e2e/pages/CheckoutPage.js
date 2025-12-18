class CheckoutPage {
  assertCheckoutPage() {
    // Garante que está na página de checkout
    cy.location("pathname", { timeout: 10000 }).should("include", "/checkout");

    // Confirma elementos-chave da tela
    cy.contains("Address Details").should("be.visible");
    cy.contains("Review Your Order").should("be.visible");
  }

  placeOrder() {
    cy.contains("Place Order", { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  fillPaymentAndConfirm() {
    cy.get('input[data-qa="name-on-card"]').type("Teste QA");
    cy.get('input[data-qa="card-number"]').type("4111111111111111");
    cy.get('input[data-qa="cvc"]').type("123");
    cy.get('input[data-qa="expiry-month"]').type("12");
    cy.get('input[data-qa="expiry-year"]').type("2026");

    cy.get('button[data-qa="pay-button"]').click();
  }

  assertOrderConfirmed() {
    cy.contains("Order Placed!", { timeout: 10000 }).should("be.visible");
    cy.contains("Congratulations").should("be.visible");
  }
}

module.exports = new CheckoutPage();
