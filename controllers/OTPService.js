'use strict';

exports.validaOTP = function(args, res, next) {
  /**
   * Se requiere la validacion en VACMAN del usuario y su OTP, si la operación de OTP fue exitosa, el valor del blob que es generado que es generado por vacman se actualizara en el LDAP
   *
   * validaOTP ValidaOTP Se requiere la validacion de VACMAN del usuario y su OTP
   * returns inline_response_200_2
   **/
  var examples = {};
  examples['application/json'] = {
  "Antiphishing" : "test1",
  "CodigoRespuesta" : "0",
  "DescRespuesta" : "Usuario correcto y token correcto"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

