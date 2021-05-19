'use strict';

var utils = require('../utils/writer.js');
var Search = require('../service/SearchService');

module.exports.search_with_text = function search_with_text (req, res, next) {
  var searchWord = req.swagger.params['SearchWord'].value;
  var searchText = req.swagger.params['searchText'].value;
  Search.search_with_text(searchWord,searchText)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
