const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppearanceSchema = new Schema({
  websitetitle: String,
  menuItems: Array,
  logopicture:String,
  slide1: {
    picture: String,
    title: String,
    text: String
  },
  slide2: {
    picture: String,
    title: String,
    text: String
  },
  slide3: {
    picture: String,
    title: String,
    text: String
  },
  slide4: {
    picture: String,
    title: String,
    text: String
  },
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
  footeritems: Array,
  contentTypesView: Array
});

const Appearance = mongoose.model('Appearance', AppearanceSchema);
module.exports = Appearance;
