describe('"Verificar se o campo de pesquisa retorna os resultados esperados." (camisa de cor BRANCA)', () => {
    it('"A lista de produtos ou itens pesquisados é exibida de forma precisa." (sem nenhuma <img> de outra camisa a não ser a branca)', () => {

        // Visita a página principal da loja.
        cy.visit('http://127.0.0.1:5500/app/loja.html')
        
        // Pesquisa na barra de pesquisa pela cor branca, filtrando apenas os itens que são desta cor.
        cy.get('#search-input').type('branca')
        cy.get('button').contains('Pesquisar').click()

        // Verifica que a <img> da camisa branca está visível.
        cy.get('#camisa-branca').should('be.visible')

        // Verifica que a <img> das camisas azul, cinza e preta não estão visíveis.
        cy.get('#camisa-azul').should('not.be.visible')
        cy.get('#camisa-cinza').should('not.be.visible')
        cy.get('#camisa-preta').should('not.be.visible')
    })
})