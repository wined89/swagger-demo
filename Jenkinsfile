#!groovy
node {
   
   stage 'Descargando GitHub'
    
   sh 'rm -rf *'
   checkout scm
 
  stage 'Desplegando'
  sh 'sudo kill -9 $(ps -fea|grep node|grep indexx.js|cut -d " " -f 8)'
  sh 'sudo npm install'
  sh 'sudo node indexx.js &'

}
