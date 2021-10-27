/// <reference types="Cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../pageObjects/HomePage.js";

const homePage = new HomePage();

Given("I am in the Selfridges login page", () => {
  homePage.mouseOverAndClickOnSignIn();
});
