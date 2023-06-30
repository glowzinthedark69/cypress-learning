describe("Sample Search Test", () => {
  it("Find a link on the page and click it", () => {
    // Open the website we want to test.
    cy.visit("https://example.cypress.io");

    // Find the clickable element and click it.
    cy.contains("a", "Querying").click({ force: true }); // the timeout option specifies how long to wait for the element to be found

    // Check that the search results page contains the search term.
    cy.get("#query-btn").should("contain", "Button"); //This will find the specific button on the page
    cy.contains("query-btn"); //This will find this text on the page

    // Find the greyed out Submit button and click it
    cy.get("[data-cy=submit]").click(); //If the data-cy tag has been added. This may not be the case
    cy.get("[name=submission]").click(); //Possibly a more common way to find and click this button
  });
});
