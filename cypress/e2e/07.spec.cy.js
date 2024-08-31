describe('Using anchor tags', () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('Should check if a tag has target blank', () => {
    cy.get('a').should('have.attr', 'target', '_blank');
  });

  it('Should remove target attribute from tag a and open privacy page', () => {
    cy.get('a').invoke('removeAttr', 'target').click();
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT - Política de privacidade');
  });

  it('Should open tag a href in same page', () => {
    cy.visit('./src/privacy.html');
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT - Política de privacidade');
  });
})