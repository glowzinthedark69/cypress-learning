describe('Test Suite for Form Submission Practice', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('https://demoqa.com/text-box')
    })

    // Ignore all uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
    })

    // Step 1: Navigate to the test site successfully
    it('Should navigate to the test page successfully', () => {
        // Assert that the current URL is the homepage
        cy.url().should('include', '/text-box')
        // Assert that the "Text Box" heading exists on the page as expected
        cy.get('div.main-header').contains('Text Box')
    })

    // Step 3: Interact with the form elements and validate form submission
    it('Validate form submission is successful', () => {
        // Type into the fields and assert that they have the text we typed
        cy.get('#userName')
            .type('student')
            .should('have.value', 'student')
        cy.get('#userEmail')
            .type('test@test.com')
            .should('have.value', 'test@test.com')
        cy.get('#currentAddress')
            .type('13678 Krameria St.\nThornton, CO\n80602')
            .should('have.value', '13678 Krameria St.\nThornton, CO\n80602')
        cy.get('#permanentAddress')
            .type('13678 Krameria St.\nThornton, CO\n80602')
            .should('have.value', '13678 Krameria St.\nThornton, CO\n80602')

        // Click the submit button
        cy.get('#submit').click()

        // Validate the output (you need to check the actual output elements and values)
        // Example:
        cy.get('#output').within(() => {
            cy.get('#name').should('contain', 'student')
            cy.get('#email').should('contain', 'test@test.com')
            // ... other assertions for output
        })
    })

    it('Validate form submission is not successful when email is not formatted properly', () => {
        // Type into the fields and assert that they have the text we typed
        cy.get('#userName')
            .type('student')
            .should('have.value', 'student')
        cy.get('#userEmail')
            .type('test#test.com')
            .should('have.value', 'test#test.com')
        cy.get('#currentAddress')
            .type('13678 Krameria St.\nThornton, CO\n80602')
            .should('have.value', '13678 Krameria St.\nThornton, CO\n80602')
        cy.get('#permanentAddress')
            .type('13678 Krameria St.\nThornton, CO\n80602')
            .should('have.value', '13678 Krameria St.\nThornton, CO\n80602')

        // Click the submit button
        cy.get('#submit').click()

        // The element has an id attribute with the value userEmail and a class attribute with the values mr-sm-2, field-error, and form-control.
        // Check for the field-error class which indicates an error
        cy.get('#userEmail.field-error').should('exist');
        cy.get('#userEmail').should(($input) => {
            // Get the CSS color property of the input field
            const color = $input.css('border');

            // Assert that the color is what you expect
            expect(color).to.equal('1px solid rgb(255, 0, 0)');
        });
    })
})