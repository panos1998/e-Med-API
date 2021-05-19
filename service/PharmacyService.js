'use strict';


/**
 * search for pharmacy products
 * This can only be done by the logged in user.Returns  products with related Product Name
 *
 * category List The category of the product you are interested
 * subcategory List The subcategory of the product you are interested
 * productID List The location where the you search for on call pharmacies
 * returns Product
 **/
exports.search_Products = function(category,subcategory,productID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "SitesThatHaveTheProduct" : "SitesThatHaveTheProduct",
  "Category" : {
    "CategoryName" : "Creme",
    "ListSubCategory" : [ {
      "SubCategoryName" : "prosopou"
    }, {
      "SubCategoryName" : "prosopou"
    } ]
  },
  "OnlinePharmacyProduct" : [ "{}", "{}" ],
  "ProductID" : 3232,
  "Name" : "Nivea, creme Care"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Search for pharmacies near you
 * This can only be done by the logged in user.Return pharmacies in chosen city
 *
 * pharmacyCity List The location where the you search for on call pharmacies
 * returns List
 **/
exports.search_pharmacies = function(pharmacyCity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "PharmacyID" : 1212,
  "PharmacyCity" : "Athens",
  "PharmacyAdress" : "lampraki 12",
  "Schedule" : "daily",
  "Latitude" : 12.27,
  "PharmacyName" : "farmakopoulos",
  "Longitude" : 14.45,
  "PharmacyPhoneNumber" : "2381023810",
  "IsOpen" : false
}, {
  "PharmacyID" : 1212,
  "PharmacyCity" : "Athens",
  "PharmacyAdress" : "lampraki 12",
  "Schedule" : "daily",
  "Latitude" : 12.27,
  "PharmacyName" : "farmakopoulos",
  "Longitude" : 14.45,
  "PharmacyPhoneNumber" : "2381023810",
  "IsOpen" : false
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

