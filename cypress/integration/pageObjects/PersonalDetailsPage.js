import BasePage from "./BasePage.js";

const PERSONAL_HEADING = "h1[data-testid='personal-heading']";

const MY_ACC_LEFT_NAV = "div[data-testid='my-account-left-nav'] a";

export default class PersonalDetailsPage extends BasePage {
  verifyPersonTitleText(value) {
    cy.get(PERSONAL_HEADING).should("have.text", value);
    return this;
  }

  clickOnSignOutLink() {
    this.clickByText(MY_ACC_LEFT_NAV, "Sign out");
}
}
