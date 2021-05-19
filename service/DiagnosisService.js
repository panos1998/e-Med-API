'use strict';


/**
 * diagnosis menu
 * This can only be done by the logged in user.Returns a Diagnosis
 *
 * symptomName List Choose your symptoms
 * returns Diagnosis
 **/
exports.search_diagnosis = function(symptomName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "DiagnosisSymptoms" : [ "{}", "{}" ],
  "DiagnosisTitle" : "a",
  "DiagnosisID" : 4212
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

