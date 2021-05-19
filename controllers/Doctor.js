'use strict';

var utils = require('../utils/writer.js');
var Doctor = require('../service/DoctorService');

module.exports.book appointment = function book appointment (req, res, next) {
  var doctorId = req.swagger.params['doctorId'].value;
  var doctorCity = req.swagger.params['doctorCity'].value;
  var available Days = req.swagger.params['Available Days'].value;
  var available Time = req.swagger.params['Available Time'].value;
  Doctor.book appointment(doctorId,doctorCity,available Days,available Time)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.find doctors = function find doctors (req, res, next) {
  var doctorcity = req.swagger.params['doctorcity'].value;
  Doctor.find doctors(doctorcity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
