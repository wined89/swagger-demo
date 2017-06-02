'use strict';

exports.cambioPwd = function(args, res, next) {
  /**
   * Se requiere la validacion de la contraseña actual despues que se compare la nueva contraseña si los dos pasos son exitoso se requiere realizar una modificacion al atributo userPassword en LDAP para el numero del cleinte (uid=$numCliente,ou=people,dc=multiva,dc=mx) previamente obtenido en la entradas y se coloca el nuevo password proporcionado.
   *
   * cambioPwd CambioPwd Se requiere la validacion de la contraseña actual  
   * returns inline_response_200_3
   **/
  var examples = {};
  examples['application/json'] = {
  "CodigoRespuesta" : "0"
  
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

