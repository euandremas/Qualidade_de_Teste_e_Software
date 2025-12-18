class CartPage {
  assertHasItems() {
    cy.get("#cart_info_table").should("be.visible");
  }

  proceedToCheckoutOrLogin() {
    cy.contains("Proceed To Checkout").click();
    // Se o site exigir login, ele manda pra Signup/Login via modal/flow
    cy.contains("Register / Login").then(($btn) => {
      if ($btn.length) cy.wrap($btn).click();
    });
  }

  goToCartIfNeeded() {
    cy.contains("Cart").click();
  }

  proceedToCheckout() {
    cy.contains("Proceed To Checkout").click();
  }
}

module.exports = new CartPage();
