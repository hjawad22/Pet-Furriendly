describe('Errors spec', () => {
  it('should display error message for home page for client side error', () => {
    cy.intercept("GET", "https://pet-furriendly-server.onrender.com/api/v1/places", {
      statusCode: 404,
    });
    cy.visit('http://localhost:3000')
    cy.get('header').contains('h1', 'Pet Furriendly')
    cy.get('header').contains('.slogan', "If you're there, they're there.")
      cy.get('.error').contains('Oops! We seem to be having some technical issues, please try again later!')
      .get('.sad-dog-img').should('be.visible')
  })

  it('should display error message for home page for server side error', () => {
    cy.intercept("GET", "https://pet-furriendly-server.onrender.com/api/v1/places", {
      statusCode: 500,
  
    });
    cy.visit('http://localhost:3000')
      .get('.error').contains('Oops! We seem to be having some technical issues, please try again later!')
     .get('.sad-dog-img').should('be.visible')
  })

  it('should display error message for wild card path', () => {
    cy.intercept("GET", "https://pet-furriendly-server.onrender.com/api/v1/places", {
      statusCode: 200,
      fixture: "places"
    });
    cy.visit('http://localhost:3000/24')
      .get('.error').contains('Page not Found')
      .get('.sad-dog-img').should('be.visible')
      .get('.error-back-button')
      .click()
      .url().should('eq', 'http://localhost:3000/');
  });

})