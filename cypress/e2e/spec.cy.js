describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("React App with Webpack");
  });
});
