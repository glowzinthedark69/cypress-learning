// Test suite
describe('My Second Test Suite', () => {
  // Test case
  it('Interacts with an element and asserts the reaction', () => {
    // Step 1: Visit a webpage (let's use Cypress's Kitchen Sink example page)
    cy.visit('https://example.cypress.io')

    // Step 2: Find an element (let's click on the link 'type' which navigates us to a page with an input box)
    cy.contains('type').click()

    // Assert that the new URL should include '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Step 3: Interact with that element (let's type something in the input box with the .action-email class)
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com') // Assert that the input box has the text we typed

    // Step 4: Assert that the page reacts correctly (in this case, the assertion is made in the step 3 itself)
    // so no more actions needed for this step in this example.
  })
})