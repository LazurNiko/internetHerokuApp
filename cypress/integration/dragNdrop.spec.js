describe('Work with dragNdrop, slider, file upload etc', () => {

  beforeEach(() => {
    cy.visit("/");
  })

  it("Drag n Drop", () => {
    cy.clickButton("Drag and Drop");
    const myItem = cy.get('#column-a').first()
    myItem.trigger('mousedown', 75, 75, { force: true }).trigger('mousemove', 290, 75, { force: true });
    myItem.click().trigger('mouseup', { force: true });
  })

  it("Should be able to upload the file", () => {
    cy.clickButton("File Upload");
    cy.get("#file-upload").attachFile("fileUpload.json");
    cy.get("#file-submit").click();
    cy.get("h3").should("have.text", "File Uploaded!")
    cy.get("#uploaded-files").should("contain", "fileUpload.json")
  })
})