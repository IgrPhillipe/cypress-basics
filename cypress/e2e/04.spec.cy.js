describe('Using radios', () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('Should check a radio button', () => {
    cy.get('input[type=radio][value="feedback"]').check().should('be.checked');
  });

  it('Should check each radio button', () => {
    cy.get('input[type=radio]').should('have.length', 3).each(($el) => {
      cy.wrap($el).check().should('be.checked');
    });
  });
})