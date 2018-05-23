const ContentTypes = require('../models/ContentTypes');

module.exports = (app) => {
 app.get('/api/contenttypes', (req, res) => {

        ContentTypes.find((err, data) => {
            if (err) {
                return res.send(err);
            }
           // console.log(data)
            return res.send(data)
        });
    });


    //Update > contenttypesId
    app.put('/api/contenttypes/:contenttypesId', (req, res) => {
        console.log(req.params.contenttypesId)

        ContentTypes.findById(req.params.contenttypesId, (err, contenttype) => {
            if (!contenttype) {
                console.log(err)
                return res.send({ message: 'No contenttype found' })
            }
            console.log()
            for (attr in req.body) {
                contenttype[attr] = req.body[attr];
            }
            contenttype.save((err, date) => {
                if (err) {
                    console.log(err)
                    res.send(err);
                }
                console.log(contenttype);
                res.send(contenttype)
            })

        });
    });

    //Delete > ContentTypes
    app.delete('/api/contenttypes/:contenttypesId', (req, res) => {
        console.log(req.params.contenttypesId)

        ContentTypes.remove({_id: req.params.contenttypesId}, (err, contenttype) => {
            if (err) {
                console.log(err)
                return res.status(500).send({ message: "Could not delete contenttype with id " + req.params.contenttypesId });
            }
                  res.send({message: "contenttype deleted successfully!"})
        });
    });


}