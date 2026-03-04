pipeline {
    agent any

    stages {

        stage('clone') {
            steps {
                echo 'Building the application...'
                // Example build command
            }
        }

        stage('Build Docker image') {
            steps {
                echo 'Running tests...'
                sh 'docker build -t node-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'docker compose up -d --build'
            }
        }

    }
}
