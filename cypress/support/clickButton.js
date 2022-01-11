Cypress.Commands.add("clickButton", (label) => {
  cy.get("a").contains(label).click();
});
