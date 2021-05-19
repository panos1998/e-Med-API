'use strict';

var utils = require('../utils/writer.js');
var Article = require('../service/ArticleService');

module.exports.search_article = function search_article (req, res, next) {
  var articleId = req.swagger.params['ArticleId'].value;
  Article.search_article(articleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
