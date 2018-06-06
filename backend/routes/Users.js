const User = require('../models/User');
const  jwt = require('jsonwebtoken');
const  VerifyToken = require('../config/VerifyToken');


const serversignature = 'mysignature';

module.exports = (app) => {
app.get('/users',VerifyToken, (req, res) => {
   jwt.verify(req.token, serversignature, (err1, authData) => {
    if(err1) {
      throw err1;
    } 
    // Retrieve and return all users from the database.
    User.find((err, users) => {
        if(err) {
            res.status(500).json({message: "Some error ocuured while retrieving users."});
        } else {
       
        const newUser =	users.map(user => {
        	// we reassign the user data for slice the password and not send to th front end
                   return user ={
	        	     	 email: user.email,
	        	         role: user.role,
	        	         id: user._id,
        	     }
        	});
           res.send({newUser})
        }
    });

    });
});

app.delete('/deleteuser/:userid', VerifyToken, (req, res)  => {
   jwt.verify(req.token, serversignature, (err1, authData) => {
    if(err1) {
      throw err1;
    } 
    // Delete a user with the specified users in the request
    User.remove({_id: req.params.userid}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete user with id " + req.params.id});
        } else {
            res.send({message: "user deleted successfully!"})
        }
    });
     });
});

app.post('/updateuser/:iduser', VerifyToken, (req, res) => {

   jwt.verify(req.token, serversignature, (err1, authData) => {
    if(err1) {
      throw err1;
    } 
    
     User.findById(req.params.iduser, (err, user) => {
      if(!user)
        return res.send({message: "user not found!"});

      // Check all params that are set in req.body and attach/overwrite the user object
      for(attr in req.body) {
        user[attr] = req.body[attr];
      }

      user.save((err) => {
        if(err) {
         throw err;
        }
        return res.send({message: "user updated successfully!"});
      });
    });
    });
})

};
