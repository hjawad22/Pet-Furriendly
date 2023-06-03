describe('User flow to Details page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://pet-furriendly-server.onrender.com/api/v1/places', {
      statusCode: 200,
      fixture: 'places'
    })
    cy.visit('http://localhost:3000/')
  });

  it('Should allow a user to select one place from the results list and be redirected to a details page', () => {
    cy.get('.card-container').contains('p', 'The Exchange').click()
    cy.url().should('eq', 'http://localhost:3000/details/3')
  });

  it('Should display a new page with additional info about the specific place', () => {
    cy.visit('http://localhost:3000/details/3')
    cy.get('.header').contains('h1', 'Pet Furriendly')
    cy.get('.details-image').should('have.attr', 'src', 'https://www.theexchangefortcollins.com/wp-content/uploads/5x7-scaled.jpg')
      .should('have.attr', 'alt', 'aerial view of an outdoor space with people')
    cy.get('.details-name').should('have.text', 'The Exchange')
    cy.get('p').contains('Attractions')
    cy.get('p').contains('Rating: 5')
    cy.get('p').contains('Like a public backyard! The Exchange is a must-see destination in the heart of Old Town Fort Collins. The common consumption plaza is family-friendly and makes it easy for your group to sample a variety of food and drinks from the local businesses that surround it. With year-round events, specials, and entertainment, there\'s truly something for everyone. Check out the pet-friendly indoor mini-golf bar.')
    cy.get('p').contains('200 N College Avenue')
    cy.get('.link').should('have.attr', 'href', 'https://www.theexchangefortcollins.com/')
    cy.get('.button-back').contains('Back to search results')
  });

  it('Should allow a user to go back to the homepage, which will display the same filtered results list', () => {
    cy.get('.city-inp').type('Boul')
    cy.get('.results-container')
      .get('.card-container')
      .should('have.length', 1)
    cy.get('.card-container').contains('p', 'Rayback').click()
    cy.url().should('eq', 'http://localhost:3000/details/2')
    cy.get('.button-back').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.results-container')
      .get('.card-container')
      .should('have.length', 1)
  });
});