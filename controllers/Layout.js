'use strict';

var url = require('url');

var Layout = require('./LayoutService');

module.exports.layoutPOST = function layoutPOST (req, res, next) {
  Layout.layoutPOST(req.swagger.params, res, next);
};
