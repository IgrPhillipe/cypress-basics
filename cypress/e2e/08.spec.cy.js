describe('Using time features', () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('Should show success message and disappear after 3 seconds', () => {
    cy.clock();
    cy.fillMandatoryFieldsAndSubmit(
        'John',
        'Doe',
        'john.doe@mail.com',
        'Lorem ipsum dolor sit amet'
      );
      cy.get('.success').should('be.visible');
      cy.tick(3000);
      cy.get('.success').should('not.be.visible');
  });
})