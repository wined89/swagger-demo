#!groovy
node {
   
   stage 'Descargando GitHub'
    
   sh 'rm -rf *'
   checkout scm
 
  stage 'Desplegando'
  sh 'sudo killall node'
  sh 'sudo npm install'
  sh 'nohup  sudo node index.js &'

}
