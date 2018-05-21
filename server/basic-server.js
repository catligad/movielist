var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var path = require('path');
var router = require('./routes.js')

var app = express();

app.set('port', 3000);

app.use(morgan('dev'));
app.use(parser.json());


app.use(express.static(__dirname + '/../dist/'));

app.use('/lists', router);

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}