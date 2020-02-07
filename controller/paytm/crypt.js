"use strict";

var crypto = require('crypto');
var util = require('util');



var crypt = ***REMOVED***
  iv: '@@@@&&&&####$$$$',

  encrypt: function (data,custom_key) ***REMOVED***
    var iv = this.iv;
    var key = custom_key;
    var algo = '256';
    switch (key.length) ***REMOVED***
    case 16:
      algo = '128';
      break;
    case 24:
      algo = '192';
      break;
    case 32:
      algo = '256';
      break;

  ***REMOVED***
    var cipher = crypto.createCipheriv('AES-' + algo + '-CBC', key, iv);
    //var cipher = crypto.createCipher('aes256',key);
    var encrypted = cipher.update(data, 'binary', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
***REMOVED***

  decrypt: function (data,custom_key) ***REMOVED***
    var iv = this.iv;
    var key = custom_key;
    var algo = '256';
    switch (key.length) ***REMOVED***
    case 16:
      algo = '128';
      break;
    case 24:
      algo = '192';
      break;
    case 32:
      algo = '256';
      break;
  ***REMOVED***
    var decipher = crypto.createDecipheriv('AES-' + algo + '-CBC', key, iv);
    var decrypted = decipher.update(data, 'base64', 'binary');
    try ***REMOVED***
      decrypted += decipher.final('binary');
  ***REMOVED*** catch (e) ***REMOVED***
      util.log(util.inspect(e));
  ***REMOVED***
    return decrypted;
***REMOVED***

  gen_salt: function (length, cb) ***REMOVED***
    crypto.randomBytes((length * 3.0) / 4.0, function (err, buf) ***REMOVED***
      var salt;
      if (!err) ***REMOVED***
        salt = buf.toString("base64");
    ***REMOVED***
      //salt=Math.floor(Math.random()*8999)+1000;
      cb(err, salt);
  ***REMOVED***);
***REMOVED***

  /* one way md5 hash with salt */
  md5sum: function (salt, data) ***REMOVED***
    return crypto.createHash('md5').update(salt + data).digest('hex');
***REMOVED***
  sha256sum: function (salt, data) ***REMOVED***
    return crypto.createHash('sha256').update(data + salt).digest('hex');
***REMOVED***
***REMOVED***;

module.exports = crypt;

(function () ***REMOVED***
  var i;

  function logsalt(err, salt) ***REMOVED***
    if (!err) ***REMOVED***
      console.log('salt is ' + salt);
  ***REMOVED***
***REMOVED***

  if (require.main === module) ***REMOVED***
    var enc = crypt.encrypt('One97');
    console.log('encrypted - ' + enc);
    console.log('decrypted - ' + crypt.decrypt(enc));

    for (i = 0; i < 5; i++) ***REMOVED***
      crypt.gen_salt(4, logsalt);
  ***REMOVED***
***REMOVED***

***REMOVED***());
