"use strict";

var crypt = require("./crypt");
var util = require("util");
var crypto = require("crypto");

//mandatory flag: when it set, only mandatory parameters are added to checksum

function paramsToString(params, mandatoryflag) ***REMOVED***
  var data = "";
  var tempKeys = Object.keys(params);
  tempKeys.sort();
  tempKeys.forEach(function(key) ***REMOVED***
    if (params[key]) ***REMOVED***
      var n = params[key].includes("REFUND");
      var m = params[key].includes("|");
      if (n == true) ***REMOVED***
        params[key] = "";
    ***REMOVED***
      if (m == true) ***REMOVED***
        params[key] = "";
    ***REMOVED***
  ***REMOVED***
    if (key !== "CHECKSUMHASH") ***REMOVED***
      if (params[key] === "null") params[key] = "";
      if (!mandatoryflag || mandatoryParams.indexOf(key) !== -1) ***REMOVED***
        data += params[key] + "|";
    ***REMOVED***
  ***REMOVED***
***REMOVED***);
  return data;
***REMOVED***

function genchecksum(params, key, cb) ***REMOVED***
  var data = paramsToString(params);
  crypt.gen_salt(4, function(err, salt) ***REMOVED***
    var sha256 = crypto
      .createHash("sha256")
      .update(data + salt)
      .digest("hex");
    var check_sum = sha256 + salt;
    var encrypted = crypt.encrypt(check_sum, key);
    cb(undefined, encrypted);
***REMOVED***);
***REMOVED***
function genchecksumbystring(params, key, cb) ***REMOVED***
  crypt.gen_salt(4, function(err, salt) ***REMOVED***
    var sha256 = crypto
      .createHash("sha256")
      .update(params + "|" + salt)
      .digest("hex");
    var check_sum = sha256 + salt;
    var encrypted = crypt.encrypt(check_sum, key);

    var CHECKSUMHASH = encodeURIComponent(encrypted);
    CHECKSUMHASH = encrypted;
    cb(undefined, CHECKSUMHASH);
***REMOVED***);
***REMOVED***

function verifychecksum(params, key, checksumhash) ***REMOVED***
  var data = paramsToString(params, false);

  //TODO: after PG fix on thier side remove below two lines
  if (typeof checksumhash !== "undefined") ***REMOVED***
    checksumhash = checksumhash.replace("\n", "");
    checksumhash = checksumhash.replace("\r", "");
    var temp = decodeURIComponent(checksumhash);
    var checksum = crypt.decrypt(temp, key);
    var salt = checksum.substr(checksum.length - 4);
    var sha256 = checksum.substr(0, checksum.length - 4);
    var hash = crypto
      .createHash("sha256")
      .update(data + salt)
      .digest("hex");
    if (hash === sha256) ***REMOVED***
      return true;
  ***REMOVED*** else ***REMOVED***
      util.log("checksum is wrong");
      return false;
  ***REMOVED***
***REMOVED*** else ***REMOVED***
    util.log("checksum not found");
    return false;
***REMOVED***
***REMOVED***

function verifychecksumbystring(params, key, checksumhash) ***REMOVED***
  var checksum = crypt.decrypt(checksumhash, key);
  var salt = checksum.substr(checksum.length - 4);
  var sha256 = checksum.substr(0, checksum.length - 4);
  var hash = crypto
    .createHash("sha256")
    .update(params + "|" + salt)
    .digest("hex");
  if (hash === sha256) ***REMOVED***
    return true;
***REMOVED*** else ***REMOVED***
    util.log("checksum is wrong");
    return false;
***REMOVED***
***REMOVED***

function genchecksumforrefund(params, key, cb) ***REMOVED***
  var data = paramsToStringrefund(params);
  crypt.gen_salt(4, function(err, salt) ***REMOVED***
    var sha256 = crypto
      .createHash("sha256")
      .update(data + salt)
      .digest("hex");
    var check_sum = sha256 + salt;
    var encrypted = crypt.encrypt(check_sum, key);
    params.CHECKSUM = encodeURIComponent(encrypted);
    cb(undefined, params);
***REMOVED***);
***REMOVED***

function paramsToStringrefund(params, mandatoryflag) ***REMOVED***
  var data = "";
  var tempKeys = Object.keys(params);
  tempKeys.sort();
  tempKeys.forEach(function(key) ***REMOVED***
    var m = params[key].includes("|");
    if (m == true) ***REMOVED***
      params[key] = "";
  ***REMOVED***
    if (key !== "CHECKSUMHASH") ***REMOVED***
      if (params[key] === "null") params[key] = "";
      if (!mandatoryflag || mandatoryParams.indexOf(key) !== -1) ***REMOVED***
        data += params[key] + "|";
    ***REMOVED***
  ***REMOVED***
***REMOVED***);
  return data;
***REMOVED***

module.exports.genchecksum = genchecksum;
module.exports.verifychecksum = verifychecksum;
module.exports.verifychecksumbystring = verifychecksumbystring;
module.exports.genchecksumbystring = genchecksumbystring;
module.exports.genchecksumforrefund = genchecksumforrefund;
