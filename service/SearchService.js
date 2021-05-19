'use strict';


/**
 * Search in the database with a specific word.Return  search-related objects
 * search
 *
 * searchWord String 
 * searchText String Search
 * returns search
 **/
exports.search_with_text = function(searchWord,searchText) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "SearchPharmacies" : [ {
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
  } ],
  "SearchPharmacyProducts" : [ {
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
  }, {
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
  } ],
  "SearchClinic" : [ {
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
  } ],
  "SearchArticles" : [ {
    "ArticleContent" : "Today, there was a breakthrough...",
    "ArticleSubtitle" : "the lastest news",
    "ArticleTitle" : "Breaking News",
    "ArticleID" : 2112
  }, {
    "ArticleContent" : "Today, there was a breakthrough...",
    "ArticleSubtitle" : "the lastest news",
    "ArticleTitle" : "Breaking News",
    "ArticleID" : 2112
  } ],
  "SearchHospitals" : [ {
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
  } ],
  "SearchText" : "News",
  "SearchDiet" : [ {
    "DietContent" : "To see if you are ready,,,",
    "DietTitle" : "Diet for a healthy life",
    "DietID" : 12124
  }, {
    "DietContent" : "To see if you are ready,,,",
    "DietTitle" : "Diet for a healthy life",
    "DietID" : 12124
  } ],
  "SearchDiagnosis" : [ {
    "DiagnosisSymptoms" : [ "{}", "{}" ],
    "DiagnosisTitle" : "a",
    "DiagnosisID" : 4212
  }, {
    "DiagnosisSymptoms" : [ "{}", "{}" ],
    "DiagnosisTitle" : "a",
    "DiagnosisID" : 4212
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

