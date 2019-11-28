var express = require('express'),
  app = express(),
  port = process.env.PORT || 4040,
  mongoose = require('mongoose'),
  Task = require('./RESTFUL_API/models/Muntu'), 
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
var routes = require('./RESTFUL_API/services/Services');        // Auxiliary #2
routes(app);                               
app.use(function(req, res) {                           
  res.status(404).send({url: req.originalUrl + 
    ' possibly this is not correct URL address'})})     // Auxiliary #3

app.listen(port);
console.log('Restful-Backend API server started on: ' + port);
