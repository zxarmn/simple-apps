pipeline {
    agent any
    
    tools {nodejs "nodejs 18.16.0"}
    
    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'dev', url: 'https://github.com/IDN-Training/simple-apps.git'
            }
        }
        stage('Build') {
            steps {
                sh '''cd apps
                npm install'''
            }
        }
        stage('Testing') {
            steps {
                sh '''cd apps
                npm test
                npm run test:coverage'''
            }
        }
        stage('Code Review') {
            steps {
                def scannerHome = tool 'sonar-server';
                withSonarQubeEnv('My SonarQube Server') { // If you have configured more than one global server connection, you can specify its name
                sh "${scannerHome}/bin/sonar-scanner"
            }
        }
        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying....'
        //     }
        // }
    }
}