const cypress = require("cypress");
const path = require("path");
const fs = require("fs-extra");
const yargs = require("yargs");
const { merge } = require("mochawesome-merge");
const marge = require("mochawesome-report-generator");
const cypressConfig = require("./cypress");
const rm = require("rimraf");
const ls = require("ls");
const argv = yargs
  .options({
    runtype: {
      alias: "r",
      describe: "the cypress run type",
      default: "open",
      choices: ["open", "run"],
    },
    browser: {
      alias: "b",
      describe: "choose browser that you wanna run tests on",
      default: "chrome",
      choices: ["chrome", "edge"],
    },
    /* spec: {
      alias: 's',
      describe: 'run test with specific spec file',
      default: '*.test.js'
    },
    env: {
      alias: 'e',
      describe: 'choose UI environment you want to run tests on',
      default: 'dev',
      choices: ['dev', 'sit', 'test']
    },
    group: {
      alias: 'g',
      describe: 'choose what group of tests you want to run',
      default: 'stubbed'
      //choices: ['stubbed', 'integration', 'e2etest', 'smoke']
    },
    isStubbed: {
      alias: 'stub',
      describe: 'run tests with or without stubs',
      default: 'true',
      choices: ['true', 'false']
    } */
  })
  .help().argv;

const file = argv.env;
const configFile = getConfigurationByFile(file).then((configFile) => {
  fs.writeFile("cypress/fixtures/LoadedFiles.json", JSON.stringify([]));
  configFile.testFiles = argv.spec;
  // configFile.env.TEST_TAGS = argv.group;
  // configFile.env.StubTest = JSON.parse(argv.isStubbed);
  if (argv.runtype === "run") {
    const reportDir = cypressConfig.reporterOptions.reportDir;
    const reportFiles = `${reportDir}/*.json`;
    // list all of existing report files
    ls(reportFiles, { recurse: true }, (file) =>
      console.log(`removing ${file.full}`)
    );

    // delete all existing report files
    rm(reportFiles, (error) => {
      if (error) {
        console.error(`Error while removing existing report files: ${error}`);
        process.exit(1);
      }
      console.log("Removing all existing report files successfully!");
    });
    cypress
      .run({
        browser: argv.browser,
        // spec: argv.spec,
        config: configFile,
      })
      .then((results) => {
        const reporterOptions = {
          reportDir: results.config.reporterOptions.reportDir,
          reportTitle: `Env : ${argv.env} |  build : ${
            process.env.IMAGE_VER_DEV
          }  
          |  Date : ${new Date().toJSON().slice(0, 19).replace("T", ":")}`,
        };
        generateReport(reporterOptions).then(() => {
          const reportDir = cypressConfig.reporterOptions.reportDir;
          const htmlFile = `${reportDir}/mochawesome.html`;
          fs.renameSync(htmlFile, `${reportDir}/index.html`, function (error) {
            if (error) {
              console.log(error);
            }
          });
          /*        const directoryFileName = generateGroupName(argv.group);
          const newReportFileDirectory = reportDir.replace(
            "mochawesome-report",
            directoryFileName
          );
          fs.renameSync(reportDir, newReportFileDirectory, function (error) {
            if (error) {
              console.log(error);
            }
          }); */

          if (results.totalFailed > 0) {
            process.exit(1);
          } else {
            process.exit(0);
          }
        });
      })
      .catch((error) => {
        console.error("errors: ", error);
        process.exit(1);
      });
  } else {
    cypress
      .open({
        config: configFile,
      })
      .catch((error) => {
        console.error("errors: ", error);
        process.exit(1);
      });
  }
});

function generateReport(options) {
  return merge(options).then((report) => {
    return marge.create(report, options);
  });
}

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress/config", `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

/* function generateGroupName(testGroupType) {
  let groupName;
  if (testGroupType.includes(",")) {
    const gnames = testGroupType.split(",");
    groupName = `${gnames[0]}-${gnames[1]}`;
  } else {
    groupName = testGroupType;
  }
  return groupName;
} */
