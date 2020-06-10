const router = require("express").Router();
const User = require("../models/user");

router.post("/", (req, res) => {
  res.cookie("UserToken", "");
  return res.redirect("/");
});

module.exports = router;
