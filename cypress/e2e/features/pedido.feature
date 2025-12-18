@e2e @smoke
Feature: Realizar pedido com sucesso

  Scenario: Realizar pedido completo com sucesso
    Given que o usuário acessa a página inicial do AutomationExercise
    When o usuário busca um produto "dress"
    And adiciona o primeiro produto ao carrinho
    And acessa o carrinho
    And realiza login com credenciais válidas
    And inicia o checkout
    And finaliza o pedido com sucesso
    Then a confirmação do pedido deve ser exibida
