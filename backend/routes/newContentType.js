const ContentTypes = require('../models/ContentTypes');


module.exports = (app) => {
    app.post('/api/newcontenttype', (req, res) => {
        if (!req.body.title &&
            !req.body.machineName &&
            !req.body.url &&
            !req.body.adminUrl &&
            !req.body.description &&
            !req.body.fields) {
            res.status(400).send({ message: "this field can not be empty" });
        } else {
            contentTypes = new ContentTypes({
                title: req.body.title,
                machineName: req.body.machineName,
                url: req.body.url,
                adminUrl: req.body.adminUrl,
                description: req.body.description,
                guideLines: req.body.guideLines,
                fields: req.body.fields
            });
            contentTypes.save((err) => {
                if (err) {
                    return res.send(err);
                }
                return res.send({ message: "regist created successfully!" })
            });
        }
    });

    app.post('/api/contenttypeid', (req, res) => {

        ContentTypes.find({"machineName": req.body.machineName},(err, data) => {
            if (err) {
                return res.send(err);
            }
            console.log(data[0]._id)
            return res.send( data[0]._id )
        });
    });
}