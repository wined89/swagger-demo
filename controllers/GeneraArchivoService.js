'use strict';

exports.generaArchivoPOST = function(args, res, next) {
  /**
   * /GeneraArchivo
   * Servicio que realiza una consulta a la bd
   *
   * primer login ConsultaArchivo-in GeneraArchivo (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "descripcion" : "pago nomina segunda quincena",
  "nombreArchivo" : "Segunda Quincena de Julio 2015",
  "cuentaOrigen" : "cuenta ahorro-6025.000",
  "Fechaaplicacion" : "10/04/2017",
  "secuencial" : 40
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

