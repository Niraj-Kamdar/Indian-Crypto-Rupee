const router = require("express").Router();
const User = require("../models/user");

router.get("/", (req, res) => ***REMOVED***
  res.render("register", ***REMOVED*** error: null ***REMOVED***);
***REMOVED***);

router.post("/", (req, res) => ***REMOVED***
  const ***REMOVED*** name, email, username, password, mobile ***REMOVED*** = req.body;
  const user = new User(***REMOVED***
    name,
    email,
    username,
    password,
    mobile
***REMOVED***);
  user
    .save()
    .then((err, docs) => ***REMOVED***
      if (err) ***REMOVED***
        return res.send(err);
    ***REMOVED***
      res.cookie(`UserToken`, docs._id);
      return res.redirect("/dashboard");
  ***REMOVED***)
    .catch(err => ***REMOVED***
      return res.render("register", ***REMOVED*** error: err.errmsg ***REMOVED***);
  ***REMOVED***);
***REMOVED***);

module.exports = router;
