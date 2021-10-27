import BasePage from "../integration/pageObjects/BasePage.js";
import PersonalDetailsPage from "../integration/pageObjects/PersonalDetailsPage.js";

const SIGN_ME_BUTTON = "button[data-testid='sign-me-up']";
const TITLE_FIELD = "input[name='personTitle']";
const FIRST_NAME_FIELD = "input[name='firstName']";
const LAST_NAME_FIELD = "input[name='lastName']";
const EMAIL_ADDR_FIELD = "form[name='registerForm'] input[name='logonId']";
const PASSWORD_FIELD = "form[name='registerForm'] input[name='logonPassword']";
const CREATE_ACC_BUTTON = "button[data-testid='create-account']";

export default class RegistrationPage extends BasePage {
  fillUserDetails(fName, lName, password) {
    cy.get(TITLE_FIELD).eq(2).click({ force: true });
    this.typeInField(FIRST_NAME_FIELD, fName);
    this.typeInField(LAST_NAME_FIELD, lName);
    cy.randomEmail().then((email) => {
      cy.get(EMAIL_ADDR_FIELD).type(email).should("have.value", email);
    });
    this.typeInField(PASSWORD_FIELD, password);
    const pdPage = new PersonalDetailsPage();
    return pdPage;
  }

  clickOnSignMeUpButton() {
    this.clickOnWebElement(SIGN_ME_BUTTON);
  }

  clickOnCreateAccButton() {
    this.clickOnWebElement(CREATE_ACC_BUTTON);
  }
}
