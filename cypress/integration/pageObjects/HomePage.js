import BasePage from "./BasePage.js";

const ACCOUNT_NAV_LINK = "a[class='accountnavlink']";
const ACCEPT_COOKIE_BUTTON = "button[data-js-action='acceptAll']";
const ACCOUNT_NAV_OPTIONS = "div[id='myaccountnav'] ul a";

export default class HomePage extends BasePage {
  mouseOverAndClickOnSignIn() {
    this.mouseOver(ACCOUNT_NAV_LINK);
    this.clickByText(ACCOUNT_NAV_OPTIONS, "Sign in or Register");
  }

  clickOnAcceptAllButton() {
    this.clickOnWebElement(ACCEPT_COOKIE_BUTTON);
  }

  selctGender(value) {
    cy.get("select").select(value);
    return this;
  }

  selctEmploStatus() {
    cy.get(".form-check input#inlineRadio1").check().should("be.checked");
    return this;
  }

  clickOnSubmitButton() {
    cy.get("input.btn-success").click();
    return this;
  }

  verifyAlertMesssage(message) {
    // to verify exact match
    //cy.get('div.alert-success').should('have.text', value);
    // below code is to verify partial code match
    cy.get("div.alert-success")
      .text()
      .then((value) => {
        cy.log("Actual message is :", value);
        expect(value).to.include(message);
      });
    return this;
  }
}
