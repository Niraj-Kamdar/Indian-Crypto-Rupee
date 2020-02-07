const router = require("express").Router();
const User = require("../models/user");

router.post("/", (req, res) => ***REMOVED***
  res.cookie("UserToken", "");
  return res.redirect("/");
***REMOVED***);

module.exports = router;
