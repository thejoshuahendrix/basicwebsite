// main.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("should render home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("#main").should("exist");
  });
});
describe("should render about page", () => {
  it("renders correctly", () => {
    cy.visit("/about");
    cy.get("#aboutwrapper").should("exist");
  });
});
describe("should render contact page", () => {
  it("renders correctly", () => {
    cy.visit("/contact");
    cy.get("#contact").should("exist");
  });
});
describe("should route to home page", () => {
  it("routes correctly", () => {
    cy.visit("/contact");
    cy.get("#homelink").click();
    cy.get("#main").should("exist");
  });
});
describe("should route to about page", () => {
  it("routes correctly", () => {
    cy.visit("/");
    cy.get("#aboutlink").click();
    cy.get("#aboutwrapper").should("exist");
  });
});
describe("should route to contact page", () => {
  it("routes correctly", () => {
    cy.visit("/");
    cy.get("#contactlink").click();
    cy.get("#contact").should("exist");
  });
});
describe("should render burger when viewport shrinks", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.viewport(550, 750);
    cy.get("#burger").should("exist");
  });
});
describe("should render menu when burger is clicked", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.viewport(550, 750);
    cy.get("#burger").click();
    cy.get("#burgercontactlink").should("exist");
  });
});
describe("should route to contact through burger", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.viewport(550, 750);
    cy.get("#burger").click();
    cy.get("#burgercontactlink").click();
    cy.get("#contact").should("exist");
  });
});
describe("should route to about through burger", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.viewport(550, 750);
    cy.get("#burger").click();
    cy.get("#burgeraboutlink").click();
    cy.get("#aboutwrapper").should("exist");
  });
});
describe("should route to home through burger", () => {
  it("renders correctly", () => {
    cy.visit("/contact");
    cy.viewport(550, 750);
    cy.get("#burger").click();
    cy.get("#burgerhomelink").click();
    cy.get("#main").should("exist");
  });
});
describe("should route to privacy page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("#privacylink").click();
    cy.get("#privacy").should("exist");
  });
});
