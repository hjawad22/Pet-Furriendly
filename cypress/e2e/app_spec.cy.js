describe('App component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://pet-furriendly-server.onrender.com/api/v1/places', {
      statusCode: 200,
      fixture: 'places'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should display the header with slogan', () => {
    cy.get('header')
    cy.contains('h1', 'Pet Furriendly')
    cy.contains('h2', 'If you\'re there, they\'re there.')
  })

  it('Should have a search input', () => {
    cy.get('.form-container')
    .contains('h2', 'Search by City:')
    .get('.city-inp')
    .get('[placeholder="City"]')
  })

  it('Should display all locations upon arriving to page', () => {
    cy.get('.results-container')
    .get('.card-container')
    .should('have.length', 24)
    .get('.card-container')
    .children().first()
    cy.contains('p','Improper City')
    cy.contains('p', 'Denver, Colorado')
    cy.contains('p','Restaurants & Bars')
  })

  it('Should display the last location on the page', () => {
    cy.get('.results-container')
    .get('.card-container')
    .should('have.length', 24)
    .children().last()
    cy.contains('p', 'Palmer Park')
    cy.contains('p', 'Colorado Springs, Colorado')
    cy.contains('p', 'Outdoorsy')
  })
})