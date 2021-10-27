pipeline {
    agent {
    label 'master'
  }

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
    stage('Prepare Workspace') {
        steps {
            git branch: 'master',
                credentialsId: 'madhan0809',
                url: 'https://github.com/Madhan0809/CypressAutomation.git'

            sh "ls -lat"
        }
    }
        stage('Functional Tests') {
            steps {
                sh 'npm install'
                sh 'npm run bddTests'
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
