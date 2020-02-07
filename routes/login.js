const router = require("express").Router();
const User = require("../models/user");

router.get("/", (req, res) => ***REMOVED***
  res.render("login");
***REMOVED***);

router.get("/", (req, res) => ***REMOVED***
  const ***REMOVED*** username, password ***REMOVED*** = req.body;
  User.find(***REMOVED*** username ***REMOVED***, (err, docs) => ***REMOVED***
    if (err) ***REMOVED***
      return res.redirect("/");
  ***REMOVED***
    if (password !== docs.password) ***REMOVED***
      return res.redirect("/login?error='wrongpassword'");
  ***REMOVED***
    res.cookie("UserToken", docs._id);
    return res.redirect("/dashboard");
***REMOVED***);
***REMOVED***);

module.exports = router;
