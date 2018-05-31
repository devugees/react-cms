const Categories = require('../models/Categories');

module.exports = (app) => {
	// get all Categories
 app.get('/api/allcategories', (req, res) => {

        Categories.find((err, data) => {
            if (err) {
                return res.send(err);
            }
           // console.log(data)
            return res.send(data)
        });
    });

  // add new Categories
 app.post('/api/createcategories', (req, res) => {
        if (!req.body.name && !req.body.discreption) {
            res.status(400).send({ message: "Categories can not be empty" });
              }
                newCategories = new Categories({
                	contentTypeId: req.body.contentTypeId,
                    "name": req.body.name,
                    "discreption": req.body.discreption
                    
                });
                newCategories.save((err, categories) => {
                    if (err) {
                        throw (err);
                    }
                    return res.send(categories)
                });
            });



    //Update > categories
app.put('/api/updatecategories/:categoriesId', (req, res) => {

        console.log(req.params.categoriesId);
        Categories.findById(req.params.categoriesId, (err, categorie) => {
            if (!categorie) {
                console.log(err)
                return res.send({ message: 'No categorie found' })
            }
            
            for (attr in req.body) {
                categorie[attr] = req.body[attr];
            }
            categorie.save((err, date) => {
                if (err) {
                    res.send(err);
                }
                res.send(date)
            })

        });
    });


// delete categoris
app.delete('/api/deletecategories/:categoriesId', (req, res) => {
        console.log(req.params.categoriesId)

        Categories.remove({_id: req.params.categoriesId}, (err) => {
            if (err) {
                console.log(err)
                return res.status(500).send({ message: "Could not delete Categories with id " + req.params.categoriesId });
            }
                  res.send({message: "Categories deleted successfully!"})
        });
    });

}