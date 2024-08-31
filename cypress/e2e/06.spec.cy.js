describe('Using input file', () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('Should select a file and check file name', () => {
    cy.get('input[type=file]').selectFile('cypress/fixtures/example.json');
    cy.get('input[type=file]').should(($el) => expect($el[0].files[0].name).to.eq('example.json'));
  });

  it('Should select a file using drag and drop', () => {
    cy.get('input[type=file]').selectFile('cypress/fixtures/example.json', {
      action: 'drag-drop'
    });
    cy.get('input[type=file]').should(($el) => expect($el[0].files[0].name).to.eq('example.json'));
  });

  it('Should select a file using fixture alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('input[type=file]').selectFile('@sampleFile', {
      action: 'drag-drop'
    });
    cy.get('input[type=file]').should(($el) => expect($el[0].files[0].name).to.eq('example.json'));
  });
})