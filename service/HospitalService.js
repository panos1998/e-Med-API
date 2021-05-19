'use strict';


/**
 * Search for hospitals near you
 * This can only be done by the logged in user.Returns hospital in chosen city
 *
 * hospitalCity List Search for On Call Hospitals in that city
 * returns List
 **/
exports.search_hospitals = function(hospitalCity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "HospitalCity" : "Thessaloniki",
  "HospitalAdress" : "lampraki 12",
  "HospitalPhoneNumber" : "2381023810",
  "OpenOnCallSchedule" : "daily",
  "HospitalID" : 4321,
  "Latitude" : 42.32,
  "HospitalName" : "Ippokratio",
  "Longitude" : 32.54,
  "IsOpen" : false
}, {
  "HospitalCity" : "Thessaloniki",
  "HospitalAdress" : "lampraki 12",
  "HospitalPhoneNumber" : "2381023810",
  "OpenOnCallSchedule" : "daily",
  "HospitalID" : 4321,
  "Latitude" : 42.32,
  "HospitalName" : "Ippokratio",
  "Longitude" : 32.54,
  "IsOpen" : false
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

