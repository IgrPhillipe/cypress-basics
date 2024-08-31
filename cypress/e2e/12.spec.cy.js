const emoji = '🐈';

describe('Final challenge', () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('Find cat emoji', () => {
    cy.visit("./src/index.html").contains(emoji).invoke('show').should('be.visible');
  })
})