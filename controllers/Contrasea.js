'use strict';

var url = require('url');

var Contrasea = require('./ContraseaService');

module.exports.cambioPwd = function cambioPwd (req, res, next) {
  Contrasea.cambioPwd(req.swagger.params, res, next);
};
