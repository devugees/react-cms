const  jwt = require('jsonwebtoken');
const  VerifyToken = require('../config/VerifyToken');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');


const serversignature = 'mysignature';
module.exports = (app) => {
    /*const storage = multer.diskStorage({
      destination: '../public/uploads/',
      filename: function(req, file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
      }
    });

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}
*/

 const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        /*
          Files will be saved in the 'uploads' directory. Make
          sure this directory already exists!
        */
        cb(null, '../public/uploads');
      },
      filename: (req, file, cb) => {
        /*
          uuidv4() will generate a random ID that we'll use for the
          new filename. We use path.extname() to get
          the extension from the original file name and add that to the new
          generated ID. These combined will create the file name used
          to save the file on the server and will be available as
          req.file.pathname in the router handler.
        */
        const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, newFilename);
      },
    });
    // create the multer instance that will be used to upload/save the file
    const upload = multer({ storage });

  
    app.post('/api/upload', upload.single('selectedFile'), (req, res) => {
      /*
        We now have a new req.file object here. At this point the file has been saved
        and the req.file.filename value will be the name returned by the
        filename() function defined in the diskStorage configuration. Other form fields
        are available here in req.body.
      */
      res.send();
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
var images = fs.readdirSync('../src/uploads');
res.send(images);
});

}


