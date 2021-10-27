/// <reference types="Cypress" />
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../../pageObjects/LoginPage.js";
import PersonalDetailsPage from "../../../../pageObjects/PersonalDetailsPage.js";
import HomePage from "../../../../pageObjects/HomePage.js";
import Routes from "../../../routes/Routes.js";

const homePage = new HomePage();
const loginPage = new LoginPage();
const pdPage = new PersonalDetailsPage();
const routes = new Routes();
let testData = null;

before(() => {
  cy.fixture("loginDetails").then((data) => {
    testData = data;
  });
});

beforeEach(() => {
  // routes.setLoginRoute();
  homePage.visitHomePage();
  cy.clearCookies;
  // homePage.clickOnAcceptAllButton();
});

afterEach(() => {
  // pdPage.clickOnSignOutLink();
});

Given("I am in the Selfridges login page", () => {
  homePage.mouseOverAndClickOnSignIn();
});

When("I enter valid credentials", () => {
  loginPage.fillLoginCredentials(testData.email, testData.password);
});

Then("I should be able to login successfully", () => {
 /*  cy.wait("@loginIdentityRequest", { timeout: Cypress.env("XHRtimeout") })
    .its("response.statusCode")
    .should("eq", 200); */
  pdPage
    .verifyCurrentURL("account/personal-details")
    .verifyPersonTitleText("Hello, Madhan");
});
