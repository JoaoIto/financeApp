// Arquivo de Suporte do Cypress
// Comandos globais e configurações podem ser inicializados aqui

// Comando global, por exemplo:
Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});

// Configurações globais podem ser feitas também aqui
before(() => {
    // Executar algo antes dos testes, por exemplo, iniciar uma aplicação ou mock de dados
    console.log("Iniciando os testes!");
});

after(() => {
    // Executar algo após todos os testes, por exemplo, limpar cache ou resetar dados
    console.log("Finalizando os testes!");
});
