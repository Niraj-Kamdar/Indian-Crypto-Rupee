const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

// Create Schema and Model
const userSchema = new Schema({
  name: String,
  email: String,
  username: { type: String, unique: true },
  password: String,
  mobile: Number,
  balance: { type: Number, default: 0.0 },
  publicKey: String,
  privateKey: String
});

module.exports = mongoose.model(`User`, userSchema);
