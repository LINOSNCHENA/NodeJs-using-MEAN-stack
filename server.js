var express = require('express'),
  app = express(),
  port = process.env.PORT || 7070,
  mongoose = require('mongoose'),
  Task = require('./api/models/Muntu'), 
  bodyParser = require('body-parser');

// New style for setting connection to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/presly", 
{useUnifiedTopology: true,
 useNewUrlParser: true, 
 useCreateIndex: true });

// Other things here!
app.use(bodyParser.urlencoded({ extended: true }));     // Auxiliary #1
app.use(bodyParser.json());
var routes = require('./api/services/Services');        // Auxiliary #2
routes(app);                               
app.use(function(req, res) {                           
  res.status(404).send({url: req.originalUrl + 
    ' possibly this is not correct URL address'})})     // Auxiliary #3

app.listen(port);
console.log('Transactions API server started on: ' + port);
