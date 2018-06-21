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
        slide1: {
          picture: req.body.slide1picture,
          title: req.body.slide1Title,
          text: req.body.slide1Text
        },
        slide2: {
          picture: req.body.slide2picture,
          title: req.body.slide2Title,
          text: req.body.slide2Text
        },
        slide3: {
          picture: req.body.slide3picture,
          title: req.body.slide3Title,
          text: req.body.slide3Text
        },
        slide4: {
          picture: req.body.slide4picture,
          title: req.body.slide4Title,
          text: req.body.slide4Text
        },
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
