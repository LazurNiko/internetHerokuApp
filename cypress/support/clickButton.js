Cypress.Commands.add("clickButton", (label) => {
  cy.get("a,input").contains(label).click();
});
