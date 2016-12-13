var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); 
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/routes.js')(app);

app.listen(3000, function () {
  console.log('listening on port 3000!')
});

module.exports = app;

