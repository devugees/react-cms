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
                return res.send({ entries })
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
        console.log(req.params.entrieId);
        /* nebras soultion: console.log(req.params.entrieId)
        let content ={};
        let objectKeys = Object.keys(req.body)
        for (attr in req.body) {
            content[attr] = req.body[attr]
        }
        console.log("contentcontent ",content)
        Entries.findById(req.params.entrieId, (err, entre) => {
            if (!entre) {
                console.log(err)
                return res.send({ message: 'No Entry found' })
            }
            entre.content = content */


        Entries.findById(req.params.entrieId, (err, entre) => {
            if (!entre) {
                console.log(err)
                return res.send({ message: 'No Entry found' })
            }
            const content = {};
            for (attr in req.body) {
                content[attr] = req.body[attr];
            }
            entre.content = content;
            entre.save((err, date) => {
                if (err) {
                    res.send(err);
                }
                res.send(date)
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