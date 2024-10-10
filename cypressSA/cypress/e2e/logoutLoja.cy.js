describe('"Verificar se o usuário consegue realizar o logout com sucesso."', () => {
    it('"O usuário deve ser redirecionado para a página da loja via login, e então devolta para a tela login por logout, e a sessão deve ser encerrada corretamente."', () => {

        // Visita a página de login do site, o objetivo é logar na conta do admin e depois voltar para a tela de login.
        cy.visit('http://127.0.0.1:5500/app/login.html')
        
        // Preenche os dados de nome de usuário e senha nos inputs do formulário com os valores "admin", estes valores devem ser aceitos pelo formulário.
        cy.get('#usrName').type('admin');
        cy.get('#usrPass').type('admin');

        // Clica no botão para realizar o login, o resultado esperado é a ida do usuário para a tela da loja.
        cy.get('button').contains('Entrar').click()
        cy.url().should('include', '/loja')

        //*Se por algum motivo o login não for bem sucedido, o resultado esperado é um alert que diga 'Nome de Usuário ou Senha Incorretos.'.

        // Seleciona a tag <a> de id "header-link", ela deverá levar o usuário de volta à tela de login, assim realizando o logout.
        cy.get('#header-link').click()
        cy.url().should('include', '/login')
    })
})