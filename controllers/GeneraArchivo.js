'use strict';

var url = require('url');

var GeneraArchivo = require('./GeneraArchivoService');

module.exports.generaArchivoPOST = function generaArchivoPOST (req, res, next) {
  GeneraArchivo.generaArchivoPOST(req.swagger.params, res, next);
};
