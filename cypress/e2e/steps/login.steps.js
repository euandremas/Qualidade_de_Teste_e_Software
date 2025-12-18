import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const LoginPage = require("../pages/LoginPage");

Given("que estou na página inicial do AutomationExercise", () => {
  LoginPage.visitHome();
});

Given('acesso a tela de Login', () => {
  cy.visit('/login');
});

When("realizo login com usuário válido", () => {
  cy.fixture("user").then((user) => {
    LoginPage
      .fillEmail(user.email)
      .fillPassword(user.password);

    LoginPage.submit();
  });
});

Then("devo ver que estou autenticado", () => {
  LoginPage.assertLoggedIn();
});

