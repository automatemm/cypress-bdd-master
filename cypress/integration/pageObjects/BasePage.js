export default class BasePage {
  visitHomePage() {
    /* cy.visit('/', {
      auth: {
        username: goldtest,
        password: g0ld5ive,
      },
    }); */
    cy.visit('/');
  }

  typeInField(element, value) {
    const field = cy.get(element);
    field.clear();
    field.type(value).should('have.value', value);
  }

  clickOnWebElement(element) {
    cy.get(element).click({ force: true });
  }

  getPageTitle() {
    return cy.title();
  }

  getTextFromURL() {
    return cy.url();
  }

  mouseOver(element) {
    cy.get(element).invoke('show');
  }

  clickByText(element, text) {
    cy.get(element).contains(text).click({ force: true });
  }

  selectAndVerifyFromDropDown(element, option) {
    cy.get(element).select(option).should('have.value', option);
  }

  clickOnRadioBtn(element) {
    cy.get(element).click({ force: true }).should('be.checked');
  }

  clickOnCheckBox(element, value) {
    const ele = cy.get(element);
    ele.each(checkBox => {
      const text = checkBox.text();
      if (text.includes(value)) {
        cy.wrap(checkBox).next().check().should('be.checked');
      }
    });
    // ele.each(($e, index, $list) => {
    //     const text = $e.text();
    //     if (text.includes(value)) {
    //         ele.eq(index).next().check().should('be.checked');
    //     }
    // })
  }

  verifyCurrentURL(value) {
    cy.url().should('include', value);
    return this;
  }
}
