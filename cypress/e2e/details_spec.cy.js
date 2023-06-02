describe('User flow to Details page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'http://localhost:8080/api/v1/places', {
      statusCode: 200,
      fixture: 'places'
    })
  });

  it.skip('Should allow a user to select one place from the results list, and redirect to a details page', () => {
    
  });

  it.skip('Should display a new page with additional info about the specific place', () => {
    
  });

  it.skip('Should allow a user to go back to the homepage, which will display the same filtered results list', () => {
    // make sure this is how the code is working
  });

  it.skip('Should ', () => {
    
  });
});