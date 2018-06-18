const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomCodeSchema = new Schema({
  javascriptCode: String,
  cssCode: String,
});

const CustomCode = mongoose.model('CustomCode', CustomCodeSchema);
module.exports = CustomCode;
