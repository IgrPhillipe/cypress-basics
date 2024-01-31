Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (firstName, lastName, email, feedback) => { 
  cy.get('#firstName').type(firstName);
  cy.get('#lastName').type(lastName);
  cy.get('#email').type(email);
  cy.get('#open-text-area').type(feedback)
  cy.get('button').click();
 })