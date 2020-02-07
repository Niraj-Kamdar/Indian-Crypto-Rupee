const router = require("express").Router();
const User = require("../models/user");

router.get("/", (req, res) => ***REMOVED***
  console.log("Hello This is Dashboard");
  return res.render("dashboard");
***REMOVED***);

module.exports = router;
