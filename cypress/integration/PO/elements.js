class elements {
  elementA() {
    return cy.get("#column-a");
  }
  elementB() {
    return cy.get("#column-b");
  }
  chooseFile() {
    return cy.get("#file-upload");
  }
  pageTitle() {
    return cy.get("h3");
  }
  chosenFile() {
    return cy.get("#uploaded-files");
  }
  slider() {
    return cy.get('input');
  }
  element() {
    return cy.get('.figure');
  }
  elementContent() {
    return cy.get('.figcaption');
  }
  elementWithShadowRoot() {
    return cy.get('my-paragraph');
  }
  clickToDownloadPng() {
    cy.window().document().then(function (doc) {
      doc.addEventListener('click', () => {
        setTimeout(function () { doc.location.reload() }, 500)
      })
      cy.get('[href="download/logo.png"]').click();
    })
  }
  clickToDownloadSql() {
    cy.window().document().then(function (doc) {
      doc.addEventListener('click', () => {
        setTimeout(function () { doc.location.reload() }, 500)
      })
      cy.get('[href="download/Chinook_Sqlite.sql"]').click();
    })
  }
}
export default elements;