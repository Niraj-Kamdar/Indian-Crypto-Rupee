// Database connection
const connection = require("./database/connection");

// Express Setup
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// Express App Middleware
app.use(express.json());
app.use(express.urlencoded(***REMOVED*** extended: true ***REMOVED***));
app.use(express.static(`public`));
app.use(cookieParser());

// Express App View Engine
app.set("view engine", "ejs");

// Express Routes
const register = require("./routes/register");
const login = require("./routes/login");
const dashboard = require("./routes/dashboard");
const logout = require("./routes/logout");
const addmoney = require("./routes/addmoney");
const getmoney = require("./routes/getmoney");
const transfer = require("./routes/transfer");

// Database
const User = require("./models/user");

app.use("/register", register);
app.use("/login", login);
app.use("/dashboard", dashboard);
app.use("/logout", logout);
app.use("/addmoney", addmoney);
app.use("/getmoney", getmoney);
app.use("/transfer", transfer);

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

app.get("/", checkUser, (req, res) => ***REMOVED***
  res.render("index");
***REMOVED***);

app.listen(2410, (req, res) => ***REMOVED***
  console.log("Server has started on port 3000");
***REMOVED***);
