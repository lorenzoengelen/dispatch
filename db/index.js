var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/dispatch';

var db = mongoose.connect(mongoUri);

module.exports = db;