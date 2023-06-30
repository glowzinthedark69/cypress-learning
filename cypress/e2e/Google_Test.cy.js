describe("Google Search Test", () => {
  it("searches for Selenium", () => {
    // Open the website we want to test.
    cy.visit("https://www.google.com/");

    // Find the search bar and enter a search term.
    cy.get('[name="q"]', { timeout: 10000 }) // the timeout option specifies how long to wait for the element to be found
      .type("Selenium{enter}"); // Cypress automatically waits for the element to become clickable

    // Cypress automatically waits for the new page to load after hitting ENTER,
    // so we don't need to sleep or explicitly wait.

    // Check that the search results page contains the search term.
    cy.contains("Selenium"); // this will fail the test if "Selenium" is not found in the page

    // In Cypress, there's usually no need to manually close the browser,
    // as it manages the lifecycle of the browser for you.
  });
});
