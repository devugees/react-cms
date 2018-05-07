const Entries = require('../models/Entries');


module.exports = (app) => {
app.post('/api/newentries', (req, res)=> {
   if  (!req.body.contentTypeId && 
		!req.body.content && 
		!req.body.archived ) {
        res.status(400).send({message: "this field can not be empty"});
    } else {
            entries = new Entries({
				  contentTypeId: req.body.contentTypeId,
				  content: req.body.content,
				  archived: req.body.archived
	          });
	            entries.save((err) => {
		         if(err) {
		          return res.send(err);
		        }
             return res.send({message: "regist created successfully!"})
          });
    }
});
}