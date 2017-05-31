'use strict';

exports.contrato = function(args, res, next) {
  /**
   * Se requiere obtener el dato del atributo contratoAceptado: en LDAP por medio de un ldapsearch -h ip-server -p 389 –D uid=$idCliente,ou=people,dc=multiva,dc=mx -w $password -b  -s base contratoAceptado.
   *
   * contrato Contrato Se requiere la validacion de la contraseña actual  
   * returns inline_response_200_4
   **/
  var examples = {};
  examples['application/json'] = {
  "Código de retorno" : "Operación correcta",
  "Valor obtenido del atributo contrato Aceptado." : "0"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.contratoPOST = function(args, res, next) {
  /**
   * /Contrato
   * Realiza la modificacion del contrato
   *
   * contrato Contrato Respuesta
   * returns inline_response_200_1
   **/
  var examples = {};
  examples['application/json'] = {
  "respuesta" : "OK",
  "CodigoRespuesta" : "Operación correcta: 0"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

