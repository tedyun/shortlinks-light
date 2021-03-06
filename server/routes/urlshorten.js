const textdb = require('../data/textdb');
module.exports = app => {
  app.get("/api/item/:code", async (req, res) => {
    const urlCode = req.params.code;
    const item = textdb[urlCode];
    if (item) {
      return res.redirect(item);
    } else {
      return res.send('Cannot find link: ' + urlCode)
    }
  });
};
