var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const validateRegisterInput = require('../validation/register');

module.exports = (app) => {

    const serversignature = 'mysignature';
    app.post('/register', (req, res) => {

       const { errors, isValid } = validateRegisterInput(req.body);
      // Check Validation
      if (!isValid) {
        return res.status(400).json(errors);
      }
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                req.body.password = hash;
                const token = jwt.sign({ email: req.body.email, pass: req.body.password }, serversignature);
                const user = req.body;
                user.token = token
                delete user.pass;
                
                userInfo = new User({
                    "email": user.email,
                    "password": user.password,
                    "token": user.token,
                    "role": "user"
                });
                userInfo.save((err) => {
                    if (err) {
                        throw (err);
                    }
                    return res.send(user)
                });
            });
        });

    });
}