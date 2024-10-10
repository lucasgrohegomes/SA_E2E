describe('"Verificar se o sistema impede o login com nome de usuário ou senha incorretos."', () => {
    it('"O sistema deve exibir uma mensagem de erro informando que as credenciais estão incorretas." (primeiro será com a senha errada, depois com o nome de usuário errado)', () => {

        // Visita a página de login do site.
        cy.visit('http://127.0.0.1:5500/app/login.html');

        // Preenche os dados de nome de usuário e senha nos inputs do formulário, como ambos os valores não são "admin" ao mesmo tempo, naturalmente deverá falhar (testando com a senha errada).
        cy.get('#usrName').type('admin');
        cy.get('#usrPass').type('teste123');

        // Clica no botão para realizar o login, o resultado esperado é um alert que diga 'Nome de Usuário ou Senha Incorretos.'. 
        cy.get('button').contains('Entrar').click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Nome de Usuário ou Senha Incorretos.');
        })

        //*Se por algum motivo o login for bem sucedido, o usuário irá para a tela da loja.

        // Visita a página de login do site (testando com o nome de usuário errado.).
        cy.visit('http://127.0.0.1:5500/app/login.html');
        cy.get('#usrName').type('teste123');
        cy.get('#usrPass').type('admin');
        cy.get('button').contains('Entrar').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Nome de Usuário ou Senha Incorretos.');
        })
    })
})