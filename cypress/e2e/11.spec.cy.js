const URL = 'https://cac-tat.s3.eu-central-1.amazonaws.com/index.html';

describe('Using requests', () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('Check if request is successfully', () => {
    cy.request(URL).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK');
      expect(response.body).to.include('CAC TAT');
    });
  })
})