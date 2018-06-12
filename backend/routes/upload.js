const  jwt = require('jsonwebtoken');
const  VerifyToken = require('../config/VerifyToken');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');


const serversignature = 'mysignature';
module.exports = (app) => {
   
 const storage = multer.diskStorage({
      destination: (req, file, cb) => {
   
        cb(null, './uploads');
      },
      filename: (req, file, cb) => {
      
        const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, newFilename);
      },
    });
    const upload = multer({ storage });

    app.post('/api/upload', upload.single('selectedFile'), (req, res) => {
      
      res.json("the fild was uploaded");
    });
  


  /*app.post('/api/upload',(req, res) => {
    console.log("req",req);
  upload(req, res, (err) => {
    if(err){
      res.render('index', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('index', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('index', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});*/


app.get('/api/getimages', (req, res) => {
var images = fs.readdirSync('./uploads');
res.send(images);
});

}


