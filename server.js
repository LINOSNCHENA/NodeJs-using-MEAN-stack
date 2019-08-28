var express = require('express'),
  app = express(),
  port = process.env.PORT || 7070,
  mongoose = require('mongoose'),
  Task = require('./api/models/wEmployee'), 
  bodyParser = require('body-parser');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost/Transact_MSQL'); 
app.use(bodyParser.urlencoded({ extended: true }));  // Auxiliary #1
app.use(bodyParser.json());
var routes = require('./api/services/wServices');      // Auxiliary #2
routes(app);                               
app.use(function(req, res) {                          // Auxiliary #3
  res.status(404).send({url: req.originalUrl + ' possibly this is not correct network address'})
})
app.listen(port);
console.log('Transactions API server started on: ' + port);