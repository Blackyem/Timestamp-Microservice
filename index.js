// index.js
// where your node app starts

// init project
var express = require('express');
const dotenv = require("dotenv");
const colors = require("colors");


dotenv.config();

var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({
  optionsSuccessStatus: 200
})); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
const resObj = {};

app.get("/api/timestamp/:input", (req, res, next) => {
  const input = req.params.input;

  if (input.includes("-")) {
    resObj["unix"] = new Date(input).getTime();
    resObj["utc"] = new Date(input).toUTCString();
  }
  res.json(resObj);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});