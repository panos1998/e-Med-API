'use strict';


/**
 * Doctors menu
 * Posts a doctor appointment in given city
 *
 * doctorId BigDecimal 
 * doctorCity String 
 * available Days List 
 * available Time List  
 * returns Doctor
 **/
exports.book appointment = function(doctorId,doctorCity,available Days,available Time) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "DoctorID" : 3233,
  "DoctorName" : "Dimitris Dimitropoulos",
  "DoctorAdress" : "nikomidias 70",
  "DoctorPhoneNumber" : "69999999",
  "DoctorSchedule" : [ "{}", "{}" ],
  "Latitude" : 32.34,
  "DoctorSex" : true,
  "Longitude" : 13.43,
  "DoctorDegree" : "university of sofia",
  "DoctorCity" : "Thessaloniki",
  "DoctorDescription" : "pathologist"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Doctors menu
 * Returns doctors in given city
 *
 * doctorcity List Choose city
 * returns Doctor
 **/
exports.find doctors = function(doctorcity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "DoctorID" : 3233,
  "DoctorName" : "Dimitris Dimitropoulos",
  "DoctorAdress" : "nikomidias 70",
  "DoctorPhoneNumber" : "69999999",
  "DoctorSchedule" : [ "{}", "{}" ],
  "Latitude" : 32.34,
  "DoctorSex" : true,
  "Longitude" : 13.43,
  "DoctorDegree" : "university of sofia",
  "DoctorCity" : "Thessaloniki",
  "DoctorDescription" : "pathologist"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

