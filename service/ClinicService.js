'use strict';


/**
 * Search for clinics near you
 * This can only be done by the logged in user.Returns clinics in chosen city
 *
 * clinicCity List search for clinics in that city
 * returns List
 **/
exports.search_clinic = function(clinicCity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ClinicCity" : "Thessaloniki",
  "ClinicName" : "agios dimitrios",
  "Schedule" : "daily",
  "ClinicID" : 5555,
  "ClinicAdress" : "Thessaloniki",
  "Latitude" : 35.32,
  "Longitude" : 23.34
}, {
  "ClinicCity" : "Thessaloniki",
  "ClinicName" : "agios dimitrios",
  "Schedule" : "daily",
  "ClinicID" : 5555,
  "ClinicAdress" : "Thessaloniki",
  "Latitude" : 35.32,
  "Longitude" : 23.34
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set schedule in clinic
 * This can only be done by the logged in user.Posts a clinic appointment in database
 *
 * clinicName List Status values that need to be considered for filter
 * date List Set day for apointment
 * time List Set time at apointment
 * returns ClinicAppointments
 **/
exports.set_clinic_apointment = function(clinicName,date,time) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "DoctorsName" : "George Stephnaopoulos",
  "DateAndTime" : "28/5/2020 13:30",
  "PatientName" : "Mhxalhs mhxailidhs"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

