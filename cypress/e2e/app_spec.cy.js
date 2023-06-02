describe('App component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'http://localhost:8080/api/v1/places', {
      statusCode: 200,
      fixture: 'places'
    })
  })
  it('Should have a search input', () => {
    cy.get('.city-inp')
    .get('[placeholder="City"]')
  })
  it('Should display all locations upon arriving to page', () => {
    cy.get('.results-container')
    .get('.card-container')
    .should('have.length', 24)
    .get('.card-container')
    .children().first()
    cy.contains('h3','Improper City')
    cy.contains('p', 'Denver, Colorado')
    cy.contains('p','Restaurants & Bars')
  })

  it('Should display the last location on the page', () => {
    cy.get('.results-container')
    .get('.card-container')
    .should('have.length', 24)
    .children().last()
    .get('[href="/details/24"] > .card-container')
    .get('[href="/details/24"] > .card-container > .card-details > .card-name').should('have.text', 'Palmer Park')
  })
})












    // .get('.card.container').first()
    // .should('have.text', "Improper City")
    // .first()
    // .find('[src="https://www.impropercity.com/wp-content/uploads/photo-gallery/venue-05.jpg?bwg=1677263338"]')
    // .find('[alt="outdoor patio with picnic tables, food trucks, people hanging out, and a couple of dogs"]')
    // .get('.card-name')
    // .get('.card-image')
    // .get('[src="https://www.impropercity.com/wp-content/uploads/photo-gallery/venue-05.jpg?bwg=1677263338"]')
    // .get('[alt="outdoor patio with picnic tables, food trucks, people hanging out, and a couple of dogs"]')
    // .get('.card-name')
    // .get('.card-location')
    // .get('.card-category')