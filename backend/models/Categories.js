const mongoose = require('mongoose');
const ContentTypes = require('./ContentTypes');
const Schema = mongoose.Schema;

const Categories = new Schema({
  contentTypeId: { type: Schema.Types.ObjectId, ref: 'ContentTypes' },
  name: String,
  description: String
});

const Categorie = mongoose.model('allcategories', Categories);
module.exports = Categorie;