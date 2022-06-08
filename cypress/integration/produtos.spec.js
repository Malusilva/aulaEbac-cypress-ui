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

    it.only('Deve adicionar produtos ao carrinho', () => {
        var quantidade = 2

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()

        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')


    });

});