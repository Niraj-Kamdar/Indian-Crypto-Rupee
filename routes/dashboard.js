const router = require("express").Router();
const User = require("../models/user");

const checkUser = (req, res, next) => ***REMOVED***
  req.coo;
***REMOVED***;

router.get("/", checkUser, (req, res) => ***REMOVED***
  console.log("Hello This is Dashboard");
  return res.render("dashboard");
***REMOVED***);

module.exports = router;
