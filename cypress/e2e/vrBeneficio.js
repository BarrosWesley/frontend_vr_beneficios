
describe('Teste de Navegação e Validação do Mapa VR', () => {
  it('Acessa o site VR e valida o mapa do Google', () => {
    // Navegar até a seção "Pra Você"
    cy.visit('/onde-aceita.htm');
       
    // Clicar no botão "Onde usar meu cartão VR"
    cy.contains('Onde usar meu cartão VR').click();
    //cy.pause()
    
    // Aguardar o mapa do Google carregar
    cy.get('#map').should('be.visible');
    
  });
});