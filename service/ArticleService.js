'use strict';


/**
 * search for articles
 * This can only be done by the logged in user.Returns a article
 *
 * articleId List Choose the articles you are interested in:
 * returns Article
 **/
exports.search_article = function(articleId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ArticleContent" : "Today, there was a breakthrough...",
  "ArticleSubtitle" : "the lastest news",
  "ArticleTitle" : "Breaking News",
  "ArticleID" : 2112
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

