var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = (app) => {

    const serversignature = 'mysignature';
    app.post('/register', (req, res) => {

        if (!req.body.email && !req.body.password) {
            res.status(400).send({ message: "admin can not be empty" });
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
                    "role": "admin"
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