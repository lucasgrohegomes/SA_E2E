describe('"O usuário deve conseguir realizar login no sistema com um nome de usuário e senha corretos." (ambos "admin")', () => {
    it("O usuário é redirecionado com sucesso para a página da Loja Luquistica.", () => {

        // Visita a página de login do site.
        cy.visit('http://127.0.0.1:5500/app/login.html');

        // Preenche os dados de nome de usuário e senha nos inputs do formulário com os valores "admin", estes valores devem ser aceitos pelo formulário.
        cy.get('#usrName').type('admin');
        cy.get('#usrPass').type('admin');

        // Clica no botão para realizar o login, o resultado esperado é a ida do usuário para a tela da loja.
        cy.get('button').contains('Entrar').click()
        cy.url().should('include', '/loja')

        //*Se por algum motivo o login não for bem sucedido, o resultado esperado é um alert que diga 'Nome de Usuário ou Senha Incorretos.'.
    })
})