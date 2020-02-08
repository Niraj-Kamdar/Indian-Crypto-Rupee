const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

// Create Schema and Model
const userSchema = new Schema(***REMOVED***
  name: String,
  email: String,
  username: ***REMOVED*** type: String, unique: true ***REMOVED***,
  password: String,
  mobile: Number,
  balance: ***REMOVED*** type: Number, default: 0.0 ***REMOVED***,
  publicKey: String,
  privateKey: String
***REMOVED***);

module.exports = mongoose.model(`User`, userSchema);
