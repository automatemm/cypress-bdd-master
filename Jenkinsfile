pipeline {
    agent {
    label 'master'
  }

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
    stage('Cypress Test Suite') {
        steps {
            git branch: 'master',
                credentialsId: '06013e17-3135-42d8-bec7-d261319b2ccb',
                url: 'https://github.com/automatemm/cypress-bdd-master.git'
        }
    }
        stage('Functional Tests') {
            steps {
                bat 'npm install'
                bat 'npm run dev'
            }
        }

    }

    post {
         failure {
  	      echo "Test failed"
                      cucumber buildStatus: 'FAIL',
                                   failedFeaturesNumber: 1,
                                   failedScenariosNumber: 1,
                                   skippedStepsNumber: 1,
                                   failedStepsNumber: 1,
                                   fileIncludePattern: '**/*.json',
                                   jsonReportDirectory: 'cypress/cucumber-json', 
                                   sortingMethod: 'NATURAL'
  	     }
           success {
           echo "Test succeeded"
                     cucumber buildStatus: 'SUCCESS',
                                            failedFeaturesNumber: -1, 
                                            failedScenariosNumber: -1, 
                                            failedStepsNumber: -1, 
                                            fileIncludePattern: '**/*.json', 
                                            jsonReportDirectory: 'cypress/cucumber-json', 
                                            pendingStepsNumber: -1, 
                                            skippedStepsNumber: -1, 
                                            sortingMethod: 'NATURAL', 
                                            undefinedStepsNumber: -1

          }

         always {
                  echo 'send lack message ...'
                }
    }
}
