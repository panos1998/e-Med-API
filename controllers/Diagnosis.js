'use strict';

var utils = require('../utils/writer.js');
var Diagnosis = require('../service/DiagnosisService');

module.exports.search_diagnosis = function search_diagnosis (req, res, next) {
  var symptomName = req.swagger.params['SymptomName'].value;
  Diagnosis.search_diagnosis(symptomName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
