describe('Critical Path', () => {
  it('Player login to playersite', () => {
    cy.visit('https://blackflexible2.580bet.com')
    cy.get('#loginBtn').click()
    cy.get('#loginUsername').clear().type("testautomation")
    cy.get('#loginPassword').clear().type("1234qwer")
    cy.get('#loginSubmitBtn').click()
  })
})
