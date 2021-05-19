'use strict';


/**
 * Search for incidents near you
 * This can only be done by the logged in user, who has the IsVulnerable value equal to True.Returns a message
 *
 * longtitude BigDecimal Your longtitude
 * latitude BigDecimal Your latitude
 * returns Radar
 **/
exports.search_with_radar = function(longtitude,latitude) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "You are safe"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

