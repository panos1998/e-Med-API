'use strict';

var utils = require('../utils/writer.js');
var Hospital = require('../service/HospitalService');

module.exports.search_hospitals = function search_hospitals (req, res, next) {
  var hospitalCity = req.swagger.params['HospitalCity'].value;
  Hospital.search_hospitals(hospitalCity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
