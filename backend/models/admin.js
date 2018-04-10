var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
  email: String,
  password: String,
  
});

var Admin = mongoose.model('students', adminSchema);
module.exports = Admin;