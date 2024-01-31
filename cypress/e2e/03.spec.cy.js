describe('Using selects', () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('Should select an option from its text', () => {
    cy.get('#product').select('YouTube').should('have.value', 'youtube');
  });

  it('Should select an option from its value', () => {
    cy.get('#product').select('mentoria').should('have.value', 'mentoria');
  });

  it('Should select an option from its value', () => {
    cy.get('#product').select(1).should('have.value', 'blog');
  });
})