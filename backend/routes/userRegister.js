var bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = (app) => {
app.post('/register', (req, res) => {
    // Create and Save a new Student
    if(!req.body) {
        res.status(400).send({message: "admin can not be empty"});
    }
    
    bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(req.body.password, salt, function(err, hash) {
             req.body.password = hash;
	        user = new User({
	        	"email": req.body.email, 
	        	"password": req.body.password, 
	        	"role": "admin"
	          });
	            user.save((err) => {
		         if(err) {
		          return res.send(err);
		        }
             return res.send({message: "regist created successfully!"})
          });
	    });
	});
    
});
}

