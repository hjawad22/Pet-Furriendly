beforeEach(() => {
  cy.intercept('http://localhost:8080/api/v1/places', {
    'content-type': 'application/json',
    fixture: 'places',
  })
  cy.visit('http://localhost:3000/?city=s')
})

describe('User can use the search bar to filter places by city name', () => {
  it('will see a search bar with an input field and search for a city', () => {
    cy.get('input').type("denver")
  })

  it('will show nothing if the city is not there', () => {
    cy.get('input').type('Boston')
  })
})