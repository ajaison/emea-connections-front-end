describe('empty spec',  () => {
  it('passes', async () => {
    cy.visit('/');
    cy.findByText("Create Person").should("exist");

    cy.findByRole("textbox", { name: /full name/i }).type("John Smith");

    cy.findByText(/John/i).should('exist');
  })
})


