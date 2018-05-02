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
}