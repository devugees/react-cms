const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: String,
  password: String,
  
});

const Admin = mongoose.model('students', adminSchema);
module.exports = Admin;