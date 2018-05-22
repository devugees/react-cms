const Entries = require('../models/Entries');

module.exports = (app) => {


    //Create newEntry
    app.post('/api/newentries', (req, res) => {
        if (!req.body.contentTypeId &&
            !req.body.content &&
            !req.body.archived) {
            res.status(400).send({ message: "this field can not be empty" });
        } else {
            entries = new Entries({
                contentTypeId: req.body.contentTypeId,
                content: req.body.content,
                archived: req.body.archived
            });
            entries.save((err) => {
                if (err) {
                    return res.send(err);
                }
                return res.send({ message: "regist created successfully!" })
            });
        }
    });


    // > Get All Entry
    app.get('/api/entries/:contentTypeId', (req, res) => {
        console.log(req.params.contentTypeId)

        Entries.find({ 'contentTypeId': req.params.contentTypeId }, (err, data) => {
            if (err) {
                console.log(err)

                return res.send(err);
            }
            console.log(data)
            return res.send(data)
        });
    });


    //Update > EntryByid
    app.put('/api/entries/:entrieId', (req, res) => {
        console.log(req.params.entrieId)

        Entries.findById(req.params.entrieId, (err, entre) => {
            if (!entre) {
                console.log(err)
                return res.send({ message: 'No Entry found' })

            }
            for (attr in req.body) {
                entre[attr] = req.body[attr];
            }
            entre.save((err, date) => {
                if (err) {
                    console.log(err)
                    res.send(err);
                }
                console.log(entre);
                res.send(entre)
            })

        });
    });

    //Delete > EntryByid
    app.delete('/api/entries/:entrieId', (req, res) => {
        console.log(req.params.entrieId)

        Entries.remove({_id: req.params.entrieId}, (err, entre) => {
            if (err) {
                console.log(err)
                return res.status(500).send({ message: "Could not delete Entries with id " + req.params.entrieId });
            }
                  res.send({message: "Entries deleted successfully!"})
        });
    });
}