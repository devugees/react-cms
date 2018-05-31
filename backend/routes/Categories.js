const Categories = require('../models/Categories');

module.exports = (app) => {
 app.get('/api/categories', (req, res) => {

        Categories.find((err, data) => {
            if (err) {
                return res.send(err);
            }
           // console.log(data)
            return res.send(data)
        });
    });