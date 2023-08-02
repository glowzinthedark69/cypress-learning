describe("Test Suite for demo.applitools.com", () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit("https://www.saucedemo.com/");
  });

  // Step 1: Navigate to the test site successfully
  it("Should navigate to the homepage successfully", () => {
    // Assert that the current URL is the homepage
    cy.url().should("include", "saucedemo.com");
    // Assert that the "Test login" heading" exists on the page as expected
    cy.get("h4").contains("Login Form");
  });

  // Step 3: Interact with the login elements (let's type something in the input box with the .action-email class)
  it("Validate login is successful", () => {
    // Assert that the credentials fields exists on the page as expected and we can type into them
    cy.get("[id=username]")
      .type("standard_user")
      .should("have.value", "standard_user"); // Assert that the input box has the text we typed
    cy.get("[id=password]")
      .type("secret_sauce")
      .should("have.value", "secret_sauce"); // Assert that the input box has the text we typed
    cy.get("[id=log-in]").click();
    cy.url().should("include", "/inventory.html"); // Assert that the current URL is the logged-in-successfully page
    //cy.get(".balance-title").contains("Total Balance"); // Assert that the login was successful
  });
  // More tests...
});
