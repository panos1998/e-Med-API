'use strict';

var utils = require('../utils/writer.js');
var Diet = require('../service/DietService');

module.exports.read_diets = function read_diets (req, res, next) {
  var dietId = req.swagger.params['DietId'].value;
  Diet.read_diets(dietId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
