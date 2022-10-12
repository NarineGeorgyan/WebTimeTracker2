/*  eslint-disable no undef */
/// reference types= cypress />
/* reference help us in their methods*/

describe("APP Web Time Tracker", () => {
  it("Setting start", () => {
    cy.viewport(1300, 750);
    cy.visit("http://localhost:3000/setting");
  });

  it("Have a SettingForm", () => {
    cy.viewport(1300, 750);
    cy.get("[name = site]").should("have.value", "");
    cy.get("[name=selectSeconds]").select("item 0");
  });

  it("Create a SettingForm", () => {
    cy.viewport(1300, 750);
    cy.get("[name = site]").type("google.com");
    cy.get("[name=selectSeconds]").select("item 25");
    cy.contains("Create").click;
    cy.visit("http://localhost:3000/limit");
    cy.location("pathname", { timeout: 7000 }).should("equal", "/limit");
  });
});
