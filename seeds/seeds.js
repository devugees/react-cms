//TODO this is just example content, make it work
require('dotenv').config({path: __dirname + '/.env'});
const fs = require('fs');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURL);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

//const Post = require('./models/Post');

const Entries = require('./entries');

//const posts = [
  //{ name: 'Basketball', content: 'Ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum.', order: 1},
  //{ name: 'Swimming', content: 'Porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum.', order: 2},
  //{ name: 'Weightlifting', content: 'fLeo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum.', order: 3},
  //{ name: 'Ping Pong', content: 'Consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula Michael Phelps is the fast fish.', order: 4}
//];

//const categories = [
  //{ name: 'Hard'},
  //{ name: 'Easy'}
//];
console.log(Entries);

//async function deleteData() {
  //console.log('😢😢 Goodbye Data...');
  //await Post.remove();
  //await Category.remove();
  //console.log('Data Deleted. To load sample data, run\n\n\t node seeds.js\n\n');
  //process.exit();
//}

//async function loadData() {
  //try {
    //await Category.insertMany(categories);
    //await Post.insertMany(posts);
    //console.log('👍 Done!');
    //process.exit();
  //} catch(e) {
    //console.log('\n👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n');
    //console.log(e);
    //process.exit();
  //}
//}
//if (process.argv.includes('--delete')) {
  //deleteData();
//} else {
  //loadData();
//}

