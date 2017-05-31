'use strict';

var url = require('url');

var Contrato = require('./ContratoService');

module.exports.contrato = function contrato (req, res, next) {
  Contrato.contrato(req.swagger.params, res, next);
};

module.exports.contratoPOST = function contratoPOST (req, res, next) {
  Contrato.contratoPOST(req.swagger.params, res, next);
};
