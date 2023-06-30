describe("Test Suite for API Project Swagger Doc", () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit("http://127.0.0.1:8000/docs");
  });

  it("Should navigate to the homepage successfully", () => {
    // Assert that the current URL is the homepage
    cy.url().should("include", "/docs");
  });

  it("Find the summary for the first GET listed for /locations", () => {
    // Assert that the navbar exists on the homepage
    cy.get(".opblock-summary-description").contains("Get Locations");
  });

  it("Find the summary for the first POST listed for /locations", () => {
    // Assert that the navbar exists on the homepage
    //cy.get('.opblock-summary-description').contains('Create Location'),
    cy.get(".opblock-summary-description").contains("Create Location").click(),
      cy.get(".opblock-summary-description").contains("Get Location").click();
  });

  it("Find the summary for the first POST listed for /users", () => {
    // Assert that the navbar exists on the homepage
    //cy.get('.opblock-summary-description').contains('Create Location'),
    cy.get(".opblock-summary-description").contains("Get Users").click(),
      cy.get(".opblock-summary-description").contains("Create User").click();
  });
  // More tests...
});
