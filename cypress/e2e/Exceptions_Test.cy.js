describe("Test Suite for Test Exceptions Page", () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit("https://practicetestautomation.com/practice-test-exceptions/");

    // Listen for uncaught exceptions
    cy.on("uncaught:exception", (err, runnable) => {
      // when the exception happens, we check if it's the error we are expecting
      expect(err.message).to.include("Assignment to constant variable.");
      // returning false here prevents Cypress from failing the test
      return false;
    });
  });

  it("Validate NoSuchElementException", () => {
    // Click on the Add button
    cy.get("[id=add_btn]").click();

    // Wait for the element to load and assert it contains an input-field class
    cy.get("#row2", { timeout: 10000 }).should("exist");
    cy.get("#row2").find(".input-field").type("test").click(["id=save_btn"]);
    cy.get("[id=confirmation").should("exist");
    cy.get("[id=remove_btn]").click();
    cy.get("[id=confirmation").should("exist");
  });
});
