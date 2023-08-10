// Assert that the API returns the correct data based on implementation
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

      // // Assert that the correct properties exist for a determined number of random objects in the array
      const sample = Cypress._.sampleSize(response.body, 250); // Adjust sample size as needed
      sample.forEach((item) => {
        expect(item).to.be.an("object");
        expect(item).to.have.property("id");
        expect(item.id).to.not.be.null;
        expect(typeof item.id).to.eql("number");
        expect(item.id).to.be.above(-1);
        expect(item.id).to.not.equal(0);
        expect(item.id.toString().length).to.be.at.least(5);
        expect(item).to.have.property("city");
        expect(item.city).to.not.be.null;
        expect(item.city).to.be.a("string");
        expect(item).to.have.property("country");
        expect(item.country).to.not.be.null;
        expect(item.country).to.be.a("string");
      });
    });
  });
});
