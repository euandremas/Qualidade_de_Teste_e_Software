import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const HomePage = require("../pages/HomePage");
const ProductsPage = require("../pages/ProductsPage");
const CartPage = require("../pages/CartPage");
const LoginPage = require("../pages/LoginPage");
const CheckoutPage = require("../pages/CheckoutPage");

Given("que o usuário acessa a página inicial do AutomationExercise", () => {
  HomePage.visit();
});

When("o usuário busca um produto {string}", (termo) => {
  HomePage.goToProducts();
  ProductsPage.search(termo);
  ProductsPage.assertSearchResults();
});

When("adiciona o primeiro produto ao carrinho", () => {
  ProductsPage.addFirstProductToCart();
  ProductsPage.continueShopping();
});

When("acessa o carrinho", () => {
  ProductsPage.goToCart();
  CartPage.assertHasItems();
});

When("realiza login com credenciais válidas", () => {
  // Abre o modal de checkout/login (se aparecer)
  CartPage.proceedToCheckoutOrLogin();

  // Bypass estável: vai direto para a tela de login
  LoginPage.goToLoginDirect();

  cy.fixture("user").then((user) => {
    LoginPage.fillEmail(user.email);
    LoginPage.fillPassword(user.password);
    LoginPage.submit();
  });

  LoginPage.assertLoggedIn();
});

When("inicia o checkout", () => {
  // Após logar, volta ao carrinho e segue checkout
  CartPage.goToCartIfNeeded();
  CartPage.proceedToCheckout();
  CheckoutPage.assertCheckoutPage();
});

When("finaliza o pedido com sucesso", () => {
  CheckoutPage.placeOrder();
  CheckoutPage.fillPaymentAndConfirm();
});

Then("a confirmação do pedido deve ser exibida", () => {
  CheckoutPage.assertOrderConfirmed();
});
