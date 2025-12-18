Feature: Login no AutomationExercise

    Scenario: Login com credenciais válidas
        Given que estou na página inicial do AutomationExercise
        And acesso a tela de Login
        When realizo login com usuário válido
        Then devo ver que estou autenticado

