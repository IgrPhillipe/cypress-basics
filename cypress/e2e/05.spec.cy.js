describe('Using checkboxes', () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('Should check each checkbox and uncheck the last one', () => {
    cy.get('input[type=checkbox]').should('have.length', 2).each(($el) => {
      cy.wrap($el).check().should('be.checked');
    }).last().uncheck().should('not.be.checked');
  });

  it('Should check phone checkbox and show error when phone is empty', () => {
    cy.get('input[type=checkbox][value=phone]').check();
    cy.fillMandatoryFieldsAndSubmit(
      'John',
      'Doe',
      'john.doe@mail.com',
      'Lorem ipsum dolor sit amet'
    );

    cy.get('.error').should('be.visible');
  });
})