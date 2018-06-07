const Appearance = require('../models/Appearance');

module.exports = (app) => {
  app.get('/api/appearance', (req, res) => {
    Appearance.find((err, data) => {
      if (err) {
        console.log(err)
        return res.send(err);
      }
      return res.send(data)
    });
  });
  
  app.post('/api/appearance', (req, res) => {
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
        websitetitle: req.body.websitetitle,
        footertext: req.body.footertext
      };
      Appearance.findOneAndUpdate({}, payload, {upsert:true}, function(err, doc){
          if (err) return res.send(500, { error: err });
          return res.send("succesfully saved");
      });
  });

}
