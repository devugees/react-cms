const CustomCode = require('../models/CustomCode');

module.exports = (app) => {
  app.get('/api/customcode', (req, res) => {
    CustomCode.find((err, data) => {
      if (err) {
        console.log(err)
        return res.send(err);
      }
      return res.send(data)
    });
  });
  
  app.post('/api/customcode', (req, res) => {
      payload = {
        javascriptCode:req.body.javascriptCode,
        cssCode: req.body.cssCode
      };
      CustomCode.findOneAndUpdate({}, payload, {upsert:true}, function(err, doc){
          if (err) return res.send(500, { error: err });
          return res.send("succesfully saved");
      });
  });
}
