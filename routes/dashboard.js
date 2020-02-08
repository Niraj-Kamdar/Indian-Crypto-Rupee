const router = require("express").Router();
const User = require("../models/user");

const checkUser = (req, res, next) => ***REMOVED***
  const ***REMOVED*** UserToken ***REMOVED*** = req.cookies;
  if (!UserToken) ***REMOVED***
    return res.redirect("/");
***REMOVED***
  User.findById(UserToken, (err, docs) => ***REMOVED***
    if (err) ***REMOVED***
      return res.redirect("/");
  ***REMOVED***
    res.locals.user = docs;
    next();
***REMOVED***);
***REMOVED***;

router.get("/", checkUser, (req, res) => ***REMOVED***
  res.set(`Cache-Control`, `no-cache, no-store, must-revalidate`);
  const ***REMOVED*** user ***REMOVED*** = res.locals;
  return res.render("dashboard", ***REMOVED*** user ***REMOVED***);
***REMOVED***);

module.exports = router;
