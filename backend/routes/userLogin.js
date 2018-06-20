const User = require('../models/User');
var bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');


module.exports = (app) => {

const serversignature = 'mysignature';

app.post('/login', (req, res) => {
    
    if(!req.body.email && !req.body.password ) {
        res.status(400).send({message: "this field can not be empty"});
    } else {
      
        User.find({"email": req.body.email}, (err, data) => {
          if (err) return res.json( {err: 'Internal error happened'} );
          if(data.length > 0) {
          bcrypt.compare(req.body.password, data[0].password, function(err, answer) {
            if(err) {
              
              console.log(err)
            
            } else if(req.body.email === data[0].email && answer === true && data[0].role === "admin") {
                           const token = jwt.sign({email: data[0].email, pass: data[0].password}, serversignature);  
                            const user = data[0];
                            user.token = token 
                            delete user.pass;  
                            res.json(user);

                       /*
                      req.session.user = user[0].email;
                      req.session.admin = true;
                      console.log(JSON.stringify(req.session));
                      res.send(user); */
                   
                    } else {

                      res.send('this password  wrong');
               }
           });
        } else {
          return res.json( {err: 'Email does not exist'});
        }
     });
    }   
});
}
