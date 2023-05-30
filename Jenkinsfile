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
                npm build'''
            }
        }
        stage('Testing') {
            steps {
                sh '''npm test
                npm run test:coverage'''
            }
        }
        // stage('Code Review') {
        //     steps {
        //         echo 'Deploying....'
        //     }
        // }
        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying....'
        //     }
        // }
    }
}