const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  role: String
  
});

const User = mongoose.model('users', userSchema);
module.exports = User;