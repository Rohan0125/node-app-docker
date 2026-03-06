pipeline {

    agent any

    environment {
        IMAGE_NAME = "rohang1250/node-devops-app"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Rohan0125/node-app-docker'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME ./app'
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose down'
                sh 'docker compose up -d'
            }
        }

    }

}
