/// <reference types="cypress" />

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        //fazer login(Criar comando custumizado)
        //fazer cadstro de endereço
    });
    
});