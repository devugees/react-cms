const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser());


const Admin = require('./models/admin');
const keys = require('./config/keys');



mongoose.connect(keys.mongoURI);

mongoose.connection.on('error', () => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', () => {
    console.log("Successfully connected to the database");
});

app.post('/login', (req, res) => {
    // Create and Save a new Student
    if(!req.body) {
        res.status(400).send({message: "admin can not be empty"});
    }

     admin = new Admin(req.body);
      admin.save( (err) =>{
        if(err) {
          return res.send(err);
        }
        
        return res.send({message: "admin created successfully!"})
    });
});




app.get('/', (req, res) => {
	res.send('the server is wotking')
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('the srver is runing on port:' + PORT)
});
