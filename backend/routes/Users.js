const User = require('../models/User');

module.exports = (app) => {
app.get('/users', (req, res) => {
    // Retrieve and return all users from the database.
    User.find((err, users) => {
        if(err) {
            res.status(500).send({message: "Some error ocuured while retrieving users."});
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

app.delete('/deleteuser/:userid',(req, res)  => {
    // Delete a user with the specified users in the request
    User.remove({_id: req.params.userid}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete user with id " + req.params.id});
        } else {
            res.send({message: "user deleted successfully!"})
        }
    });
});

app.post('/updateuser/:iduser', (req, res) => {
    console.log(req.params.iduser);
     User.findById(req.params.iduser, (err, user) => {
      if(!user)
        return res.send({message: "user not found!"});

      // Check all params that are set in req.body and attach/overwrite the user object
      for(attr in req.body) {
        user[attr] = req.body[attr];
      }

      user.save((err) => {
        if(err) {
          return res.send(err);
        }
        return res.send({message: "user updated successfully!"});
      });
    });
})

};
