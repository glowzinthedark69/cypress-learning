describe("Test Suite for Login Test Page", () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });

  // Step 1: Navigate to the test site successfully
  it("Should navigate to the homepage successfully", () => {
    // Assert that the current URL is the homepage
    cy.url().should("include", "/practice-test-login");
    // Assert that the "Test login" heading" exists on the page as expected
    cy.get("h2").contains("Test login");
  });

  // Step 3: Interact with the login elements (let's type something in the input box with the .action-email class)
  it("Validate login and log out are successful", () => {
    // Assert that the credentials fields exists on the page as expected and we can type into them
    cy.get("[id=username]").type("student").should("have.value", "student"); // Assert that the input box has the text we typed
    cy.get("[id=password]")
      .type("Password123")
      .should("have.value", "Password123"); // Assert that the input box has the text we typed
    cy.get("[id=submit]").click();
    cy.url().should("include", "/logged-in-successfully"); // Assert that the current URL is the logged-in-successfully page
    cy.get("h1").contains("Logged In Successfully"); // Assert that the login was successful
    cy.get(".wp-block-button").click(); // Click the log out botton
    cy.get("h2").contains("Test login"); // Assert that the log out process was successful
    cy.get("[id=username]");
    cy.get("[id=password]");
  });

  // Step 3: Validate negative use cases
  it("Validate failed login when invalid username is used", () => {
    // Assert that the credentials fields exists on the page as expected and we can type into them
    cy.get("[id=username]")
      .type("Student") // Wrong username used (capital for first character)
      .should("have.value", "Student"); // Assert that the input box has the text we typed
    cy.get("[id=password]")
      .type("Password123")
      .should("have.value", "Password123"); // Assert that the input box has the text we typed
    cy.get("[id=submit]").click();
    cy.get("[id=error]").contains("Your username is invalid!"); // Assert that the correct failure is shown
  });

  // Step 3: Validate negative use cases
  it("Validate failed login when invalid password is used", () => {
    // Assert that the credentials fields exists on the page as expected and we can type into them
    cy.get("[id=username]").type("student").should("have.value", "student"); // Assert that the input box has the text we typed
    cy.get("[id=password]")
      .type("Password1234") // Wrong password used
      .should("have.value", "Password1234"); // Assert that the input box has the text we typed
    cy.get("[id=submit]").click();
    cy.get("[id=error]").contains("Your password is invalid!"); // Assert that the correct failure is shown
  });
  // More tests...
});
