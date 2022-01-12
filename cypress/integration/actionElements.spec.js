import elements from './PO/elements'

describe('Work with dragNdrop, slider, file upload etc', () => {
  const item = new elements();

  beforeEach(() => {
    cy.visit("/");
  })

  it("Should be able to drag'n'drop the item", () => {
    const dataTransfer = new DataTransfer();
    cy.clickButton("Drag and Drop");
    item.elementA().should("contain", "A")
    item.elementB().should("contain", "B")
    item.elementA()
      .trigger('dragstart', {
        dataTransfer
      })
    item.elementB()
      .trigger('drop', {
        dataTransfer
      })
    item.elementB().should("contain", "A")
    item.elementA().should("contain", "B")
})

  it("Should be able to upload the file", () => {
    cy.clickButton("File Upload");
    item.chooseFile().attachFile("fileUpload.json");
    cy.clickButton("Upload");
    item.pageTitle().should("have.text", "File Uploaded!");
    item.chosenFile().should("contain", "fileUpload.json");
  })

  it('Should be able to download the file', () => {
    cy.clickButton("File Download");
    item.clickToDownloadPng();
    cy.verifyDownload('logo.png');
    item.clickToDownloadSql();
    cy.verifyDownload('Chinook_Sqlite.sql');
  });

  it('Should be able to find shadow DOM elements', () => {
    cy.clickButton("Shadow DOM");
    item.elementWithShadowRoot()
      .shadow()
      .find('style')
      .should('have.css', "color", 'rgb(34, 34, 34)')
  });

  it('Should be able to set slider value', () => {
    cy.clickButton("Horizontal Slider");
    item.slider().should("have.attr", "type", "range")
      .invoke("val", 1)
      .trigger("change")
      .invoke("val", 2.5)
      .trigger("change")
      .invoke("val", 5)
      .trigger("change")
      .click();
  });

  it('Should be able to select item from dropdown menu', () => {
    cy.clickButton("Dropdown");
    item.dropdownMenu().should("contain", "Please select an option")
      .select("Option 2")
    item.selectedOption().should("have.attr", "selected")
  });

  it('Should be able to check if image is broken', () => {
    cy.clickButton("Broken Images");
    item.brokenImageFirst()
      .should('be.visible')
      .and(($img) => {
    expect($img[0].naturalHeight).to.be.equal(0)
    });

    item.brokenImageSecond()
      .should('be.visible')
      .and(($img) => {
    expect($img[0].naturalHeight).to.be.equal(0)
    });

    item.correctImage()
      .should('be.visible')
      .and(($img) => {
    expect($img[0].naturalHeight).to.be.greaterThan(0)
    });
});

  it('Should be able to see text when hover the element', () => {
    cy.clickButton("Hovers");
    item.element().eq(0).realHover();
    item.elementContent().should('be.visible');
    
    item.element().eq(1).realHover();
    item.elementContent().should('be.visible');
    
    item.element().eq(2).realHover()
    item.elementContent().should('be.visible');
  });


})