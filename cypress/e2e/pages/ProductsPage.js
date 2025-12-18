class ProductsPage {
  search(term) {
    cy.get("#search_product").clear().type(term);
    cy.get("#submit_search").click();
  }

  assertSearchResults() {
    cy.contains("Searched Products", { matchCase: false }).should("be.visible");
  }

  addFirstProductToCart() {
    cy.get(".product-image-wrapper").first().trigger("mouseover");
    cy.contains("Add to cart").first().click({ force: true });
  }

  continueShopping() {
    cy.contains("Continue Shopping").click();
  }

  goToCart() {
    cy.contains("Cart").click();
  }
}

module.exports = new ProductsPage();
