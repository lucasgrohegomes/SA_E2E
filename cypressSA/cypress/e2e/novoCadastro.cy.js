describe('"Testar o fluxo de cadastro de um novo usuário no sistema". (usuário "teste")', () => {
    it('"O usuário é cadastrado com sucesso e redirecionado para a página principal da loja."', () => {

        // Visita a página de cadastro do site.
        cy.visit('http://127.0.0.1:5500/app/cadastro.html');

        // Preenche os dados de nome de usuário, senha e "confirmar senha" nos inputs do formulário com os valores "admin", estes valores devem ser aceitos pelo formulário. O valor do email deve ser obrigatoriamente de um email, o valor do campo "confirmar senha" deve ser igual ao da senha.
        cy.get('#usrName').type('teste');
        cy.get('#usrMail').type('teste@exemplo.com');
        cy.get('#usrPass').type('teste123');
        cy.get('#usrCPass').type('teste123');

        // Clica no botão para realizar o cadastro, o resultado esperado é a ida do usuário para a tela da loja.
        cy.get('button').contains('Registrar').click();
        cy.url().should('include', '/loja');

        //*Se por algum motivo o cadastro não for bem sucedido, o resultado esperado é um alert que diga 'Todos os campos são obrigatórios.' ou 'Preencha o campo "Confirme a Senha" corretamente.'.
    })
})