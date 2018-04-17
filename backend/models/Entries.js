const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entriesSchema = new Schema({
  contentTypeId: { type: Schema.Types.ObjectId, ref: 'ContentTypes' },
  content: Object,
  archived: Boolean
});

const Entries = mongoose.model('Entries', entriesSchema);
module.exports = Entries;