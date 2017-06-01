'use strict';

var url = require('url');

var OTP = require('./OTPService');

module.exports.validaOTP = function validaOTP (req, res, next) {
  OTP.validaOTP(req.swagger.params, res, next);
};
