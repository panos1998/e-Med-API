'use strict';

var utils = require('../utils/writer.js');
var Pharmacy = require('../service/PharmacyService');

module.exports.search_Products = function search_Products (req, res, next) {
  var category = req.swagger.params['category'].value;
  var subcategory = req.swagger.params['subcategory'].value;
  var productID = req.swagger.params['ProductID'].value;
  Pharmacy.search_Products(category,subcategory,productID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.search_pharmacies = function search_pharmacies (req, res, next) {
  var pharmacyCity = req.swagger.params['PharmacyCity'].value;
  Pharmacy.search_pharmacies(pharmacyCity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
