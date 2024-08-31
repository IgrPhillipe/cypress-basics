describe('Using basic commands', () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('Should check application title', () => {
   cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
  });

  it('Should fill out required fields and submit', () => {
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('john.doe@mail.com');
    cy.get('#open-text-area').type('Lorem ipsum dolor sit amet')
    cy.contains('Enviar').click();
   });

   it('Should use delay option in type function', () => {
    cy.get('#firstName').type('John', { delay: 0 });
   });

   it('Should test invalid email', () => {
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('john.doe.com');
    cy.get('#open-text-area').type('Lorem ipsum dolor sit amet')
    cy.contains('Enviar').click();
    cy.get('.error').should('be.visible');
   });

   it('Should test if phone input not allow non-numeric values', () => {
    cy.get('#phone').type('test');
    cy.get('#phone').should('have.value', '');
   });

   it('Should test if phone input not allow non-numeric values', () => {
    cy.get('#phone').type('test');
    cy.get('#phone').should('have.value', '');
   });

   it('Should show error message when phone is required but is empty', () => {
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#phone-checkbox').check();
    cy.get('#email').type('john.doe@mail.com');
    cy.get('#open-text-area').type('Lorem ipsum dolor sit amet')
    cy.contains('Enviar').click();
    cy.get('.error').should('be.visible');
   });

   it('Should fill and clean inputs', () => {
    cy.get('#firstName').type('John').should('have.value', 'John');
    cy.get('#lastName').type('Doe').should('have.value', 'Doe');
    cy.get('#phone-checkbox').check().should('have.value', 'phone');
    cy.get('#email').type('john.doe@mail.com').should('have.value', 'john.doe@mail.com');
    cy.get('#open-text-area').type('Lorem ipsum dolor sit amet').should('have.value', 'Lorem ipsum dolor sit amet');
    cy.get('#firstName').clear().should('have.value', '');
    cy.get('#lastName').clear().should('have.value', '');
    cy.get('#phone-checkbox').uncheck();
    cy.get('#email').clear().should('have.value', '');
    cy.get('#open-text-area').clear().should('have.value', '');
   });

   it('Should show error message when required fields are empty', () => {
    cy.contains('Enviar').click();
    cy.get('.error').should('be.visible');
   });

   it('Should use command to fill out required fields and submit', () => {
    cy.fillMandatoryFieldsAndSubmit(
      'John',
      'Doe',
      'john.doe@mail.com',
      'Lorem ipsum dolor sit amet'
    );
    cy.get('.success').should('be.visible');
   });

   it('Should use command to fill out required fields and submit', () => {
    cy.fillMandatoryFieldsAndSubmit(
      'John',
      'Doe',
      'john.doe@mail.com',
      'Lorem ipsum dolor sit amet'
    );
    cy.get('.success').should('be.visible');
   });
})