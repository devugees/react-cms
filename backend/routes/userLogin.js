const User = require('../models/User');
var bcrypt = require('bcryptjs');


module.exports = (app) => {
app.post('/login', (req, res) => {
    // Create and Save a new Student
    if(!req.body.email && !req.body.password ) {
        res.status(400).send({message: "this field can not be empty"});
    } else {
      
        User.find({"email": req.body.email}, (err, user) => {
          bcrypt.compare(req.body.password, user[0].password, function(err1, answer) {
            if(err) {
              
              res.send('the email or password invaild')
            
            } else if(req.body.email === user[0].email && answer === true && user[0].role === "admin") {
                      req.session.user = user[0].email;
                      req.session.admin = true;
                      console.log('this is an erro');
                      console.log(JSON.stringify(req.session));
                     res.send('you are going to admin page');
                   
                    } else {
                      console.log(user)
                      res.send('this password or email is wrong');
                      //res.redirect('/frontpage');
                    
               }
           });
     });
    }   
});

