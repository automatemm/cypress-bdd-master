import BasePage from "./BasePage.js";
import PersonalDetailsPage from "./PersonalDetailsPage.js";

const EMAIL_FIELD = "input[name='logonId']";
const PASSWORD_FIELD = "input[name='logonPassword']";
const SIGN_IN_BUTTON = "button[data-testid='sign-in']";

export default class LoginPage extends BasePage {
  fillLoginCredentials(email, password) {
    this.typeInField(EMAIL_FIELD, email);
    this.typeInField(PASSWORD_FIELD, password);
    this.clickOnWebElement(SIGN_IN_BUTTON);
    // to do
    // return PageMapper.getInstance().pages.myAccPage;
    const pdPage = new PersonalDetailsPage();
    return pdPage;
  }
}
