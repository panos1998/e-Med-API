'use strict';

var utils = require('../utils/writer.js');
var Clinic = require('../service/ClinicService');

module.exports.search_clinic = function search_clinic (req, res, next) {
  var clinicCity = req.swagger.params['ClinicCity'].value;
  Clinic.search_clinic(clinicCity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.set_clinic_apointment = function set_clinic_apointment (req, res, next) {
  var clinicName = req.swagger.params['ClinicName'].value;
  var date = req.swagger.params['Date'].value;
  var time = req.swagger.params['Time'].value;
  Clinic.set_clinic_apointment(clinicName,date,time)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
