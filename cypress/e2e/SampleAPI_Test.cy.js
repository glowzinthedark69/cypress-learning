describe("API Test", () => {
  it("Validate JSON response", () => {
    // Make a GET request to your API endpoint
    cy.request("GET", "http://127.0.0.1:8000/locations").then((response) => {
      // Assert that the response status is 200
      expect(response.status).to.eq(200);
      // Assert that the response body is an array
      expect(response.body).to.be.an("array");
      // Assert that every item in the array is an object
      expect(response.body).to.satisfy((array) => {
        return Cypress._.every(array, Cypress._.isObject);
      });

      // Assert the properties of the first object in the response array
      expect(response.body[0]).to.have.property("id", 39540);
      expect(response.body[0]).to.have.property("city", "Harberview");
      expect(response.body[0]).to.have.property("country", "Serbia");
    });
  });
});
