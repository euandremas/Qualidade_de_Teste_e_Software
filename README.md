# 🧪 Automação de Testes Web com Cypress + BDD

Este projeto foi desenvolvido como **atividade final da disciplina Qualidade e Teste de Software**, com o objetivo de aplicar na prática conceitos de **testes manuais, testes automatizados e BDD (Behavior Driven Development)**.

A automação foi construída utilizando **Cypress** integrado com **Cucumber**, aplicando o padrão **Page Object Model** e cenários escritos em **Gherkin (Given / When / Then)**.

---

## 📌 Tecnologias Utilizadas

- **Cypress** (v15+)
- **Cypress Cucumber Preprocessor (@badeball)**
- **JavaScript**
- **BDD (Gherkin)**
- **Page Object Model**
- **AutomationExercise** (site de prática)

---

## 🌐 Sistema Testado

Site utilizado para os testes automatizados:
🔗 [https://automationexercise.com](https://automationexercise.com)

---

## 📂 Estrutura do Projeto

```
cypress/
├─ e2e/
│  ├─ features/
│  │  ├─ login.feature
│  │  └─ pedido.feature
│  ├─ steps/
│  │  ├─ login.steps.js
│  │  └─ pedido.steps.js
│  └─ pages/
│     ├─ HomePage.js
│     ├─ LoginPage.js
│     ├─ ProductsPage.js
│     ├─ CartPage.js
│     └─ CheckoutPage.js
├─ fixtures/
│  └─ user.json
├─ support/
│  ├─ commands.js
│  └─ e2e.js
cypress.config.js
package-lock.json
package.json
README.md
```

---

## 🧠 Abordagem de Testes

### 🔹 Testes Manuais

Os testes manuais foram planejados, executados e documentados em ferramenta de gerenciamento de testes, com:

- criação de cenários
- plano de testes
- execução manual
- evidências anexadas
- relatório de execução

### 🔹 Testes Automatizados (Web)

A automação cobre o **fluxo principal (happy path)** de um pedido:

1. Acessar o site
2. Buscar um produto
3. Adicionar produto ao carrinho
4. Realizar login
5. Iniciar checkout
6. Finalizar pedido
7. Validar confirmação do pedido

---

## 🧾 Cenários BDD (Gherkin)

Exemplo de cenário automatizado:

```gherkin
Scenario: Realizar pedido completo com sucesso
  Given que o usuário acessa a página inicial do AutomationExercise
  When o usuário busca um produto "Dress"
  And adiciona o primeiro produto ao carrinho
  And acessa o carrinho
  And realiza login com credenciais válidas
  And inicia o checkout
  And finaliza o pedido com sucesso
  Then a confirmação do pedido deve ser exibida
```

---

## ▶️ Como Executar o Projeto

### 1️⃣ Pré-requisitos

- Node.js instalado
- Git (opcional)
- Navegador Google Chrome

---

### 2️⃣ Instalar dependências

Na raiz do projeto, execute:

```bash
npm install
```

---

### 3️⃣ Executar os testes (modo interativo)

```bash
npx cypress open
```

- Selecione **E2E Testing**
- Escolha o navegador
- Execute:

  - `login.feature`
  - `pedido.feature`

---

### 4️⃣ Executar os testes em modo headless (opcional)

```bash
npx cypress run
```

---

## 👤 Massa de Dados

Os dados de login estão definidos em:

```
cypress/fixtures/user.json
```

Exemplo:

```json
{
  "email": "teste_henrique@teste.com",
  "password": "senhaTeste"
}
```

> Obs.: Caso o usuário não exista no sistema, o teste pode falhar por **regra de negócio**, o que não invalida a automação para fins acadêmicos.

---

## 🎥 Evidências

- Execução dos testes automatizados foi gravada em vídeo
- Prints do Cypress Runner foram gerados como evidência
- Testes manuais documentados em ferramenta de gerenciamento de testes

---

## 🎯 Objetivo Acadêmico

Este projeto consolida os seguintes aprendizados:

- Planejamento de testes
- Escrita de cenários BDD
- Testes manuais e automatizados
- Automação Web com Cypress
- Organização de projeto em Page Objects
- Boas práticas de QA e Automação

---

## 📝 Avaliação

Este projeto foi desenvolvido conforme os requisitos da atividade final, contemplando:

- Testes manuais documentados em ferramenta de gerenciamento
- Automação Web com Cypress + BDD
- Versionamento em GitHub com README explicativo
- Evidências de execução (prints e vídeo)

## 🚀 CI/CD (Opcional)

A integração com GitHub Actions não foi implementada, pois não era requisito obrigatório da atividade.
Entretanto, o projeto está preparado para futura automação de pipeline CI/CD.

## 👨‍🎓 Autor

**André Santos**
Aluno de Análise e Desenvolvimento de Sistemas
Disciplina: Qualidade e Teste de Software
