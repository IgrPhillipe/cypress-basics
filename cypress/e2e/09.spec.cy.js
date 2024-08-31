Cypress._.times(3, () => {
  describe('Using lodash features', () => {
    beforeEach(() => {
      cy.visit("./src/index.html");
    });
  
    it('Should run test 3 times', () => {
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
});