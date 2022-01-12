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
    return cy.window().document().then(function (doc) {
      doc.addEventListener('click', () => {
        setTimeout(function () { doc.location.reload() }, 500)
      })
      cy.get('[href="download/logo.png"]').click();
    })
  }
  clickToDownloadSql() {
    return cy.window().document().then(function (doc) {
      doc.addEventListener('click', () => {
        setTimeout(function () { doc.location.reload() }, 500)
      })
      cy.get('[href="download/Chinook_Sqlite.sql"]').click();
    })
  }
  dropdownMenu() {
    return cy.get("#dropdown");
  }
  selectedOption() {
    return cy.contains("option", "Option 2");
  }
  brokenImageFirst() {
    return cy.get('[src="asdf.jpg"');
  }
  brokenImageSecond() {
    return cy.get('[src="hjkl.jpg"]');
  }
  correctImage() {
    return cy.get('[src="img/avatar-blank.jpg"]');
  }
}
export default elements;