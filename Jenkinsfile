#!groovy
node {
   
   stage 'Descargando GitHub'
    
   sh 'rm -rf *'
   checkout scm
 
  stage 'Desplegando'
  sh 'kill -9 $(ps -fea|grep node|grep indexx.js|cut -d " " -f 5)'
  sh 'sudo npm install'
  sh 'nohup  sudo node indexx.js &'

}
