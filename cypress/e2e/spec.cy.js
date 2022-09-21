
import chai, { expect } from 'chai'

describe('empty spec',  () => {
  it('passes', async () => {

    chai.use(require('sinon-chai'));
    cy.visit('localhost:3000')

    //cy.findByText(/Gagan/i, {timeout: 7000}).should('exist')
    expect(await cy.findByText(/John/i).should('exist'))
    //expect(await cy.findByText(/Designer/i).should('exist'))
    //expect(await cy.findByText(/Books/i).should('exist'))
  })
})


