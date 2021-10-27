/// <reference types="Cypress" />
import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../../pageObjects/HomePage.js';
import PersonalDetailsPage from '../../../../pageObjects/PersonalDetailsPage.js';
import RegistrationPage from '../../../../pageObjects/RegistrationPage.js';
import Routes from '../../../routes/Routes.js';

const pdPage = new PersonalDetailsPage();
const homePage = new HomePage();
const regPage = new RegistrationPage();
const routes = new Routes();

let newuser = null;

before(() => {
  cy.fixture('userRegistration').then(data => {
    newuser = data;
  });
});

beforeEach(() => {
  routes.setRegRoute();
  homePage.visitHomePage();
  // cy.clearCookies;
});

afterEach(() => {
  // pdPage.clickOnSignOutLink();
});

Given('I am in the Selfridges login page', () => {
  homePage.mouseOverAndClickOnSignIn();
});

When('I click on Sign me up button', () => {
  regPage.clickOnSignMeUpButton();
});

And('I enter valid registration details', () => {
  regPage.fillUserDetails(newuser.firstName, newuser.lastName, newuser.password);
});

When('I click on Create Account button', () => {
  regPage.clickOnCreateAccButton();
});

Then('I should see Users FirstName on MyAccount Page', () => {
  cy.wait('@regRequest', { timeout: Cypress.env('XHRtimeout') })
    .its('response.statusCode')
    .should('eq', 200);
  pdPage.verifyCurrentURL('account/personal-details').verifyPersonTitleText('Hello, ' + newuser.firstName);
});
