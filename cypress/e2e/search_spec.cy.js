
describe('User can use the search bar to filter places by city name', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:8080/api/v1/places', {
      'content-type': 'application/json',
      fixture: 'places',
    })
    cy.visit('http://localhost:3000/?city=s')
  })
  
  it('will see a search bar with an input field and search for a city', () => {
    cy.get('input').type("denver").get('.card-container').should('have.length', 6)
  })

  it('will show nothing if the city is not there', () => {
    cy.get('input').type('Boston').get('p').contains('We a-paw-logize, there are no current results for this city!')
  })
})