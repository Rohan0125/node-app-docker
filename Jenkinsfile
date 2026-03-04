pipeline {
    agent any

    stages {
        stage('Build Docker image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t node-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying containers...'
                sh 'docker-compose down'   // Docker Compose V1 command
                sh 'docker-compose up -d --build'   // Docker Compose V1 command
            }
        }
    }
}
