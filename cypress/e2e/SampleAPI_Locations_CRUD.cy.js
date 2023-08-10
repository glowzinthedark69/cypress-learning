// Assert that the POST, PATCH, DELETE processes work as expected
describe("API CRUD Tests for Locations", () => {
  let locationId; // Declare a variable to store the location ID

  it("Create a new location", () => {
    cy.request({
      method: "POST",
      url: "http://127.0.0.1:8000/locations",
      body: {
        city: "AUTOMATED Test City",
        country: "AUTOMATED New Country",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      locationId = response.body.id; // Store the location ID for later use
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("city");
      expect(response.body).to.have.property("country");
      expect(response.body.id).to.be.a("number");
      expect(response.body.city).to.be.a("string");
      expect(response.body.country).to.be.a("string");
    });
  });

  it("Update the created location's city", () => {
    cy.request({
      method: "PATCH",
      url: `http://127.0.0.1:8000/locations/${locationId}`, // Use the stored location ID
      body: {
        city: "UPDATED AUTOMATED Test City",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(locationId);
      expect(response.body.city).to.eq("UPDATED AUTOMATED Test City");
    });
  });

  it("Delete the created location", () => {
    cy.request({
      method: "DELETE",
      url: `http://127.0.0.1:8000/locations/${locationId}`, // Use the stored location ID
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
