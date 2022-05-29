/// <reference types="cypress" />
const { faker } = require('faker-br')
 
describe('Funcionalidade Pré Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
 
    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('@Maria!&23')
        cy.get(':nth-child(4) > .button').click()
 
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Perola')
        cy.get('#account_last_name').type('Santos')
        cy.get('.woocommerce-Button').click()
    });
 
 
});
