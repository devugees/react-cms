const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppearanceSchema = new Schema({
  websitetitle: String,
  menuItems: Array,
  icon1: {
    icon: String,
    title: String,
    text: String
  },
  icon2: {
    icon: String,
    title: String,
    text: String
  },
  icon3: {
    icon: String,
    title: String,
    text: String
  },
  footertext: String,
  footeritems: Array
});

const Appearance = mongoose.model('Appearance', AppearanceSchema);
module.exports = Appearance;
