const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentTypesSchema = new Schema({
  title: String,
  machineName: String,
  url: String,
  adminUrl: String,
  description: String,
  fields: Array
});

const ContentTypes = mongoose.model('ContentTypes', contentTypesSchema);
module.exports = ContentTypes;