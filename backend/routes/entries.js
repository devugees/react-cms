const Entries = require('../models/Entries');

module.exports = (app) => {
 app.get('/api/entries/:entrieId', (req, res) => {
            console.log(req.params.entrieId)

        Entries.find({ 'contentTypeId': req.params.entrieId },(err, data) => {
            if (err) {
            console.log(err)

                return res.send(err);
            }
            console.log(data)
            return res.send(data)
        });
    });
}