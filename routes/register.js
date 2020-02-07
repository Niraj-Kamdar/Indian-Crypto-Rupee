const router = require("express").Router();
const User = require("../models/user");
const Web3 = require("web3");
const web3 = new Web3("HTTP://127.0.0.1:7545");
router.get("/", (req, res) => ***REMOVED***
  res.render("register", ***REMOVED*** error: null ***REMOVED***);
***REMOVED***);

router.post("/", (req, res) => ***REMOVED***
  const ***REMOVED*** name, email, username, password, mobile ***REMOVED*** = req.body;
  const acc = web3.eth.accounts.create();
  const data = JSON.stringify(
    web3.eth.accounts.encrypt(acc.privateKey, username + password)
  );
  const user = new User(***REMOVED***
    name,
    email,
    username,
    password,
    mobile,
    data
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
