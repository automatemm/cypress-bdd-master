# CypressAutomation

## Softwares to install on mac:
1. npm
2. brew
3. npm install cypress
4. npm install cypress-iframe
5. npm install mocha
6. npm install mochawesome
7. npm install cypress-cucumber-preprocessor

## to kick off:
create project folder and open that in Visual Code

npm install cypress

## to open test runner
npm run debug

## to run bdd tests
npm run dev

Examples: 
1. ./node_modules/.bin/cypress-tags run -e TAGS='@login'
2. ./node_modules/.bin/cypress-tags run -e TAGS='not @bugs'
3. ./node_modules/.bin/cypress-tags run -e TAGS='@another-tag-to-include and @some-other-tag'

## to run single test

Simple Example:

node_modules/.bin/cypress run --spec cypress/integration/po/registration.js --headed --browser chrome

./node_modules/.bin/cypress-tags run -e TAGS='@login' --headed --browser chrome

## to run all tests
node_modules/.bin/cypress run --reporter mochawesome --headed --browser chrome

## to run test and record reports in dashboard
 node_modules/.bin/cypress run --spec cypress/integration/po/registration.js --headed --browser chrome --record --key 1b2de941-7d93-4e76-b145-83420575b642

## to overide an env variable
 node_modules/.bin/cypress run -- spec cypress/integration/po/registration.js --headed --browser chrome --env url=google .com

## to generate mochawesome report
 node_modules/.bin/cypress run --reporter mochawesome --spec cypress/integration/po/registration.js --headed --browser chrome 

# References:

## Page Object:
1. https://github.com/mrharry/cypress-framework-pageObject
2. https://medium.com/reactbrasil/deep-diving-pageobject-pattern-and-using-it-with-cypress-e60b9d7d0d91

## BDD:
1. https://learndevtestops.com/2019/09/29/cucumber-integration-with-cypress-io-in-5-minutes/
2. https://github.com/grajk88/cypress-cucumber-tests
3. https://github.com/grajk88/cypress-cucumber-reporting-example

4. https://github.com/TheBrainFamily/cypress-cucumber-example
5. https://medium.com/@itortv/how-to-integrate-cypress-and-cucumber-in-your-development-flow-in-just-a-few-weeks-96a46ac9165a

6. https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions

## Cypress Dashboard:
7. https://dashboard.cypress.io/projects/11zq28

cypress run --record --key 1b2de941-7d93-4e76-b145-83420575b642

{
  "projectId": "11zq28"
}

 8. https://docs.cypress.io/guides/guides/command-line.html#cypress-run

 ## Jenkins ref:
 9. https://jenkins.io/download/lts/macos/
 10. https://medium.com/@ronnieschaniel/cypress-e2e-testing-in-the-jenkins-pipeline-cc0a0df29fb6
 11. https://gist.github.com/DanHerbert/9520689
 12. https://medium.com/faun/running-cucumber-tests-with-jenkins-a5a3a8df07eb