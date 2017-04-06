var mongoose = require('mongoose');
var db = require('./index');

var requestSchema = new mongoose.Schema({
  type: String
});

var Request = db.model('Request', requestSchema);

module.exports = Request;

