const router = require("express").Router();
const User = require("../models/user");

const checkUser = (req, res, next) => {
  const { UserToken } = req.cookies;
  if (!UserToken) {
    return res.redirect("/");
  }
  User.findById(UserToken, (err, docs) => {
    if (err) {
      return res.redirect("/");
    }
    res.locals.user = docs;
    next();
  });
};

router.get("/", checkUser, (req, res) => {
  res.set(`Cache-Control`, `no-cache, no-store, must-revalidate`);
  const { user } = res.locals;
  return res.render("dashboard", { user });
});

router.get("/transfer", checkUser, (req, res) => {
  res.set(`Cache-Control`, `no-cache, no-store, must-revalidate`);
  const { user } = res.locals;
  return res.render("transfer", { user });
});

router.get("/get-money", checkUser, (req, res) => {
  res.set(`Cache-Control`, `no-cache, no-store, must-revalidate`);
  const { user } = res.locals;
  return res.render("getmoney", { user });
});

router.get("/add-money", checkUser, (req, res) => {
  res.set(`Cache-Control`, `no-cache, no-store, must-revalidate`);
  const { user } = res.locals;
  return res.render("addmoney", { user });
});

module.exports = router;
