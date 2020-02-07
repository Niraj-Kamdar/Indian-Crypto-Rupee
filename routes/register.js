const router = require("express").Router();
const User = require("../models/user");

router.get("/", (req, res) => ***REMOVED***
  res.render("register", ***REMOVED*** error: null ***REMOVED***);
***REMOVED***);

router.post("/", (req, res) => ***REMOVED***
  const ***REMOVED*** name, email, username, password, mobile ***REMOVED*** = req.body;
  const user = new User(***REMOVED***
    name,
    email,
    username,
    password,
    mobile
***REMOVED***);
  user
    .save()
    .then(docs => ***REMOVED***
      res.cookie(`UserToken`, docs._id);
      console.log("Saved");
      return res.redirect("/dashboard");
  ***REMOVED***)
    .catch(err => ***REMOVED***
      return res.render("register", ***REMOVED*** error: err.errmsg ***REMOVED***);
  ***REMOVED***);
***REMOVED***);

module.exports = router;
