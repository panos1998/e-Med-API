'use strict';


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Created user object
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Logs user into the system
 * 
 *
 * username String The user name for login
 * password String The password for login in clear text
 * returns User
 **/
exports.loginUser = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password123",
  "IsVulnerable" : false,
  "UserCity" : "Edessa",
  "Latitude" : 34.54,
  "userID" : 1.5209444442E10,
  "Longitude" : 43.24,
  "email" : "petridispa@ece.auth.gr",
  "username" : "Superman23"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs user into the system
 * 
 *
 * returns User
 **/
exports.logs out user = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password123",
  "IsVulnerable" : false,
  "UserCity" : "Edessa",
  "Latitude" : 34.54,
  "userID" : 1.5209444442E10,
  "Longitude" : 43.24,
  "email" : "petridispa@ece.auth.gr",
  "username" : "Superman23"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

