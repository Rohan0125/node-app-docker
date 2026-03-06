**docker build -t jenkins-docker .**

use below to run the Jenkins in the machine - 

**docker run -d -p 8080:8080 -p 50000:50000 --name jenkins --group-add $(stat -c '%g' /var/run/docker.sock) -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkins-docker**

commands- 

docker compose ps 
docker logs jenkins
docker logs nginx
docker exec -it jenkins bash
docker ps 
docker network ls 
docker rm 
docker stop 
docker rmi 
docker images

o
