const router = require("express").Router();
const User = require("../models/user");

const { web3Controls } = require("../ethereumControls/web3");
const web3 = web3Controls.web3;
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
  res.render("register", { error: null });
});

router.post("/", checkUser, (req, res) => {
  const {
    name,
    email,
    username,
    password,
    mobile,
    publicKey,
    privateKey
  } = req.body;
  const data = JSON.stringify(
    web3.eth.accounts.encrypt(privateKey, username + password)
  );
  web3Controls.addUser(web3Controls.acc, publicKey);
  const user = new User({
    name,
    email,
    username,
    password,
    mobile,
    data,
    publicKey
  });

  user
    .save()
    .then(docs => {
      res.cookie(`UserToken`, docs._id);
      return res.redirect("/dashboard");
    })
    .catch(err => {
      return res.render("register", { error: err.errmsg });
    });
});

module.exports = router;
