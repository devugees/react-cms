const Admin = require('../models/admin');

module.exports = (app) => {
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
}