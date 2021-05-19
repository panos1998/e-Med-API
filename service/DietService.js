'use strict';


/**
 * Read a diet
 * This can only be done by the logged in user.Returns diet
 *
 * dietId List Status values that need to be considered for filter
 * returns Diet
 **/
exports.read_diets = function(dietId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "DietContent" : "To see if you are ready,,,",
  "DietTitle" : "Diet for a healthy life",
  "DietID" : 12124
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

