const router = require("express").Router();
const User = require("../models/user");

const checkUser = (req, res, next) => {
  const { UserToken } = req.cookies;
  if (!UserToken) {
    return next();
  }
  User.findById(UserToken, (err, docs) => {
    if (err) {
      res.cookie("UserToken", "");
      return next();
    }
    res.locals.user = docs;
    res.redirect("/dashboard");
  });
};

router.get("/", checkUser, (req, res) => {
  res.render("login");
});

router.post("/", checkUser, (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, docs) => {
    if (err || !docs) {
      return res.redirect("/login?error='usernotfound'");
    }
    console.log(password);
    console.log(docs);
    if (password != docs.password) {
      return res.redirect("/login?error='wrongpassword'");
    }
    res.cookie("UserToken", docs._id);
    return res.redirect("/dashboard");
  });
});

module.exports = router;
