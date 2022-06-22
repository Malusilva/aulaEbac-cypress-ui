/// <rference types="cypress" />

describe('Funcionalidade Página de produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve escolher um Produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Abominable Hoodie')
            .click()
    });

    it('Deve adicionar produtos ao carrinho', () => {
        var quantidade = 2

        cy.get('[class="product-block grid"]')
            .contains('Aether Gym Pant').click()

        cy.get('.button-variable-item-L').click()
        
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho - Usando Comando Customizado', () => {
        cy.addProdutos('Aether Gym Pant', '33', 'Blue', 4)
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando Customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'L', 'Yellow', 1)
    });

});