
describe('Test api GET', () => {
    it('GET-test', () => {
      cy.request('GET', 'http://localhost:3000/posts/').then((response) => {
        expect(response).to.have.property('status', 200)
        expect(response.body).to.not.be.null
        expect(response.body).to.have.length(1)
      })
    })

  })