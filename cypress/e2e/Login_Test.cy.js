describe('Test Suite for Login Test Page', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    // Step 1: Navigate to the test site successfully
    it('Should navigate to the homepage successfully', () => {
        // Assert that the current URL is the homepage
        cy.url().should('include', '/practice-test-login')
    })

    // Step 2: Validate the correct page is loaded based on the primary heading
    it('Validate the correct page was loaded', () => {
        // Assert that the "Test login" heading" exists on the page as expected
        cy.get('h2').contains('Test login')
    })

    // Step 3: Interact with the login elements (let's type something in the input box with the .action-email class)
    it('Validate the correct page was loaded', () => {
        // Assert that the credentials fields exists on the page as expected and we can type into them
        cy.get('[id=username]')
            .type('student')
            .should('have.value', 'student') // Assert that the input box has the text we typed
        cy.get('[id=password]')
            .type('Password123')
            .should('have.value', 'Password123') // Assert that the input box has the text we typed
        cy.get('[id=submit]').click()
            cy.get('h1').contains('Logged In Successfully') // Assert that the login was successful
        cy.get('.wp-block-button').click()
            cy.get('h2').contains('Test login') // Assert that the log out process was successful
    })

    //   it('Find the summary for the first POST listed for /users', () => {
    //     // Assert that the navbar exists on the homepage
    //     //cy.get('.opblock-summary-description').contains('Create Location'),
    //     cy.get('.opblock-summary-description').contains('Get Users').click(),
    //     cy.get('.opblock-summary-description').contains('Create User').click()
    //   })
    // More tests...
})