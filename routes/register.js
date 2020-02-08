const router = require("express").Router();
const User = require("../models/user");

const ***REMOVED*** web3Controls ***REMOVED*** = require("../ethereumControls/web3");

const checkUser = (req, res, next) => ***REMOVED***
  const ***REMOVED*** UserToken ***REMOVED*** = req.cookies;
  if (!UserToken) ***REMOVED***
    return next();
***REMOVED***
  User.findById(UserToken, (err, docs) => ***REMOVED***
    if (err) ***REMOVED***
      res.cookie("UserToken", "");
      return next();
  ***REMOVED***
    res.locals.user = docs;
    res.redirect("/dashboard");
***REMOVED***);
***REMOVED***;

router.get("/", checkUser, (req, res) => ***REMOVED***
  res.render("register", ***REMOVED*** error: null ***REMOVED***);
***REMOVED***);

router.post("/", checkUser, (req, res) => ***REMOVED***
  const ***REMOVED***
    name,
    email,
    username,
    password,
    mobile,
    publicKey,
    privateKey
***REMOVED*** = req.body;
  const data = JSON.stringify(
    web3.eth.accounts.encrypt(privateKey, username + password)
  );
  web3Controls.addUser(web3Controls.acc, publicKey);
  const user = new User(***REMOVED***
    name,
    email,
    username,
    password,
    mobile,
    data,
    publicKey
***REMOVED***);

  user
    .save()
    .then(docs => ***REMOVED***
      res.cookie(`UserToken`, docs._id);

      return res.redirect("/dashboard");
  ***REMOVED***)
    .catch(err => ***REMOVED***
      return res.render("register", ***REMOVED*** error: err.errmsg ***REMOVED***);
  ***REMOVED***);
***REMOVED***);

module.exports = router;
