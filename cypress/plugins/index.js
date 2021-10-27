/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

 const path = require('path');
 const fs = require('fs-extra');
 
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};

const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
  on("task", {
    log(message) {
      console.log(message);
      return null;
    },
  });
  on("before:browser:launch", (browser, launchOptions) => {
    if (browser.name === "chrome") {
      launchOptions.args.push("--disable-dev-shm-usage");
      return launchOptions;
    }
  });
  /* on("after:screenshot", (details) => {
    // listener that checks when a screenshot has been taken and renames the file accordingly
    // to a saveable format so it can be viewed within the cypress reports
    const path = details.path;
    const isDocker = require("is-docker");
    const oldFileName = path.substring(
      isDocker() ? path.lastIndexOf("/") + 1 : path.lastIndexOf("\\") + 1,
      path.lastIndexOf(".")
    );
    const oldFileNameLength = oldFileName.length;
    let newFileName;
    if (oldFileNameLength > 80) {
      newFileName = oldFileName.substring(0, 80);
    } else {
      newFileName = oldFileName.substring(0, oldFileNameLength);
    }
    const newPath = path.replace(oldFileName, newFileName);

    return new Promise((resolve, reject) => {
      fs.rename(details.path, newPath, (err) => {
        if (err) return reject(err);

        // because we renamed/moved the image, resolve with the new path
        // so it is accurate in the test results
        resolve({ path: newPath });
      });
    });
  }); */
};
