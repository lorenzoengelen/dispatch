var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/dispatch';

var db = mongoose.connect(mongoUri, function(err) {
  if (err) {
    console.log('Unable to connect to mongo', err);
    process.exit(1);
  } else {
    console.log('Connected to mongo uri', mongoUri);
  }
});

module.exports = db;