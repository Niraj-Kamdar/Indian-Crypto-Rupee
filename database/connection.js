`use strict`;
const mongoose = require(`mongoose`);
const config = require(`config`);
const CONNECTION_URL = config.get(`SERVER.DATABASE.CONNECTION_STRING`);

// ES6 Promises
mongoose.Promise = global.Promise;

mongoose.set(`useNewUrlParser`, true);
mongoose.set(`useFindAndModify`, false);
mongoose.set(`useCreateIndex`, true);
mongoose.set(`useUnifiedTopology`, true);
mongoose
  .connect(CONNECTION_URL, ***REMOVED*** useNewUrlParser: true ***REMOVED***)
  .then(() => ***REMOVED***
    console.log("Connection Successful:", CONNECTION_URL);
***REMOVED***)
  .catch(err => ***REMOVED***
    console.log("ERROR:", err);
***REMOVED***);
