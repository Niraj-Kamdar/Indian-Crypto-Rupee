const router = require("express").Router();
const User = require("../models/user");

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
  res.render("login");
***REMOVED***);

router.post("/", checkUser, (req, res) => ***REMOVED***
  const ***REMOVED*** username, password ***REMOVED*** = req.body;
  User.findOne(***REMOVED*** username ***REMOVED***, (err, docs) => ***REMOVED***
    if (err || !docs) ***REMOVED***
      return res.redirect("/login?error='usernotfound'");
  ***REMOVED***
    console.log(password);
    console.log(docs);
    if (password != docs.password) ***REMOVED***
      return res.redirect("/login?error='wrongpassword'");
  ***REMOVED***
    res.cookie("UserToken", docs._id);
    return res.redirect("/dashboard");
***REMOVED***);
***REMOVED***);

module.exports = router;
