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
            environtment {
                scannerHome = tool 'sonar-server'
            }
            steps {
                withSonarQubeEnv(credentialsId: 'sonar-administrator')  { // If you have configured more than one global server connection, you can specify its name
                sh '''$scannerHome/bin/sonar-scanner \
                -Dsonar.projectKey=Test-Apps \
                -Dsonar.sources=. \
                -Dsonar.host.url=http://10.23.0.11:9000 \
                -Dsonar.login=sqp_453c0e4301afd70ecdf1719a4e66bd5e2ceb78c6'''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}