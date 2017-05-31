'use strict';

var url = require('url');

var Cliente = require('./ClienteService');

module.exports.clientePOST = function clientePOST (req, res, next) {
  Cliente.clientePOST(req.swagger.params, res, next);
};
