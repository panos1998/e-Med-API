'use strict';

var utils = require('../utils/writer.js');
var Radar = require('../service/RadarService');

module.exports.search_with_radar = function search_with_radar (req, res, next) {
  var longtitude = req.swagger.params['Longtitude'].value;
  var latitude = req.swagger.params['Latitude'].value;
  Radar.search_with_radar(longtitude,latitude)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
