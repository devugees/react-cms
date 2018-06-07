const Appearance = require('../models/Appearance');

module.exports = (app) => {


  //Create newEntry
  app.post('/api/appearance', (req, res) => {
    //if (!req.body.contentTypeId &&
      //!req.body.content &&
      //!req.body.archived) {
      //res.status(400).send({
        //message: "this field can not be empty"
      //});
    //} else {

      payload = {
        icon1: {
          icon: req.body.licon,
          title: req.body.ltitle,
          text: req.body.ltext
        },
        icon2: {
          icon: req.body.cicon,
          title: req.body.ctitle,
          text: req.body.ctext
        },
        icon3: {
          icon: req.body.ricon,
          title: req.body.rtitle,
          text: req.body.rtext
        },
        footerText: req.body.footertext
      };
      Appearance.findOneAndUpdate({}, payload, {upsert:true}, function(err, doc){
          if (err) return res.send(500, { error: err });
          return res.send("succesfully saved");
      });
      //payload.save((err) => {
        //if (err) {
          //return res.send(err);
        //}
        //return res.send({
          //message: "regist created successfully!"
        //})
      //});
    //}
  });


  // > Get All Entry
  app.get('/api/appearance', (req, res) => {
    console.log(req.params.contentTypeId)

    Appearance.find((err, data) => {

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

    Appearance.findById(req.params.entrieId, (err, entre) => {
      if (!entre) {
        console.log(err)
        return res.send({
          message: 'No Entry found'
        })
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

    Appearance.remove({
      _id: req.params.entrieId
    }, (err, entre) => {
      if (err) {
        console.log(err)
        return res.status(500).send({
          message: "Could not delete Appearance with id " + req.params.entrieId
        });
      }
      res.send({
        message: "Appearance deleted successfully!"
      })
    });
  });
}
