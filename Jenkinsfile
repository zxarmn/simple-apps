pipeline {
    agent {
     label 'server1-idn'
    }

    tools {nodejs "nodejs 18.20.0"}

    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'main', credentialsId: 'b7ae5f36-2e4d-48cc-8d67-c64374a0c898', url: 'https://github.com/zxarmn/simple-apps.git'
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
                sh '''cd apps
                sonar-scanner \
                -Dsonar.projectKey=simple-apps \
                -Dsonar.sources=. \
                -Dsonar.host.url=http://172.23.12.1:9000 \
                -Dsonar.login=sqp_51dd25a5f2e10d86ff46fa5429d6ea925043ccc1'''
            }
        }
        stage ('Change env host=db'){
            steps {
                sh '''cd apps/
                 sed -i 's/localhost/db/g' .env'''
            }
        }

        stage('Deploy compose') {
            steps {
                sh '''
                docker compose build
                docker compose up -d
                '''
            }
        }
    }
}