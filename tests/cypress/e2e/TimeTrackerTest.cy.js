/*  eslint-disable no undef */
/// reference types= cypress />
/* reference help us in their methods*/
describe("APP Web Time Tracker", () => {
  it("App start", () => {
    cy.visit("http://localhost:3000/limit");
  });
  it("App start", () => {
    cy.visit("http://localhost:3000/setting");
  });
  it("App start", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Have a Form", () => {
    cy.get("[name = siteName]").should("have.value", "");
    cy.get("[name=time]").should("have.value", "");
    cy.get("button[type=submit]").should("have.text", "+");
  });

  it("Add a usedSite", () => {
    // const TIME_DATE = new Date();
    // const TIME = TIME_DATE.getHours();
    // const MINUTES = TIME_DATE.getMinutes();
    cy.get("[name=siteName]").type("google.com");
    cy.get("[name=time]").type("20:00");
    // cy.get("[name=time]").type("TIME:MINUTES");
    cy.get("button[type=submit]").click();

    cy.get("[name=siteName]").type("facebook.com");
    cy.get("[name=time]").type("00:49");
    cy.get("button[type=submit]").click();
  });
  it("Validate Form Controls", () => {});
});
