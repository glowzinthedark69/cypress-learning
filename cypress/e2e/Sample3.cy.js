describe('Cypress.io example page', () => {
    it('interacts with various elements', () => {
        cy.visit('https://example.cypress.io')

        // Check that the page contains a certain text
        cy.contains('type').should('be.visible')

        // Click on a link that contains the text 'type'
        cy.contains('type').click()

        // You should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // Get an input box and type into it
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')

        // Check a checkbox
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
            .check().should('be.checked')

        // Uncheck a checkbox
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
            .uncheck().should('not.be.checked')

        // Select an option from a dropdown
        cy.get('.action-select').select('apples')
            .should('have.value', 'fr-apples')
    })
})