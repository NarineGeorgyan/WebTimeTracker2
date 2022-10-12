describe("Limit start", () => {
  it("passes", () => {
    cy.viewport(1300, 750);
    cy.visit("http://localhost:3000/limit");
  });

  it("Create a usedSite", () => {
    cy.viewport(1300, 750);
    // const TIME_DATE = new Date();
    // const TIME = TIME_DATE.getHours();
    // const MINUTES = TIME_DATE.getMinutes();
    cy.get("[name=siteName]").type("google.com");
    cy.get("button[type=submit]").should("be.disabled");
    cy.get("[name=time]").type("20:00");
    cy.get("button[type=submit]").should("be.disabled");
    // cy.get("[name=time]").type("TIME:MINUTES");
    cy.get("button[type=submit]").should("not.be.disabled");
    cy.get("button[type=submit]").click();

    cy.get("[name=siteName]").type("facebook.com");
    cy.get("button[type=submit]").should("be.disabled");
    cy.get("[name=time]").type("00:49");
    cy.get("button[type=submit]").should("be.disabled");
    cy.get("button[type=submit]").should("not.be.disabled");
    cy.get("button[type=submit]").click();

    cy.get("[name=siteName]").type("slack.com");
    cy.get("button[type=submit]").should("be.disabled");
    cy.get("[name=time]").type("13:49");
    cy.get("button[type=submit]").should("not.be.disabled");
    cy.get("button[type=submit]").click();
  });

  it("Delete-button", () => {
    cy.viewport(1300, 750);
    cy.get("tr").should("have.length", 4);
    cy.get("#deleteButton").click();
    cy.get("tr").should("have.length", 3);
    cy.get("#deleteButton").click();
    cy.get("tr").should("have.length", 2);

    // cy.get("[data-testid=deleteButton]", { timeout: 7000 }).click();
    // cy.get("[data-testid=sitRow]")
    //   .find("tr")
    //   .first()
    //   .should("have.text", "facebook.com");

    // .then((elem) => {
    //   const elemHtml = elem.get("[data-testId=siteRow]");
    //   elemHtml.remove();
    // });
  });
  it("Edite Button", () => {
    cy.viewport(1300, 750);
    cy.get("[name=siteName]").type("time.am");
    cy.get("button[type=submit]").should("be.disabled");
    cy.get("[name=time]").type("12:49");
    cy.get("button[type=submit]").should("not.be.disabled");
    cy.get("button[type=submit]").click();

    cy.get("#editButton").click();
    cy.get("[name=siteName]").type("amazon.com").should("have.text", "");

    // cy.get("[name=siteName]").type("amazon.com");

    // cy.get("button[type=submit]").should("be.disabled");
    // cy.get("[name=time]").type("13:49");
    // cy.get("button[type=submit]").should("not.be.disabled");
    cy.get("button[type=submit]").click();
  });
});
