const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentTypesSchema = new Schema({
  title: String,
  machine-name: String,
  url: String,
  admin-url: String,
  description: String,
  fields: Array,
  frontend-view: Object,
});

const ContentTypes = mongoose.model('ContentTypes', contentTypesSchema);
module.exports = ContentTypes;