const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,x-access-token,X-Key"
  );
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});
app.use(bodyParser.json());
require("./routes/urlshorten")(app);
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});