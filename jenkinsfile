pipeline {
    agent any
    stages {
        stage('build dockerfile image') {
            steps {
                script {
                    dir('server/') {  
                        docker.build("tunning-system:v01")                      
                        //docker.build("tunning-system:v${env.BUILD_ID}")                      
                    }
                }
            }
        }
        stage('build docker-compose') {
            steps {
                script {
                    dir('js-client/docker/') {    
                        sh "docker-compose up -d"
                    }
                }
            }
        }
        stage('tests') {
            steps {
                script {
                    dir('js-client/') {  
                        sh "npm install"
                        sh "npm test"  
                    }                    
                }
            }
        }
    }
}