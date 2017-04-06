var http = require('http');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var middlewares = require('./middlewares/index');
var routes = require('./controllers/index');

var app = express();

app.set('port', process.env.PORT || 3000);

// middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(middlewares);
app.use('/', routes);

var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('Server listening on port', app.get('port'));
});

module.exports = server;