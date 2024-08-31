describe('Using invoke', () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('Show and hide error and success messages using .invoke', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible');

    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible');
  })

  it('Fill text-area using invoke', () => {
    const loremIpsum = 'Lorem ipsum dolor sit amet';
    cy.get('#open-text-area').invoke('val', loremIpsum).should('have.value', loremIpsum);
  })
})