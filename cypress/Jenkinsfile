pipeline {
  agent any

  environment {
    // it can load the record key variable from credentials store
    // see https://jenkins.io/doc/book/using/using-credentials/
    // https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#handling-credentials
    SAUCE_USERNAME = "${env.SAUCE_USERNAME_KEY_SECRET}"
    SAUCE_ACCESS_KEY = "${env.SAUCE_ACCESS_KEY_SECRET}"
  }

  stages {
    stage('run') {
      steps {
        // This step trigger the test
        echo 'Run Sauce Cypress Pipeline Test'
        sh 'cd cypress; npm install saucectl'
        sh 'cd cypress; npx saucectl run'
      }
    }
  }
}