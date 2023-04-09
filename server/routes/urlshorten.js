const fs = require("fs");
const { parse } = require("csv-parse");
// const textdb = require('../data/textdb');

const textdb = {};
fs.createReadStream("data/db.csv")
  .pipe(parse({delimiter: ","}))
  .on("data", function (row) {
    textdb[row[0]] = row[1]
  })

module.exports = app => {
  app.get("/api/item/:code", async (req, res) => {
    const urlCode = req.params.code;
    const item = textdb[urlCode];
    if (item) {
      if (item.startsWith('http://') || item.startsWith('https://')) {
        return res.redirect(item);
      }
      else {
        return res.send(
            '<html><head></head><body><h2>' +
            item +
            '</h2></body></html>');
      }
    } else {
      return res.send('Cannot find link: ' + urlCode)
    }
  });
};
