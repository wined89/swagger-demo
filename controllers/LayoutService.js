'use strict';

exports.layoutPOST = function(args, res, next) {
  /**
   * /Layout
   * Servicio que realiza una consulta a la bd
   *
   * ddddddd login FileDefinition-in Layout (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [{
   "fileDefinition":{
      "id":NumberInt(1),
      "fileType":"Layout - C",
      "side":NumberInt(3),
      "fileLimit":NumberInt(3),
      "KeyLine":NumberInt(2),
      "fileLines":{
          "00":{
             "unique":true,
             "size":NumberInt(125),
             "fileFields":[
                {
                   "name":"Tipo de Registro",
                   "longField":NumberInt(2),
                   "start":NumberInt(0),
                   "type":"integer",
                   "validations":{
                   }
                }, {
                   "name":"Numerico de identificacion del cliente",
                   "longField":NumberInt(12),
                   "start":NumberInt(2),
                   "type":"integer",
                   "validations":{
                   }
                }, {
                   "name":"Fecha de pago",
                   "longField":NumberInt(6),
                   "start":NumberInt(14),
                   "type":"integer",
                   "validations":[
			{
				"rule":"dateFormat",
				"params":{
					"format":"ddmmaa"
				}
                        }
		   ]
                }, {
                   "name":"Secuencial del archivo",
                   "longField":NumberInt(4),
                   "start":NumberInt(20),
                   "type":"integer",
                   "validations":{
                   }
                }, {
                   "name":"Nombre de la empresa",
                   "longField":NumberInt(36),
                   "start":NumberInt(24),
                   "type":"string",
                   "validations":{
                   }
                }, {
                   "name":"Descripcion del archivo",
                   "longField":NumberInt(20),
                   "start":NumberInt(60),
                   "type":"string",
                   "validations":{
                   }
                }, {
                   "name":"Naturaleza del archivo",
                   "longField":NumberInt(2),
                   "start":NumberInt(80),
                   "type":"integer",
                   "validations":{
                   }
                }, {
                   "name":"Instrucciones para ordenes de pago",
                   "longField":NumberInt(40),
                   "start":NumberInt(82),
                   "type":"string",
                   "validations":{
                   }
                }, {
                   "name":"Version del Layout",
                   "longField":NumberInt(1),
                   "start":NumberInt(122),
                   "type":"string",
                   "validations":{
                   }
                }, {
                   "name":"Volumen",
                   "longField":NumberInt(1),
                   "start":NumberInt(123),
                   "type":"integer",
                   "validations":{
                   }
                }, {
                   "name":"Caracteristicas del archivo",
                   "longField":NumberInt(1),
                   "start":NumberInt(124),
                   "type":"integer",
                   "validations":{
                   }
                }
             ]
          },
          "01":{
             "unique":false,
             "size":NumberInt(218),
             "fileFields":[
               {
                  "name":"Tipo de Registro",
                  "longField":NumberInt(2),
                  "start":NumberInt(0),
                  "type":"integer",
		  "main":true,
                  "validations":{
                  }
               }, {
                  "name":"Tipo de operacion",
                  "longField":NumberInt(1),
                  "start":NumberInt(2),
                  "type":"integer",
		  "main":true,
                  "validations":{
                  }
               }, {
                  "name":"Clave de la moneda",
                  "longField":NumberInt(3),
                  "start":NumberInt(3),
                  "type":"integer",
		  "main":true,
                  "validations":{
                  }
               }, {
                  "name":"Importe",
                  "longField":NumberInt(18),
                  "start":NumberInt(6),
                  "type":"float",
		  "main":true,
                   "validations":[
			{
				"rule":"amount",
				"params":{
					"decimals":NumberInt(2)
				}
                        }
		   ]
               }, {
                  "name":"Tipo de cuenta",
                  "longField":NumberInt(2),
                  "start":NumberInt(24),
                  "type":"integer",
		  "main":true,
                  "validations":{
                  }
               }, {
                  "name":"Numero de cuenta",
                  "longField":NumberInt(20),
                  "start":NumberInt(26),
                  "type":"integer",
		  "main":false,
                  "validations":{
                  }
               }, {
                  "name":"Referencia Alfanumerica",
                  "longField":NumberInt(40),
                  "start":NumberInt(46),
                  "type":"string",
		  "main":false,
                  "validations":{
                  }
               }, {
                  "name":"Beneficiario",
                  "longField":NumberInt(55),
                  "start":NumberInt(86),
                  "type":"string",
		  "main":false,
                  "validations":{
                  }
               }, {
                  "name":"Instrucciones",
                  "longField":NumberInt(40),
                  "start":NumberInt(141),
                  "type":"string",
		  "main":false,
                  "validation":{
                  }
               }, {
                  "name":"Descripcion TEF",
                  "longField":NumberInt(24),
                  "start":NumberInt(181),
                  "type":"string",
		  "main":false,
                  "validations":{
                  }
               }, {
                  "name":"Clave de Banco",
                  "longField":NumberInt(4),
                  "start":NumberInt(205),
                  "type":"integer",
		  "main":false,
                  "validations":{
                  }
               }, {
                  "name":"Referencia Numerica",
                  "longField":NumberInt(7),
                  "start":NumberInt(208),
                  "type":"integer",
		  "main":false,
                  "validations":{
                  }
               }, {
                  "name":"Plazo",
                  "longField":NumberInt(1),
                  "start":NumberInt(216),
                  "type":"integer",
		  "main":false,
                  "validations":{
                  }
               }
             ]
          },
          "99":{
             "unique":true,
             "size":NumberInt(53),
             "fileFields":[
               {
                  "name":"Tipo de Registro",
                  "longField":NumberInt(2),
                  "start":NumberInt(0),
                  "type":"integer",
                  "validations":{
                  }
               }, {
                  "name":"Clave de la moneda",
                  "longField":NumberInt(3),
                  "start":NumberInt(2),
                  "type":"integer",
                  "validations":{
                  }
               }, {
                  "name":"Numero de abonos",
                  "longField":NumberInt(6),
                  "start":NumberInt(5),
                  "type":"integer",
                  "validations":{
                  }
               }, {
                  "name":"Importe total de abonos",
                  "longField":NumberInt(18),
                  "start":NumberInt(11),
                  "type":"float",
                   "validations":[
			{
				"rule":"peyment",
				"params":{
					"decimals":NumberInt(2)
				}
                        }
		   ]
               }, {
                  "name":"Numero de cargos",
                  "longField":NumberInt(6),
                  "start":NumberInt(29),
		  "type":"integer",
                  "validations":{
                  }
               }, {
                  "name":"Importe total de cargos",
                  "longField":NumberInt(18),
                  "start":NumberInt(35),
                  "type":"float",
                   "validations":[
			{
				"rule":"totalAmount",
				"params":{
					"decimals":NumberInt(2)
				}
                        }
		   ]
               }
             ]
          }
      }
   }
}];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

